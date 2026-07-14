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
