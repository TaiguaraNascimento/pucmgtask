import styles from "./superior.module.css";

import Logotipo from "../../visual/logotipo";
import LoggedUser from "./loggeduser/loggeduser";

export default function Superior() {
  return (
    <>
      <div className={styles.Superior}>
        <div className={styles.Logotipo}>
          <Logotipo />
        </div>
        <div>
          <LoggedUser />
        </div>
      </div>
    </>
  );
}
