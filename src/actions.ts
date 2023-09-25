import { GlobalState } from "little-state-machine";

export function updateStepOne(
  state: GlobalState,
  payload: {
    firstName: string;
    lastName: string;
  }
) {
  return {
    ...state,
    data: {
      ...state.data,
      ...payload,
    },
  };
}

export function updateStepTwo(
  state: GlobalState,
  payload: {
    email: string;
    phoneNumberCheckbox: boolean;
    phoneNumber: string;
  }
) {
  return {
    ...state,
    data: {
      ...state.data,
      ...payload,
    },
  };
}
