import '@/stylesheets/style.sass'
import {
  GtAmericaExBlack,
  GtAmericaExBold,
  GtAmericaExRegular,
  GtAmericaStRegular,
  PPMonumentExHeavy,
} from '@/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${GtAmericaExBlack.variable} ${GtAmericaExBold.variable} ${GtAmericaExRegular.variable} ${GtAmericaStRegular.variable} ${PPMonumentExHeavy.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
