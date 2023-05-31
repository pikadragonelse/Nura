import { Header } from '../../component/header';
import { Sidebar } from '../../component/sidebar';
import { Wrapper } from '../../component/wrapper';

export const DefaultLayout = (props: { children: any }) => {
    return (
        <Wrapper type="wrapperPage">
            <Header />
            <Wrapper type="wrapperMain">
                <Sidebar />
                <Wrapper type="wrapperContent">{props.children}</Wrapper>
            </Wrapper>
        </Wrapper>
    );
};
