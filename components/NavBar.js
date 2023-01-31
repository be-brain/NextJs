import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../components/NavBar.module.css";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link legacyBehavior href="/">
        {/* 문자열백틱은 왜 안먹을까? */}
        <a
          className={`${styles.link}${
            router.pathname === "/" ? styles.active : ""
          }`}
        >
          Home
        </a>
      </Link>
      <Link legacyBehavior href="/about">
        <a
          className={[
            styles.link,
            router.pathname === "/about" ? styles.active : "",
          ].join(" ")}
        >
          About
        </a>
        {/* join()은 배열을 한 문자열로 만든다 ()안의 인자는 문자열을 구분할 때 들어갈 인자 */}
      </Link>
    </nav>
  );
}
