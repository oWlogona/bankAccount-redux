import accountReducer from "./features/accounts/sliceAccount";
import customerReducer from "./features/customers/sliceCustomer";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
