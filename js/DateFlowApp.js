/* Steuert den kompletten Ablauf:
   Ja/Nein → Aktivität wählen → (Essensrichtung) → Termin + Slider → Bestätigung + E-Mail.
   Buttons im Modal werden über data-action-Attribute per Event-Delegation verdrahtet. */
class DateFlowApp {
    #modal;
    #popup;
    #confetti;
    #email;

    #neinPool     = new MessagePool(AppConfig.NEIN_MSGS);
    #abbruchPool  = new MessagePool(AppConfig.ABBRUCH_MSGS);
    #jaPool       = new MessagePool(AppConfig.JA_MSGS);
    #boringPool   = new MessagePool(AppConfig.BORING_TEXTS);
    #finalGifPool = new MessagePool(AppConfig.FINAL_GIFS);

    #activity  = null;
    #foodLabel = '';

    constructor({ modal, popup, confetti, email }) {
        this.#modal    = modal;
        this.#popup    = popup;
        this.#confetti = confetti;
        this.#email    = email;
    }

    init() {
        const btnJa = document.getElementById('btnJa');
        btnJa.addEventListener('click', e => this.#handleJa(e));

        new DodgingButton(document.getElementById('btnNein'), {
            maxDodges: AppConfig.NEIN_MAX_DODGES,
            onDodge: (x, y, count) => {
                this.#popup.show(x, y, this.#neinPool.next());
                /* der Ja-Button wächst mit jedem Ausweichversuch */
                btnJa.style.setProperty('--ja-scale', Math.min(1 + count * 0.05, 1.45));
            },
            onGiveUp: btn => {
                btn.textContent = AppConfig.NEIN_GIVEUP_TEXT;
                btn.addEventListener('click', e => this.#handleJa(e), { once: true });
            },
        });

        this.#modal.element.addEventListener('click', e => this.#handleModalClick(e));
        this.#modal.element.addEventListener('input', e => this.#handleModalInput(e));
    }

    /* ── Event-Handling ─────────────────────────────────────────────── */

    #handleJa(e) {
        this.#popup.show(e.clientX, e.clientY, this.#jaPool.next());
        this.#confetti.launch(70);
        this.#showActivityStep();
        this.#modal.open();
    }

    #handleModalClick(e) {
        const btn = e.target.closest('[data-action]');
        if (!btn) return;
        switch (btn.dataset.action) {
            case 'activity': this.#pickActivity(btn.dataset.key, e);       break;
            case 'food':     this.#pickFood(btn.dataset.key);              break;
            case 'abort':    this.#popup.showAtElement(btn, this.#abbruchPool.next()); break;
            case 'fix-date': this.#fixDate(btn.hasAttribute('data-du'));   break;
        }
    }

