import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './form-demo.module.scss';
import srcImage from '../../assets/media/demo-image.jpg';

const cl = classNames.bind(styles);

export const FormDemo = () => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const formRef = useRef<HTMLFormElement>(null);

    const wScreen = window.innerWidth;
    const hScreen = window.innerHeight;

    let rect = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    };

    useRef(rect);

    useEffect(() => {
        if (formRef.current !== null) {
            setWidth(10);
            setHeight(formRef.current.offsetHeight);
            return;
        }
    }, []);

    return (
        <form ref={formRef} className={cl('formDemo')}>
            <div className={cl('formHeader')}>
                <h1 className={cl('formHeading')}>Demo product</h1>
            </div>

            <img src={srcImage} alt="demo" className={cl('demoImage')} />

            <div className="screen">{`Width: ${width}, Height: ${height}`}</div>

            <div className="positionOfDiv">
                {` Top: ${Math.round(rect.top * 100) / 100}, 
                    Bottom: ${Math.round(rect.bottom * 100) / 100},
                    Left: ${Math.round(rect.left * 100) / 100}, 
                    Right: ${Math.round(rect.right * 100) / 100}`}
            </div>

            <div className="size">{`Width of screen: ${wScreen}, Height of screen: ${hScreen}`}</div>
        </form>
    );
};
