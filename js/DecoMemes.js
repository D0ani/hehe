/* Die Deko-Memes am Rand reagieren auf Klicks: kurzes Wackeln + Herzchen-Plopp. */
class DecoMemes {
    #emojis;

    constructor(emojis) {
        this.#emojis = emojis;
    }

    init() {
        document.querySelectorAll('.deco-meme').forEach(img => {
            img.addEventListener('click', e => this.#boop(img, e.clientX, e.clientY));
        });
    }

    #boop(img, x, y) {
        img.classList.remove('boop');
        void img.offsetWidth;
        img.classList.add('boop');
        img.addEventListener('animationend', () => img.classList.remove('boop'), { once: true });
        for (let i = 0; i < 6; i++) this.#popHeart(x, y);
    }

    #popHeart(x, y) {
        const s = document.createElement('span');
        s.className   = 'heart-pop';
        s.textContent = this.#emojis[Math.floor(Math.random() * this.#emojis.length)];
        const angle = Math.random() * Math.PI * 2;
        const dist  = Math.random() * 60 + 40;
        s.style.setProperty('--dx', `${(Math.cos(angle) * dist).toFixed(0)}px`);
        s.style.setProperty('--dy', `${(Math.sin(angle) * dist - 40).toFixed(0)}px`);
        s.style.left = `${x}px`;
        s.style.top  = `${y}px`;
        document.body.appendChild(s);
        setTimeout(() => s.remove(), 900);
    }
}
