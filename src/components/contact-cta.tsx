import { createClient } from '@/prismicio'
import Button, {ButtonVariant} from "@/components/button";
const ContactCta = async () => {
  const client = createClient()
  const contactContent = await client.getSingle('contact_cta')

  const {title, button_text, button_url} = contactContent?.data

  return (
    <div className="footer__contact">
      <h3 className="footer__contact-title">{title}</h3>
      <Button
        href={button_url}
        label={button_text}
        variants={[ButtonVariant.white]}
        className="footer__contact-button"
      />
    </div>
  )
}
export default ContactCta
