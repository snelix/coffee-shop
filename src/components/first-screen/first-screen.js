import './first-screen.css'

const FirstScreen = (props) => {
    let className = 'first-screen ';
    if (props.class) {
        className += props.class;
    }
    return (
        <div className={className}>
            <div className="first-screen__title">{props.title}</div>
        </div>
    );
}

export default FirstScreen;