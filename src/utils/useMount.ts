import * as React from "react";

const useEffectOnce = (effect: React.EffectCallback) => {
  //eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(effect, []);
};

type Effect = (...args: unknown[]) => void;
export const useMount = (fn: Effect) => {
  useEffectOnce(() => {
    fn();
  });
};
