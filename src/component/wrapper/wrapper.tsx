import classNames from 'classnames/bind';

import styles from './wrapper.module.scss';

const cl = classNames.bind(styles);

export const Wrapper = (props: { children: any; type: any; className?: any }) => {
    return <div className={cl(`${props.type}`, `${props.className}`)}>{props.children}</div>;
};
