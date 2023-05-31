import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from './store';

type productType = {
    id: number;
    name: string;
    price: number;
    desc: string;
    image: string;
    features: object;
    normalFeatures: object;
    link: string;
    button: boolean;
    shipping: boolean;
    payment: boolean;
    paymentMethod: object;
    returns: boolean;
    warranty: boolean;
    page1: number;
    page3: number;
};

export const initialState = {
    id: 0,
    name: '',
    price: 0,
    desc: '',
    image: '',
    features: {},
    normalFeatures: {},
    link: '',
    button: false,
    shipping: false,
    payment: false,
    paymentMethod: {},
    returns: false,
    warranty: false,
    page1: 0,
    page3: 0,
};

export const compareProductSlice = createSlice({
    name: 'compareProduct',
    initialState: initialState,
    reducers: {
        setCompareProduct: (state, action: PayloadAction<productType>) => {
            state = action.payload;
            return state;
        },
    },
});

export const { setCompareProduct } = compareProductSlice.actions;
export const compareProductReducer = compareProductSlice.reducer;
export const selectCompareProduct = (state: RootState) => state.compareProduct;
