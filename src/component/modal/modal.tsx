import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import axios from "axios";

import { Overlay } from "./overlay";
import { Notification } from "../notification";
import { FormInput } from "./form-input";
import styles from "./modal.module.scss";
import { FormDetail } from "./form-detail";
import { FormCompare } from "./form-compare";

const cl = classNames.bind(styles);

export type Modal = {
    title?: any;
    type: any;
    feature?: string;
    isOpen: boolean;
    handleCloseModal: any;
    getProductInfoFromModal?: any;
    createProduct?: any;
    updateProduct?: any;
    product?: any;
    productCompare?: any;
};

export const Modal = ({
    title,
    type,
    feature,
    isOpen,
    handleCloseModal,
    createProduct,
    updateProduct,
    product,
    productCompare,
}: Modal) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [activeErrorNoti, setActiveErrorNoti] = useState(false);

    const [listProductLastPage1, setListProductLastPage1] = useState([]);
    const [listProductLastPage3, setListProductLastPage3] = useState([]);

    const getProductLastPage = (numberProductOnPage: any) => {
        // axios
        //     .get(
        //         `https://anything-three.vercel.app/listProduct?page${numberProductOnPage}=${Math.ceil(
        //             localStorage.totalProduct / numberProductOnPage
        //         )}`
        //     )
        //     .then((res) => {
        //         if (numberProductOnPage === 1) {
        //             setListProductLastPage1(res.data);
        //         }
        //         if (numberProductOnPage === 3) {
        //             setListProductLastPage3(res.data);
        //         }
        //     })
        //     .catch(() => {
        //         setError(true);
        //     });
    };

    useEffect(() => {
        getProductLastPage(1);
        getProductLastPage(3);
        getProductLastPage(5);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    const checkErrorModal = () => {
        if (error === true) {
            setActiveErrorNoti(true);
        } else {
            setActiveErrorNoti(false);
        }
    };

    useEffect(() => {
        checkErrorModal();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error]);

    const handleCreateProduct = (data: any) => {
        createProduct(data, setLoading, setError);
        checkErrorModal();
    };

    const handleUpdateProduct = (data: any) => {
        updateProduct(data, setLoading, setError);
        checkErrorModal();
    };

    return (
        <div className={cl("modal", `${isOpen === true ? `openModal` : ""}`)}>
            <div className={cl("modalOverlay")} onClick={handleCloseModal}>
                <Overlay onClick={handleCloseModal} />
            </div>

            <Notification
                active={activeErrorNoti}
                title={type === "createForm" ? "Fail create" : "Fail update"}
                content="Something went wrong, please try again!"
                errorState={true}
                setClose={() => {
                    setActiveErrorNoti(false);
                    setError(false);
                }}
            />

            <div className={cl("modalBody")}>
                {type === "compareForm" ? (
                    <FormCompare
                        title={title}
                        productNow={product}
                        handleCloseModal={handleCloseModal}
                        productCompare={productCompare}
                    />
                ) : type === "detailForm" ? (
                    <FormDetail
                        title={title}
                        feature={feature}
                        product={product}
                        handleCloseModal={handleCloseModal}
                        loading={loading}
                    />
                ) : (
                    <FormInput
                        listProductLastPage1={listProductLastPage1}
                        listProductLastPage3={listProductLastPage3}
                        handleCreateProduct={handleCreateProduct}
                        handleUpdateProduct={handleUpdateProduct}
                        handleCloseModal={handleCloseModal}
                        setError={setError}
                        title={title}
                        isOpen={isOpen}
                        type={type}
                        product={product}
                        feature={feature}
                        loading={loading}
                    />
                )}
            </div>
        </div>
    );
};
