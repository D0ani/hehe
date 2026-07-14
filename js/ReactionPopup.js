/* Bild-Reaktions-Popup, das kurz an einer Position aufpoppt und wieder verschwindet. */
class ReactionPopup {
    #imagePath;
    #lifetimeMs;

    constructor({ imagePath = 'images/', lifetimeMs = 2800 } = {}) {
        this.#imagePath  = imagePath;
        this.#lifetimeMs = lifetimeMs;
    }

    /* msg: { img, text } — Bild-Dateiname + Spruch */
    show(x, y, msg) {
        const el = document.createElement('div');
        el.className = 'float-msg';

        const img = document.createElement('img');
        img.src = this.#imagePath + msg.img;
        img.alt = '';

        const label = document.createElement('div');
        label.className = 'float-label';
        label.textContent = msg.text;

        el.append(img, label);
        el.style.left = `${Math.max(80, Math.min(x, window.innerWidth - 80))}px`;
        el.style.top  = `${Math.max(30, y - 130)}px`;

        document.body.appendChild(el);
        setTimeout(() => el.remove(), this.#lifetimeMs);
    }

    showAtElement(element, msg) {
        const rect = element.getBoundingClientRect();
        this.show(rect.left + rect.width / 2, rect.top + rect.height / 2, msg);
    }
}
