import axios from "axios";
import { SliderCustom } from "../../component/slider-custom";
import { DefaultLayout } from "../default-layout";
import { useEffect, useRef, useState } from "react";
import "aos/dist/aos.css";

import "./index.scss";
import "./glitch.scss";

import { ButtonCustom } from "../../component/button-custom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faFeather } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { LossLess } from "../../component/lossless";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { Demon } from "../../component/demon";

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

    function useParallax(value: MotionValue<number>, distance: number) {
        return useTransform(value, [0, 1], [-distance, distance]);
    }

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 0);

    return (
        <DefaultLayout className="home-page">
            <SliderCustom
                ref={ref}
                nameProduct={nameProduct}
                descProduct={descProduct}
                handleChangeOrder={getProducData}
            />

            <div className="sub-section-container">
                <div className="sub-section-content">
                    <h4 className="sub-section-title">NURA ADVANCEMENTS</h4>
                    <p className="sub-section-description">
                        Earbuds that <span>listen to how you hear</span>, then
                        build a sonic profile that’s unique to you.
                    </p>
                    <Link to="/page-list">
                        <ButtonCustom className="btn-sub-section">
                            <FontAwesomeIcon
                                icon={faBarsStaggered}
                                className="btn-sub-section-icon"
                            />
                            Discover
                        </ButtonCustom>
                    </Link>
                </div>
                <div className="img-container">
                    <img
                        src={
                            process.env.PUBLIC_URL + "/media/SVG/hinh_khoi.png"
                        }
                        alt=""
                        className="img-section"
                    />
                </div>

                {/* <div className="sub-section-item">
                    <h1 className="title">Product List</h1>
                    <p className="content-detail-section">
                        We have so many choices for you. Let's discover now!
                    </p>
                    <Link to="/page-list">
                        <ButtonCustom className="btn-sub-section">
                            <FontAwesomeIcon
                                icon={faBarsStaggered}
                                className="btn-sub-section-icon"
                            />
                            Discover
                        </ButtonCustom>
                    </Link>
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
                </div> */}
            </div>
            <LossLess />
            <Demon />
        </DefaultLayout>
    );
};
