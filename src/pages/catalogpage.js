import FirstScreen from "../components/first-screen/first-screen";
import InfoBlock from "../components/info-block/info-block";
import SettingsBlock from "../components/settings-block/settings-block";
import Catalog from "../components/catalog/catalog";
import coffeeGirl from '../img/girl.jpg'


const CatalogPage = (props) => {
    const {btns, data, term, filter, onFilterSelect, onUpdateSearch} = props;
    return (
        <>
            <FirstScreen title={'Our Coffee'}/>
            <InfoBlock 
                title={'About our beans'}
                text={'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.'}
                img={coffeeGirl}
                alt={'girl with coffee'}/>
            <SettingsBlock btns={btns} data={data} filter={filter} onFilterSelect={onFilterSelect} term={term} onUpdateSearch={onUpdateSearch}/>
            <Catalog data={props.data}/>
        </>
    );
}

export default CatalogPage;