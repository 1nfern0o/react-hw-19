import React from "react";

const Search = (props) => {
    return (
        <div className="filter">
            <label>
                <span>Search:</span>
                <input type="text" id="search-input" value={props.search} onChange={props.searchChange} placeholder="Name or phone"/>
            </label>
            <label>
                <input type="checkbox" className="checkbox" id="male-checkbox" onChange={props.toggleTick} defaultChecked="true"/>
                <img src={props.genderImg.male} alt=""/>
            </label>
            <label>
                <input type="checkbox" className="checkbox" id="female-checkbox" onChange={props.toggleTick} defaultChecked="true"/>
                <img src={props.genderImg.female} alt=""/>
            </label>
            <label id="undefined-gender-label">
                <input type="checkbox" className="checkbox" id="undefined-gender-checkbox" onChange={props.toggleTick} defaultChecked="true"/>
                <img src={props.genderImg.anonymous} alt=""/>
            </label>
        </div>
    )
}

export default Search;