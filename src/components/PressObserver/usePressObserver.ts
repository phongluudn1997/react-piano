import * as React from "react";
import { Key as KeyLabel } from "../../domain/keyboard";

type IsPressed = boolean;
type EventCode = string;
type CallbackFunction = () => void;
type Settings = {
  watchKey: KeyLabel;
  onStartPress: CallbackFunction;
  onFinishPress: CallbackFunction;
};

export function usePressObserver({
  watchKey,
  onStartPress,
  onFinishPress,
}: Settings): IsPressed {
  const [pressed, setPressed] = React.useState<IsPressed>(false);

  React.useEffect(() => {
    function handlePressStart({ code }: KeyboardEvent) {
      if (pressed || !equal(code, watchKey)) return;
      setPressed(true);
      onStartPress();
    }
    function handlePressFinish({ code }: KeyboardEvent) {
      if (!pressed || !equal(code, watchKey)) return;
      setPressed(false);
      onFinishPress();
    }

    document.addEventListener("keydown", handlePressStart);
    document.addEventListener("keyup", handlePressFinish);

    return () => {
      document.removeEventListener("keydown", handlePressStart);
      document.removeEventListener("keyup", handlePressFinish);
    };
  }, [onFinishPress, onStartPress, pressed, watchKey]);

  return pressed;
}

function fromEventCode(code: EventCode): string {
  const prefixRegex = /Key|Digit/gi;
  return code.replace(prefixRegex, "");
}

function equal(code: EventCode, watchedKey: KeyLabel): boolean {
  return fromEventCode(code).toUpperCase() === watchedKey.toUpperCase();
}
