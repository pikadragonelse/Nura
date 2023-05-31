import classNames from 'classnames/bind';

import { SpecialFeature } from '../../../detail-info-product/special-feature';
import styles from './product-info.module.scss';

const cl = classNames.bind(styles);

export const ProductInfo = (props: { product: any; haveLine?: boolean }) => {
    return (
        <div className={cl('productInfo', `${props.haveLine === true ? 'haveLine' : ''}`)}>
            <div className={cl('formCompareInfo')}>
                <div className={cl('imageProductContainer')}>
                    <img className={cl('imageProduct')} src={props.product.image} alt="product" />
                </div>
                <div className={cl('mainCompareInfo')}>
                    <h2 className={cl('productName')}>{props.product.name}</h2>
                    <p className={cl('productPrice')}>{props.product.price}$</p>
                    <p className={cl('productDesc')}>{props.product.desc}</p>
                </div>
            </div>
            <ul className={cl('listFeature')}>
                {props.product.features.map((item: any) => (
                    <SpecialFeature key={item} content={item} />
                ))}
            </ul>
        </div>
    );
};
