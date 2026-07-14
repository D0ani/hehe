/* Overlay + Modal: öffnen, schließen, Inhalt mit Slide-Up-Animation wechseln. */
class Modal {
    #overlay;
    #modal;

    constructor(overlayElement, modalElement) {
        this.#overlay = overlayElement;
        this.#modal   = modalElement;
        overlayElement.addEventListener('click', e => {
            if (e.target === overlayElement) this.close();
        });
    }

    /* für Event-Delegation der App auf dem Modal-Inhalt */
    get element() {
        return this.#modal;
    }

    open()  { this.#overlay.classList.add('open'); }
    close() { this.#overlay.classList.remove('open'); }

    setContent(html) {
        this.#modal.innerHTML = html;
        /* Animation neu anstoßen, auch wenn sie gerade schon lief */
        this.#modal.style.animation = 'none';
        void this.#modal.offsetHeight;
        this.#modal.style.animation = 'slideUp 0.4s cubic-bezier(0.34, 1.40, 0.64, 1) both';
    }
}
