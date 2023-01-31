import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
      {/* children = Layout 하위컴포넌트(_app.js의 <Component {...pageProps}/>) */}
    </>
  );
}
