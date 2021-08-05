import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories = [] }) => {
    const [categories, setCategories] = useState(defaultCategories);

    return (
        <div className= "container">
            <h1>GIPHY Search</h1>
            <hr />
            <AddCategory setCategories= { setCategories } />
            {
                categories.map( (category, id) => {
                    return <GifGrid 
                        category={ category }
                        key= { id }
                    />
                })
            }
        </div>
    )
}
