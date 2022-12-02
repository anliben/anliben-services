import CustomHeader from "../../Core/CustomHeader";
import Footer from "../../Core/Footer";
import Orcamento from '../../Core/Orcamento/index';
import Section1 from "../../Core/Sections";


export default function Home() {
    return (
        <div className="bg-gray-200 w-full h-full">
            <CustomHeader />
            <Orcamento />
            <Section1 />
            <Footer />
        </div>
    );
}