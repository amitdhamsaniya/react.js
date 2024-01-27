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
                        <div className='card'>
                            <img className=' product-img p-5 aspect_ratio' src={product.image} alt={product.title} />
                            <div className='card-body'>
                                <h3 className='card-title text-truncate'>{product.title}</h3>
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



// import React, { useEffect, useState } from 'react';
// import Productcard from './Productcard.jsx';

// const Apifetch = () => {
//     const [products, setProducts] = useState([]);
//     const [loader, setloader] = useState(false);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//                 const response = await fetch('https://fakestoreapi.com/products');
//                 if (!response.ok) {
//                     throw new Error('HTTP error! Status: ${ response.status}');
//                 }
//                 // console.log("response:", await response.json())
//                 const data = await response.json();
//                 console.log("data:", data)
//                 // console.log("response.json():", response.json())
//                 setProducts(data);
//                 setloader(true);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };
//         fetchData();
//     }, []); // The empty dependency array ensures that the effect runs only once, similar to componentDidMount
//     return (
//         <div className="container">
//             <div className="row justify-content-center gy-4">
//                 {
//                     (loader) ? products.map((product) => (
//                         <div key={product.id} className='col-lg-4 col-md-6 col-12'>
//                             <Productcard product={product} />
//                         </div>
//                     )) : <>
//                         <p class="row justify-content-between gx-2 placeholder-glow">
//                             <div className="col-3">
//                                 <div class="card" aria-hidden="true">
//                                     <img src="..." class="card-img-top" alt="..." />
//                                     <div class="card-body">
//                                         <h5 class="card-title placeholder-glow">
//                                             <span class="placeholder col-6"></span>
//                                         </h5>
//                                         <p class="card-text placeholder-glow">
//                                             <span class="placeholder col-7"></span>
//                                             <span class="placeholder col-4"></span>
//                                             <span class="placeholder col-4"></span>
//                                             <span class="placeholder col-6"></span>
//                                             <span class="placeholder col-8"></span>
//                                         </p>
//                                         <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-3">
//                                 <div class="card" aria-hidden="true">
//                                     <img src="..." class="card-img-top" alt="..." />
//                                     <div class="card-body">
//                                         <h5 class="card-title placeholder-glow">
//                                             <span class="placeholder col-6"></span>
//                                         </h5>
//                                         <p class="card-text placeholder-glow">
//                                             <span class="placeholder col-7"></span>
//                                             <span class="placeholder col-4"></span>
//                                             <span class="placeholder col-4"></span>
//                                             <span class="placeholder col-6"></span>
//                                             <span class="placeholder col-8"></span>
//                                         </p>
//                                         <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-3"> 
//                                 <div class="card" aria-hidden="true">
//                                     <img src="..." class="card-img-top" alt="..." />
//                                     <div class="card-body">
//                                         <h5 class="card-title placeholder-glow">
//                                             <span class="placeholder col-6"></span>
//                                         </h5>
//                                         <p class="card-text placeholder-glow">
//                                             <span class="placeholder col-7"></span>
//                                             <span class="placeholder col-4"></span>
//                                             <span class="placeholder col-4"></span>
//                                             <span class="placeholder col-6"></span>
//                                             <span class="placeholder col-8"></span>
//                                         </p>
//                                         <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
//                                     </div>
//                                 </div>
//                             </div>
//                             {/* <span class="placeholder col-3"></span>
//                             <span class="placeholder col-3"></span> */}
//                         </p>
//                     </>
//                 }
//                 { }

//             </div>
//         </div>
  
//     );
// };
// export default Apifetch;
