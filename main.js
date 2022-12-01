const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');

const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);

function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');

    }



    desktopMenu.classList.toggle('inactive');//toggle quita o pone la clase especificada

}

function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');

    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesltopMenuClosed = desktopMenu.classList.contains('inactive');
    if(!isDesltopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');

    }
    shoppingCartContainer.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    precio: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" class="product-img'

});
productList.push({
    name: 'Pantalla',
    precio: 500,
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

});
productList.push({
    name: 'Computadora',
    precio: 620,
    image: 'https://images.pexels.com/photos/968631/pexels-photo-968631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

});



/*<div class="product-card">
                <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" class="product-img">
                <div class="product-info">
                    <div>
                     <p>$120.00</p>
                    <p>Bike</p>   
                    </div>
                    <figure>
                    <img src="./icons/bt_add_to_cart.svg" alt="">
                </figure>
                </div>
                
            </div> */



function productRender (arr){
    for(product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.precio;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg') /*Si no funciona, cambiar el productInfoImg a img */
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }

}

productRender(productList);