import styles from "./Keyboard.module.css";
import { notes } from "../../domain/note";
import { Key } from "../Key/Key";
import { selectKey } from "../../domain/keyboard";

export const Keyboard = () => {
  return (
    <div className={styles.keyboard}>
      {notes.map(({ midi, type, index, octave }) => {
        const label = selectKey(octave, index);
        return <Key key={midi} type={type} label={label} />;
      })}
    </div>
  );
};
