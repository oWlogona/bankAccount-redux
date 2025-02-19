import { combineReducers, createStore } from "redux";

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPropose: "",
};
const ACCOUNT_DEPOSITE = "account/deposite";
const ACCOUNT_WITHDRAW = "account/withdraw";
const ACCOUNT_REQUEST_LOAN = "account/requestLoan";
const ACCOUNT_PAY_LOAN = "account/payLoan";

const initialStateCustomer = {
  fullName: "",
  nationID: "",
  createdAt: "",
};

function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case ACCOUNT_DEPOSITE:
      return { ...state, balance: state.balance + action.payload };
    case ACCOUNT_WITHDRAW:
      return { ...state, balance: state.balance - action.payload };
    case ACCOUNT_REQUEST_LOAN:
      if (state.loan > 0) return state;
      return {
        ...state,
        balance: state.balance + action.payload.amount,
        loan: action.payload.amount,
        loanPropose: action.payload.purpose,
      };

    case ACCOUNT_PAY_LOAN:
      return {
        ...state,
        loan: 0,
        loanPropose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}

function customerReducer(state = initialStateCustomer, action) {
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

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer);

function deposite(amount) {
  return { type: ACCOUNT_DEPOSITE, payload: amount };
}
function withdraw(amount) {
  return { type: ACCOUNT_WITHDRAW, payload: amount };
}
function requestLoan(amount, purpose) {
  return {
    type: ACCOUNT_REQUEST_LOAN,
    payload: { amount: amount, purpose: purpose },
  };
}
function payloan() {
  return { type: ACCOUNT_PAY_LOAN };
}

const CUSTOMER_CREATE_CUSTOMER = "customer/createCustomer";
const CUSTOMER_UPDATE_CUSTOMER_NAME = "customer/updateCustomerName";

function createCustomer(fullname, nationID) {
  return {
    type: CUSTOMER_CREATE_CUSTOMER,
    payload: {
      fullname: fullname,
      nationID: nationID,
      createdAt: new Date().toISOString(),
    },
  };
}

function updateCustomerName(fullname) {
  return {
    type: CUSTOMER_UPDATE_CUSTOMER_NAME,
    payload: {
      fullname: fullname,
    },
  };
}
