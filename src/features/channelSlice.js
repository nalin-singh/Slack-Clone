import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	channelID: null,
	status: "idle",
};

export const channelSlice = createSlice({
	name: "channel",
	initialState,
	reducers: {
		enterChannel: (state, action) => {
			state.channelID = action.payload.channelID;
		},
	},
});

export const { enterChannel } = channelSlice.actions;

export const selectChannelID = (state) => state.channel.channelID;

export default channelSlice.reducer;
