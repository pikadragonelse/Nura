import classNames from 'classnames/bind';

import styles from './overlay.module.scss';

const cl = classNames.bind(styles);

export const Overlay = () => {
    return <div className={cl('overlay')}></div>;
};
