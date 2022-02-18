
const shop_list = document.querySelector('.shop-list');


fetch(' http://localhost:5050/product/').then(data => data.json()).then(data=>{

 let product ='';
 data.map(data =>{
     product +=`

     <div class="col-md-3 my-3">
     <div class="card shadow p-item">
         <a href="#" onclick="singleProductLoad(${data.id})" data-bs-toggle="modal" data-bs-target="#signal_product"><img src=" ${data.photo}" alt=""></a>
         <div class="card-body">
             <h2> ${data.product_name}</h2>
             <h2>catagory ${data.catagory}</h2>
             <p>brand: ${data.brand}</p>
              

         </div>

     </div>
 </div>
     
     
     `;



 });

 shop_list.innerHTML = product;

});




function singleProductLoad(id){

const single_p = document.querySelector('.product-single');

single_p.innerHTML = '';

     fetch('http://localhost:5050/product/' + id).then(data => data.json()).then(data =>{
       
        single_p.innerHTML =`
        
        <div class="row">
        <div class="col-md-6">
            <img src=" ${data.photo}" alt="">
        </div>
        <div class="col-md-6">
            <h1>${data.product_name}</h1>
            <h2>Age ${data.catagory}</h2>
            <h2>peice  ${data.brand}</h2>
             
            <a  class="btn btn-lg btn-info" href="#">Add to cars</a>
        </div>
    </div>
        
        `;


      
     })
}

