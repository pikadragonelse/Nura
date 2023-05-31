import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';

import styles from './special-feature.module.scss';

const cl = classNames.bind(styles);

export const SpecialFeature = (props: { content?: any }) => {
    return (
        <li className={cl('itemFeature', 'specialFeature')}>
            <FontAwesomeIcon className={cl('featureIcon', 'specialFeatureIcon')} icon={faCompactDisc} />

            {props.content}
        </li>
    );
};
