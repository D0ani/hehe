/* Schickt die Date-Bestätigung per formsubmit.co. */
class EmailService {
    #endpoint;
    #subject;

    constructor(endpoint, subject = '📅 Date fixiert! 💕') {
        this.#endpoint = endpoint;
        this.#subject  = subject;
    }

    async sendConfirmation({ activity, dateTime, food, duration, hype, wishes }) {
        const fields = {
            '_subject':  this.#subject,
            '_captcha':  'false',
            '_template': 'table',
            'Aktivität':       activity,
            'Datum & Uhrzeit': dateTime,
            'Hype-Level':      hype,
        };
        if (food)     fields['Essensrichtung']  = food;
        if (duration) fields['Dauer']           = duration;
        if (wishes)   fields['Weitere Wünsche'] = wishes;

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
