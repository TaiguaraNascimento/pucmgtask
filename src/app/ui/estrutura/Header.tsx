import Logotipo from "../visual/Logotipo";

import styles from "./Estrutura.module.css";

export default function Header(props) {
  return (
    <>
      <div className={styles.Header}>
        <div>
          <Logotipo />
        </div>
        <h1>Grant Thornton Brasil</h1>
      </div>
    </>
  );
}
