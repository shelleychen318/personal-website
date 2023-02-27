import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Playfair_Display, Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

const playfairDisplay = Playfair_Display({ subsets: ["latin"], weight: "500" })


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  );
}
