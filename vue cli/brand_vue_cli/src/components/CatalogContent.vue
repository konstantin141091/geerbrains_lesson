<template>
    <main>
        <div class="new_arrivals">
            <div class="block_show_top container">
                <p>New Arrivals </p>
                <div class="block_show_menu"> <a href="#" @click="getSelected(index)">Home</a>&nbsp;/ <a href="#" @click="getSelected(catalog)">Men</a>&nbsp;/ <a class="show_menu_activ" href="#">New Arrivals</a> </div>
            </div>
        </div>
        <div class="catalog_block">
            <div class="catalog_block_content container">
                <div class="catalog_block_left">
                    <details class="catalog_details">
                        <summary>Category</summary>
                        <ul class="catalog_details_ul">
                            <li><a href="#">Accessories</a></li>
                            <li><a href="#">Bags</a></li>
                            <li><a href="#">Denim</a></li>
                            <li><a href="#">Hoodies &amp;&nbsp;Sweatshirts</a></li>
                            <li><a href="#">Jackets &amp;&nbsp;Coats</a></li>
                            <li><a href="#">Pants</a></li>
                            <li><a href="#">Polos</a></li>
                            <li><a href="#">Shirts</a></li>
                            <li><a href="#">Shoes</a></li>
                            <li><a href="#">Shorts</a></li>
                            <li><a href="#">Sweaters &amp;&nbsp;Knits</a></li>
                            <li><a href="#">T-Shirts</a></li>
                            <li><a href="#">Tanks</a></li>
                        </ul>
                    </details>
                    <details class="catalog_details">
                        <summary>BRAND</summary>
                        <ul class="catalog_details_ul">
                            <li><a href="#">Accessories</a></li>
                            <li><a href="#">Bags</a></li>
                            <li><a href="#">Denim</a></li>
                            <li><a href="#">Hoodies &amp;&nbsp;Sweatshirts</a></li>
                            <li><a href="#">Jackets &amp;&nbsp;Coats</a></li>
                            <li><a href="#">Pants</a></li>
                            <li><a href="#">Polos</a></li>
                            <li><a href="#">Shirts</a></li>
                            <li><a href="#">Shoes</a></li>
                            <li><a href="#">Shorts</a></li>
                            <li><a href="#">Sweaters &amp;&nbsp;Knits</a></li>
                            <li><a href="#">T-Shirts</a></li>
                            <li><a href="#">Tanks</a></li>
                        </ul>
                    </details>
                    <details class="catalog_details">
                        <summary>dESIGNER</summary>
                        <ul class="catalog_details_ul">
                            <li><a href="#">Accessories</a></li>
                            <li><a href="#">Bags</a></li>
                            <li><a href="#">Denim</a></li>
                            <li><a href="#">Hoodies &amp;&nbsp;Sweatshirts</a></li>
                            <li><a href="#">Jackets &amp;&nbsp;Coats</a></li>
                            <li><a href="#">Pants</a></li>
                            <li><a href="#">Polos</a></li>
                            <li><a href="#">Shirts</a></li>
                            <li><a href="#">Shoes</a></li>
                            <li><a href="#">Shorts</a></li>
                            <li><a href="#">Sweaters &amp;&nbsp;Knits</a></li>
                            <li><a href="#">T-Shirts</a></li>
                            <li><a href="#">Tanks</a></li>
                        </ul>
                    </details>
                </div>
                <div class="catalog_block_right">
                    <div class="catalog_setting">
                        <div class="catalog_setting_trend">
                            <h3>Trending now</h3>
                            <p>Bohemian <span>|</span> Floral <span>|</span> Lace</p>
                            <p>Floral <span>|</span> Lace <span>|</span> Bohemian</p>
                        </div>
                        <div class="catalog_setting_size">
                            <h3>Size</h3>
                            <form action="#">
                                <input class="styled-checkbox" id="styled-checkbox-1" type="checkbox" value="value1">
                                <label for="styled-checkbox-1">XXS</label>
                                <input class="styled-checkbox" id="styled-checkbox-2" type="checkbox" value="value2">
                                <label for="styled-checkbox-2">XS</label>
                                <input class="styled-checkbox" id="styled-checkbox-3" type="checkbox" value="value3">
                                <label for="styled-checkbox-3">S</label>
                                <input class="styled-checkbox" id="styled-checkbox-4" type="checkbox" value="value4">
                                <label for="styled-checkbox-4">M</label>
                            </form>
                            <form action="#">
                                <input class="styled-checkbox" id="styled-checkbox-5" type="checkbox" value="value5">
                                <label for="styled-checkbox-5">L</label>
                                <input class="styled-checkbox" id="styled-checkbox-6" type="checkbox" value="value6">
                                <label for="styled-checkbox-6">XL</label>
                                <input class="styled-checkbox" id="styled-checkbox-7" type="checkbox" value="value7">
                                <label for="styled-checkbox-7">XXL</label>
                            </form>
                        </div>
                        <div class="catalog_setting_price">
                            <h3>PRICE</h3>
                            <p>здесь на js</p>




                        </div>
                        <div class="catalog_setting_watch">
                            <div class="catalog_setting_sort">
                                <p>Sort By</p>
                                <select name="select">
                                    <option>Name</option>
                                    <option>Price</option>
                                    <option>Date</option>
                                    <option>Collection</option>
                                </select>
                            </div>
                            <div class="catalog_setting_show">
                                <p>SHOW</p>
                                <select name="select">
                                    <option>9</option>
                                    <option>12</option>
                                    <option>15</option>
                                    <option>18</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <products ref="products" :type="2"></products>
                    <div class="catalog_view">
                        <p>здесь на&nbsp;JS делют листают страницы просмотра</p> <a href="#" class="button_view_all">View All</a> </div>
                </div>
            </div>
        </div>
        <div class="catalog__block2">
            <div class="catalog__block2__content container">
                <div class="catalog__block2__info">
                    <img src="img/block3_logo1.png" alt="logo">
                    <h4>Free Delivery</h4>
                    <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                </div>
                <div class="catalog__block2__info">
                    <img src="img/block3_logo2.png" alt="logo">
                    <h4>Sales & discounts</h4>
                    <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                </div>
                <div class="catalog__block2__info">
                    <img src="img/block3_logo3.png" alt="logo">
                    <h4>Quality assurance</h4>
                    <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import products from '@/components/products.vue';
    export default {
        name: "CatalogContent",
        components: {
            products,
        },
    }
</script>

<style scoped lang="scss">


</style>