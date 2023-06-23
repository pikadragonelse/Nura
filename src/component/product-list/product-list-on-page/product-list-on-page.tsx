import classNames from "classnames/bind";
import { useEffect, useState } from "react";

import { ProductListItem } from "../product-list-item";
import { AddProduct } from "../add-product";
import { LoadingState } from "../../loading-state";
import { Modal } from "../../modal";
import styles from "./product-list-on-page.module.scss";
import { Pagination } from "../../pagination";
import { Select } from "../../select";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";

const cl = classNames.bind(styles);

export const ProductListOnPage = (props: {
    listProduct: any;
    className?: any;
    handleOpenModal?: any;
    loading: boolean;
    amountProduct: number;
}) => {
    let listCoverProductOnPage = [];
    for (let count = 0; count < props.amountProduct; count++) {
        listCoverProductOnPage.push(count);
    }

    const listProduct = useAppSelector((state) => state.productList);
    const dispatch = useAppDispatch();

    const [productSelect, setProductSelect] = useState({});
    const [isOpenDetailModal, setIsOpenDetailModal] = useState(false);

    return (
        <>
            <Modal
                title={`Detail`}
                feature="Go to detail page"
                type="detailForm"
                handleCloseModal={setIsOpenDetailModal}
                isOpen={isOpenDetailModal}
                product={productSelect}
            />

            <ul className={cl("ourProductItem", "productList")}>
                <div
                    onClick={() => props.handleOpenModal(true)}
                    className={cl("addProduct")}
                >
                    <AddProduct />
                </div>
                {props.loading === true
                    ? listCoverProductOnPage.map((item) => (
                          <div
                              key={item}
                              className={cl("loadingProduct", "loadingActive")}
                          >
                              <LoadingState />
                          </div>
                      ))
                    : props.listProduct.map((item: any) => (
                          <ProductListItem key={item.id} product={item} />
                      ))}
            </ul>
        </>
    );
};
