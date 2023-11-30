import styles from "./../../principal/principal.module.css";

export default function OpenStage(props) {
  return (
    <div className={styles.OpenStage}>
      <a href={props.href}>{props.contribuinte}</a>
    </div>
  );
}
