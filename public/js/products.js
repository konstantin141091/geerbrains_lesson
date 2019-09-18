Vue.component('products', {
    data(){
        return {
            catalogUrl: '',
            products: [],
            filtered: [],
            imgCatalog: 'https://placehold.it/200x150',
        }
    },
    methods: {
        filter(value){
            let regexp = new RegExp(value, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    mounted(){
        this.$root.getJson('/api/products')
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
    template: `
                <div class="block2_products">
                    <product ref="refref" v-for="item of filtered" :key="item.id_product" :img="item.img" :product="item"></product>
                </div>
         
    `
});
Vue.component('product', {
    props: ['product', 'img'],
    data() {
        return {
            cartAPI: this.$root.$refs["header-comp"].$refs.cart,
        };
    },

    template: `
            <div class="block2_product">
                <a href="single%20page.html"><img class="product_img" :src="img" alt="product"></a>
                <div class="product_text"> <a href="single%20page.html">{{product.product_name}}</a>
                    <p>$ {{product.price}}</p> <img class="product_rating" src="img/rating.png" alt="rating"> </div>
                    <a class="product_basket" href="#" @click="cartAPI.addProduct(product)"><img src="img/cart_hover.svg" alt="img">
                        <p>Add to&nbsp;Cart</p>
                    </a>
            </div>
    `
});
