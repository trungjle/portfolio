import { ReactNode } from "react"
import "../styles/globals.css"
import Navbar from "../components/navbar"
import { Raleway } from "@next/font/google"

const raleway = Raleway({
  subsets: ["latin"],
})

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={"/favicon.ico"} />
        <title>Portfolio - Johnny Le</title>
      </head>
      <body className={raleway.className}>
        <header>
          <Navbar></Navbar>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
