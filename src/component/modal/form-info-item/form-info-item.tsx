import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './form-info-item.module.scss';

const cl = classNames.bind(styles);

export const FormInfoItem = (props: { title: any; type: any; product?: any; isOpen?: any; form?: any }) => {
    const [value, setValue] = useState('');

    useEffect(() => {
        if (props.form === 'createForm') {
            setValue('');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.isOpen]);

    useEffect(() => {
        if (props.product != null && Object.values(props.product).length !== 0) {
            if (props.title === 'Name') {
                setValue(props.product.name);
            } else if (props.title === 'Price') {
                setValue(props.product.price);
            } else if (props.title === 'Description') {
                setValue(props.product.desc);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.product]);

    const handleChangeInput = (event: any) => {
        setValue(event.target.value);
    };

    return (
        <div className={cl('formInfoItem')}>
            <span className={cl('formTitle')}>
                {props.title}
                {props.title === 'Image' ? <span className={cl('importantInfoIcon')}>*</span> : ''}
            </span>

            {props.title === 'Description' ? (
                <textarea
                    onChange={(event) => {
                        let eventTemp = event;
                        handleChangeInput(eventTemp);
                    }}
                    value={value}
                    id={props.title}
                    className={cl('formInput')}
                    placeholder="Description about your product"
                />
            ) : (
                <input
                    onChange={(event) => {
                        let eventTemp = event;
                        handleChangeInput(eventTemp);
                    }}
                    autoComplete="off"
                    placeholder={`${props.title}'s product`}
                    value={value}
                    id={props.title}
                    type={props.type}
                    className={cl('formInput', `${props.type === 'file' ? 'fileInput' : ''}`)}
                />
            )}
        </div>
    );
};
