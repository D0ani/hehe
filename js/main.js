/* Einstiegspunkt: Bausteine zusammenstecken und App starten.
   Alle Skripte laden mit defer, das DOM ist hier also schon fertig geparst. */
new FloatingHearts(AppConfig.HEARTS, AppConfig.HEART_COUNT).mount();
new DecoMemes(AppConfig.BOOP_EMOJIS).init();
new TaglineRotator(document.querySelector('.tagline'), AppConfig.TAGLINES).start();

const app = new DateFlowApp({
    modal:    new Modal(document.getElementById('overlay'), document.getElementById('modal')),
    popup:    new ReactionPopup({ imagePath: AppConfig.IMAGE_PATH }),
    confetti: new Confetti(document.getElementById('confettiWrap'), AppConfig.CONFETTI_COLORS, AppConfig.IMAGE_PATH),
    email:    new EmailService(AppConfig.EMAIL_ENDPOINT),
});
app.init();
