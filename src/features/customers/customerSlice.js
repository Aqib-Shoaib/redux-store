import { createSlice } from "@reduxjs/toolkit";

const customerInitialState = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState: customerInitialState,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalId) {
        return { payload: { fullName, nationalId } };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalId;
      },
    },
    updateName(state, action) {
      state.fullName = action.payload;
    },
  },
});

export const { createCustomer, updateName } = customerSlice.actions;
export default customerSlice.reducer;

/*
export default function customerReducer(state = customerInitialState, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalId,
      };
    case "customer/updateName":
      return {
        ...state,
        fullName: action.payload,
      };
    default:
      return state;
  }
}
export function createCustomer(fullName, nationalId) {
  return { type: "customer/createCustomer", payload: { fullName, nationalId } };
}
export function updateName(fullName) {
  return { type: "customer/updateName", payload: fullName };
}
*/
