import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const drawerSlice = createSlice({
    name: 'isOpenDrawer',
    initialState: false,
    reducers: {
        setIsOpen: (state, action: PayloadAction<boolean>) => {
            state = action.payload;
            return state;
        },
    },
});

export const { setIsOpen } = drawerSlice.actions;
export const isOpenDrawer = (state: RootState) => state.openDrawer;
export const drawerReducer = drawerSlice.reducer;