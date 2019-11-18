<template>
    <div>
        <div class="block2_products" v-if="type === 1">
            <product-item ref="refref" v-for="item of filtered" :key="item.id_product"
                          :product="item" v-if="item.url==='index'"></product-item>
        </div>
        <div class="catalog_products" v-if="type === 2">
            <product-item ref="refref" v-for="item of filtered" :key="item.id_product"
                          :product="item" v-if="item.category==='men'"></product-item>
        </div>
        <div class="single_page_products_box" v-if="type === 3">
            <product-item ref="refref" v-for="item of filtered" :key="item.id_product"
                     :product="item" v-if="item.url==='singlePage'"></product-item>
        </div>

    </div>
</template>

<script>
    import productItem from '@/components/productItem.vue';
    export default {
        name: "product",
        components:{
            productItem
        },
        props: ['type'],
        data(){
            return {
                catalogUrl: 'index',
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
            this.$root.$children[0].getJson('/api/products')
                .then(data => {
                    for(let el of data){
                        this.products.push(el);
                        this.filtered.push(el);
                    }
                });
        },
    }
</script>

<style scoped>
    .single_page_products_box {
        display: flex;
        justify-content: space-between;
        margin-top: 72px;
    }
</style>