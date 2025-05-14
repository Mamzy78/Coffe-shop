const $ = document
const subMenuBtn = $.querySelector("#submenu-btn")
const subMenuDiv = $.querySelector(".submenu")
const marketElem = $.querySelector(".market")
const marketActive = $.querySelector(".market_active")
const burgerIconBtn = $.querySelector(".burg_icon")
const mobileMenuElem = $.querySelector(".mobile_menu")
const closeMenuBtn = $.querySelector(".closemenu")
const overlaySection = $.querySelector(".overlay")
const shoppingCartBtn = $.querySelector(".shopping_cart")
const shoppingCartElem = $.querySelector(".shopping_cart_container")
const closeBasketBtn = $.querySelector(".basket_close_btn")
const cartBodyHeader = $.querySelectorAll(".cart-body-header")
const cartBodyFooter = $.querySelector(".cart-body-footer")
const EmptyCartWrapper = $.querySelector(".empty-cart-wrapper")
const totalSaleContainer = $.querySelectorAll(".total-sale")
let emptyShoppingCartMobile = $.querySelector("#empty-shopping-cart-mobile")
let totalSaleMobileContainer = $.querySelector("#total-sale-mobile-container")
const basketCounterSpan = $.querySelectorAll("#basket-counter")
const productsContainer = $.querySelector(".products-wrapper")
const topProductsContainer = $.querySelector(".swiper-wrapper")
let userBasketCounter = $.querySelector(".userBasketCounter")


let totalProducts = [
    {id: 1, name: " قهوه ترک بن مانو مقدار 250 گرمی خط دوم اسم طولانی ", src: "./images/products/p1.png", price:150_000, count:0, off:15_000},
    {id: 2, name: " قهوه ترک بن مانو مقدار 250 گرمی خط دوم اسم طولانی ", src: "./images/products/p2.png", price:175_000, count:0, off:20_000},
    {id: 3, name: " قهوه ترک بن مانو مقدار 250 گرمی خط دوم اسم طولانی ", src: "./images/products/p3.png", price:200_000, count:0, off:45_000},
    {id: 4, name: " قهوه ترک بن مانو مقدار 250 گرمی خط دوم اسم طولانی ", src: "./images/products/p4.png", price:225_000, count:0, off:35_000},
    {id: 5, name: " قهوه ترک بن مانو مقدار 250 گرمی خط دوم اسم طولانی ", src: "./images/products/p4.png", price:190_000, count:0, off:40_000},
    {id: 6, name: " قهوه ترک بن مانو مقدار 250 گرمی خط دوم اسم طولانی ", src: "./images/products/p3.png", price:180_000, count:0, off:25_000},
    {id: 7, name: " قهوه ترک بن مانو مقدار 250 گرمی خط دوم اسم طولانی ", src: "./images/products/p1.png", price:300_000, count:0, off:30_000},
    {id: 8, name: " قهوه ترک بن مانو مقدار 250 گرمی خط دوم اسم طولانی ", src: "./images/products/p2.png", price:160_000, count:0, off:17_000},
    {id: 9, name: " قهوه ترک بن مانو مقدار 250 گرمی خط دوم اسم طولانی ", src: "./images/products/p5.png", price:150_000, count:0, off:17_000},
    {id: 10, name: " قهوه ترک بن مانو مقدار 250 گرمی خط دوم اسم طولانی ", src: "./images/products/p6.png", price:175_000, count:0, off:17_000},
    {id: 11, name: " قهوه ترک بن مانو مقدار 250 گرمی خط دوم اسم طولانی ", src: "./images/products/p7.png", price:150_000, count:0, off:17_000},
    {id: 12, name: " قهوه ترک بن مانو مقدار 250 گرمی خط دوم اسم طولانی ", src: "./images/products/p8.png", price:150_000, count:0, off:17_000},
    {id: 13, name: " قهوه ترک بن مانو مقدار 250 گرمی خط دوم اسم طولانی ", src: "./images/products/p4.png", price:150_000, count:0, off:17_000},
    {id: 14, name: " قهوه ترک بن مانو مقدار 250 گرمی خط دوم اسم طولانی ", src: "./images/products/p3.png", price:150_000, count:0, off:17_000},
    {id: 15, name: " قهوه ترک بن مانو مقدار 250 گرمی خط دوم اسم طولانی ", src: "./images/products/p1.png", price:150_000, count:0, off:17_000}
]

