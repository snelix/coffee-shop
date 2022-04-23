import Filter from "../filter/filter";
import Search from "../search/search";

import './settings-block.css'

const SettingsBlock = (props) => {
    return (
        <>
            <div className="divider"></div>
            <div className="settings-block">
                <Search term={props.term} onUpdateSearch={props.onUpdateSearch}/>
                <Filter btns={props.btns} data={props.data} filter={props.filter} onFilterSelect={props.onFilterSelect}/>
            </div>
        </>
    );
}

export default SettingsBlock;