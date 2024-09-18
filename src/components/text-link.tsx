import { KeyTextField } from '@prismicio/client'
import { LinkBase, LinkBaseProps } from '@superrb/next-addons/components'

type Props = LinkBaseProps & {
  label: string | KeyTextField
  className?: string
}

const TextLink = ({ label, className, children, ...props }: Props) => (
  <LinkBase className={`text-link ${className}`} {...props}>
    <span className="text-link__label">{label}</span>
    {children}
  </LinkBase>
)

export default TextLink
