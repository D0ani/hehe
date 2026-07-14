/* Konfetti-Regen im übergebenen Container. */
class Confetti {
    #wrap;
    #colors;

    constructor(wrapElement, colors) {
        this.#wrap   = wrapElement;
        this.#colors = colors;
    }

    launch(count = 130) {
        for (let i = 0; i < count; i++) {
            setTimeout(() => this.#spawnPiece(), i * 18);
        }
    }

    /* Emoji-Regen, z. B. Mäuse + Herzen beim maximalen Hype-Level */
    launchEmoji(emojis, count = 20) {
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                const s   = document.createElement('div');
                const dur = (Math.random() * 2.2 + 2.2).toFixed(2);
                s.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                s.style.cssText =
                    'position:absolute;top:-34px;' +
                    `left:${(Math.random() * 100).toFixed(1)}vw;` +
                    `font-size:${(Math.random() * 14 + 16).toFixed(0)}px;` +
                    `animation:confettiFall ${dur}s linear forwards;`;
                this.#wrap.appendChild(s);
                setTimeout(() => s.remove(), (+dur + 0.7) * 1000);
            }, i * 60);
        }
    }

    #spawnPiece() {
        const p   = document.createElement('div');
        const sz  = (Math.random() * 12 + 5).toFixed(1);
        const dur = (Math.random() * 2.4 + 1.8).toFixed(2);
        p.style.cssText =
            'position:absolute;' +
            `left:${(Math.random() * 100).toFixed(1)}vw;` +
            'top:-18px;' +
            `width:${sz}px;height:${sz}px;` +
            `border-radius:${Math.random() > 0.45 ? '50%' : '3px'};` +
            `background:${this.#colors[Math.floor(Math.random() * this.#colors.length)]};` +
            `animation:confettiFall ${dur}s linear forwards;`;
        this.#wrap.appendChild(p);
        setTimeout(() => p.remove(), (+dur + 0.7) * 1000);
    }
}
