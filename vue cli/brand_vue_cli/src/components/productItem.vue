<template>
    <div class="block2_product">
        <div class="catalog_product_fon">
            <router-link to="/single_page">
<!--          вот здесь в router-link я хотел передавать сам продукт на страницу просмотра куда уходит ссылка      /-->
                <img class="product_img" :src="product.img" alt="product" @click="asd"></router-link>
        </div>
        <div class="product_text"> <a href="#">{{product.product_name}}</a>
            <p>$ {{product.price}}</p> <img class="product_rating" src="../assets/img/rating.png" alt="rating"> </div>
        <a class="product_basket" @click="cartAPI.addProduct(product)"><img src="../assets/img/cart_hover.svg" alt="img">
            <p>Add to&nbsp;Cart</p>
        </a>
    </div>
</template>

<script>

    export default {
        name: "productItem",
        props: ['product'],
        components: {
        },
        data(){
            return {
                cartAPI: this.$root.$children[0].$children[0].$refs.header.$refs.cart,
                item: ''
            }
        },
        methods: {
            asd(){
                this.$store.commit('changeSingleItem', this.product);
            }
        },

        mounted() {

        }
    }
</script>

<style scoped>

</style>