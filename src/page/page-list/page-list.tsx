import axios from "axios";
import { useEffect, useState } from "react";
import classNames from "classnames/bind";

import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { setProduct } from "../../redux/product-list-reducer";

import { DefaultLayout } from "../default-layout";
import { ProductList } from "../../component/product-list";
import { Select } from "../../component/select";
import { Pagination } from "../../component/pagination";
import styles from "./page-list.module.scss";
import { Modal } from "../../component/modal";

const cl = classNames.bind(styles);

export const PageList = () => {
    const [error, setError] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);

    const listProduct = useAppSelector((state) => state.productList);
    const dispatch = useAppDispatch();

    const [checkCreate, setCheckCreate] = useState(0);
    // localStorage.totalProduct = 55; //Use localstorage to hard save total product because server don't support -> 55 is default value of database
    const [amountProduct, setAmountProduct] = useState(1);
    const totalPage = Math.ceil(localStorage.totalProduct / amountProduct);

    const createProduct = (product: any, setLoading: any, setError: any) => {
        setLoading(true);
        axios
            .post(`https://anything-three.vercel.app/listProduct/`, product)
            .then(() => {
                setLoading(false);
                localStorage.totalProduct++;
                setCheckCreate((prev) => prev + 1);
                getData(amountProduct);
                setIsOpenCreateModal(false);
            })
            .catch(() => {
                setLoading(false);
                setError(true);
            });
    };

    const getData = (amountProduct: any) => {
        axios
            .get(
                `https://anything-three.vercel.app/listProduct?page${amountProduct}=${currentPage}&page${amountProduct}=${
                    currentPage + 1
                }&page${amountProduct}=${
                    currentPage + 2
                }&page${amountProduct}=${
                    currentPage - 1
                }&page${amountProduct}=${currentPage - 2}`
            )
            .then((res) => {
                dispatch(setProduct(res.data));
                setLoading(false);
            })
            .catch(() => {
                setError(true);
            });
    };

    useEffect(() => {
        if (
            listProduct.filter((item) =>
                Number(amountProduct) === 1
                    ? item.page1 === currentPage
                    : item.page3 === currentPage
            ).length === 0
        ) {
            getData(amountProduct);
        } else {
            setLoading(false);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, checkCreate]);

    useEffect(() => {
        setCurrentPage(1);
        getData(amountProduct);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [amountProduct]);

    const handleChangePage = (number: any) => {
        if (number !== currentPage) {
            setCurrentPage(number);
            setLoading(true);
        }
    };

    const handleIncreaseCurrentPage = () => {
        if (currentPage < totalPage) {
            setCurrentPage((prev: any) => ++prev);
            setLoading(true);
        }
    };

    const handleFastIncreaseCurrentPage = () => {
        if (currentPage < totalPage - 3) {
            setCurrentPage((prev: any) => prev + 3);
            setLoading(true);
        }
    };

    const handleDecreaseCurrentPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prev: any) => --prev);
            setLoading(true);
        }
    };

    const handleFastDecreaseCurrentPage = () => {
        if (currentPage > 3) {
            setCurrentPage((prev: any) => prev - 3);
            setLoading(true);
        }
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
                <ProductList
                    currentPage={currentPage}
                    totalPage={totalPage}
                    amountProduct={amountProduct}
                    listProduct={listProduct}
                    error={error}
                    loading={loading}
                    handleOpenModal={setIsOpenCreateModal}
                />

                {error !== true ? (
                    <div className={cl("paginationContainter")}>
                        <Pagination
                            handleSetPage={handleChangePage}
                            totalPage={totalPage}
                            increaseCurrentPage={handleIncreaseCurrentPage}
                            decreaseCurrentPage={handleDecreaseCurrentPage}
                            currentPage={currentPage}
                            fastIncreaseCurrentPage={
                                handleFastIncreaseCurrentPage
                            }
                            fastDecreaseCurrentPage={
                                handleFastDecreaseCurrentPage
                            }
                        />
                        <div className={cl("paginationAmountItem")}>
                            Amount product:
                            <Select
                                setValue={(value: number) =>
                                    setAmountProduct(value)
                                }
                                allValue={[1, 3]}
                            />
                        </div>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </DefaultLayout>
    );
};
