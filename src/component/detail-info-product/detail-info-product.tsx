import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import { SpecialFeature } from "./special-feature";
import { NormalFeature } from "./normal-feature";
import { ProductSubInfo } from "./product-sub-info";
import { ProductInfoMain } from "./product-info-main";
import { LoadingState } from "../loading-state";
import styles from "./detail-info-product.module.scss";

const cl = classNames.bind(styles);

export const DetailInfoProduct = (props: {
    product: any;
    handleOpenModal?: any;
    loading?: any;
}) => {
    const listProductSubInfo = [
        {
            title: "Shipping",
            content: "We ship to most countries worldwide.",
            link: "View shipping policy",
        },
        {
            title: "Returns",
            content:
                "Orders can be returned within 30 days, starting from the day you receive your order.",
            link: "View return policy",
        },
        {
            title: "Warranty",
            content:
                "All Nura devices and accessories come with a standard 12-month warranty.",
            link: "View warranty policy",
        },
    ];

    const paymentMethodMap: Record<any, any> = {
        VISA: `${process.env.PUBLIC_URL}/media/payment-method/vissa.png`,
        PayPal: `${process.env.PUBLIC_URL}/media/payment-method/paypal.png`,
        Klarna: `${process.env.PUBLIC_URL}/media/payment-method/klarma.png`,
        ApplePay: `${process.env.PUBLIC_URL}/media/payment-method/apple-pay.png`,
    };

    return (
        <>
            <section className={cl("overview")}>
                <div className={cl("overviewItem", "overviewImage")}>
                    {props.loading === true ? (
                        <div className={cl("loadingContainer")}>
                            <LoadingState />
                        </div>
                    ) : (
                        <img
                            className={cl("overviewProductImg")}
                            src={props.product.image}
                            alt="product"
                        />
                    )}
                </div>

                <div className={cl("containerContent")}>
                    {props.loading === true ? (
                        <div className={cl("loadingContainer")}>
                            <LoadingState />
                        </div>
                    ) : (
                        <div className={cl("overviewItem", "productInfo")}>
                            <div
                                className={cl(
                                    "sectionOfProduct",
                                    "productInfoMain"
                                )}
                            >
                                <ProductInfoMain product={props.product} />
                            </div>

                            <div
                                className={cl(
                                    "sectionOfProduct",
                                    "productFeature"
                                )}
                            >
                                <ul
                                    className={cl(
                                        "listFeature",
                                        "listSpecialFeature"
                                    )}
                                >
                                    {props.product.features.map((item: any) => (
                                        <SpecialFeature
                                            key={item}
                                            content={item}
                                        />
                                    ))}
                                </ul>

                                <ul
                                    className={cl(
                                        "listFeature",
                                        "listNormalFeature"
                                    )}
                                >
                                    {props.product.normalFeatures.map(
                                        (item: any) => (
                                            <NormalFeature
                                                key={item}
                                                content={item}
                                            />
                                        )
                                    )}
                                </ul>
                            </div>

                            <div
                                className={cl(
                                    "sectionOfProduct",
                                    "productPaymentMethod"
                                )}
                            >
                                <h4 className={cl("headingPaymentMethod")}>
                                    {props.product.payment ? "Payment" : ""}
                                </h4>

                                <ul className={cl("productListPaymentMethod")}>
                                    {props.product.paymentMethod.map(
                                        (item: any) => (
                                            <li
                                                key={item}
                                                className={cl("paymentMethod")}
                                            >
                                                <img
                                                    src={paymentMethodMap[item]}
                                                    alt=""
                                                    className={cl(
                                                        "paymentItem"
                                                    )}
                                                />
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>

                            {listProductSubInfo.map((item: any) => (
                                <ProductSubInfo
                                    key={item}
                                    heading={item.title}
                                    content={item.content}
                                    linkContent={item.link}
                                />
                            ))}
                            <br />
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};
