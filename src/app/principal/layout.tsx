import Superior from "../ui/principal/superior/superior";
import Sidebar from "../ui/principal/sidebar/Sidebar";

import styles from "../ui/principal/principal.module.css";

export default function Layout({ children }) {
  return (
    <>
      <div className={styles.Container}>
        <div className={styles.Menu}>
          <Sidebar />
        </div>

        <div className={styles.Content}>
          <Superior />
          <div className={styles.Stage}>{children}</div>
        </div>
      </div>
    </>
  );
}
