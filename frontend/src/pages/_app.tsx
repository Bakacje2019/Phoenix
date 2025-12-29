import '@/styles/globals.css';
import type { AppProps } from 'next/app';

// The custom App component injects global styles and context providers.
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}