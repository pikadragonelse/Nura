import classNames from "classnames/bind";

import styles from "./header.module.scss";
import { NavInfoItem } from "./nav-info-item";
import { Link } from "react-router-dom";
import { ButtonCustom } from "../button-custom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCartShopping,
    faCircleXmark,
    faListUl,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../../redux/hook";
import { setIsOpen } from "../../redux/drawer";

const cl = classNames.bind(styles);

export const Header = () => {
    const [isBackground, setIsBackground] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const handleScrollPage = (scrollTop: number) => {
        if (scrollTop > 10) {
            setIsBackground(true);
        } else {
            setIsBackground(false);
        }
    };

    useEffect(() => {
        window?.addEventListener("scroll", () => {
            handleScrollPage(window.pageYOffset);
        });

        return () => {
            window?.removeEventListener("scroll", () => {});
        };
    }, []);

    return (
        <header
            className={cl(
                "wrapperHeader",
                isBackground === true ? "background" : ""
            )}
        >
            <nav className={cl("headerNavbar")}>
                <div className={cl("mainSection")}>
                    <Link to="/Nura/" className={cl("logo")}>
                        <svg
                            className={cl("logoContent")}
                            viewBox="0 0 93 16"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="m39.7760605.48154082h2.4904079v2.29691384c.6263626-.89613375 1.4614238-1.6248745 2.4324369-2.12273774.8762031-.42358988 1.8365725-.64236324 2.8090183-.63989783 1.4027173-.11443189 2.7846133.39613703 3.7789987 1.3962261.8975552 1.16864291 1.3355756 2.62805798 1.230592 4.10013933v10.00325998h-2.5191829v-9.50906453c.0998974-1.04196828-.1665654-2.0861817-.7531625-2.9514899-.6085945-.61473147-1.4561528-.92869024-2.316486-.85808986-.5674652.00158718-1.1305331.10003034-1.6651441.29112304-.5579429.19883634-1.0665944.51622658-1.4912316.93050437-.4452851.38015907-.8181649.83832073-1.1005106 1.35221017-.2724602.57575931-.4015306 1.20937793-.3761044 1.8463305v8.89847621h-2.5196317zm15.6946557 0h2.5191641v9.47968931c-.0919137 1.03616497.1464111 2.07485897.6805751 2.96615877.5588993.6270161 1.380816.9506716 2.2151609.8722891 1.1312651-.0044999 2.218446-.4410719 3.0408923-1.2211109.4451256-.3801923.8178462-.838353 1.100043-1.3522101.2726807-.5758694.4019161-1.2096586.3765813-1.84680949v-8.89800669h2.5191548v15.03383798h-2.4899402v-2.3262609c-.626576.8743469-1.437483 1.5991464-2.3749338 2.1227471-.8485056.445677-1.7930023.6753215-2.7505424.668766-1.3758831.1276664-2.734806-.3806388-3.6922529-1.3810877-.8487455-1.2061877-1.2531543-2.6713381-1.1438742-4.1441929zm16.042013 0h2.4904078v2.32624213c.5046825-.77999042 1.1776875-1.43592959 1.969138-1.91920516.7257546-.43829671 1.5568054-.66950473 2.40369-.66876597.4467388-.00669724.893001.03215548 1.3319264.11596088l-.3186105 2.35556104c-.1932361-.0388164-.3863163-.07273693-.5792407-.10176159-.2108685-.03042087-.4237061-.04497373-.6367346-.04353698-.4833542.00338793-.9628377.08686304-1.4191211.24706016-.505889.17878335-.9693632.46097184-1.3611503.82874277-.4144291.35538865-.7539773.79034318-.9987086 1.27932612-.2506259.52602185-.3746153 1.10383892-.3619647 1.68683263v8.92734435h-2.5196317zm19.0541864 12.96931548c-.575804.6886216-1.2726474 1.2651955-2.0558557 1.7010319-.9533939.5043833-2.0214516.749926-3.0984048.7123123-.6996918.0071184-1.3968319-.0857923-2.0704537-.2759376-.5927438-.1657833-1.1449159-.4529404-1.6217898-.8434117-.456365-.3815031-.8181211-.8643646-1.0566795-1.4104254-.2634965-.6249467-.3918508-1.2989556-.3765719-1.9774391-.0396686-.880588.1874184-1.75256608.6513044-2.50090659.4409161-.64501615 1.039224-1.16567095 1.7377222-1.51218698.7717754-.38327506 1.5965012-.64796309 2.4465767-.78520579.9292098-.15690461 1.8674609-.25397155 2.8090089-.29060654l2.577163-.08708335v-.58168262c.091509-.99109693-.1985932-1.97973632-.8106564-2.76263557-.7281486-.62831628-1.6791848-.93271651-2.6350965-.84342101-.9178891-.06895806-1.8353928.13867588-2.6351058.59633268-.5564794.39213655-.9485523.97740889-1.1005199 1.64281671l-2.2877391-.26172901c.1804225-1.23877051.8887075-2.33738364 1.9403817-3.00970511 1.2778333-.69161616 2.7199159-1.01849663 4.1696916-.94515443.9275624-.02297742 1.852432.10979539 2.7364308.39283767.6829084.22420019 1.3031502.60780867 1.8098327 1.11934931.476605.50873746.8199447 1.128368.9991949 1.80326307.2116047.78653422.3139045 1.59867138.3039938 2.41334426v9.7707654h-2.4324276zm-.0579802-5.46706534-2.4032131.08708336c-.8564918.01921733-1.7094668.11664423-2.5483786.29107608-.56808.11218709-1.1120887.32381957-1.6071733.62522899-.3709971.23263722-.6636572.57204954-.8398803.97405074-.1709289.42464187-.2546125.87960057-.2460231 1.33754137-.0315043.6740012.2146346 1.3313104.6805752 1.8174623.6295688.5152556 1.4358838.7607879 2.2443941.6834442 1.254552.0769341 2.492826-.3169294 3.4744999-1.10515.8447617-.770069 1.3016563-1.8796135 1.2452086-3.02392318zm-74.6111434.01443407c0 4.40856107 3.558842 7.98240597 7.948896 7.98240597 4.3900541 0 7.948896-3.5738449 7.948896-7.98240597 0-.04549971-15.897792 0-15.897792 0zm0 0c0-4.40856107-3.5588419-7.98240594-7.94889599-7.98240594-4.39005404 0-7.94889601 3.57384487-7.94889601 7.98240594z"></path>
                        </svg>
                    </Link>

                    <div className={cl("navInfo", "isHideInMobile")}>
                        <Link to={"/Nura/"}>
                            <NavInfoItem content="Home"></NavInfoItem>
                        </Link>
                        <Link to={"/page-list"}>
                            <NavInfoItem content="Product"></NavInfoItem>
                        </Link>
                        <Link to={""}>
                            <NavInfoItem content="Why Nura?"></NavInfoItem>
                        </Link>
                        <Link to={""}>
                            <NavInfoItem content="Support"></NavInfoItem>
                        </Link>
                    </div>
                </div>

                <ButtonCustom className={cl("navCart", "isHideInMobile")}>
                    <FontAwesomeIcon
                        icon={faCartShopping}
                        className={cl("cartIcon")}
                    />
                    Cart
                </ButtonCustom>
                <FontAwesomeIcon
                    icon={faListUl}
                    className={cl("navList", "isShowInMobile")}
                    onClick={() => dispatch(setIsOpen(true))}
                />
            </nav>
        </header>
    );
};
