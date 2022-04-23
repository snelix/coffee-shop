
import './filter.css'

const Filter = (props) => {
    const newArr = props.btns.map(item => {
        return item.from;
    })
    function unique(arr) {
        return Array.from(new Set(arr));
    }
    const newFrom = unique(newArr);

    const buttons = newFrom.map((item) => {
        const active = props.filter === item;
        const clazz = active ? 'active': '';
        return (
            <button type="button"
                    className={`filter-btn ${clazz}`}
                    key={item}
                    onClick={() => props.onFilterSelect(item)}>
                    {item}
            </button>
        )
    })
    const active = props.filter === '';
    const clazz = active ? 'active': '';

    return (
        <div className="filter">
            <span className="filter-span">Or filter</span>
            <div className="button-group">
                <button type="button"
                        className={`filter-btn ${clazz}`}
                        onClick={() => props.onFilterSelect('')}>
                        All
                </button>
                {buttons}
            </div>
        </div>
    );
}

export default Filter;