import * as React from "react";
import { useSoundfont } from "../../adapters/Soundfont/useSoundfont";
import { useAudioContext } from "../AudioContextProvider/useAudioContext";
import { Keyboard } from "./Keyboard";
import { useMount } from "../../utils/useMount";

export const KeyboardWithInstrument = () => {
  const AudioContext = useAudioContext()!;
  const { loading, play, stop, load } = useSoundfont({ AudioContext });

  // useMount(load);

  React.useEffect(() => {
    load();
  }, [load]);

  return <Keyboard loading={loading} play={play} stop={stop} />;
};
