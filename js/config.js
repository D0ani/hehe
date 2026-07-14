/* ── Zentrale Konfiguration ──────────────────────────────────────────────
   Alle Texte, Bilder und Einstellungen an einem Ort.
   Neue Sprüche/Aktivitäten? Einfach hier ergänzen — der Rest läuft von allein. */
const AppConfig = Object.freeze({
    IMAGE_PATH:     'images/',
    EMAIL_ENDPOINT: 'https://formsubmit.co/ajax/leinadtom@gmail.com',

    HEART_COUNT: 26,
    HEARTS: ['❤️', '💕', '💖', '💗', '💓', '💝', '🌸', '✨'],

    CONFETTI_COLORS: ['#f06292', '#ad1457', '#ffd700', '#ff85a1', '#ffffff', '#ff4081', '#e91e63', '#ffc0cb', '#ffb7c5'],

    HYPE_LEVELS: ['meh 😐', 'ganz okay 🙂', 'klingt nice 😄', 'hyped 🤩', 'mega hyped 🔥', 'MAUSIG ULTRA PRO MAX 🚀💥'],
    HYPE_DEFAULT: 3,

    FINAL_GIFS: ['cat-dance.gif', 'sb-dance.gif'],
    FOOD_GIF:   'sb-excited.gif',
    BORING_IMG: 'anim-boring.webp',

    NEIN_MSGS: [
        { img: 'cat-sus.jpg',              text: 'Bro was?! 😐' },
        { img: 'dog-sideeye.jpg',          text: 'Alter, WIRKLICH?? 😒' },
        { img: 'cat-creepy.jpg',           text: 'Ich beobachte dich. 👀' },
        { img: 'dog-judge.jpg',            text: 'Du machst Witze, oder? 🙄' },
        { img: 'cat-cool.jpg',             text: 'Finde ich auch nicht cool, nein zu sagen' },
        { img: 'cat-swag.jpg',             text: 'Hab ich nicht gefragt. 💅' },
        { img: 'anim-unacceptable.webp',   text: 'UNACCEPTABLE!! 😤' },
        { img: 'dog-judge.jpg',            text: 'Die Enttäuschung ist real 💀' },
        { img: 'anim-dog-shocked.webp',    text: 'Ich bin schockiert 😱' },
        { img: 'dog-sideeye.jpg',          text: 'Interessante Lebensentscheidung 🤨' },
        { img: 'anim-monkey-sus.webp',     text: 'Alter...' },
        { img: 'cat-swag.jpg',             text: 'Okay king, wie du meinst 💅' },
        { img: 'anim-dog-surprised.webp',  text: 'Hä?! Wirklich?? 😳' },
        { img: 'cat-sus.jpg',              text: 'Sus behaviour detected 🚨' },
        { img: 'sb-tears.gif',             text: 'Ich hab diese Seite mit meinem Herz gebaut 😭' },
        { img: 'sb-crying.gif',            text: 'WARUM tust du mir das an?! 😭' },
        { img: 'at-dealwithit.gif',        text: '„Nein" gibt\'s hier nicht. Deal with it 😎' },
    ],

    ABBRUCH_MSGS: [
        { img: 'cat-cool.jpg',             text: 'Du traust dich nicht! 😏' },
        { img: 'dog-sideeye.jpg',          text: 'Riiight... 😒' },
        { img: 'anim-unacceptable.webp',   text: 'UNACCEPTABLE!! 😤' },
        { img: 'cat-swag.jpg',             text: 'Der Knopf ist dekorativ. 💅' },
        { img: 'anim-dog-surprised.webp',  text: 'Wie war das nochmal?! 😳' },
        { img: 'cat-sus.jpg',              text: 'Nice try. 😐' },
        { img: 'anim-monkey-sus.webp',     text: 'Nope. 🐒' },
        { img: 'dog-judge.jpg',            text: 'Ich verurteile dich. 🙄' },
        { img: 'at-dealwithit.gif',        text: 'Deal with it. 😎' },
        { img: 'sb-tears.gif',             text: 'Willst du mich weinen sehen?! 😭' },
    ],

    JA_MSGS: [
        { img: 'cat-happy.jpg',        text: 'Yesss!! 🎉' },
        { img: 'sb-patrick-hyped.gif', text: 'BESTE Entscheidung!! 🎉' },
        { img: 'at-finn-hyped.gif',    text: 'LET\'S GOOO!! ✨' },
        { img: 'sb-happy.gif',         text: 'Mausiiiiggg! 😁' },
    ],

    BORING_TEXTS: [
        'Laaangweiliggg… 🥱',
        'Wow. Wie originell. 🥱',
        'Sehr klassisch. SEHR klassisch. 🥱',
        'Gääähn… aber okay, du Klassiker. 🥱',
    ],

    /* boring: true    → Gähn-Popup beim Anklicken
       durationQ       → zeigt zusätzlich den Dauer-Slider
       du: true        → gestrichelter „Entscheide du"-Style */
    ACTIVITIES: {
        essen:    { label: 'Essen gehen 🍽️', boring: true },
        walk:     { label: 'Entspannter Spaziergang 🚶‍♀️', gif: 'anim-husky-happy.webp', boring: true,
                    verdict: 'Sehr sportlich! Aber wehe du beschwerst dich über das Wetter. 😄' },
        coffee:   { label: 'Gemütliches Kaffee Date ☕', gif: 'sw-leia-hope.gif', boring: true,
                    verdict: 'Gute Wahl! Lecker Käffchen und hoffentlich muss ich mich nicht entleeren. ☕🤓' },
        wandern:  { label: 'Wanderung 🥾', gif: 'at-finn-hyped.gif',
                    verdict: 'Wandern! Sei gewarnt. Es könnte schief gehen. 🥾😄',
                    durationQ: 'Wie lange soll die Wanderung gehen?' },
        rad:      { label: 'Radtour 🚴', gif: 'at-gunter-dance.gif',
                    verdict: 'Radtour! Wer als Letztes oben am Berg ankommt, zahlt das Eis. 🚴💨',
                    durationQ: 'Wie lange soll die Radtour gehen?' },
        picknick: { label: 'Picknick im Park 🧺', gif: 'sb-patrick-hyped.gif',
                    verdict: 'Picknick! Ich bringe Decke Snacks und festes Schuhwerk mit. Vergiss nicht den Sonnenschutz! 🧺😌' },
        surprise: { label: 'Entscheide du 🎲😏', du: true, gif: 'sw-obiwan-prepare.gif',
                    verdict: 'Mutig! Du gibst MIR die Kontrolle? Okay… ich plane was. Es kann nur schief gehen. 😏✨' },
    },

    FOODS: {
        italienisch:  { label: 'Italienisch 🍝', verdict: 'Also sind wir jetzt basic bitches ? 🍝' },
        hawaiianisch: { label: 'Hawaiianisch 🍍', verdict: 'Excellente Wahl ich hoffe wir bekommen ein Tisch :)' },
        asiatisch:    { label: 'Asiatisch 🍜', verdict: 'Sehr gut! Leicht verdauliches Essen genau mein Ding. 🥢' },
        burger:       { label: 'Burger 🍔', verdict: 'Ein Mensch mit Geschmack! Bitte schau mir nicht zu Wenn ich einen XXL burger vernichte 🍔' },
        surprise:     { label: 'Entscheide du 🎲😏', du: true, gif: 'sw-obiwan-prepare.gif',
                        verdict: 'Gewagt! Dann such ich aus - und gegessen wird, was auf den Tisch kommt. 😏🍽️' },
    },
});
