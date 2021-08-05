import React from 'react'
import PropTypes from 'prop-types';
import { useFetch } from '../hooks/useFetch';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    const { data: images, loading } = useFetch( category );
    return (
        <div>
            <h3>{ category }</h3>
            { loading && <p>Loading...</p> }
            <div className="card-grid">
                {
                    images.map(( img ) => {
                        return <GifGridItem
                            key={ img.id }
                            { ...img }
                        />
                    })
                }
            </div>
        </div>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}