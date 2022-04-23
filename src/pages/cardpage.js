import {useParams} from 'react-router-dom';
import FirstScreen from "../components/first-screen/first-screen";
import InfoBlock from "../components/info-block/info-block";

const Cardpage = ({data}) => {
    let {id} = useParams();
    const searchId = data.filter(item => item.id === +id);
    return (
        <>
            <FirstScreen title={'Our Coffee'}/>
            <InfoBlock
                title={'About it'}
                text={searchId[0].descr}
                img={searchId[0].fullImg}
                alt={'coffee'}
                from={searchId[0].from}
                price={searchId[0].price}
            />
        </>
    );
}

export default Cardpage;