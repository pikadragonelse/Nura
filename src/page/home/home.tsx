import { Carousel } from '../../component/carousel';
import { DefaultLayout } from '../default-layout';

export const Home = () => {
    return (
        <DefaultLayout>
            <Carousel items={1} autoplay={false} loop={true} />
        </DefaultLayout>
    );
};
