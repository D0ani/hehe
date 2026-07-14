/* Der „Nein"-Button: springt bei Annäherung weg statt sich klicken zu lassen.
   Beim ersten Ausweichen wird er aus dem Layout gelöst (position: fixed) und
   ein unsichtbarer Platzhalter verhindert, dass die Button-Reihe zusammenrutscht.
   Nach maxDodges Versuchen gibt er auf und lässt sich wieder normal anklicken. */
class DodgingButton {
    #btn;
    #margin;
    #maxDodges;
    #onDodge;
    #onGiveUp;
    #isFixed = false;
    #dodgeCount = 0;
    #gaveUp = false;

    constructor(button, { margin = 20, maxDodges = Infinity, onDodge = null, onGiveUp = null } = {}) {
        this.#btn       = button;
        this.#margin    = margin;
        this.#maxDodges = maxDodges;
        this.#onDodge   = onDodge;
        this.#onGiveUp  = onGiveUp;

        button.addEventListener('mouseover', e => this.#handle(e.clientX, e.clientY));
        button.addEventListener('touchstart', e => {
            /* nach dem Aufgeben muss der Tap als normaler Klick durchgehen */
            if (this.#gaveUp) return;
            e.preventDefault();
            const t = e.touches[0];
            this.#handle(t.clientX, t.clientY);
        }, { passive: false });
    }

    #handle(x, y) {
        if (this.#gaveUp) return;
        this.#dodgeCount++;
        if (this.#dodgeCount > this.#maxDodges) {
            this.#giveUp();
            return;
        }
        const wasFixed = this.#isFixed;
        this.#makeFixed();
        this.#dodge();
        /* erst nach dem ersten Sprung die Transition aktivieren,
           damit der Button sofort wegspringt statt hinzugleiten */
        if (!wasFixed) {
            requestAnimationFrame(() => this.#btn.classList.add('dodging'));
        }
        this.#onDodge?.(x, y, this.#dodgeCount);
    }

    #giveUp() {
        this.#gaveUp = true;
        this.#btn.classList.add('gave-up');
        this.#onGiveUp?.(this.#btn);
    }

    #makeFixed() {
        if (this.#isFixed) return;
        this.#isFixed = true;
        const rect   = this.#btn.getBoundingClientRect();
        const spacer = document.createElement('div');
        spacer.style.cssText = `width:${rect.width}px;height:${rect.height}px;flex-shrink:0;pointer-events:none;`;
        this.#btn.parentNode.insertBefore(spacer, this.#btn);
        document.body.appendChild(this.#btn);
        this.#btn.classList.add('is-fixed');
        this.#btn.style.left = `${rect.left}px`;
        this.#btn.style.top  = `${rect.top}px`;
    }

    #dodge() {
        const bw = this.#btn.offsetWidth  || 100;
        const bh = this.#btn.offsetHeight || 44;
        this.#btn.style.left = `${Math.max(this.#margin, Math.random() * (window.innerWidth  - bw - this.#margin))}px`;
        this.#btn.style.top  = `${Math.max(this.#margin, Math.random() * (window.innerHeight - bh - this.#margin))}px`;
    }
}
