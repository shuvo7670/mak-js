var allProducts = ``;
function loadData() {
    fetch('https://dummyjson.com/products?limit=8').then( (response) => {
        return response.json();
    } ).then( (data) => {
        data.products.map( (item) => {
                allProducts = allProducts + renderProducts(item);
        } )
        document.getElementById('allProducts').innerHTML = allProducts;
    } ).catch( (error) => {
        console.log(error);
    } );
}
loadData();

const inputField = document.getElementById('inputField');
inputField.addEventListener('keyup', function(event){
    event.preventDefault();
    document.getElementById('allProducts').innerHTML  = ``;
    allProducts = ``;
    const value = event.target.value;
    const url = 'https://dummyjson.com/products/search?q=' + value;
    fetch(url).then( (response) => {
        return response.json();
    } ).then( (data) => {
        data.products.map( (item) => {
                allProducts = allProducts + renderProducts(item);
        } )
        document.getElementById('allProducts').innerHTML = allProducts;
    } ).catch( (error) => {
        console.log(error);
    } );
});



function renderProducts(item) {
    return ` <div class="col-md-3 col-sm-6">
                    <div class="card product-card shadow-sm">
                        <img src="${ item.thumbnail }" class="card-img-top" alt="Product">
                        <div class="card-body text-center">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text text-muted">${item.description}</p>
                        <a href="#" class="btn btn-primary btn-custom">View Details</a>
                        </div>
                    </div>
            </div>
        `;
}

const loadMoreButton = document.getElementById('loadMore');
var page_number = 1;
loadMoreButton.addEventListener('click', function(){
    const url = `https://dummyjson.com/products?limit=8&skip=${page_number * 8}`;
    fetch(url).then( (response) => {
        return response.json();
    } ).then( (data) => {
        data.products.map( (item) => {
                allProducts = allProducts + renderProducts(item);
        } )
        page_number++;
        document.getElementById('allProducts').innerHTML = allProducts;
    } ).catch( (error) => {
        console.log(error);
    } );
})