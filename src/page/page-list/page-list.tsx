import axios from "axios";
import { useEffect, useState } from "react";
import classNames from "classnames/bind";

import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { setProduct } from "../../redux/product-list-reducer";

import { DefaultLayout } from "../default-layout";
import { ProductList } from "../../component/product-list";
import styles from "./page-list.module.scss";
import { Modal } from "../../component/modal";

const cl = classNames.bind(styles);

export const PageList = () => {
    const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);

    const [checkCreate, setCheckCreate] = useState(0);

    const createProduct = (product: any, setLoading: any, setError: any) => {
        setLoading(true);
        axios
            .post(`https://anything-three.vercel.app/listProduct/`, product)
            .then(() => {
                setLoading(false);
                localStorage.totalProduct++;
                setCheckCreate((prev) => prev + 1);
                setIsOpenCreateModal(false);
            })
            .catch(() => {
                setLoading(false);
                setError(true);
            });
    };

    return (
        <DefaultLayout>
            <Modal
                isOpen={isOpenCreateModal}
                title="Create product"
                type="createForm"
                feature="Create"
                handleCloseModal={() => setIsOpenCreateModal(false)}
                createProduct={createProduct}
            />

            <div className={cl("pageListContainer")}>
                <ProductList />
            </div>
        </DefaultLayout>
    );
};
