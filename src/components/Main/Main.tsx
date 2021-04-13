import { useAudioContext } from "../AudioContextProvider/useAudioContext";
import { NoAudioMessage } from "../NoAudioMessage/NoAudioMessage";
import { Keyboard } from "../Keyboard/Keyboard";
export const Main = () => {
  const AudioContext = useAudioContext();
  return !!AudioContext ? <Keyboard /> : <NoAudioMessage />;
};
