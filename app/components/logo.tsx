import Image from "next/image";
import Link from "next/link";
import styles from "./logo.module.css";

type LogoProps = {
  variant?: "dark" | "light";
};

export function Logo({ variant = "dark" }: LogoProps) {
  const logo =
    variant === "light" ? "/images/logo-2.png" : "/images/logo-1.png";

  return (
    <Link
      href="/"
      className={`logo ${styles.logo}`}
      aria-label="Mudziyo Digital Solutions home"
    >
      <Image
        className={styles.image}
        src={logo}
        alt="Mudziyo Digital Solutions"
        width={1920}
        height={1080}
        priority
      />
    </Link>
  );
}
