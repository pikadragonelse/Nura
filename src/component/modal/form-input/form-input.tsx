import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHammer,
    faHurricane,
    faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";

import { Button } from "../../button";
import { FormInfoItem } from "../form-info-item";
import styles from "./form-input.module.scss";
import { LoadingState } from "../../loading-state";

const cl = classNames.bind(styles);

export const FormInput = (props: {
    listProductLastPage1: any;
    listProductLastPage3: any;
    setError: any;
    product: any;
    handleCreateProduct: any;
    handleUpdateProduct: any;
    type: any;
    handleCloseModal: any;
    title: any;
    feature: any;
    isOpen: any;
    loading: any;
}) => {
    const inputList = [
        { title: "Name", type: "text" },
        { title: "Price", type: "text" },
        { title: "Description", type: "text" },
        { title: "Image", type: "file" },
    ];

    const checkAmountOfLastPage = (
        numberProductOnPage: number,
        listProduct: any
    ) => {
        const totalProduct = Number(localStorage.totalProduct);

        let listOfPage = {
            page1: totalProduct + 1,
            page3: Math.ceil(totalProduct / 3),
        };

        if (numberProductOnPage === 3) {
            if (listProduct.length === 3) {
                listOfPage.page3 = Math.ceil((totalProduct + 1) / 3);
            }
        }

        return listOfPage;
    };

    const getDataFromFormToCreate = (event: any, eventTarget: any) => {
        event.preventDefault();

        const file = eventTarget["Image"].files[0];
        try {
            if (file.type && !file.type.startsWith("image/")) {
                console.log("File is not an image.", file.type, file);
                return;
            }

            const reader = new FileReader();

            reader.onload = (e) => {
                const data = {
                    name: eventTarget["Name"].value,
                    price: Number(eventTarget["Price"].value),
                    desc: eventTarget["Description"].value,
                    image: e.target?.result,
                    features: [
                        "Personalised sound (self-tuning EQ)",
                        "16-hour battery life",
                        "Active noise cancellation (ANC)",
                        "Wired and wireless",
                    ],
                    normalFeatures: [
                        "Fit detection",
                        "Customisable touch buttons & dials",
                        "Social mode (transparency)",
                        "Voice calls",
                    ],
                    link: "./page/ProductView/product-view.html",
                    button: true,
                    shipping: true,
                    payment: true,
                    paymentMethod: ["VISA", "PayPal", "Klarna", "ApplePay"],
                    returns: true,
                    warranty: true,

                    page1: checkAmountOfLastPage(1, props.listProductLastPage1)
                        .page1,
                    page3: checkAmountOfLastPage(3, props.listProductLastPage3)
                        .page3,
                };

                props.handleCreateProduct(data);
            };
            reader.readAsDataURL(file);
        } catch (error) {
            props.setError(true);
        }
    };

    const getDataFromFormToUpdate = (event: any, eventTarget: any) => {
        event.preventDefault();
        const productInfo = props.product;
        try {
            const data = {
                id: productInfo.id,
                name: eventTarget["Name"].value,
                price: Number(eventTarget["Price"].value),
                desc: eventTarget["Description"].value,
                image: productInfo.image,
                features: productInfo.features,
                normalFeatures: productInfo.normalFeatures,
                link: productInfo.link,
                button: productInfo.button,
                shipping: productInfo.shipping,
                payment: productInfo.payment,
                paymentMethod: productInfo.paymentMethod,
                returns: productInfo.returns,
                warranty: productInfo.warranty,
                page1: productInfo.page1,
                page3: productInfo.page3,
            };

            props.handleUpdateProduct(data);
        } catch (error) {
            props.setError(true);
        }
    };

    return (
        <form
            onSubmit={(event) => {
                const form = event.target;
                props.type === "createForm"
                    ? getDataFromFormToCreate(event, form)
                    : getDataFromFormToUpdate(event, form);
            }}
            className={cl("formInput", `${props.type}`)}
        >
            <FontAwesomeIcon
                className={cl("formInputIcon")}
                icon={faXmarkCircle}
                onClick={props.handleCloseModal}
            />

            <div
                className={cl(
                    "loadingContainerModal",
                    `${props.loading === true ? "activeLoading" : ""}`
                )}
            >
                <LoadingState />
            </div>

            <div className={cl("formInputHeader")}>
                <h1 className={cl("formInputHeading")}>{props.title}</h1>
            </div>

            <div className={cl("formInputInfo")}>
                {inputList.map((item, index) => (
                    <FormInfoItem
                        form={props.type}
                        isOpen={props.isOpen}
                        product={props.product}
                        key={index}
                        title={item.title}
                        type={item.type}
                    />
                ))}
            </div>

            <div className={cl("formInputFooter")}>
                <Button>Reset</Button>
                <div className={cl("containerFeatureButton")}>
                    <Button primary={true}>
                        {props.feature}&nbsp;
                        {props.type === "createForm" ? (
                            <FontAwesomeIcon
                                className={cl("featureCreateButtonIcon")}
                                icon={faHurricane}
                            />
                        ) : (
                            <FontAwesomeIcon
                                className={cl("featureEditButtonIcon")}
                                icon={faHammer}
                            />
                        )}
                    </Button>
                </div>
            </div>
        </form>
    );
};
