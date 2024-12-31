import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="container">
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
