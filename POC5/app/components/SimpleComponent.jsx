import styles from "./SimpleComponent.module.css";

export default function SimpleComponent({ nameSection, title, text }) {
  return (
    <section id={nameSection} className={styles.container}>
      <h1 className={styles.titulo}>{title}</h1>
      <p className={styles.texto}>{text}</p>
    </section>
  );
}
