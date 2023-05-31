import classNames from 'classnames/bind';

import { Button } from '../button';
import styles from './error-state.module.scss';

const cl = classNames.bind(styles);

export const ErrorState = (props: { to?: any; errorMessage?: any; contentButton?: any }) => {
    return (
        <div className={cl('errorPage')}>
            <h2 className={cl('errorHeading')}>ERORR</h2>

            <p className={cl('errorContent')}>
                {props.errorMessage === true
                    ? props.errorMessage
                    : 'Oops, something went wrong. Please try again later.'}
            </p>

            <Button primary={true} to={props.to === true ? props.to : '/'}>
                {props.contentButton === true ? props.contentButton : 'Go back home'}
            </Button>
        </div>
    );
};
