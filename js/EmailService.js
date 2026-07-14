/* Schickt die Date-Bestätigung per formsubmit.co. */
class EmailService {
    #endpoint;

    constructor(endpoint) {
        this.#endpoint = endpoint;
    }

    async sendConfirmation({ activity, dateTime, food, duration, hype }) {
        const fields = {
            '_subject':  '📅 Date fixiert! 💕',
            '_captcha':  'false',
            '_template': 'table',
            'Aktivität':       activity,
            'Datum & Uhrzeit': dateTime,
            'Hype-Level':      hype,
        };
        if (food)     fields['Essensrichtung'] = food;
        if (duration) fields['Dauer']          = duration;

        try {
            await fetch(this.#endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(fields),
            });
        } catch { /* silent fail — user still sees success screen */ }
    }
}
