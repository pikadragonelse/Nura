import classNames from 'classnames/bind';

import styles from './nav-info-item.module.scss';

const cl = classNames.bind(styles);

export const NavInfoItem = (props: { content: any; href?: any }) => {
    return (
        <a href={props.href} className={cl('navInfoItem')}>
            {props.content}
        </a>
    );
};
