import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './sidebar-list-item.module.scss';

const cl = classNames.bind(styles);

function SidebarListItem(props: { children?: any; content?: any; to?: any; className?: any }) {
    return (
        <li className={cl('sidebarListItem', `${props.className}`)}>
            <Link to={props.to} className={cl('sidebarContent')}>
                <span className={cl('sidebarContentText')}>{props.children}</span>
            </Link>
        </li>
    );
}

export { SidebarListItem };
