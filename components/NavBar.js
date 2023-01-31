import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link legacyBehavior href="/">
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link legacyBehavior href="/about">
        <a className={router.pathname === "/about" ? "active" : ""}>About</a>
      </Link>
      {/* style태그는 Next, React가 아닌 js태그 */}
      {/* 왜 color는 안먹을까? → className형식으로 쓰니까 잘먹힘*/}
      {/* active는 NavBar.js컴포넌트 내부에서만 동작한다(index.js나 다른 파일에서 똑같이 써도 적용안됨) */}
      <style jsx>
        {`
          // nav {
          //   background-color: blue;
          //   color: white;
          // }
          a {
            text-decoration: none;
          }
          .active {
            color: yellow;
          }
        `}
      </style>
    </nav>
  );
}
