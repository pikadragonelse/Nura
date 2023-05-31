import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import styles from './normal-feature.module.scss';

const cl = classNames.bind(styles);

export const NormalFeature = (props: { content?: any }) => {
    return (
        <li className={cl('itemFeature', 'normalFeature')}>
            <FontAwesomeIcon className={cl('featureIcon', 'normalFeatureIcon')} icon={faArrowRight} />
            {props.content}
        </li>
    );
};
