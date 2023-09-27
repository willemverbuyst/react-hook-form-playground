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
    hasPhoneNumber: boolean;
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

export function updateStepThree(
  state: GlobalState,
  payload: {
    files: FileList | undefined;
  }
) {
  if (!payload.files) {
    return state;
  }
  return {
    ...state,
    data: {
      ...state.data,
      ...payload,
    },
  };
}

export function updateStepFour(
  state: GlobalState,
  payload: {
    position: "front-end" | "back-end" | "full-stack";
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
