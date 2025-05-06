import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

interface PageHeaderProps {
  title: string
  description?: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="py-12 px-6 md:px-12 border-b border-brown/10">
      <div className="max-w-6xl mx-auto">
        <h1 className={`${playfair.className} text-brown text-4xl md:text-5xl font-medium`}>{title}</h1>
        {description && <p className="text-brown/80 mt-4 text-lg md:text-xl max-w-3xl">{description}</p>}
      </div>
    </div>
  )
}
