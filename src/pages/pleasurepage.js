import Catalog from "../components/catalog/catalog";
import FirstScreen from "../components/first-screen/first-screen";
import InfoBlock from "../components/info-block/info-block";
import coffee from '../img/coffee.png';


const Pleasurepage = (props) => {
    return (
        <>
            <FirstScreen title={'For your pleasure'} class={'pleasure'}/>
            <InfoBlock
                title={'About our goods'}
                text={`Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                Afraid at highly months do things on at. Situation recommend objection do intention
                so questions. 
                As greatly removed calling pleased improve an. Last ask him cold feel
                met spot shy want. Children me laughing we prospect answered followed. At it went
                is song that held help face.`}
                img={coffee}
                alt={'coffee'}
            />
            <div className="divider"></div>
            <Catalog data={props.data}/>
        </>
    );
}

export default Pleasurepage;