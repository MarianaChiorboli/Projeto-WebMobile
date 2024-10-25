import styles from "./Print.module.css";
export default function Print({ url }) {
  return (
    <div className={styles.container}>
      <img src={url} alt="Print demonstrando" className={styles.image} />
    </div>
  );
}
