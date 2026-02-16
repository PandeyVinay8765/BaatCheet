import React from 'react'
import { FaSearch } from "react-icons/fa";

function Search() {
    return (
        <>
            <form>
                <label className="input">

                    <input type="search" required placeholder="Search" />
                </label>
                <butoon>
                    <FaSearch />
                </butoon>
            </form>
        </>
    )
}

export default Search