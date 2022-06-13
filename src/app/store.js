import { configureStore } from "@reduxjs/toolkit";
import channelSlice from "../features/channelSlice";
export const store = configureStore({
	reducer: { channelSlice },
});