totalProducts.slice(0,8).forEach(product => {
    productsContainer.insertAdjacentHTML("beforeEnd", `<div class="flex flex-col justify-center shadow-main bg-white dark:bg-zinc-700 shadow-normal p-5">
                    <img class="max-w-[260px] max-h-[260px] mb-2 md:mb-5" src="${product.src}" alt="">
                    <span class="font-DanaMedium text-zinc-700 dark:text-white text-sm md:text-xl line-clamp-2">${product.name}</span>
                    <div class="mt-1.5 mb-2.5 md:mb-4 md:mt-2.5 text-teal-600 dark:text-emerald-500">
                        <span class="font-DanaDemiBold text-base md:text-xl">${(product.price.toLocaleString())}</span>
                        <span class="font-Dana text-xs md:text-sm tracking-tighter">تومان</span>
                    </div>

                    <!----------------- star and buy container --------->
                    <div class="products-wrapper flex flex-wrap gap-1 justify-between">
                        <div class="flex items-center gap-x-3">
                            <a data-id="${product.id}" href="" class="buy-button flex justify-center items-center rounded-full w-[26px] h-[26px] md:w-9 md:h-9 bg-gray-100 dark:bg-zinc-800 hover:bg-teal-600 dark:hover:bg-emerald-500 child:hover:text-white transition-colors">
                                <svg class="h-4 w-4 md:h-[22px] md:w-[22px] text-gray-400">
                                    <use xlink:href="#shopping-cart"></use>
                                </svg>
                            </daiav>
                            <a href="">
                                <svg class="h-4 w-4 md:h-6 md:w-6 text-gray-400 hover:text-teal-600 dark:hover:text-emerald-500 transition-colors">
                                    <use xlink:href="#arrows-right-left"></use>
                                </svg>
                            </a>
                        </div>
                        <div class="flex flex-row-reverse items-center id="starContainer">
                            <a data-index="1" href="#" class="star flex justify-center items-center h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6 text-gray-300" data-index="1">
                                <svg class="h-full">
                                    <use xlink:href="#star"></use>
                                </svg>
                            </a>
                            <a data-index="2" href="#" class="star flex justify-center items-center h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6 text-gray-300" data-index="2">
                                <svg class="h-full">
                                    <use xlink:href="#star"></use>
                                </svg>
                            </a>
                            <a data-index="3" href="#" class="star flex justify-center items-center h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6 text-gray-300" data-index="3">
                                <svg class="h-full">
                                    <use xlink:href="#star"></use>
                                </svg>
                            </a>
                            <a data-index="4" href="#" class="star flex justify-center items-center h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6 text-gray-300" data-index="4">
                                <svg class="h-full">
                                    <use xlink:href="#star"></use>
                                </svg>
                            </a>
                            <a data-index="5" href="#" class="star flex justify-center items-center h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6 text-gray-300" data-index="5">
                                <svg class="h-full">
                                    <use xlink:href="#star"></use>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>`)
})

