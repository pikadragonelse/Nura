import { Routes, Route } from 'react-router-dom';
import { DetailPage } from './page/detail-page';

import { Home } from './page/home';
import { NotFound } from './page/not-found';
import { PageList } from './page/page-list';

export const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/page-list" element={<PageList />} />
                <Route path="/detail-page/:productId" element={<DetailPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};
