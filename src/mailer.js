import nodemailer  from 'nodemailer';
import sgTransport from 'nodemailer-sendgrid-transport'

import { mailer } from './configs';

export default nodemailer.createTransport(
    sgTransport({
        auth: {
            api_key: mailer.apiKey
        }
    })
);