totalProducts.slice(9).forEach(product => {
    topProductsContainer.insertAdjacentHTML("beforeend",`<div class="swiper-slide">
                    <div class="flex flex-col justify-center shadow-main rounded-2xl bg-white dark:bg-zinc-700 shadow-normal p-5">
                        <img class="max-w-[260px] max-h-[260px] mb-2 md:mb-5" src="${product.src}" alt="">
                        <span class="font-DanaMedium text-zinc-700 dark:text-white text-sm md:text-xl line-clamp-2">${product.name}</span>
                        <div class="mt-1.5 mb-2.5 md:mb-4 md:mt-2.5 text-teal-600 dark:text-emerald-500">
                            <span class="font-DanaDemiBold text-base md:text-xl">${(product.price).toLocaleString()}</span>
                            <span class="font-Dana text-xs md:text-sm tracking-tighter">تومان</span>
                        </div>
    
                        <!----------------- star and buy container --------->
                        <div class="products-wrapper flex flex-wrap gap-1 justify-between">
                            <div class="flex items-center gap-x-3">
                                <a data-id="${product.id}" href="" class="buy-button flex justify-center items-center rounded-full w-[26px] h-[26px] md:w-9 md:h-9 bg-gray-100 dark:bg-zinc-800 hover:bg-teal-600 dark:hover:bg-emerald-500 child:hover:text-white transition-colors">
                                    <svg class="h-4 w-4 md:h-[22px] md:w-[22px] text-gray-400">
                                        <use xlink:href="#shopping-cart"></use>
                                    </svg>
                                </daiav>
                                <a href="">
                                    <svg class="h-4 w-4 md:h-6 md:w-6 text-gray-400 hover:text-teal-600 dark:hover:text-emerald-500 transition-colors">
                                        <use xlink:href="#arrows-right-left"></use>
                                    </svg>
                                </a>
                            </div>
                            <div class="flex flex-row-reverse items-center id="starContainer">
                                <a href="#" class="star flex justify-center items-center h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6 text-gray-300" data-index="1">
                                    <svg class="h-full">
                                        <use xlink:href="#star"></use>
                                    </svg>
                                </a>
                                <a href="#" class="star flex justify-center items-center h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6 text-gray-300" data-index="2">
                                    <svg class="h-full">
                                        <use xlink:href="#star"></use>
                                    </svg>
                                </a>
                                <a href="#" class="star flex justify-center items-center h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6 text-gray-300" data-index="3">
                                    <svg class="h-full">
                                        <use xlink:href="#star"></use>
                                    </svg>
                                </a>
                                <a href="#" class="star flex justify-center items-center h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6 text-gray-300" data-index="4">
                                    <svg class="h-full">
                                        <use xlink:href="#star"></use>
                                    </svg>
                                </a>
                                <a href="#" class="star flex justify-center items-center h-4 w-4 md:h-5 md:w-5 xl:h-6 xl:w-6 text-gray-300" data-index="5">
                                    <svg class="h-full">
                                        <use xlink:href="#star"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                  </div>`)
})

function starHandler(event) {
    event.preventDefault();

    const clickedStar = event.currentTarget;
    const starIndex = parseInt(clickedStar.getAttribute('data-index'));

    const starContainer = clickedStar.parentNode;

    Array.from(starContainer.children).forEach((star, index) => {
        const starSvg = star.querySelector('svg');
        
        if (index < starIndex) {
            starSvg.style.color = 'rgba(250, 204, 21, 1)';
        } else {
            starSvg.style.color = 'rgba(209, 213, 219, 1)';
        }
    });
}

document.querySelectorAll('.star').forEach(star => {
  star.addEventListener('click', starHandler);
});

document.querySelectorAll('.buy-button').forEach(btn => {
  btn.addEventListener('click', buyproductHandler);
});



function buyproductHandler(e) {
    e.preventDefault();

    let button = e.currentTarget;
    let productID = button.dataset.id;

    let choosenProduct = totalProducts.find(product => product.id == productID);
    let existingProduct = userBasket.find(product => product.id == productID);

    if (existingProduct) {
        ascendProductHandler(choosenProduct.id)
    } else {
        choosenProduct.count = 1;
        userBasket.push(choosenProduct);
    }

    localStorage.setItem('userBasket', JSON.stringify(userBasket));

    showUserBasketLenght()
    renderCart(userBasket);
}


function showUserBasketLenght () {
    userBasketCounter.innerHTML = `${userBasket.length} مورد` ;
    basketCounterSpan.forEach(span => {
        if (userBasket.length) {
            span.classList.remove("hidden")
            span.innerHTML = userBasket.length ;
        } else {
            span.classList.add("hidden")
        }
    })
}


let userBasket = JSON.parse(localStorage.getItem('userBasket')) || [];

