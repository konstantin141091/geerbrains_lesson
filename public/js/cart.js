Vue.component('cart', {
    data(){
        return {
            imgCart: 'https://placehold.it/50x100',
            cartUrl: 'server/db/userCart.json',
            cartItems: [],
            total: 0,
            showCart: false,
        }
    },
    methods: {
        addProduct(product){
            let find = this.cartItems.find(el => el.id_product === product.id_product);
            if(find){
                this.$root.putJson(`/api/cart/${find.id_product}`, {quantity: 1});
                find.quantity++;
            } else {
                let prod = Object.assign({quantity: 1}, product);
                this.$root.postJson('/api/cart', prod)
                    .then(data => {
                        if (data.result === 1) {
                            this.cartItems.push(prod);
                        }
                    });
            }
        },
        remove(product){
            let find = this.cartItems.find(el => el.id_product === product.id_product);
            if(find.quantity > 1){
                console.log(product.quantity);
                this.$root.putJson(`/api/cart/${find.id_product}`, {quantity: -1});
                find.quantity--;
            } else {
                console.log('удалить товар');
                this.$root.deleteJson(`/api/cart/${product.id_product}`)
                    .then(data => {
                        console.log('123')
                        if (data.result === 1) {
                            this.cartItems.splice(this.cartItems.indexOf(product), 1);
                        }
                    });
            }
        },


    },
    mounted(){
        this.$parent.$parent.getJson(`/api/cart`)
            .then(data => {
                for(let el of data.contents){
                    this.cartItems.push(el);
                }
                this.total = data.amount;
            });
    },
    template: `
               <div>
                    <img src="img/basket%20header.svg" alt="basket" class="logo_basket" @click="showCart=!showCart">
                    <div class="basket_drop" v-show="showCart">                       
                            <cart-item v-for="item of cartItems" 
                                    :key="item.id_product"
                                    :cart-item="item" 
                                    :img="item.img"
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
                 <a href="single%20page.html"><img :src="img" alt="some"class="basket_drop_product_img"></a>
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