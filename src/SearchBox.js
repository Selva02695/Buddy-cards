import React from "react";

const SearchBox =({onSearchChange})=>{
    return(
        <input 
        className="pa3 ba b--blue bg-lightest-black"
        type='search' 
        placeholder="search metal buddy"
        onChange={onSearchChange}>
        </input>
    )
}

export default SearchBox;