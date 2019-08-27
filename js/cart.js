Vue.component('cart', {
    data(){
        return {

        }
    },
    methods: {

    },
    mounted() {
    },
    template: `
               <div>
                    <a href="cart.html" class="logo_basket"><img src="img/basket%20header.svg" alt="basket">
                    </a>
                    <div class="basket_drop">
                        <div class="basket_drop_product">
                            <a href="single%20page.html"><img src="img/basket_drop_img1.jpg" alt="img"></a>
                            <div class="basket_drop_product_text"> <a href="single%20page.html">Rebox Zane</a> <img src="img/basket_drop_rating.png" alt="img">
                                <p>1&nbsp;x $250</p>
                            </div> <a href="#" class="basket_drop_i"><i class="far fa-times-circle"></i></a> </div>
                        <div class="basket_drop_product">
                            <a href="single%20page.html"><img src="img/basket_drop_img2.jpg" alt="img"></a>
                            <div class="basket_drop_product_text"> <a href="single%20page.html">Rebox Zane</a> <img src="img/basket_drop_rating.png" alt="img">
                                <p>1&nbsp;x $250</p>
                            </div> <a href="#" class="basket_drop_i"><i class="far fa-times-circle"></i></a> </div>
                        <div class="basket_drop_summa">
                            <p>TOTAL</p>
                            <p>$500.00</p>
                        </div>
                        <div class="basket_drop_buttom_block">
                            <a href="checkout.html" class="basket_drop_buttom">
                                Checkout
                            </a>
                            <a href="cart.html" class="basket_drop_buttom">
                                Go&nbsp;to&nbsp;cart
                            </a>
                        </div>
                    </div>
                </div>
    `
});