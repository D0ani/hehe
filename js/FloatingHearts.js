/* Schwebende Herzchen im Hintergrund. */
class FloatingHearts {
    #symbols;
    #count;

    constructor(symbols, count = 26) {
        this.#symbols = symbols;
        this.#count   = count;
    }

    mount(parent = document.body) {
        for (let i = 0; i < this.#count; i++) {
            const el = document.createElement('div');
            el.className   = 'heart-bg';
            el.textContent = this.#symbols[i % this.#symbols.length];
            el.style.cssText =
                `left:${(Math.random() * 100).toFixed(1)}vw;` +
                `font-size:${(Math.random() * 1.4 + 0.9).toFixed(2)}rem;` +
                `animation-duration:${(Math.random() * 13 + 9).toFixed(1)}s;` +
                `animation-delay:${(-Math.random() * 22).toFixed(1)}s;`;
            parent.appendChild(el);
        }
    }
}
