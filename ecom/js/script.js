var allProducts = ``;
function loadData() {
    fetch('https://dummyjson.com/products').then( (response) => {
        return response.json();
    } ).then( (data) => {
        console.log( data.products );
        
        data.products.map( (item) => {
                allProducts = allProducts + `
                        <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
                            <div class="product-item bg-light mb-4">
                                <div class="product-img position-relative overflow-hidden">
                                    <img class="img-fluid w-100" src="${item.thumbnail}" alt="">
                                    <div class="product-action">
                                        <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-shopping-cart"></i></a>
                                        <a class="btn btn-outline-dark btn-square" href=""><i class="far fa-heart"></i></a>
                                        <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-sync-alt"></i></a>
                                        <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-search"></i></a>
                                    </div>
                                </div>
                                <div class="text-center py-4">
                                    <a class="h6 text-decoration-none text-truncate" href="">${item.title}</a>
                                    <div class="d-flex align-items-center justify-content-center mt-2">
                                        <h5>$${item.price}</h5>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-center mb-1">
                                        <small class="fa fa-star text-primary mr-1"></small>
                                        <small class="fa fa-star text-primary mr-1"></small>
                                        <small class="fa fa-star text-primary mr-1"></small>
                                        <small class="fa fa-star text-primary mr-1"></small>
                                        <small class="fa fa-star text-primary mr-1"></small>
                                        <small>(${item.rating})</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                `;
        } )
        document.getElementById('allProducts').innerHTML = allProducts;
    } ).catch( (error) => {
        console.log(error);
    } );
}
loadData();

