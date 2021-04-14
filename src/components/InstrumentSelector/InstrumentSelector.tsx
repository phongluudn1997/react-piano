import { InstrumentName } from "soundfont-player";
import { useInstrument } from "../../state/Instrument/Context";
import { options } from "./options";
import styles from "./InstrumentSelector.module.css";

export const InstrumentSelector = () => {
  const { instrument, setInstrument } = useInstrument();

  const updateValue = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    setInstrument(target.value as InstrumentName);
  };

  return (
    <select
      className={styles.instruments}
      value={instrument}
      onChange={updateValue}
    >
      {options.map(({ label, value }) => {
        return (
          <option key={value} value={value}>
            {label}
          </option>
        );
      })}
    </select>
  );
};
