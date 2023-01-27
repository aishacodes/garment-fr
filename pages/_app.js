import "tailwindcss/tailwind.css";
import "./../styles/App.scss";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
