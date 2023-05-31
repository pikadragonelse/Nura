import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

import styles from './pagination.module.scss';

const cl = classNames.bind(styles);

export const Pagination = (props: {
    totalPage: any;
    handleSetPage: any;
    className?: any;
    increaseCurrentPage: any;
    decreaseCurrentPage: any;
    currentPage: any;
    fastIncreaseCurrentPage: any;
    fastDecreaseCurrentPage: any;
}) => {
    const numTwoSide = 1;
    let range = numTwoSide + 4;
    const rangeToTruncate = 2;

    const handlePagination = () => {
        let pageShow = [1];

        if (props.totalPage >= 2 * range - 1) {
            for (let pos = 1; pos <= props.totalPage; pos++) {
                if (pos === props.currentPage) {
                    if (
                        pos - numTwoSide > rangeToTruncate &&
                        pos + numTwoSide < props.totalPage - rangeToTruncate + 1
                    ) {
                        pageShow = [1, 0, pos - numTwoSide, pos, pos + numTwoSide, 0, props.totalPage];
                    } else if (props.currentPage <= range) {
                        let tempArr = [];
                        for (let count = 1; count <= range; count++) {
                            tempArr.push(count);
                        }
                        pageShow = [...tempArr, 0, props.totalPage];
                    } else if (props.currentPage >= props.totalPage - range) {
                        let tempArr = [];
                        for (let countPage = props.totalPage - range + 1; countPage <= props.totalPage; countPage++) {
                            tempArr.push(countPage);
                        }
                        pageShow = [1, 0, ...tempArr];
                    }
                }
            }
        } else {
            for (let count = 1; count < props.totalPage; count++) {
                pageShow.push(count);
            }
        }
        return pageShow;
    };

    return (
        <nav className={cl('paginationContainer')}>
            <ul className={cl('pagination')}>
                <li onClick={() => props.fastDecreaseCurrentPage()} className={cl('paginationPage', 'paginationLeft')}>
                    <FontAwesomeIcon
                        className={cl('paginationIcon', props.currentPage <= 3 ? 'paginationDisableItem' : '')}
                        icon={faAnglesLeft}
                    />
                </li>

                <li onClick={() => props.decreaseCurrentPage()} className={cl('paginationPage', 'paginationLeft')}>
                    <FontAwesomeIcon
                        className={cl('paginationIcon', props.currentPage <= 1 ? 'paginationDisableItem' : '')}
                        icon={faAngleLeft}
                    />
                </li>

                {handlePagination().map((number, index) => (
                    <li key={index} className={cl('paginationPage')}>
                        {number !== 0 ? (
                            <div
                                onClick={() => props.handleSetPage(number)}
                                className={cl('paginationLink', props.currentPage === number ? 'paginationActive' : '')}
                            >
                                {number}
                            </div>
                        ) : (
                            <div className={cl('paginationLink')}>...</div>
                        )}
                    </li>
                ))}

                <li
                    onClick={() => {
                        props.increaseCurrentPage();
                    }}
                    className={cl('paginationPage', 'paginationRight')}
                >
                    <FontAwesomeIcon
                        className={cl(
                            'paginationIcon',
                            props.currentPage >= props.totalPage ? 'paginationDisableItem' : '',
                        )}
                        icon={faAngleRight}
                    />
                </li>

                <li
                    onClick={() => {
                        props.fastIncreaseCurrentPage();
                    }}
                    className={cl('paginationPage', 'paginationRight')}
                >
                    <FontAwesomeIcon
                        className={cl(
                            'paginationIcon',
                            props.currentPage >= props.totalPage - 3 ? 'paginationDisableItem' : '',
                        )}
                        icon={faAnglesRight}
                    />
                </li>
            </ul>
        </nav>
    );
};
