import styles from "../principal.module.css";
export default function Titulo(props) {
  return <div className={styles.Titulo}>{props.texto}</div>;
}
