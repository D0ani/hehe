/* ── Zentrale Konfiguration ──────────────────────────────────────────────
   Alle Texte, Bilder und Einstellungen an einem Ort.
   Neue Sprüche/Aktivitäten? Einfach hier ergänzen — der Rest läuft von allein. */
const AppConfig = Object.freeze({
    IMAGE_PATH:     'images/',
    EMAIL_ENDPOINT: 'https://formsubmit.co/ajax/leinadtom@gmail.com',
    EMAIL_SUBJECT:  '📅 Date fixiert! Möge die Macht mit uns sein 💕',

    /* Abschlusszeile auf dem Bestätigungsbildschirm */
    FORCE_LINE: 'Möge die Macht mit uns sein ✨',

    HEART_COUNT: 26,
    HEARTS: ['❤️', '💕', '💖', '💗', '💓', '💝', '🌸', '✨'],

    /* die letzten beiden: Lichtschwert-Grün und -Blau 🗡️ */
    CONFETTI_COLORS: ['#f06292', '#ad1457', '#ffd700', '#ff85a1', '#ffffff', '#ff4081', '#e91e63', '#ffc0cb', '#ffb7c5', '#7ed957', '#4fc3f7'],

    /* wird bei JEDEM Konfetti-Schuss mit eingestreut (Bilder oder Emojis) */
    CONFETTI_SPRINKLE: ['sw-babyyoda-cute.png'],

    HYPE_LEVELS: ['meh 😐', 'ganz okay 🙂', 'klingt nice 😄', 'hyped 🤩', 'mega hyped 🔥', 'MAUSIG ULTRA PRO MAX 🚀💥'],
    HYPE_DEFAULT: 3,

    FINAL_GIFS: ['cat-dance.gif', 'sb-dance.gif', 'sw-hansolo-iknow.gif'],
    FOOD_GIF:   ['sw-grogu-cookies.gif', 'sb-excited.gif'],
    BORING_IMG: 'anim-boring.webp',

    /* Nein-Button: nach so vielen Ausweichversuchen gibt er auf */
    NEIN_MAX_DODGES:   8,
    NEIN_GIVEUP_TEXT:  'Okay okay… frag mich einfach 🥺',

    /* Regen beim maximalen Hype-Level — Emojis und Bild-Dateien mischbar */
    MAUSIG_RAIN: ['🐭', '💕', '✨', 'sw-babyyoda-cute.png'],

    /* Herzchen-Plopp beim Anklicken der Deko-Memes */
    BOOP_EMOJIS: ['💕', '💖', '✨', '🐭'],

    /* Rotierende Untertitel auf der Startseite */
    TAGLINES: [
        'Überleg nicht zu lange…',
        'Tick tack ⏰',
        'Ich warte… 👀',
        'Mausi?? 🥺',
        'Der Ja-Button beißt nicht 😌',
    ],

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
        { img: 'sw-mousedroid.gif',        text: 'Ich schicke den Maus-Droiden los. 🐭' },
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
        { img: 'sw-grogu-giggle.gif',  text: 'Hihi, gute Wahl 🐭' },
    ],

    BORING_TEXTS: [
        'Laaangweiliggg… 🥱',
        'Wow. Wie originell. 🥱',
        'Sehr klassisch. SEHR klassisch. 🥱',
        'Gääähn… aber okay, du Klassiker. 🥱',
    ],

    /* boring: true    → Gähn-Popup beim Anklicken
       durationQ       → zeigt zusätzlich den Dauer-Slider
       du: true        → gestrichelter „Entscheide du"-Style
       gif             → einzelner Dateiname oder Liste (dann alle nebeneinander) */
    ACTIVITIES: {
        essen:    { label: 'Essen gehen 🍽️', boring: true },
        walk:     { label: 'Entspannter Spaziergang 🚶‍♀️', gif: 'anim-husky-happy.webp', boring: true,
                    verdict: 'Sehr sportlich! Aber wehe du beschwerst dich über das Wetter. 😄' },
        coffee:   { label: 'Gemütliches Kaffee Date ☕', gif: ['sw-leia-hope.gif', 'sw-grogu-soup.gif'], boring: true,
                    verdict: 'Gute Wahl! Lecker Käffchen und hoffentlich muss ich mich nicht entleeren. ☕🤓' },
        wandern:  { label: 'Wanderung 🥾', gif: 'sw-chewbacca-dance.gif',
                    verdict: 'Wandern! Sei gewarnt. Es könnte schief gehen. 🥾😄',
                    durationQ: 'Wie lange soll die Wanderung gehen?' },
        rad:      { label: 'Radtour 🚴', gif: 'sw-bb8-roll.gif',
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
