import * as React from "react";
import styles from "./Keyboard.module.css";
import { MidiValue, notes } from "../../domain/note";
import { Key } from "../Key/Key";
import { selectKey } from "../../domain/keyboard";

type KeyboardProps = {
  loading: boolean;
  play: (note: MidiValue) => Promise<void>;
  stop: (note: MidiValue) => Promise<void>;
};

export const Keyboard: React.FunctionComponent<KeyboardProps> = ({
  loading,
  play,
  stop,
}) => {
  return (
    <div className={styles.keyboard}>
      {notes.map(({ midi, type, index, octave }) => {
        const label = selectKey(octave, index);
        return (
          <Key
            key={midi}
            type={type}
            label={label}
            disabled={loading}
            onDown={() => play(midi)}
            onUp={() => stop(midi)}
          />
        );
      })}
    </div>
  );
};
