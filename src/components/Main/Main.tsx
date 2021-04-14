import { useAudioContext } from "../AudioContextProvider/useAudioContext";
import { NoAudioMessage } from "../NoAudioMessage/NoAudioMessage";
import { PlayGround } from "../Playground/Playground";
export const Main = () => {
  const AudioContext = useAudioContext();
  return !!AudioContext ? <PlayGround /> : <NoAudioMessage />;
};
