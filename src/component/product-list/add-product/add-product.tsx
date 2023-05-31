import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './add-product.module.scss';

const cl = classNames.bind(styles);

export const AddProduct = () => {
    return (
        <div className={cl('addProduct')}>
            <FontAwesomeIcon icon={faPlus} />
        </div>
    );
};
