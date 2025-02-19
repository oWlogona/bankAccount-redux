const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPropose: "",
};
const ACCOUNT_DEPOSITE = "account/deposite";
const ACCOUNT_WITHDRAW = "account/withdraw";
const ACCOUNT_REQUEST_LOAN = "account/requestLoan";
const ACCOUNT_PAY_LOAN = "account/payLoan";

export default function accountReducer(state = initialStateAccount, action) {
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

export function deposite(amount) {
  return { type: ACCOUNT_DEPOSITE, payload: amount };
}
export function withdraw(amount) {
  return { type: ACCOUNT_WITHDRAW, payload: amount };
}
export function requestLoan(amount, purpose) {
  return {
    type: ACCOUNT_REQUEST_LOAN,
    payload: { amount: amount, purpose: purpose },
  };
}
export function payloan() {
  return { type: ACCOUNT_PAY_LOAN };
}
