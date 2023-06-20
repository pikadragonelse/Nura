import { Footer } from "../../component/footer";
import { Header } from "../../component/header";
import { Sidebar } from "../../component/sidebar";
import { Wrapper } from "../../component/wrapper";

export type DefaultLayout = { children: any; className?: string };
export const DefaultLayout = ({ children, className }: DefaultLayout) => {
    return (
        <Wrapper id="container" type="wrapperPage">
            <Header />
            <Wrapper type="wrapperMain">
                <Wrapper type={`wrapperContent`} className={className}>
                    {children}
                </Wrapper>
            </Wrapper>
            <Footer />
        </Wrapper>
    );
};
