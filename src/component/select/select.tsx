import { useRef } from 'react';
import classNames from 'classnames/bind';

import styles from './select.module.scss';
import { SelectItem } from './select-item';

const cl = classNames.bind(styles);

export const Select = (props: { allValue: object; setValue: any }) => {
    let selectRef = useRef<HTMLSelectElement>(null);

    return (
        <select
            ref={selectRef}
            onChange={(e) => {
                const value = e.target.value;
                props.setValue(value);
            }}
            className={cl('paginationSelect')}
        >
            {Object.values(props.allValue).map((item, index) => (
                <SelectItem key={index} value={item}>
                    {item}
                </SelectItem>
            ))}
        </select>
    );
};
