import classNames from 'classnames/bind';

import { Button } from '../../button';

import { setCompareProduct, initialState } from '../../../redux/compare-product-reducer';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';

import styles from './product-list-item.module.scss';

const cl = classNames.bind(styles);

export const ProductListItem = (props: { product?: any; setProductSelect?: any; setIsOpenDetailModal?: any }) => {
    const dispatch = useAppDispatch();
    const productCompare = useAppSelector((state) => state.compareProduct);

    return (
        <>
            <li
                onClick={() => {
                    props.setIsOpenDetailModal(true);
                    props.setProductSelect(props.product);
                }}
                className={cl('product', 'ourListItem ')}
            >
                <span className={cl('compareMark', `${Number(props.product.id) === productCompare.id ? 'mark' : ''}`)}>
                    Ready to compare
                </span>
                <div className={cl('productImageWrapper')}>
                    <img className={cl('productImage')} src={props.product.image} alt="product" />
                </div>
                <div className={cl('productInfo')}>
                    <h3 className={cl('productHeading')}>{props.product.name}</h3>
                    <span className={cl('productPrice')}>
                        {props.product.price}$
                        {productCompare.id === props.product.id ? (
                            <div
                                onClick={(e) => {
                                    e.stopPropagation();
                                    dispatch(setCompareProduct(initialState));
                                }}
                                className={cl('containerButtonCompare')}
                            >
                                <Button className={cl('compareButton')}>Clear</Button>
                            </div>
                        ) : (
                            <div
                                onClick={(e) => {
                                    e.stopPropagation();
                                    dispatch(setCompareProduct(props.product));
                                }}
                                className={cl('containerButtonCompare')}
                            >
                                <Button className={cl('compareButton')}>Compare</Button>
                            </div>
                        )}
                    </span>
                    <p className={cl('productDesc')}>{props.product.desc}</p>
                </div>
            </li>
        </>
    );
};
