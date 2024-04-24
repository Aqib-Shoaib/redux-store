const customerInitialState = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};
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
