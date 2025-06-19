import type { CounterValues } from "../app/App";
import type { RootState } from "../app/store";

export const selectValues = (state: RootState): CounterValues => state.values