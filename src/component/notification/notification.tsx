import { faCircleExclamation, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './notification.module.scss';

const cl = classNames.bind(styles);

export const Notification = (props: {
    active: boolean;
    title: string;
    content: string;
    errorState?: boolean;
    setClose: any;
}) => {
    return (
        <div className={cl('notiApp', `${props.active === true ? 'activeNoti' : ''}`)}>
            <FontAwesomeIcon onClick={() => props.setClose()} className={cl('notiClose')} icon={faTimesCircle} />

            {props.errorState === true ? (
                <FontAwesomeIcon className={cl('notiStatus', 'errorState')} icon={faCircleExclamation} />
            ) : (
                ''
            )}

            <div className={cl('notiInfo')}>
                <h3 className={cl('notiTitle')}>{props.title}</h3>
                <div className={cl('notiContent')}>{props.content}</div>
            </div>
        </div>
    );
};
