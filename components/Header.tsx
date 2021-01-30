import Link from "next/link";
import { Text } from "rebass";
import { ChainId } from "../common/constants";
import { useActiveWeb3React } from "../hooks";
import styles from "../styles/Header.module.css";
import Row from "./Row";
import Card from "./Card";

const SUPPORTED_TESTNETS: { [chainId in ChainId]?: string } = {
  [ChainId.GÖRLI]: "Görli",
  [ChainId.KOVAN]: "Kovan",
};

export default function Header() {
  //   const { account, chainId } = useActiveWeb3React();

  const chainId = "42";
  const account = 1;
  const userEthBalance = 1;
  return (
    <div className={styles.container}>
      <Row>
        <Row className={styles.link}>
          <Link href="." as="/commit">
            <a className={styles.nav}>Commit</a>
          </Link>
        </Row>
      </Row>
      <div className={styles.controls}>
        <div className={styles.element}>
          <span className={styles.small}>
            {chainId && SUPPORTED_TESTNETS[chainId] && (
              <Card className={styles.card} title={SUPPORTED_TESTNETS[chainId]}>
                {SUPPORTED_TESTNETS[chainId]}
              </Card>
            )}
          </span>
          <div className={styles.account}>
            {account && userEthBalance ? (
              <Text className={styles.text}>
                {/* {userEthBalance?.toSignificant(4)} */}
                {userEthBalance} ETH
              </Text>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
