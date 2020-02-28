import React from 'react'

const Header = (props) => {
    const {search, onInputChange} =props
    return (
        <div className="jumbotron py-5">
            <h1 className="display-1">
                <i className="material-icons brand-icon">fastfood</i>Food Recipe</h1>
            <div class="input-group w-50 mx-auto">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search your recipe..."
                    value={props.search} 
                    onChange={props.onInputChange}
                    />
                <div class="input-group-append">
                    <button className="btn btn-dark">Search</button>
                </div>
            </div>

        </div>
    )
}
export default Header;