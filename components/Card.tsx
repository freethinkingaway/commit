import styles from "../styles/Card.module.css";
import { Box } from "rebass";

export default function Card({ className = styles.default, children }: any) {
  return <Box className={className}>{children}</Box>;
}
