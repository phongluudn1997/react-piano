import * as React from "react";
import { InstrumentName } from "soundfont-player";
import { DEFAULT_INSTRUMENT } from "../../domain/sound";
import { InstrumentContext } from "./Context";

export const InstrumentContextProvider: React.FunctionComponent = ({
  children,
}) => {
  const [instrument, setInstrument] = React.useState<InstrumentName>(
    DEFAULT_INSTRUMENT
  );
  return (
    <InstrumentContext.Provider value={{ instrument, setInstrument }}>
      {children}
    </InstrumentContext.Provider>
  );
};
