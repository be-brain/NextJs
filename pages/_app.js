import NavBar from "@/components/NavBar";
import "../styles/globals.css";

export default function CustomApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <span>Hello!</span>
      {/* <style jsx global>{`
        a {
          background-color: pink;
          color: black;
        }
      `}</style> */}
    </>
  );
}