    #handleModalInput(e) {
        if (e.target.id === 'durSlider')  this.#updateDuration(e.target.value);
        if (e.target.id === 'hypeSlider') this.#updateHype(e.target.value);
    }

    /* ── Schritt 1: Aktivität ───────────────────────────────────────── */

    #showActivityStep() {
        this.#modal.setContent(`
            <h2 class="modal-title">Ist das dein Ernst?<br>Okay, super! Was wollen wir machen?</h2>
            ${this.#renderOptions(AppConfig.ACTIVITIES, 'activity')}
            <br>
            <button class="btn-abbruch" data-action="abort">Abbruch 🚫</button>
        `);
    }

    #pickActivity(key, e) {
        this.#activity  = AppConfig.ACTIVITIES[key];
        this.#foodLabel = '';
        if (this.#activity.boring) {
            this.#popup.show(e.clientX, e.clientY, {
                img:  AppConfig.BORING_IMG,
                text: this.#boringPool.next(),
            });
        }
        if (key === 'essen') {
            this.#showFoodStep();
            return;
        }
        this.#confetti.launch(50);
        this.#showScheduleStep(this.#activity.verdict, this.#activity.gif, this.#activity.durationQ);
    }

    /* ── Schritt 1b: Essensrichtung ─────────────────────────────────── */

    #showFoodStep() {
        this.#modal.setContent(`
            <h2 class="modal-title">Sehr gut! 😋<br>Und worauf hast du Hunger?</h2>
            ${this.#renderOptions(AppConfig.FOODS, 'food')}
            <br>
            <button class="btn-abbruch" data-action="abort">Abbruch 🚫</button>
        `);
    }

    #pickFood(key) {
        const food      = AppConfig.FOODS[key];
        this.#foodLabel = food.label;
        this.#confetti.launch(50);
        this.#showScheduleStep(food.verdict, food.gif ?? AppConfig.FOOD_GIF, null);
    }

    #renderOptions(entries, action) {
        return Object.entries(entries).map(([key, item]) =>
            `<button class="option-btn${item.du ? ' option-du' : ''}" data-action="${action}" data-key="${key}">${item.label}</button>`
        ).join('\n');
    }

    /* ── Schritt 2: Termin, Dauer & Hype ────────────────────────────── */

    #showScheduleStep(verdict, gif, durationQ) {
        /* gif darf auch eine Liste sein — dann erscheinen alle nebeneinander */
        const gifs    = Array.isArray(gif) ? gif : [gif];
        const gifImgs = gifs.map(g => `<img src="${AppConfig.IMAGE_PATH}${g}" class="verdict-gif" alt="">`).join('');
        const gifHtml = gifs.length > 1 ? `<div class="verdict-gif-row">${gifImgs}</div>` : gifImgs;
        const durationHtml = durationQ ? `
            <div class="slider-block">
                <span class="dt-label">${durationQ} ⏱️</span>
                <input type="range" class="pink-slider" id="durSlider" min="1" max="8" step="0.5" value="2">
                <div class="slider-ends"><span>1 Std.</span><span>8 Std.</span></div>
                <div class="slider-value" id="durValue">2 Std.</div>
            </div>` : '';
        this.#modal.setContent(`
            ${gifHtml}
            <div class="verdict-box">${verdict}</div>
            <p class="when-label">Wann hast du Zeit?</p>
            <div class="datetime-row">
                <div class="dt-group">
                    <label class="dt-label">Datum 📅</label>
                    <input type="date" class="date-input" id="dateInput">
                </div>
                <div class="dt-group">
                    <label class="dt-label">Uhrzeit ⏰</label>
                    <input type="time" class="date-input" id="timeInput">
                </div>
            </div>
            <button class="option-btn option-du" data-action="fix-date" data-du>Entscheide du 📅🎲</button>
            ${durationHtml}
            <div class="slider-block">
                <span class="dt-label">Und wie gehyped bist du? 🔥</span>
                <input type="range" class="pink-slider" id="hypeSlider" min="0" max="${AppConfig.HYPE_LEVELS.length - 1}" step="1" value="${AppConfig.HYPE_DEFAULT}">
                <div class="slider-ends"><span>meh</span><span>Ultra Pro Max</span></div>
                <div class="slider-value" id="hypeValue">${AppConfig.HYPE_LEVELS[AppConfig.HYPE_DEFAULT]}</div>
            </div>
            <button class="btn-fix" data-action="fix-date">Date fixieren! 📅</button>
        `);
        this.#markWideGifs();
    }

    /* Querformat-GIFs die .wide-Klasse geben, damit sie größer dargestellt werden */
    #markWideGifs() {
        this.#modal.element.querySelectorAll('.verdict-gif').forEach(gif => {
            const check = () => {
                if (gif.naturalWidth > gif.naturalHeight * 1.2) gif.classList.add('wide');
            };
            if (gif.complete && gif.naturalWidth) check();
            else gif.addEventListener('load', check, { once: true });
        });
    }

    #updateDuration(value) {
        document.getElementById('durValue').textContent = `${String(value).replace('.', ',')} Std.`;
    }

    #updateHype(value) {
        document.getElementById('hypeValue').textContent = AppConfig.HYPE_LEVELS[value];
        if (+value === AppConfig.HYPE_LEVELS.length - 1) {
            this.#confetti.launch(24);
            this.#confetti.launchRain(AppConfig.MAUSIG_RAIN, 16);
        }
    }

    /* ── Schritt 3: Bestätigung + E-Mail ────────────────────────────── */

    #fixDate(duDecide) {
        let formatted;
        let dateObj = null;
        if (duDecide) {
            formatted = 'Entscheide du 😏🎲';
        } else {
            const dateInput = document.getElementById('dateInput');
            const timeInput = document.getElementById('timeInput');
            if (!this.#validateInputs([dateInput, timeInput])) return;

            dateObj   = new Date(`${dateInput.value}T${timeInput.value}`);
            formatted = dateObj.toLocaleDateString('de-DE', {
                weekday: 'long', year: 'numeric', month: 'long',
                day: 'numeric', hour: '2-digit', minute: '2-digit',
            });
        }

        const durSlider = document.getElementById('durSlider');
        const duration  = durSlider ? `${String(durSlider.value).replace('.', ',')} Std.` : '';
        const hypeIndex = +document.getElementById('hypeSlider').value;
        const hype      = AppConfig.HYPE_LEVELS[hypeIndex];

        this.#showFinalStep(formatted, duration, hype, dateObj);
        this.#confetti.launch(220);
        if (hypeIndex === AppConfig.HYPE_LEVELS.length - 1) {
            this.#confetti.launchRain(AppConfig.MAUSIG_RAIN, 28);
        }
        this.#email.sendConfirmation({
            activity: this.#activity.label,
            dateTime: formatted,
            food:     this.#foodLabel,
            duration,
            hype,
        });
    }

    #validateInputs(inputs) {
        let ok = true;
        inputs.forEach(input => {
            if (!input.value) {
                input.classList.remove('error');
                void input.offsetHeight;
                input.classList.add('error');
                setTimeout(() => input.classList.remove('error'), 500);
                ok = false;
            }
        });
        return ok;
    }

    #showFinalStep(formatted, duration, hype, dateObj) {
        const finalGif = this.#finalGifPool.next();
        this.#modal.setContent(`
            <p class="final-title">Perfekt! Ist notiert.<br>Ich zähle die Tage! ❤️</p>
            <div class="final-date-wrap">
                <img src="${AppConfig.IMAGE_PATH}${finalGif}" class="final-gif-over" alt="happy dance">
                <div class="final-date-box">
                    📅 ${formatted}
                    ${this.#foodLabel ? `<br>🍽️ ${this.#foodLabel}` : ''}
                    ${duration ? `<br>⏱️ Dauer: ${duration}` : ''}
                    <br>🔥 Hype-Level: ${hype}
                </div>
            </div>
            <div class="countdown-line">${this.#countdownText(dateObj)}</div>
            <div class="force-line">${AppConfig.FORCE_LINE}</div>
            <span class="email-note">📬 Eine Bestätigung wurde verschickt!</span>
        `);
    }

    #countdownText(dateObj) {
        if (!dateObj) return 'Countdown folgt, sobald ich das Datum verkündet habe 😏🐭';
        /* Kalendertage zählen, nicht 24h-Blöcke — „morgen" gilt ab Mitternacht */
        const today  = new Date();
        const target = new Date(dateObj);
        today.setHours(0, 0, 0, 0);
        target.setHours(0, 0, 0, 0);
        const days = Math.round((target - today) / 86400000);
        if (days < 0)   return 'Moment… das war in der Vergangenheit?! 🤨⏰';
        if (days === 0) return 'Es ist HEUTE so weit!! 🐭🎉';
        if (days === 1) return 'Schon MORGEN! 🐭💕';
        return `Noch ${days} Tage bis zum Date! 🐭💕`;
    }
}
