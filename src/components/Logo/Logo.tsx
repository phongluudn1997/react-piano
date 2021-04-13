import styles from "./Logo.module.css";

export const Logo = () => {
  return (
    <h1 className={styles.logo}>
      <span role="img" aria-label="Metal hand">
        🤘
      </span>
      <span role="img" aria-label="music keyboard emoji">
        🎹
      </span>
      <span role="img" aria-label="music notes emoji">
        🎶
      </span>
    </h1>
  );
};
