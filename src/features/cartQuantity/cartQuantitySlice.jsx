import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  addedItems: [],
  totalQuantity: 0,
  totalCost: 0,
  loading: false,
  error: null,
};

export const cartQuantitySlice = createSlice({
  name: "cartQuantity",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.totalQuantity += action?.payload;
      console.log(state.totalQuantity);
    },
    totalAmount: (state, action) => {
      state.totalCost += action?.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addedItemsAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addedItemsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        const existingItem = state.addedItems.find(
          (item) => item?.itemInfo?.id === action?.payload?.itemInfo?.id
        );

        if (existingItem) {
          existingItem.itemQuantity += action.payload.itemQuantity;
        } else {
          state.addedItems.push({
            itemInfo: action.payload.itemInfo,
            itemQuantity: action.payload.itemQuantity,
          });
        }
      })
      .addCase(addedItemsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(removeItemAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeItemAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        state.addedItems = state?.addedItems?.filter((item)=> item?.itemInfo?.id != action?.payload?.itemId);
      })
      .addCase(removeItemAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addItemAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addItemAsync.fulfilled, (state, action) => {
        state.totalQuantity += action?.payload?.quantity;
        state.loading = false;
      })
      .addCase(addItemAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(totalAmountAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(totalAmountAsync.fulfilled, (state, action) => {
        state.totalCost += action?.payload?.price;
        state.loading = false;
      })
      .addCase(totalAmountAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const addItemAsync = createAsyncThunk(
  "cartQuantitySlice/addItemAsync",
  async (quantity, thunkAPI) => {
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: { quantity } });
      });
    });
    return response.data;
  }
);

export const totalAmountAsync = createAsyncThunk(
  "cartQuantitySlice/totalAmountAsync",
  async (price, thunkAPI) => {
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: { price } });
      });
    });
    return response.data;
  }
);

export const addedItemsAsync = createAsyncThunk(
  "cartQuantitySlice/addedItemsAsync",
  async ({ itemInfo, itemQuantity }, thunkAPI) => {
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: { itemInfo, itemQuantity } });
      });
    }); 
    return response.data;
  }
);

export const removeItemAsync = createAsyncThunk(
  "cartQuantitySlice/removeItemAsync",
  async (itemId, thunkAPI) => {
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: { itemId } });
      });
    }); 
    return response.data;
  }
);

export const { addItem, totalAmount } = cartQuantitySlice.actions;
export default cartQuantitySlice.reducer;
