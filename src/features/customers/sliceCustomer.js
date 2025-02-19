import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  nationID: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullName, nationID) {
        return {
          payload: { fullName, nationID, createdAt: new Date().toISOString() },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationID = action.payload.nationID;
        state.createdAt = action.payload.createdAt;
      },
    },
    updateCustomerName: {
      prepare(fullName) {
        return {
          payload: { fullName },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
      },
    },
  },
});

export const { createCustomer, updateCustomerName } = customerSlice.actions;
export default customerSlice.reducer;
