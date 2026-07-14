/* Lässt den Untertitel auf der Startseite alle paar Sekunden durchwechseln. */
class TaglineRotator {
    #el;
    #texts;
    #intervalMs;
    #index = 0;

    constructor(element, texts, intervalMs = 3500) {
        this.#el         = element;
        this.#texts      = texts;
        this.#intervalMs = intervalMs;
    }

    start() {
        if (!this.#el || this.#texts.length < 2) return;
        setInterval(() => this.#next(), this.#intervalMs);
    }

    #next() {
        this.#el.style.opacity = '0';
        setTimeout(() => {
            this.#index = (this.#index + 1) % this.#texts.length;
            this.#el.textContent = this.#texts[this.#index];
            this.#el.style.opacity = '1';
        }, 350);
    }
}
