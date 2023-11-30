import Superior from "../ui/principal/superior/superior";
import Sidebar from "../ui/principal/sidebar/Sidebar";

import styles from "../ui/principal/principal.module.css";

export default function Layout({ children }) {
  return (
    <>
      <div className={styles.Container}>
        <div>
          <div className={styles.Superior}>
            <Superior />
          </div>
        </div>

        <div className={styles.ContentRow}>
          <div className={styles.Menu}>
            <Sidebar />
          </div>
          <div className={styles.Content}>
            <div className={styles.Stage}>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
