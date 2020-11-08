import styles from "./Splash.module.scss";

export default function Splash({ splash }: any) {
  return (
    <div className={`${styles.splash} ${splash ? styles.visible : null}`}>
      <img src="/NK-secondary.svg" className={styles.logo} />
    </div>
  );
}
