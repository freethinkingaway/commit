import Link from "next/link";
import styles from "../styles/Header.module.css";
import Row from "./Row";

export default function Header() {
  return (
    <div className={styles.container}>
      <Row>
        <Row className={styles.link}>
          <Link href=".">
            <a>Commit</a>
          </Link>
        </Row>
      </Row>
    </div>
  );
}
