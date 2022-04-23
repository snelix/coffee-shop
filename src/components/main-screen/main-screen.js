import bean from '../../icons/bean.svg';

import './main-screen.css'

const MainScreen = () => {
    return (
        <div className="main-screen">
            <h1 className="main-screen__title">Everything You Love About Coffee</h1>
            <div className="main-screen__bean">
                <img src={bean} alt="bean"/>
            </div>
            <div className="main-screen__text">We makes every day full of energy and taste</div>
            <div className="main-screen__text">Want to try our beans?</div>
            <a href="/" className="main-screen__button">More</a>
        </div>
    );
}

export default MainScreen;