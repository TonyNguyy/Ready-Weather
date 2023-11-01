import {Poppins} from "next/font/google"
import './globals.css'


export const metadata = {
  title: 'Ready Weather 🌤',
  description: 'A weather application',
  
}

const poppins = Poppins({
  subsets: ["latin"],
  weight:["400","500", "700"],
  style: ["normal", "italic"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
