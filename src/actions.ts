import { GlobalState } from "little-state-machine";

export function updateFirstAndLastName(
  state: GlobalState,
  payload: {
    firstName: string;
    lastName: string;
  }
) {
  return {
    ...state,
    data: {
      ...payload,
    },
  };
}
