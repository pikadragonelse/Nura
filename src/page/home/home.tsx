import axios from "axios";
import { SliderCustom } from "../../component/slider-custom";
import { DefaultLayout } from "../default-layout";
import { useEffect, useState } from "react";

import "./index.scss";
import "./glitch.scss";

import { ButtonCustom } from "../../component/button-custom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faFeather } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
    const [nameProduct, setNameProduct] = useState<string>("");
    const [descProduct, setDescProduct] = useState<string>("");

    const getProducData = (productId: number) => {
        axios
            .get(`https://anything-three.vercel.app/listProduct/${productId}`)
            .then((res) => {
                setNameProduct(res.data.name);
                setDescProduct(res.data.desc);
            })
            .catch(() => {});
    };

    useEffect(() => {
        getProducData(1);
    }, []);

    return (
        <DefaultLayout className="home-page">
            <SliderCustom
                nameProduct={nameProduct}
                descProduct={descProduct}
                handleChangeOrder={getProducData}
            />
            <div className="sub-section-container">
                <div className="sub-section-item">
                    <h1 className="title">Product List</h1>
                    <p className="content-detail-section">
                        We have so many choices for you. Let's discover now!
                    </p>
                    <ButtonCustom className="btn-sub-section">
                        <FontAwesomeIcon
                            icon={faBarsStaggered}
                            className="btn-sub-section-icon"
                        />
                        Discover
                    </ButtonCustom>
                </div>
                <div className="sub-section-item">
                    <h1 className="title">About Us</h1>
                    <p className="content-detail-section">
                        We have some information for you! Do you want to see?
                    </p>
                    <img
                        src={process.env.PUBLIC_URL + "/media/SVG/wave1.png"}
                        alt=""
                        className="section-svg"
                    />
                    <ButtonCustom className="btn-sub-section">
                        Let's go
                        <FontAwesomeIcon
                            icon={faFeather}
                            className="btn-sub-section-icon about-us-icon"
                        />
                    </ButtonCustom>
                </div>
                <div
                    className="sub-section-item"
                    style={{
                        backgroundImage: `url(${
                            process.env.PUBLIC_URL + "/media/SVG/nura.jpg"
                        })`,
                    }}
                >
                    <div className="glitch-wrapper">
                        <div className="glitch" data-glitch="nura">
                            nura
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
};
