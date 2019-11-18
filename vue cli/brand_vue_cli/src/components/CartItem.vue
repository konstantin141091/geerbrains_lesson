<template>
    <div>
        <div class="basket_drop_product" v-if="type === 1">
            <div class="basket_drop_product">
                <router-link to="/single_page"><img :src="img" alt="some" class="basket_drop_product_img" @click="asd"></router-link>
                <div class="basket_drop_product_text">
                    <a href="#">{{cartItem.product_name}}</a>
                    <img src="../assets/img/basket_drop_rating.png" alt="some">
                    <p>{{cartItem.quantity}}&nbsp;x $<span>{{cartItem.price}}</span></p>
                </div>
                <a class="basket_drop_i" @click="$emit('remove', cartItem)"><i class="far fa-times-circle"></i></a>
            </div>
        </div>
        <div class="cart_product" v-if="type === 2">
            <div class="cart_product_right">
                <router-link to="/single_page"><img :src="img" alt="img" @click="asd"></router-link>
                <div class="cart_product_text"> <a href="#" class="cart_product_text_a">{{cartItem.product_name}}</a>
                    <p><span>Color:</span> Red
                        <br> <span>Size:</span> Xll </p>
                </div>
            </div>
            <div class="cart_product_left">
                <p>$ {{cartItem.price}}</p>
                <form action="#">
                    <input type="number" v-model="value" @change="$emit('changeQuantity', cartItem, value)">
                </form>
                <p>FREE</p>
                <p>$ {{cartItem.price*cartItem.quantity}}</p>
                <i class="far fa-times-circle" aria-hidden="true" @click="$emit('removeAll', cartItem,)"></i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CartItem",
        props: ['cartItem', 'img', 'type'],
        data(){
            return {
                value: this.cartItem.quantity,
            }
        },
        methods: {
            asd(){
                this.$store.commit('changeSingleItem', this.cartItem);
            }
        },
    }
</script>

<!--<style scoped>-->

<!--</style>-->