Vue.component('cart', {
    data(){
        return {
            imgCart: 'https://placehold.it/50x100',
            cartUrl: '/getBasket.json',
            cartItems: [],
            total: 0,
            showCart: false,
        }
    },
    methods: {
        remove(item) {
            this.$root.getJson(`${API}/deleteFromBasket.json`)
                .then(data => {
                    if(data.result === 1) {
                        if(item.quantity>1){
                            item.quantity--;
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(item), 1)
                        }
                    }
                })
        },
    },
    mounted(){
        this.$parent.$parent.getJson(`${API + this.cartUrl}`)
            .then(data => {
                for(let el of data.contents){
                    this.cartItems.push(el);
                }
                this.total = data.amount;
            });
    },
    template: `
               <div>
                    <a href="#" class="logo_basket" @click="showCart=!showCart"><img src="img/basket%20header.svg" alt="basket">
                    </a>
                    <div class="basket_drop" v-show="showCart">                       
                            <cart-item v-for="item of cartItems" 
                                    :key="item.id_product"
                                    :cart-item="item" 
                                    :img="imgCart"
                                    @remove="remove">
                             </cart-item>
                            <div class="basket_drop_summa">
                                <p>TOTAL</p>
                                <p>$ {{ total }}</p>
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

Vue.component('cartItem', {
    props: ['cartItem', 'img'],
    data(){
        return {

        }
    },
    template: `
            <div class="basket_drop_product">
                <div class="basket_drop_product">
                 <a href="single%20page.html"><img :src="img" alt="some"></a>
                    <div class="basket_drop_product_text"> 
                        <a href="single%20page.html">{{cartItem.product_name}}</a> 
                        <img src="img/basket_drop_rating.png" alt="some">
                        <p>{{cartItem.quantity}}&nbsp;x $<span>{{cartItem.price}}</span></p>
                    </div> 
                    <a href="#" class="basket_drop_i" @click="$emit('remove', cartItem)"><i class="far fa-times-circle"></i></a> 
                 </div>
            </div>
    `
});