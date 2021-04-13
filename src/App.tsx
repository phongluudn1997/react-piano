import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Logo } from "./components/Logo/Logo";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Logo />
      <main className={styles.content}></main>
      <Footer />
    </div>
  );
}

export default App;
