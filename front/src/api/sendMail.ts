import axios from 'axios'
import { $CombinedState } from 'redux';
import emailjs from '@emailjs/browser'

interface MailTemplate {
    title: string;
    mail: string;
    message: string;
}

export const sendMail = async (data: MailTemplate) => {
    emailjs.send(
        process.env.REACT_APP_SERVICE_ID as string,
        process.env.REACT_APP_TEMPLATE_ID as string,
        {...data},
        process.env.REACT_APP_PUBLIC_KEY
    );
}