<template>
    <div>
        <div v-if="type === 1">
            <img src="../assets/img/basket_header.svg" alt="basket" class="logo_basket" @click="showCart=!showCart">
            <div class="basket_drop" v-show="showCart">
                <cart-item v-for="item of cartItems"
                           ref="cart_item"
                           :key="item.id_product"
                           :cart-item="item"
                           :img="item.img"
                           :type="type"
                           @remove="remove">
                </cart-item>
                <div class="basket_drop_summa">
                    <p>TOTAL</p>
                    <p>$ {{ total }}</p>
                </div>
                <div class="basket_drop_buttom_block">
                    <router-link to="/checkout_page" href="#" class="basket_drop_buttom" @click="showCart=!showCart">
                    Checkout
                    </router-link>
                    <router-link to="/cart_page" class="basket_drop_buttom" @click="showCart=!showCart">
                        Go&nbsp;to&nbsp;cart
                    </router-link>
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
                            <p>Sub total<span>$ {{ total }}</span></p>
                            <p>GRAND TOTAL <span>$ {{ total }}</span></p>
                            <router-link to="/checkout_page" href="#" class="cart_form3_button">proceed to&nbsp;checkout</router-link> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CartItem from '@/components/CartItem.vue';
    export default {
        name: "Cart",
        components:{
            CartItem
        },
        props: ['type'],
        data(){
            return {
                imgCart: 'https://placehold.it/50x100',
                cartItems: [],
                total: 0,
                showCart: false,
            }
        },
        methods: {
            callSum(){
                this.$root.$children[0].getJson(`/api/cart`)
                    .then(data => {
                        this.total = data.amount;
                    });
                // return this.total;
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
                this.callSum();
            },
            addProduct(product, manyQuantity){
                let find = this.cartItems.find(el => el.id_product === product.id_product);
                if(find){
                    if (manyQuantity){
                        manyQuantity = +manyQuantity;
                        this.$root.$children[0].putJson(`/api/cart/${find.id_product}`, {quantity: manyQuantity});
                        find.quantity = manyQuantity;
                    } else {
                        this.$root.$children[0].putJson(`/api/cart/${find.id_product}`, {quantity: 1});
                        find.quantity++;
                    }
                } else {
                    if (!manyQuantity) {
                        manyQuantity = 1;
                    }
                    manyQuantity = +manyQuantity;
                    let prod = Object.assign({quantity: manyQuantity}, product);
                    this.$root.$children[0].postJson('/api/cart', prod)
                        .then(data => {
                            if (data.result === 1) {
                                this.cartItems.push(prod);
                            }
                        });
                }
                this.callSum();
            },
            remove(product){
                let find = this.cartItems.find(el => el.id_product === product.id_product);
                if(find.quantity > 1){
                    this.$root.$children[0].putJson(`/api/cart/${find.id_product}`, {quantity: -1});
                    find.quantity--;
                } else {
                    this.$root.$children[0].deleteJson(`/api/cart/${product.id_product}`)
                        .then(data => {
                            if (data.result === 1) {
                                this.cartItems.splice(this.cartItems.indexOf(product), 1);
                            }
                        });
                }
                this.callSum();
            },
            removeAll(product){
                console.log(product);
                if (product) {
                    product.quantity = 0;
                    this.remove(product);
                }else {
                    this.$root.$children[0].deleteJson(`/api/cart/100`, {value: 'all'})
                        .then(data => {
                            if (data.result === 1) {
                                this.cartItems = [];
                            }
                        });
                }
                this.callSum();
            },
        },
        mounted(){
            this.$root.$children[0].getJson(`/api/cart`)
                .then(data => {
                    for(let el of data.contents){
                        this.cartItems.push(el);
                    }
                    this.total = data.amount;
                });
        },
    }
</script>

<!--<style scoped>-->

<!--</style>-->