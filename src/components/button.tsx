import { KeyTextField } from '@prismicio/client'
import { LinkBase, LinkBaseProps } from '@superrb/next-addons/components'

export enum ButtonVariant {
  black = 'black',
  white = 'white',
  outline = 'outline',
}

export type ButtonProps = {
  label?: string | KeyTextField
  variants?: ButtonVariant[]
  className?: string
} & LinkBaseProps

const Button = ({
    variants = 'outline',
    label = '',
    className = '',
    children,
    ...props
  }: ButtonProps) => {
  const variantClasses = variants
    .map((variant) => `button--${variant}`)
    .join(' ')

  return (
    <LinkBase className={`button ${variantClasses} ${className}`} {...props}>
      <span className="button__text">
        {label as string}
      </span>
      <span className="button__icon">
      </span>
      {children}
    </LinkBase>
  )
}

export default Button
