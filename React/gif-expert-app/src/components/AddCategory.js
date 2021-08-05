import React from 'react'
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

export const AddCategory = ({ setCategories }) => {

    const handleSearch = (e) => {
        e.preventDefault();
        const searchInputRef = document.querySelector('#searchInput');
        const { value:inputValue } = searchInputRef;
        if(inputValue.length > 0)
        {
            setCategories( (categories) => [inputValue, ...categories ]);
            searchInputRef.value = '';
        } else {
            Swal.fire({
                title: 'Search field empty',
                text: 'Please, fill the search box',
                icon: 'warning',
                confirmButtonText: 'Ok'
            })
        }
    }
    
    return (
        <form>
            <div className= "searchRow">
                <input
                    type= "text"
                    placeholder= "Search by keyword"
                    id="searchInput"
                />
                <button onClick= { handleSearch }>Search GIFs</button>
            </div>
        </form>
    )
}

AddCategory.propTytpes = {
    setCategories: PropTypes.func.isRequired
}