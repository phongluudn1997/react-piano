import { Optional } from "../../domain/types";
import * as React from "react";
import { accessContext } from "../../domain/audio";

export function useAudioContext(): Optional<AudioContextType> {
  const AudioCtx = React.useRef(accessContext());
  return AudioCtx.current;
}
