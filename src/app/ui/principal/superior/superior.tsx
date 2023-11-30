import styles from "./superior.module.css";
import Link from "next/link";
import Logotipo from "../../visual/logotipo/logotipo";
import LoggedUser from "./loggeduser/loggeduser";

export default function Superior() {
  return (
    <>
      <div className={styles.Superior}>
        <div className={styles.Logotipo}>
          <Link href="/">
            <Logotipo />
          </Link>
        </div>

        <div className={styles.Menu}>
          <ul>
            <li>
              <Link href="/sobre">Home</Link>
            </li>
            <li>
              <Link href="/contato">Login</Link>
            </li>
            <li>
              <Link href="/registro">SignUp</Link>
            </li>
          </ul>
          <div>
            <LoggedUser />
          </div>
        </div>
      </div>
    </>
  );
}
