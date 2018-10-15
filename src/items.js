import React from 'react';

const Items =({items}) =>{
return(
     items.map((u,i) =>{
         return(
            <div className='tc bg-light-blue dib br3 pa3 ml grow bw2 shadow-5 mw-100 w-auto'>
                <p>Line: { items[i].lineNumber}</p>
                <img src="https://qa1-assets.fishersci.com/TFS-Assets/CCG/product-images/F581109~p.eps-150.jpg" alt="image"/>
                <p>Part Number: { items[i].partNumber}</p>
                <p>Qty: { items[i].qty}</p>
                <p>Unit Price: { items[i].unitPrice}</p>
                <p>Extended Price: { items[i].extPrice}</p>
            </div>
         )
        }
     )
)
}





export default Items;