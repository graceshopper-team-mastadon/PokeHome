import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getAllCart = createAsyncThunk("/cart", async () => {
  const { data } = await axios.get("/api/cart");
  return data;
});

export const AddToCart = createAsyncThunk("/addToCart", async (productInfo) => {
  const { data } = await axios.post(
    "http://localhost:3000/api/cart",
    productInfo
  );
  return data;
});

export const deleteSingleItem = createAsyncThunk(
  "cart/deleteItem",
  async (id) => {
    const { data } = await axios.delete(`/api/cart/${id}`);

    return data;
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCart.fulfilled, (state, { payload }) => {
      state.cart = payload;
    });

    builder.addCase(AddToCart.fulfilled, (state, { payload }) => {
      state.cart.push(payload);
    });

    builder.addCase(deleteSingleItem.fulfilled, (state, { payload }) => {
      state.cart = state.cart.filter(
        (element) => element.productId !== payload.productId
      );
    });
  },
});

export const getCart = (state) => state.cart;
export default cartSlice.reducer;
