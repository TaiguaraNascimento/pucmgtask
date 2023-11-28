import styles from "./../../principal/principal.module.css";

export default function LinkBotao(props) {
  return (
    <div className={styles.LinkBotao}>
      <a href={props.href}>{props.text}</a>
    </div>
  );
}
