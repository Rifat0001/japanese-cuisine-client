import React from 'react';
import { useParams } from 'react-router-dom';

const ChefDetails = () => {
    const { id } = useParams()
    return (
        <div>
            <h1>{id} no chef is clicked</h1>
        </div>
    );
};

export default ChefDetails;