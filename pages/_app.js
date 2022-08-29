import "../styles/globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BottomNav from "../components/BottomNav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
      <BottomNav/>
    </>
  );
}

export default MyApp;
