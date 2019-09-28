Vue.component('contentMain', {
    data(){
        return {
            selected: "index",
            index: "index",
            catalog: "catalog",
            singlePage: "singlePage",
            cart: "cart",
            checkout: "checkout",
            singlePageProduct: "",

        }
    },
    methods: {
        getSelected(value, product) {
            if (product){
                this.singlePageProduct = product;
            }
            this.selected = value;

        },
    },
    mounted() {
    },
    template: `
              <div>
                <template v-if="selected===index">
                    <div class="promo">
                    <div class="promo_content container">
                        <div class="promo_text">
                            <p>THE BRAND</p>
                            <p>OF&nbsp;LUXERIOUS <span>FASHION</span></p>
                        </div>
                    </div>
                </div>
                    <div class="block1 container">
                        <div class="block1_left">
                            <div class="block1_img_big_left">
                                <div class="block1_text">
                                    <p>HOT DEAL</p>
                                    <p>FOR MEN</p>
                                </div>
                            </div>
                            <div class="block1_img_mini_left">
                                <div class="block1_text">
                                    <p>LUXIROUS &amp;&nbsp;trendy</p>
                                    <p>ACCESORIES</p>
                                </div>
                            </div>
                        </div>
                        <div class="block1_right">
                            <div class="block1_img_mini_right">
                                <div class="block1_text">
                                    <p>30% offer</p>
                                    <p>women</p>
                                </div>
                            </div>
                            <div class="block1_img_big_right">
                                <div class="block1_text">
                                    <p>new arrivals</p>
                                    <p>FOR kids</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="block2 container">
                        <div class="block2_header">
                            <h3>Fetured Items</h3>
                            <p>Shop for items based on&nbsp;what we&nbsp;featured in&nbsp;this week</p>
                        </div>
                        
                        <products ref="products"></products>
                        <div class="block2_buttom_div"> <a href="catalog.html" class="block2_buttom">Browse All Product</a> </div>
                    </div>      
                    <div class="block3">
                    <div class="block3_content container">
                        <div class="block3_left_text">
                            <p>30% <span>OFFER</span></p>
                            <p>FOR WOMEN</p>
                        </div>
                        <div class="block3_right">
                            <div class="block3_right_img"> <img src="img/block3_logo1.png" alt="img"> <img src="img/block3_logo2.png" alt="img"> <img src="img/block3_logo3.png" alt="img"> </div>
                            <div class="block3_right_text">
                                <p class="block3_right_text_top">Free Delivery</p>
                                <p class="block3_right_text_bottom">Worldwide delivery on&nbsp;all. Authorit tively morph next-generation innov tion with extensive models.</p>
                                <p class="block3_right_text_top">Sales &amp;&nbsp;discounts</p>
                                <p class="block3_right_text_bottom">Worldwide delivery on&nbsp;all. Authorit tively morph next-generation innov tion with extensive models.</p>
                                <p class="block3_right_text_top">Quality assurance</p>
                                <p class="block3_right_text_bottom">Worldwide delivery on&nbsp;all. Authorit tively morph next-generation innov tion with extensive models.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </template>
                <template v-if="selected===catalog">
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
                            <range ref="range"></range>
                            
                            
                            
                                                                                                                                                                     
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
                    <products ref="products"></products>
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
                </template>
                <template v-if="selected===singlePage">
                    <single-comp ref="single-comp" :singlePageProduct="singlePageProduct"></single-comp>
                </template>
                <template v-if="selected===cart">
                    <div class="new_arrivals">
                    <div class="block_show_top container">
                        <p>New Arrivals </p>
                    <div class="block_show_menu"> <a href="#" @click="getSelected(index)">Home</a>&nbsp;/ <a href="#" @click="getSelected(catalog)">Men</a>&nbsp;/ <a class="show_menu_activ" href="#">New Arrivals</a> </div>
                    </div>
                    </div>                 
                    <cart ref="cart" :type="2"></cart>   
                </template>
                <template v-if="selected===checkout">
                    <div class="new_arrivals">
                    <div class="block_show_top container">
                        <p>New Arrivals </p>
                    <div class="block_show_menu"> <a href="#" @click="getSelected(index)">Home</a>&nbsp;/ <a href="#" @click="getSelected(catalog)">Men</a>&nbsp;/ <a class="show_menu_activ" href="#">New Arrivals</a> </div>
                    </div>
                    </div>  
                    <div class="checkout container">
                        <details class="checkout__details">
                            <summary><span>01.</span>Shipping Adress</summary>
                            <div class="details__container">
                                <div class="details__left">
                                    <h3>Check as&nbsp;a&nbsp;guest or&nbsp;register</h3>
                                    <p class="details__p">Register with&nbsp;us for future convenience</p>
                                    <div class="control-group">
                                        <label class="control control-radio"> checkout as&nbsp;guest
                                            <input type="radio" name="radio" checked="checked" />
                                            <div class="control_indicator"></div>
                                        </label>
                                        <label class="control control-radio"> register
                                            <input type="radio" name="radio" />
                                            <div class="control_indicator"></div>
                                        </label>
                                    </div>
                                    <h3>register and save time!</h3>
                                    <p class="details__p">Register with&nbsp;us for future convenience</p>
                                    <p class="details__p">Fast and easy checkout</p>
                                    <p class="details__p">Easy access to&nbsp;your order history and status</p>
                                    <a href="#" class="checkout_button">Continue</a>
                                </div>
                                <div class="details__right">
                                    <h3>Already registed?</h3>
                                    <p class="details__p">Please log in&nbsp;below</p>
                                    <form action="#" class="details__form">
                                        <p class="details__form__p">EMAIL&nbsp;ADDRESS<span>*</span></p>
                                        <input type="email">
                                        <p class="details__form__p">PASSWORD<span>*</span></p>
                                        <input type="password">
                                    </form>
                                    <p class="details__righ__p">* Required Fileds</p>
                                    <div class="button">
                                        <a href="#" class="checkout_button">Log in</a>
                                        <a href="#"><p>Forgot Password ?</p></a>
                                    </div>
                                </div>
                            </div>
                        </details>
                        <details class="checkout__details">
                            <summary><span>02.</span>BILLING INFORMATION</summary>
                            <div class="details__container">
                                <div class="details__left">
                                    <h3>Check as&nbsp;a&nbsp;guest or&nbsp;register</h3>
                                    <p class="details__p">Register with&nbsp;us for future convenience</p>
                                    <div class="control-group">
                                        <label class="control control-radio"> checkout as&nbsp;guest
                                            <input type="radio" name="radio" checked="checked" />
                                            <div class="control_indicator"></div>
                                        </label>
                                        <label class="control control-radio"> register
                                            <input type="radio" name="radio" />
                                            <div class="control_indicator"></div>
                                        </label>
                                    </div>
                                    <h3>register and save time!</h3>
                                    <p class="details__p">Register with&nbsp;us for future convenience</p>
                                    <p class="details__p">Fast and easy checkout</p>
                                    <p class="details__p">Easy access to&nbsp;your order history and status</p>
                                    <a href="#" class="checkout_button">Continue</a>
                                </div>
                                <div class="details__right">
                                    <h3>Already registed?</h3>
                                    <p class="details__p">Please log in&nbsp;below</p>
                                    <form action="#" class="details__form">
                                        <p class="details__form__p">EMAIL&nbsp;ADDRESS<span>*</span></p>
                                        <input type="email">
                                        <p class="details__form__p">PASSWORD<span>*</span></p>
                                        <input type="password">
                                    </form>
                                    <p class="details__righ__p">* Required Fileds</p>
                                    <div class="button">
                                        <a href="#" class="checkout_button">Log in</a>
                                        <a href="#"><p>Forgot Password ?</p></a>
                                    </div>
                                </div>
                            </div>
                        </details>
                        <details class="checkout__details">
                            <summary><span>03.</span>SHIPPING INFORMATION</summary>
                            <div class="details__container">
                                <div class="details__left">
                                    <h3>Check as&nbsp;a&nbsp;guest or&nbsp;register</h3>
                                    <p class="details__p">Register with&nbsp;us for future convenience</p>
                                    <div class="control-group">
                                        <label class="control control-radio"> checkout as&nbsp;guest
                                            <input type="radio" name="radio" checked="checked" />
                                            <div class="control_indicator"></div>
                                        </label>
                                        <label class="control control-radio"> register
                                            <input type="radio" name="radio" />
                                            <div class="control_indicator"></div>
                                        </label>
                                    </div>
                                    <h3>register and save time!</h3>
                                    <p class="details__p">Register with&nbsp;us for future convenience</p>
                                    <p class="details__p">Fast and easy checkout</p>
                                    <p class="details__p">Easy access to&nbsp;your order history and status</p>
                                    <a href="#" class="checkout_button">Continue</a>
                                </div>
                                <div class="details__right">
                                    <h3>Already registed?</h3>
                                    <p class="details__p">Please log in&nbsp;below</p>
                                    <form action="#" class="details__form">
                                        <p class="details__form__p">EMAIL&nbsp;ADDRESS<span>*</span></p>
                                        <input type="email">
                                        <p class="details__form__p">PASSWORD<span>*</span></p>
                                        <input type="password">
                                    </form>
                                    <p class="details__righ__p">* Required Fileds</p>
                                    <div class="button">
                                        <a href="#" class="checkout_button">Log in</a>
                                        <a href="#"><p>Forgot Password ?</p></a>
                                    </div>
                                </div>
                            </div>
                        </details>
                        <details class="checkout__details">
                            <summary><span>04.</span>SHIPPING METHOD</summary>
                            <div class="details__container">
                                <div class="details__left">
                                    <h3>Check as&nbsp;a&nbsp;guest or&nbsp;register</h3>
                                    <p class="details__p">Register with&nbsp;us for future convenience</p>
                                    <div class="control-group">
                                        <label class="control control-radio"> checkout as&nbsp;guest
                                            <input type="radio" name="radio" checked="checked" />
                                            <div class="control_indicator"></div>
                                        </label>
                                        <label class="control control-radio"> register
                                            <input type="radio" name="radio" />
                                            <div class="control_indicator"></div>
                                        </label>
                                    </div>
                                    <h3>register and save time!</h3>
                                    <p class="details__p">Register with&nbsp;us for future convenience</p>
                                    <p class="details__p">Fast and easy checkout</p>
                                    <p class="details__p">Easy access to&nbsp;your order history and status</p>
                                    <a href="#" class="checkout_button">Continue</a>
                                </div>
                                <div class="details__right">
                                    <h3>Already registed?</h3>
                                    <p class="details__p">Please log in&nbsp;below</p>
                                    <form action="#" class="details__form">
                                        <p class="details__form__p">EMAIL&nbsp;ADDRESS<span>*</span></p>
                                        <input type="email">
                                        <p class="details__form__p">PASSWORD<span>*</span></p>
                                        <input type="password">
                                    </form>
                                    <p class="details__righ__p">* Required Fileds</p>
                                    <div class="button">
                                        <a href="#" class="checkout_button">Log in</a>
                                        <a href="#"><p>Forgot Password ?</p></a>
                                    </div>
                                </div>
                            </div>
                        </details>
                        <details class="checkout__details">
                            <summary><span>05.</span>PAYMENT METHOD</summary>
                            <div class="details__container">
                                <div class="details__left">
                                    <h3>Check as&nbsp;a&nbsp;guest or&nbsp;register</h3>
                                    <p class="details__p">Register with&nbsp;us for future convenience</p>
                                    <div class="control-group">
                                        <label class="control control-radio"> checkout as&nbsp;guest
                                            <input type="radio" name="radio" checked="checked" />
                                            <div class="control_indicator"></div>
                                        </label>
                                        <label class="control control-radio"> register
                                            <input type="radio" name="radio" />
                                            <div class="control_indicator"></div>
                                        </label>
                                    </div>
                                    <h3>register and save time!</h3>
                                    <p class="details__p">Register with&nbsp;us for future convenience</p>
                                    <p class="details__p">Fast and easy checkout</p>
                                    <p class="details__p">Easy access to&nbsp;your order history and status</p>
                                    <a href="#" class="checkout_button">Continue</a>
                                </div>
                                <div class="details__right">
                                    <h3>Already registed?</h3>
                                    <p class="details__p">Please log in&nbsp;below</p>
                                    <form action="#" class="details__form">
                                        <p class="details__form__p">EMAIL&nbsp;ADDRESS<span>*</span></p>
                                        <input type="email">
                                        <p class="details__form__p">PASSWORD<span>*</span></p>
                                        <input type="password">
                                    </form>
                                    <p class="details__righ__p">* Required Fileds</p>
                                    <div class="button">
                                        <a href="#" class="checkout_button">Log in</a>
                                        <a href="#"><p>Forgot Password ?</p></a>
                                    </div>
                                </div>
                            </div>
                        </details>
                        <details class="checkout__details">
                            <summary><span>06.</span>ORDER REVIEW</summary>
                            <div class="details__container">
                                <div class="details__left">
                                    <h3>Check as&nbsp;a&nbsp;guest or&nbsp;register</h3>
                                    <p class="details__p">Register with&nbsp;us for future convenience</p>
                                    <div class="control-group">
                                        <label class="control control-radio"> checkout as&nbsp;guest
                                            <input type="radio" name="radio" checked="checked" />
                                            <div class="control_indicator"></div>
                                        </label>
                                        <label class="control control-radio"> register
                                            <input type="radio" name="radio" />
                                            <div class="control_indicator"></div>
                                        </label>
                                    </div>
                                    <h3>register and save time!</h3>
                                    <p class="details__p">Register with&nbsp;us for future convenience</p>
                                    <p class="details__p">Fast and easy checkout</p>
                                    <p class="details__p">Easy access to&nbsp;your order history and status</p>
                                    <a href="#" class="checkout_button">Continue</a>
                                </div>
                                <div class="details__right">
                                    <h3>Already registed?</h3>
                                    <p class="details__p">Please log in&nbsp;below</p>
                                    <form action="#" class="details__form">
                                        <p class="details__form__p">EMAIL&nbsp;ADDRESS<span>*</span></p>
                                        <input type="email">
                                        <p class="details__form__p">PASSWORD<span>*</span></p>
                                        <input type="password">
                                    </form>
                                    <p class="details__righ__p">* Required Fileds</p>
                                    <div class="button">
                                        <a href="#" class="checkout_button">Log in</a>
                                        <a href="#"><p>Forgot Password ?</p></a>
                                    </div>
                                </div>
                            </div>
                        </details>
                    
                    </div>
                </template>
              </div>
    `
});