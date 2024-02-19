import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { revalidatePath } from "next/cache";

// crete user
export const createUser = createAsyncThunk(
  "user,create",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post("/api/register", {
        name: user.name,
        email: user.email,
        password: user.password,
      });
      if (response.status === 201) {
        revalidatePath("/user");
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const UserSlice = createSlice({
  name: "User",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // create user
    builder.addCase(createUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
export default UserSlice.reducer;