subMenuBtn.addEventListener("click", (event) => {
    event.preventDefault()
    subMenuDiv.classList.toggle("submenu_active")
    marketElem.classList.toggle("text-orange-300")
    marketActive.classList.toggle("text-orange-300")
    subMenuDiv.classList.contains("submenu_active") ? marketActive.style.rotate = "180deg" : marketActive.style.rotate = "360deg"
})

burgerIconBtn.addEventListener("click", () => {
    mobileMenuElem.classList.remove("-right-64")
    mobileMenuElem.classList.add("right-0")
    overlayInsertion()
})

shoppingCartBtn.addEventListener("click", () => {
    shoppingCartElem.classList.remove("-left-64")
    shoppingCartElem.classList.add("left-0")
    overlayInsertion()
})

closeMenuBtn.addEventListener("click", () => {
    closeHeaderHandler()
    removeOverlay()
})

overlaySection.addEventListener("click", () => {
    closeHeaderHandler()
    closeBasket()
    removeOverlay()
})


closeBasketBtn.addEventListener("click", () => {
    closeBasket()
    removeOverlay()
})

function closeBasket () {
    shoppingCartElem.classList.remove("left-0")
    shoppingCartElem.classList.add("-left-64")
}

function closeHeaderHandler () {
    mobileMenuElem.classList.add("-right-64")
    mobileMenuElem.classList.remove("right-0")
}

function overlayInsertion () {
    overlaySection.classList.add("overlay_visible")
}

function removeOverlay () {
    overlaySection.classList.remove("overlay_visible")
}



