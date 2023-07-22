// import React, { useEffect, useState } from "react";

// function Effect() {
//   const [product, setProduct] = useState([]);
//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((data) => {
//         setProduct(data);
//         console.log(data);
//       });
//   }, []);

//   return (
//     <div>
//       {product.map((item) => {
//         return (
//             <div className="carts">  
//           <ul className="cart">
//             <li ><img src={item.image} alt="" className="images" /></li>
//             <li className="title"><h3>{item.title}</h3></li>
//             <li className="desc">{item.description}</li>
//             <li className="price"><b>{item.price}</b></li>
//           </ul>
//           </div>
          
//         );
//       })}
//     </div>
//   );
// }

// export default Effect;
