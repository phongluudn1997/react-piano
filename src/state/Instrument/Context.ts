import * as React from "react";
import { InstrumentName } from "soundfont-player";
import { DEFAULT_INSTRUMENT } from "../../domain/sound";

export type ContextValue = {
  instrument: InstrumentName;
  setInstrument: (instrument: InstrumentName) => void;
};

export const InstrumentContext = React.createContext<ContextValue>({
  instrument: DEFAULT_INSTRUMENT,
  setInstrument() {},
});

export const InstrumentContextConsumer = InstrumentContext.Consumer;

export const useInstrument = () => {
  return React.useContext(InstrumentContext);
};
