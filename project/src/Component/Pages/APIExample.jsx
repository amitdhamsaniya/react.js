import React, { useEffect, useState } from 'react';

const APIExample = () => {
    const [ProData, setProdData] = useState([]);

    useEffect(() => {
        FetchData();
    }, []);

    const FetchData = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const responseData = await response.json();
            console.log(responseData);
            setProdData(responseData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <div className='container'>
            <div className='row mt-5 justify-content-center'>
                {ProData.map(product => (
                    <div key={product.id} className='col-lg-4 col-md-6 col-12 mb-4'>
                        <div className='card alert alert-light'>
                            <img className=' product-img p-5 aspect_ratio' src={product.image} alt={product.title} />
                            <div className='card-body'>
                                <h3 className='card-title text-truncate alert alert-secondary'>{product.title}</h3>
                                <p className='card-text text-truncate '>{product.description}</p>
                                <button type="button" class="btn mx-auto d-block btn-primary" >Button</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default APIExample;