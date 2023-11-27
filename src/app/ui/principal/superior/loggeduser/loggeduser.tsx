import Image from "next/image";
import styles from "../superior.module.css";
import NoUser from "../../../../../../public/icons/nouser.jpg";

export default function LoggedUser() {
  return (
    <div className={styles.LoggedUser}>
      <Image
        src={NoUser}
        className={styles.UserPic}
        alt="Username"
        height={40}
        width={40}
      />
    </div>
  );
}
