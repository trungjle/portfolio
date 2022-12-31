import "../styles/globals.css"
import type { AppProps } from "next/app"
import { Raleway } from "@next/font/google"
import { Navbar } from "../components/Navbar"

const raleway = Raleway({
  weight: "400",
  subsets: ["latin"]
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={raleway.className}>
      <Navbar />
      <Component {...pageProps} />
    </main>
  )
}
