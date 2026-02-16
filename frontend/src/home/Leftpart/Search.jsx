import React from 'react'
import { FaSearch } from "react-icons/fa";

function Search() {
    return (
        <>
            <form>
                <div>
                    <label className="input">

                        <input type="search" required placeholder="Search" />
                    </label>
                    <butoon>
                        <FaSearch />
                    </butoon>
                </div>
            </form>
        </>
    )
}

export default Search