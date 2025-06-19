import type { CounterState } from "../app/App";
import type { RootState } from "../app/store";

export const selectCounterState = (state: RootState): CounterState => state.counterState