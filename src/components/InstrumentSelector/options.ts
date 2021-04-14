import { InstrumentName } from "soundfont-player";
import instruments from "soundfont-player/names/musyngkite.json";

type Option = {
  label: string;
  value: InstrumentName;
};
type OptionList = Option[];
type InstrumentList = InstrumentName[];

function normalizeList(list: InstrumentList): OptionList {
  return list.map((instrument) => ({
    value: instrument,
    label: instrument.replace(/_/gi, " "),
  }));
}

export const options = normalizeList(instruments as InstrumentList);
