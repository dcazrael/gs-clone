import { ThemeProvider } from 'next-themes';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute='class'
      storageKey='nightwind-mode'
      defaultTheme='system'
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
