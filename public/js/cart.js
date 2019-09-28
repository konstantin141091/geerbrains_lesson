Vue.component('cart', {
    props: ['type'],
    data(){
        return {
            imgCart: 'https://placehold.it/50x100',
            contentAPI: '',
            cartUrl: 'server/db/userCart.json',
            cartItems: [],
            total: 0,
            showCart: false,
        }
    },
    methods: {
        callSum(){
            this.$parent.$parent.getJson(`/api/cart`)
                .then(data => {
                    this.total = data.amount;
                });
            return this.total;
        },
        changeQuantity(product, value){
            if (/\d/.test(value)){
                if (value === 0) {
                    this.remove(product);
                } else {
                    this.addProduct(product, value);
                }
            } else {
                return;
            }
        },
        addProduct(product, manyQuantity){
            let find = this.cartItems.find(el => el.id_product === product.id_product);
            if(find){
                if (manyQuantity){
                    manyQuantity = +manyQuantity;
                    this.$root.putJson(`/api/cart/${find.id_product}`, {quantity: manyQuantity});
                    find.quantity = manyQuantity;
                } else {
                    console.log('123');
                    this.$root.putJson(`/api/cart/${find.id_product}`, {quantity: 1});
                    find.quantity++;
                }
            } else {
                if (!manyQuantity) {
                    manyQuantity = 1;
                }
                manyQuantity = +manyQuantity;
                let prod = Object.assign({quantity: manyQuantity}, product);
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
                this.$root.putJson(`/api/cart/${find.id_product}`, {quantity: -1});
                find.quantity--;
            } else {
                this.$root.deleteJson(`/api/cart/${product.id_product}`)
                    .then(data => {
                        if (data.result === 1) {
                            this.cartItems.splice(this.cartItems.indexOf(product), 1);
                        }
                    });
            }
        },
        removeAll(product){
            console.log(product);
            if (product) {
                product.quantity = 0;
                this.remove(product);
            }else {
                this.$root.deleteJson(`/api/cart/100`, {value: 'all'})
                    .then(data => {
                        if (data.result === 1) {
                            this.cartItems = [];
                        }
                    });
            }
        },


    },
    mounted(){
        this.contentAPI = this.$root.$refs["content-main"];
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
                   <div v-if="type === 1">
                        <img src="img/basket%20header.svg" alt="basket" class="logo_basket" @click="showCart=!showCart">
                        <div class="basket_drop" v-show="showCart">                       
                                <cart-item v-for="item of cartItems" 
                                        :key="item.id_product"
                                        :cart-item="item" 
                                        :img="item.img"
                                        :type="type"
                                        @remove="remove">
                                 </cart-item>
                                <div class="basket_drop_summa">
                                    <p>TOTAL</p>
                                    <p>$ {{ callSum() }}</p>
                                </div>
                                <div class="basket_drop_buttom_block">
                                    <a href="#" class="basket_drop_buttom" @click="showCart=!showCart, contentAPI.getSelected('checkout')"">
                                        Checkout
                                    </a>
                                    <a class="basket_drop_buttom" @click="showCart=!showCart, contentAPI.getSelected('cart')">
                                        Go&nbsp;to&nbsp;cart
                                    </a>
                                </div>
                        </div>
                    </div>
                   <div v-if="type === 2">
                    <div class="cart_block container">
                        <div class="cart_products">
                        <div class="cart_h3">
                            <h3>Product Details</h3>
                            <div class="cart_h3_right">
                                <h3>unite Price</h3>
                                <h3>Quantity</h3>
                                <h3>shipping</h3>
                                <h3>Subtotal</h3>
                                <h3>ACTION</h3> </div>
                        </div>
                        <cart-item v-for="item of cartItems" 
                               :key="item.id_product"
                               :cart-item="item" 
                               :img="item.img"
                               :type="type"
                               @remove="remove"
                               @changeQuantity="changeQuantity"
                               @removeAll="removeAll">
                        </cart-item>
                        <div class="cart_buttons"> <a href="#" class="cart_button" @click="removeAll(undefined)">cLEAR SHOPPING CART</a> 
                        <a href="#" class="cart_button cart_button2" @click="contentAPI.getSelected('checkout')">cONTINUE sHOPPING</a> </div>
                        <div class="cart_forms">
                            <div class="cart_form1">
                                <h3>Shipping Adress</h3>
                                <select name="country">
                                    <option>Bangladesh</option>
                                    <option>USA</option>
                                    <option>Russian</option>
                                    <option>Germani</option>
                                    <option>Japan</option>
                                </select>
                                <form action="#">
                                    <input type="text" placeholder="State">
                                    <input type="text" placeholder="State"> </form> <a href="#" class="cart_form1_button">get a&nbsp;quote</a> </div>
                            <div class="cart_form2">
                                <h3>coupon discount</h3>
                                <p>Enter your coupon code if&nbsp;you have one</p>
                                <form action="#">
                                    <input type="text" placeholder="State"> </form> <a href="#" class="cart_form2_button">Apply coupon</a> </div>
                            <div class="cart_form3">
                                <p>Sub total<span>$ {{ callSum() }}</span></p>
                                <p>GRAND TOTAL <span>$ {{ callSum() }}</span></p> 
                                <a href="#" class="cart_form3_button" @click="contentAPI.getSelected('checkout')">proceed to&nbsp;checkout</a> </div>
                        </div>
                        </div>
                        </div>
                    </div>
               </div>
    `
});

Vue.component('cartItem', {
    props: ['cartItem', 'img', 'type'],
    data(){
        return {
            value: this.cartItem.quantity,
        }
    },
    template: `
            <div>
                <div class="basket_drop_product" v-if="type === 1">
                <div class="basket_drop_product">
                 <a href="#"><img :src="img" alt="some"class="basket_drop_product_img"></a>
                    <div class="basket_drop_product_text"> 
                        <a href="#">{{cartItem.product_name}}</a> 
                        <img src="img/basket_drop_rating.png" alt="some">
                        <p>{{cartItem.quantity}}&nbsp;x $<span>{{cartItem.price}}</span></p>
                    </div> 
                    <a class="basket_drop_i" @click="$emit('remove', cartItem)"><i class="far fa-times-circle"></i></a> 
                 </div>
                </div>
                <div class="cart_product" v-if="type === 2">
                    <div class="cart_product_right">
                        <a href="#"><img :src="img" alt="img"></a>
                        <div class="cart_product_text"> <a href="#" class="cart_product_text_a">{{cartItem.product_name}}</a>
                            <p><span>Color:</span> Red
                                <br> <span>Size:</span> Xll </p>
                        </div>
                    </div>
                    <div class="cart_product_left">
                        <p>$ {{cartItem.price}}</p>
                        <form action="#">
                            <input type="number" v-model="value" @change="$emit('changeQuantity', cartItem, value)"> </form>
                        <p>FREE</p>
                        <p>$ {{cartItem.price*cartItem.quantity}}</p> 
                        <i class="far fa-times-circle" aria-hidden="true" @click="$emit('removeAll', cartItem)"></i> </div>
                </div>
            </div>
    `
});