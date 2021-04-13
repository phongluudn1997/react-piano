import { useAudioContext } from "../AudioContextProvider/useAudioContext";
import { NoAudioMessage } from "../NoAudioMessage/NoAudioMessage";
import { KeyboardWithInstrument } from "../Keyboard/WithInstrument";
export const Main = () => {
  const AudioContext = useAudioContext();
  return !!AudioContext ? <KeyboardWithInstrument /> : <NoAudioMessage />;
};
