import styles from "../styles/Row.module.css";
import { Box } from "rebass";

export default function Row({ className = styles.default, children }: any) {
  return <Box className={className}>{children}</Box>;
}
