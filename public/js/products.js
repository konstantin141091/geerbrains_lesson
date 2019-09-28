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
        this.catalogUrl = this.$root.$refs["content-main"].selected;
        this.$root.getJson('/api/products')
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
    template: `
                <div>
                    <div class="block2_products" v-if="catalogUrl==='index'">
                        <product ref="refref" v-for="item of filtered" :key="item.id_product" 
                        :img="item.img" :product="item" v-if="item.url==='index'"></product>
                    </div>
                    <div class="catalog_products" v-if="catalogUrl==='catalog'">
                        <product ref="refref" v-for="item of filtered" :key="item.id_product" 
                        :img="item.img" :product="item" v-if="item.category==='men'"></product>
                    </div>       
                    <div class="single_page_products_box" v-if="catalogUrl==='singlePage'">
                        <product ref="refref" v-for="item of filtered" :key="item.id_product" 
                        :img="item.img" :product="item" v-if="item.url==='singlePage'"></product>
                    </div>
                   
                </div>
                
         
    `
});
Vue.component('product', {
    props: ['product', 'img'],
    data() {
        return {
            cartAPI: this.$root.$refs["header-comp"].$refs.cart,
            contentAPI: '',
            singlePage: "singlePage",
        };
    },
    mounted() {
        this.contentAPI = this.$root.$refs["content-main"];
    },
    template: `
            <div class="block2_product">
                <div class="catalog_product_fon">
                    <a href="#" @click="contentAPI.getSelected(singlePage, product)"><img class="product_img" :src="img" alt="product"></a>
                </div>
                <div class="product_text"> <a href="#" @click="contentAPI.getSelected(singlePage)">{{product.product_name}}</a>
                    <p>$ {{product.price}}</p> <img class="product_rating" src="img/rating.png" alt="rating"> </div>
                    <a class="product_basket" @click="cartAPI.addProduct(product)"><img src="img/cart_hover.svg" alt="img">
                        <p>Add to&nbsp;Cart</p>
                    </a>
            </div>
    `
});
