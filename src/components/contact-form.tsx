'use client'

import {Form} from "@superrb/react-addons/components";
import * as Yup from "yup"
import {submit} from "@/actions";

const schema = Yup.object().shape({
    name: Yup.string().meta({ placeholder: 'Enter your name' }).required(),
    email: Yup.string()
        .email()
        .meta({ placeholder: 'Enter your email address' })
        .required(),

    message: Yup.string()
        .meta({ textarea: true, placeholder: 'Your message...' })
        .required(),
})

const ContactForm = () => {
    return (
        <Form action={submit} schema={schema} />
    )
}

export default ContactForm
