const CUSTOMER_CREATE_CUSTOMER = "customer/createCustomer";
const CUSTOMER_UPDATE_CUSTOMER_NAME = "customer/updateCustomerName";

export function createCustomer(fullName, nationID) {
  return {
    type: CUSTOMER_CREATE_CUSTOMER,
    payload: {
      fullName: fullName,
      nationID: nationID,
      createdAt: new Date().toISOString(),
    },
  };
}

export function updateCustomerName(fullName) {
  return {
    type: CUSTOMER_UPDATE_CUSTOMER_NAME,
    payload: {
      fullName: fullName,
    },
  };
}

const initialStateCustomer = {
  fullName: "",
  nationID: "",
  createdAt: "",
};

export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case CUSTOMER_CREATE_CUSTOMER:
      return {
        ...state,
        fullName: action.payload.fullName,
        nationID: action.payload.nationID,
        createdAt: action.payload.createdAt,
      };

    case CUSTOMER_UPDATE_CUSTOMER_NAME:
      return {
        ...state,
        fullName: action.payload.fullName,
      };
    default:
      return state;
  }
}
