import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { DetailInfoProduct } from '../../component/detail-info-product';
import { ErrorState } from '../../component/error-state';
import { Modal } from '../../component/modal';
import { DefaultLayout } from '../default-layout';

export const DetailPage = () => {
    const [productId] = useState(useParams().productId);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false);
    const [checkUpdate, setCheckUpdate] = useState(false);

    const [product, setProduct] = useState({
        id: 0,
        name: '',
        price: 0,
        desc: '',
        image: '',
        features: [],
        normalFeatures: [],
        link: '',
        button: false,
        shipping: false,
        payment: false,
        paymentMethod: [],
        returns: false,
        warranty: false,
        page1: 0,
        page3: 0,
    });

    const handleOpenModal = () => {
        setIsOpenUpdateModal(true);
    };

    useEffect(() => {
        axios
            .get(`http://localhost:8000/listProduct/${productId}`)
            .then((res) => {
                setProduct(res.data);
                setLoading(false);
            })
            .catch(() => {
                setError(true);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productId, checkUpdate]);

    const updateProduct = (product: any, setLoading: any, setError: any) => {
        setLoading(true);
        axios
            .put(`http://localhost:8000/listProduct/${product.id}`, product)
            .then(() => {
                setCheckUpdate((prev) => !prev);
                setIsOpenUpdateModal(false);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
                setError(true);
            });
    };

    return (
        <DefaultLayout>
            <Modal
                isOpen={isOpenUpdateModal}
                title="Update product"
                type="editFrom"
                feature="Update"
                handleCloseModal={() => setIsOpenUpdateModal(false)}
                product={product}
                updateProduct={updateProduct}
            />
            {error === true ? (
                <ErrorState />
            ) : (
                <DetailInfoProduct product={product} handleOpenModal={handleOpenModal} loading={loading} />
            )}
        </DefaultLayout>
    );
};
