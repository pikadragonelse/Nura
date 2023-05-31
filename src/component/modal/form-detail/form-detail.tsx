import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './form-detail.module.scss';
import { LoadingState } from '../../loading-state';
import { Button } from '../../button';
import { Link } from 'react-router-dom';

const cl = classNames.bind(styles);

export const FormDetail = (props: { loading: any; handleCloseModal: any; title: any; product: any; feature: any }) => {
    return (
        <form className={cl('formDetail')}>
            <FontAwesomeIcon
                className={cl('formDetailIcon')}
                icon={faXmarkCircle}
                onClick={() => props.handleCloseModal(false)}
            />

            <div className={cl('loadingContainerModal', `${props.loading === true ? 'activeLoading' : ''}`)}>
                <LoadingState />
            </div>

            <div className={cl('formDetailHeader')}>
                <h1 className={cl('formDetailHeading')}>{props.title}</h1>
            </div>

            <div className={cl('formDetailInfo')}>
                <div className={cl('imageProductContainer')}>
                    <img className={cl('imageProduct')} src={props.product.image} alt="product" />
                </div>
                <div className={cl('mainDetailInfo')}>
                    <h2 className={cl('productName')}>{props.product.name}</h2>
                    <p className={cl('productPrice')}>{props.product.price}$</p>
                    <p className={cl('productDetailDesc')}>{props.product.desc}</p>
                </div>
            </div>

            <div className={cl('formDetailFooter')}>
                <Link to={`/detail-page/${props.product.id}`} className={cl('productLink')}>
                    <div className={cl('containerFeatureButton')}>
                        <Button primary={true}>{props.feature}&nbsp;</Button>
                    </div>
                </Link>
            </div>
        </form>
    );
};
