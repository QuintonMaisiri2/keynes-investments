import { Playfair_Display } from "next/font/google"


interface PageHeaderProps {
  title: string
  description?: string
  imageUrl?: string
}

export function PageHeader({ title, description,imageUrl }: PageHeaderProps) {
  return (
    <div className="pt-12 px-6 md:px-12 border-b border-brown/10 min-h-[90vh] bg-cover bg-center w-screen relative flex items-end justify-center font-ebgaramond"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}>
      <div className="bg-brown/50 backdrop-blur-sm p-8 md:p-12 text-white">
        <h1 className={`text-4xl md:text-5xl font-medium font-ebgaramond`}>{title}</h1>
        {description && <p className="text-white/80 mt-4 text-lg md:text-xl max-w-3xl ">{description}</p>}
        <p className="bobbing-arrow">↓ </p>
      </div>
      
    </div>
  )
}
