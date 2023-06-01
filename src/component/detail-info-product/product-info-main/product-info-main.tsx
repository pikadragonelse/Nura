import classNames from "classnames/bind";
import { useState } from "react";

import { useAppSelector } from "../../../redux/hook";
import { Button } from "../../button";
import { Modal } from "../../modal";
import styles from "./product-info-main.module.scss";

const cl = classNames.bind(styles);

export const ProductInfoMain = (props: { product: any }) => {
    const [isOpenCompareForm, setIsOpenCompareForm] = useState(false);

    const productCompare = useAppSelector((state) => state.compareProduct);

    return (
        <>
            {productCompare.id !== 0 ? (
                <Modal
                    title="Compare product"
                    type="compareForm"
                    product={props.product}
                    productCompare={productCompare}
                    isOpen={isOpenCompareForm}
                    handleCloseModal={() => setIsOpenCompareForm(false)}
                />
            ) : (
                ""
            )}

            <h2 className={cl("productName")}>{props.product.name}</h2>

            <div className={cl("productOverview")}>
                <div className={cl("productPrice")}>
                    <p className={cl("newPrice")}>${props.product.price}</p>
                </div>

                <p className={cl("productDesc")}>{props.product.desc}</p>
            </div>

            <div className={cl("containerButton")}>
                <Button primary>
                    {props.product.button === true
                        ? "Add to cart"
                        : "Pre-Order now"}
                </Button>

                {productCompare.id !== 0 ? (
                    <Button primary onClick={() => setIsOpenCompareForm(true)}>
                        Compare product
                    </Button>
                ) : (
                    ""
                )}
            </div>
        </>
    );
};
