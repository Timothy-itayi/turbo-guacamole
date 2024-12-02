import Navbar from "@/components/NavBar";
import "../app/globals.css"; // Import your Tailwind styles here
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
   <Navbar/>
  <Component 

 {...pageProps} />;
  
  </>
  )
}
