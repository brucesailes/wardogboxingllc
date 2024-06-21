import type { AppProps } from 'next/app'
import Layout from "../components/Layout"; 
import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"; 
config.autoAddCss = false;
import Analytics from '../components/Analytics';
 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Analytics />
    <Component {...pageProps} />
    </Layout>  
  )
}