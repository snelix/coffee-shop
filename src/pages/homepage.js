import MainScreen from "../components/main-screen/main-screen";
import AboutUs from "../components/about-us/about-us";
import BestProduct from "../components/best-product/best-product";

const Homepage = (props) => {
    return (
        <>
            <MainScreen/>
            <AboutUs/>
            <BestProduct data={props.data}/>
        </>
    );
}

export default Homepage;