/* Konfetti-Regen im übergebenen Container. */
class Confetti {
    #wrap;
    #colors;
    #imagePath;

    constructor(wrapElement, colors, imagePath = 'images/') {
        this.#wrap      = wrapElement;
        this.#colors    = colors;
        this.#imagePath = imagePath;
    }

    launch(count = 130) {
        for (let i = 0; i < count; i++) {
            setTimeout(() => this.#spawnPiece(), i * 18);
        }
    }

    /* Regen aus Emojis und/oder kleinen Bildern (Einträge mit Bild-Endung
       werden als <img> gerendert), z. B. beim maximalen Hype-Level */
    launchRain(items, count = 20) {
        for (let i = 0; i < count; i++) {
            setTimeout(() => this.#spawnRainItem(items[Math.floor(Math.random() * items.length)]), i * 60);
        }
    }

    #spawnRainItem(item) {
        const isImage = /\.(gif|png|webp|jpe?g)$/i.test(item);
        const el      = document.createElement(isImage ? 'img' : 'div');
        const dur     = (Math.random() * 2.2 + 2.2).toFixed(2);
        let style =
            'position:absolute;top:-60px;' +
            `left:${(Math.random() * 100).toFixed(1)}vw;` +
            `animation:confettiFall ${dur}s linear forwards;`;
        if (isImage) {
            el.src = this.#imagePath + item;
            style += `width:${(Math.random() * 18 + 30).toFixed(0)}px;border-radius:8px;`;
        } else {
            el.textContent = item;
            style += `font-size:${(Math.random() * 14 + 16).toFixed(0)}px;`;
        }
        el.style.cssText = style;
        this.#wrap.appendChild(el);
        setTimeout(() => el.remove(), (+dur + 0.7) * 1000);
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
