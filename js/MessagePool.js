/* Liefert zufällige Einträge aus einer Liste — nie denselben zweimal hintereinander. */
class MessagePool {
    #items;
    #lastIndex = -1;

    constructor(items) {
        this.#items = items;
    }

    next() {
        if (this.#items.length <= 1) return this.#items[0];
        let idx;
        do {
            idx = Math.floor(Math.random() * this.#items.length);
        } while (idx === this.#lastIndex);
        this.#lastIndex = idx;
        return this.#items[idx];
    }
}
