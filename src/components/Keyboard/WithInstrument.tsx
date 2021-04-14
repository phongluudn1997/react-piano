import * as React from "react";
import { useSoundfont } from "../../adapters/Soundfont/useSoundfont";
import { useInstrument } from "../../state/Instrument/Context";
import { useAudioContext } from "../AudioContextProvider/useAudioContext";
import { Keyboard } from "./Keyboard";

export const KeyboardWithInstrument = () => {
  const AudioContext = useAudioContext()!;
  const { loading, play, stop, load, current } = useSoundfont({ AudioContext });
  const { instrument } = useInstrument();

  React.useEffect(() => {
    if (!loading && current !== instrument) load(instrument);
  }, [current, instrument, load, loading]);

  return <Keyboard loading={loading} play={play} stop={stop} />;
};
