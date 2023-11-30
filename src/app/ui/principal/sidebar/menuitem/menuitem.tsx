import Link from "next/link";

import styles from "./../sidebar.module.css";

import { usePathname } from "next/navigation";

export default function MenuItem(props) {
  const link_de_acesso = "/principal/" + props.link;

  const pathname = usePathname();

  return (
    <div className={styles.MenuItem}>
      <Link
        className={`${styles.MenuLink} ${
          verificarSeContem(props.link, pathname) && styles.LinkAtivo
        }`}
        href={link_de_acesso}
      >
        {props.item}

        {props.na === true ? (
          <div className={styles.NaoImplementado}>(Não Implementado)</div>
        ) : (
          <></>
        )}
      </Link>
    </div>
  );
}

function verificarSeContem(link_original: string, pathname: string): boolean {
  if (pathname.endsWith(link_original) === true) {
    return true;
  } else {
    return false;
  }
}
