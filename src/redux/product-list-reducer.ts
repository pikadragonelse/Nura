import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from './store';

export type ProductListState = {
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
    page5: number;
    page10: number;
}[];

export type ProductType = {
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
    page5: number;
    page10: number;
};

const initialState: ProductListState = [];

export const productListSlice = createSlice({
    name: 'productList',
    initialState: initialState,
    reducers: {
        setProduct: (state, action: PayloadAction<ProductListState>) => {
            state = action.payload;
            return state;
        },
    },
});

export const { setProduct } = productListSlice.actions;
export const selectProduct = (state: RootState) => state.productList;
export const productListReducer = productListSlice.reducer;