function downPageHandler(e) {
    e.preventDefault()
    if(e.target.tagName === "svg" || e.target.tagName === "A"){
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }
    
}
function upPageHandler(e) {
    e.preventDefault()
    if(e.target.tagName === "svg" || e.target.tagName === "A"){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
}


function renderCart(userBasket) {
    document.querySelectorAll('.cart-item').forEach(item => item.remove());

    if (userBasket.length) {
        EmptyCartWrapper.classList.add("hidden");
        emptyShoppingCartMobile.classList.add("hidden")
        totalSaleMobileContainer.classList.remove("hidden")
        cartBodyHeader[0].classList.remove("hidden");
        cartBodyFooter.classList.remove("hidden");
    } else {
        EmptyCartWrapper.classList.remove("hidden");
        emptyShoppingCartMobile.classList.remove("hidden")
        totalSaleMobileContainer.classList.add("hidden")
        cartBodyHeader[0].classList.add("hidden");
        cartBodyFooter.classList.add("hidden");
    }

    userBasket.forEach(product => {
        const savedCount = localStorage.getItem(`product-${product.id}`) || product.count || 1;
        product.count = parseInt(savedCount);

        if (window.innerWidth < 640) {
            cartBodyHeader[1].insertAdjacentHTML('afterend', `
                <div class="cart-item pb-6 border-b-[1px] border-gray-100 dark:border-white/10 gap-x-2.5 flex w-full mt-5">
                    <div class="flex flex-col justify-between">
                        <img class="w-[90px] h-[90px] inline-block" src="${product.src}" alt="">
                        <div class="flex justify-center items-center">
                            <svg class="w-6 h-6 text-red-600 cursor-pointer" onclick="deleteProductFromBasket(${product.id})">
                                <use xlink:href="#trash"></use>
                            </svg>
                        </div>
                    </div>
                    <div class="text-zinc-700 dark:text-white font-DanaMedium">
                        <h1 class="leading-6 text-sm mb-6">${product.name}</h1>
                        <p class="text-teal-600 dark:text-emerald-500 text-xs tracking-tighter leading-6">${product.off} تومان تخفیف</p>
                        <h2 class="text-base font-Dana">
                            <span class="text-sm font-DanaDemiBold">${(product.price).toLocaleString()}</span> تومان
                        </h2>
                        <div class="flex items-center justify-between w-[120px] px-4 rounded-full h-10 border-[1px] text-orange-300 border-gray-300">
                            <button onclick="ascendProductHandler(${product.id})">
                                <svg class="w-3 h-3">
                                    <use xlink:href="#plus"></use>
                                </svg>
                            </button>
                            <span id="productCounterSpan-${product.id}" class="font-DanaDemiBold">${product.count}</span>
                            <button onclick="descendProductHandler(${product.id})">
                                <svg class="w-3 h-3">
                                    <use xlink:href="#minus"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>`);
        } else {
            cartBodyHeader[0].insertAdjacentHTML('afterend', `
                <div class="cart-item pb-6 border-b-[1px] border-gray-100 dark:border-white/10 gap-x-2.5 flex w-full mt-5">
                    <div class="flex flex-col justify-between">
                        <img class="w-[90px] h-[90px] inline-block" src="${product.src}" alt="">
                        <div class="flex justify-center items-center">
                            <svg class="w-8 h-8 text-red-600 cursor-pointer" onclick="deleteProductFromBasket(${product.id})">
                                <use xlink:href="#trash"></use>
                            </svg>
                        </div>
                    </div>
                    <div class="text-zinc-700 dark:text-white font-DanaMedium">
                        <h1 class="leading-6 text-sm mb-6">${product.name}</h1>
                        <div class="flex items-center gap-5 px-3.5 py-4">
                            <div class="flex items-center justify-center gap-3.5 rounded-full h-[44px] w-[90px] border-[1px] text-orange-300 border-gray-300">
                                <button onclick="ascendProductHandler(${product.id})">
                                    <svg class="w-3 h-3">
                                        <use xlink:href="#plus"></use>
                                    </svg>
                                </button>
                                <span id="productCounterSpan-${product.id}" class="font-DanaDemiBold">${product.count}</span>
                                <button onclick="descendProductHandler(${product.id})">
                                    <svg class="w-3 h-3">
                                        <use xlink:href="#minus"></use>
                                    </svg>
                                </button>
                            </div>
                            <div>
                                <p class="text-teal-600 dark:text-emerald-500 text-xs tracking-tighter leading-6">${product.off} تومان تخفیف</p>
                                <h2 class="text-base font-Dana">
                                    <span class="text-sm font-DanaDemiBold">${product.price}</span> تومان
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>`);
        }
    });
    totalsale()
}

function ascendProductHandler(productID) {
    let findProduct = userBasket.find(product => product.id == productID);
    findProduct.count++;
    document.getElementById(`productCounterSpan-${productID}`).innerHTML = findProduct.count;

    localStorage.setItem(`product-${productID}`, findProduct.count);
    localStorage.setItem('userBasket', JSON.stringify(userBasket)); // ✅ Save updated basket
    totalsale()
}


function descendProductHandler(productID) {
    let findProduct = userBasket.find(product => product.id == productID);
    if (findProduct.count > 1) {
        findProduct.count--;
        document.getElementById(`productCounterSpan-${productID}`).innerHTML = findProduct.count;

        localStorage.setItem(`product-${productID}`, findProduct.count);
        localStorage.setItem('userBasket', JSON.stringify(userBasket)); // ✅ Save updated basket
    }
    totalsale()
}


function showUserBasket() {
    let userBasket = JSON.parse(localStorage.getItem('userBasket')) || [];
    renderCart(userBasket);
    totalsale(userBasket);

}

window.addEventListener('resize', showUserBasket);

document.addEventListener('DOMContentLoaded', showUserBasket);
document.addEventListener('DOMContentLoaded', showUserBasketLenght);

function totalsale() {
    let totalsale = 0;
    
    userBasket.forEach(product => {
        totalsale += (product.price - product.off) * product.count;
    });
    totalSaleContainer.forEach(container => {
        container.innerHTML = totalsale.toLocaleString();
    })
}

function deleteProductFromBasket(productID) {
    userBasket = userBasket.filter(product => product.id !== productID);
    localStorage.removeItem(`product-${productID}`);
    localStorage.setItem('userBasket', JSON.stringify(userBasket));
    renderCart(userBasket);
    showUserBasketLenght()
}


