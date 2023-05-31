import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './form-compare.module.scss';
import { ProductInfo } from './product-info';

const cl = classNames.bind(styles);

export const FormCompare = (props: { productNow: any; productCompare: any; title: any; handleCloseModal: any }) => {
    return (
        <form className={cl('formCompare')}>
            <FontAwesomeIcon
                className={cl('formCompareIcon')}
                icon={faXmarkCircle}
                onClick={() => props.handleCloseModal(false)}
            />
            <div className={cl('formCompareHeader')}>
                <h1 className={cl('formCompareHeading')}>{props.title}</h1>
            </div>

            <div className={cl('formCompareBody')}>
                <div className={cl('formCompareMain')}>
                    <h4 className={cl('titleSection')}>Product Now</h4>
                    <ProductInfo product={props.productNow} haveLine />
                </div>

                <div className={cl('formCompareMain')}>
                    <h4 className={cl('titleSection')}>Product Compare</h4>
                    <ProductInfo product={props.productCompare} />
                </div>
            </div>
        </form>
    );
};
