import { configureStore } from '@reduxjs/toolkit';

import { productListReducer } from './product-list-reducer';
import { compareProductReducer } from './compare-product-reducer';
import { drawerReducer } from './drawer';

export const store = configureStore({
    reducer: {
        productList: productListReducer,
        compareProduct: compareProductReducer,
        openDrawer: drawerReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
