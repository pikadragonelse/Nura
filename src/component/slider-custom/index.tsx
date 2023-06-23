import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import { ButtonCustom } from "../button-custom";
import { SliderImage } from "./slider-image";
import { Link } from "react-router-dom";

const imgMap: Record<number, string> = {
    1: process.env.PUBLIC_URL + "/media/introduction/nura-true-intro.jpeg",
    2: process.env.PUBLIC_URL + "/media/introduction/nuraloop-intro.jpg",
    3: process.env.PUBLIC_URL + "/media/introduction/nuraphone-intro.jpg",
};

const imgList: Array<number> = [1, 2, 3];

export type SliderCustom = {
    nameProduct: string;
    descProduct: string;
    handleChangeOrder?: (productId: number) => void;
};
export const SliderCustom = ({
    nameProduct,
    descProduct,
    handleChangeOrder = (productId: number) => "",
}: SliderCustom) => {
    const [order, setOrder] = useState<number>(1);

    const sliderCustomRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (sliderCustomRef.current != null) {
            sliderCustomRef.current.style.backgroundImage =
                "url(" + imgMap[order] + ")";
        }
    }, [order]);

    const handleChangeOrderList = (imgId: number) => {
        const value = Math.abs(imgId - order);
        if (value === 0) {
            return "order-now active";
        }

        if (order === 1) {
            if (imgId === 2) {
                return "order-right";
            }
            if (imgId === 3) {
                return "order-left";
            }
        }

        if (order === 2) {
            if (imgId === 1) {
                return "order-left";
            }
            if (imgId === 3) {
                return "order-right";
            }
        }

        if (order === 3) {
            if (imgId === 1) {
                return "order-right";
            }
            if (imgId === 2) {
                return "order-left";
            }
        }
    };

    const handleChangeOrderCustom = () => {
        if (order < 3) {
            setOrder((prev) => (prev = prev + 1));
            handleChangeOrder(order + 1);
        } else {
            setOrder(1);
            handleChangeOrder(1);
        }
    };

    return (
        <div ref={sliderCustomRef} className="slider-custom">
            <div className="overlay"></div>
            <div className="content">
                <h1 className="name-product">{nameProduct}</h1>
                <p className="description">{descProduct}</p>
                <Link to={`/detail-page/${order}`} className="link-detail">
                    <ButtonCustom>Go to detail</ButtonCustom>
                </Link>
            </div>
            <div className="slider-list">
                <div className="slider-list-container">
                    {imgList.map((idImg: number) => (
                        <SliderImage
                            onClick={() => setOrder(idImg)}
                            src={imgMap[idImg]}
                            className={`slider-list-img ${handleChangeOrderList(
                                idImg
                            )}`}
                        />
                    ))}
                </div>
                <div className="slider-custom-control">
                    <ButtonCustom
                        onClick={handleChangeOrderCustom}
                        className="btn-next"
                    >
                        Next
                    </ButtonCustom>
                    <div className="control-line"></div>
                    <h2 className="product-order">0{order}</h2>
                </div>
            </div>
        </div>
    );
};
