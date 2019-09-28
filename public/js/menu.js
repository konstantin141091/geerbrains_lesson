Vue.component('menuBar', {
    data(){
        return {
            contentAPI: '',

        }
    },
    methods: {

    },
    mounted() {
        this.contentAPI = this.$root.$refs["content-main"];
    },
    template: `
       <nav>
            <div class="container">
                <ul class="menu">
                    <li class="menu_list"><a class="menu_link" @click="contentAPI.getSelected('index')">Home</a></li>
                    <li class="menu_list"><a class="menu_link" @click="contentAPI.getSelected('catalog')">Man</a>
                        <div class="drop">
                            <div class="drop_block">
                                <p>MAN</p>
                                <ul class="drop_menu">
                                    <li><a href="#">Dresses</a></li>
                                    <li><a href="#">Tops</a></li>
                                    <li><a href="#">Sweaters/Knits</a></li>
                                    <li><a href="#">Jackets/Coats</a></li>
                                    <li><a href="#">Blazers</a></li>
                                    <li><a href="#">Denim</a></li>
                                    <li><a href="#">Leggings/Pants</a></li>
                                    <li><a href="#">Skirts/Shorts</a></li>
                                    <li><a href="#">Accessories </a></li>
                                </ul>
                            </div>
                            <div class="drop_center">
                                <div class="drop_block">
                                    <p>MAN</p>
                                    <ul class="drop_menu">
                                        <li><a href="#">Dresses</a></li>
                                        <li><a href="#">Tops</a></li>
                                        <li><a href="#">Sweaters/Knits</a></li>
                                        <li><a href="#">Jackets/Coats</a></li>
                                    </ul>
                                </div>
                                <div class="drop_block">
                                    <p>MAN</p>
                                    <ul class="drop_menu">
                                        <li><a href="#">Dresses</a></li>
                                        <li><a href="#">Tops</a></li>
                                        <li><a href="#">Sweaters/Knits</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="drop_right">
                                <div class="drop_block">
                                    <p>MAN</p>
                                    <ul class="drop_menu">
                                        <li><a href="#">Dresses</a></li>
                                        <li><a href="#">Tops</a></li>
                                        <li><a href="#">Sweaters/Knits</a></li>
                                        <li><a href="#">Jackets/Coats</a></li>
                                    </ul>
                                </div>
                                <div class="drop_sale">
                                    <p>Super
                                        <br>sale!</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="menu_list"><a class="menu_link" @click="contentAPI.getSelected('catalog')">Women</a>
                        <div class="drop">
                            <div class="drop_block">
                                <p>MAN</p>
                                <ul class="drop_menu">
                                    <li><a href="#">Dresses</a></li>
                                    <li><a href="#">Tops</a></li>
                                    <li><a href="#">Sweaters/Knits</a></li>
                                    <li><a href="#">Jackets/Coats</a></li>
                                    <li><a href="#">Blazers</a></li>
                                    <li><a href="#">Denim</a></li>
                                    <li><a href="#">Leggings/Pants</a></li>
                                    <li><a href="#">Skirts/Shorts</a></li>
                                    <li><a href="#">Accessories </a></li>
                                </ul>
                            </div>
                            <div class="drop_center">
                                <div class="drop_block">
                                    <p>MAN</p>
                                    <ul class="drop_menu">
                                        <li><a href="#">Dresses</a></li>
                                        <li><a href="#">Tops</a></li>
                                        <li><a href="#">Sweaters/Knits</a></li>
                                        <li><a href="#">Jackets/Coats</a></li>
                                    </ul>
                                </div>
                                <div class="drop_block">
                                    <p>MAN</p>
                                    <ul class="drop_menu">
                                        <li><a href="#">Dresses</a></li>
                                        <li><a href="#">Tops</a></li>
                                        <li><a href="#">Sweaters/Knits</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="drop_right">
                                <div class="drop_block">
                                    <p>MAN</p>
                                    <ul class="drop_menu">
                                        <li><a href="#">Dresses</a></li>
                                        <li><a href="#">Tops</a></li>
                                        <li><a href="#">Sweaters/Knits</a></li>
                                        <li><a href="#">Jackets/Coats</a></li>
                                    </ul>
                                </div>
                                <div class="drop_sale">
                                    <p>Super
                                        <br>sale!</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="menu_list"><a class="menu_link" @click="contentAPI.getSelected('catalog')">Kids</a>
                        <div class="drop drop_position_center">
                            <div class="drop_block">
                                <p>MAN</p>
                                <ul class="drop_menu">
                                    <li><a href="#">Dresses</a></li>
                                    <li><a href="#">Tops</a></li>
                                    <li><a href="#">Sweaters/Knits</a></li>
                                    <li><a href="#">Jackets/Coats</a></li>
                                    <li><a href="#">Blazers</a></li>
                                    <li><a href="#">Denim</a></li>
                                    <li><a href="#">Leggings/Pants</a></li>
                                    <li><a href="#">Skirts/Shorts</a></li>
                                    <li><a href="#">Accessories </a></li>
                                </ul>
                            </div>
                            <div class="drop_center">
                                <div class="drop_block">
                                    <p>MAN</p>
                                    <ul class="drop_menu">
                                        <li><a href="#">Dresses</a></li>
                                        <li><a href="#">Tops</a></li>
                                        <li><a href="#">Sweaters/Knits</a></li>
                                        <li><a href="#">Jackets/Coats</a></li>
                                    </ul>
                                </div>
                                <div class="drop_block">
                                    <p>MAN</p>
                                    <ul class="drop_menu">
                                        <li><a href="#">Dresses</a></li>
                                        <li><a href="#">Tops</a></li>
                                        <li><a href="#">Sweaters/Knits</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="drop_right">
                                <div class="drop_block">
                                    <p>MAN</p>
                                    <ul class="drop_menu">
                                        <li><a href="#">Dresses</a></li>
                                        <li><a href="#">Tops</a></li>
                                        <li><a href="#">Sweaters/Knits</a></li>
                                        <li><a href="#">Jackets/Coats</a></li>
                                    </ul>
                                </div>
                                <div class="drop_sale">
                                    <p>Super
                                        <br>sale!</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="menu_list"><a class="menu_link" @click="contentAPI.getSelected('catalog')">Accoseriese</a>
                        <div class="drop drop_position_center">
                            <div class="drop_block">
                                <p>MAN</p>
                                <ul class="drop_menu">
                                    <li><a href="#">Dresses</a></li>
                                    <li><a href="#">Tops</a></li>
                                    <li><a href="#">Sweaters/Knits</a></li>
                                    <li><a href="#">Jackets/Coats</a></li>
                                    <li><a href="#">Blazers</a></li>
                                    <li><a href="#">Denim</a></li>
                                    <li><a href="#">Leggings/Pants</a></li>
                                    <li><a href="#">Skirts/Shorts</a></li>
                                    <li><a href="#">Accessories </a></li>
                                </ul>
                            </div>
                            <div class="drop_center">
                                <div class="drop_block">
                                    <p>MAN</p>
                                    <ul class="drop_menu">
                                        <li><a href="#">Dresses</a></li>
                                        <li><a href="#">Tops</a></li>
                                        <li><a href="#">Sweaters/Knits</a></li>
                                        <li><a href="#">Jackets/Coats</a></li>
                                    </ul>
                                </div>
                                <div class="drop_block">
                                    <p>MAN</p>
                                    <ul class="drop_menu">
                                        <li><a href="#">Dresses</a></li>
                                        <li><a href="#">Tops</a></li>
                                        <li><a href="#">Sweaters/Knits</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="drop_right">
                                <div class="drop_block">
                                    <p>MAN</p>
                                    <ul class="drop_menu">
                                        <li><a href="#">Dresses</a></li>
                                        <li><a href="#">Tops</a></li>
                                        <li><a href="#">Sweaters/Knits</a></li>
                                        <li><a href="#">Jackets/Coats</a></li>
                                    </ul>
                                </div>
                                <div class="drop_sale">
                                    <p>Super
                                        <br>sale!</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="menu_list"><a class="menu_link" @click="contentAPI.getSelected('catalog')">Featured</a>
                        <div class="drop drop_position_right">
                            <div class="drop_block">
                                <p>MAN</p>
                                <ul class="drop_menu">
                                    <li><a href="#">Dresses</a></li>
                                    <li><a href="#">Tops</a></li>
                                    <li><a href="#">Sweaters/Knits</a></li>
                                    <li><a href="#">Jackets/Coats</a></li>
                                    <li><a href="#">Blazers</a></li>
                                    <li><a href="#">Denim</a></li>
                                    <li><a href="#">Leggings/Pants</a></li>
                                    <li><a href="#">Skirts/Shorts</a></li>
                                    <li><a href="#">Accessories </a></li>
                                </ul>
                            </div>
                            <div class="drop_center">
                                <div class="drop_block">
                                    <p>MAN</p>
                                    <ul class="drop_menu">
                                        <li><a href="#">Dresses</a></li>
                                        <li><a href="#">Tops</a></li>
                                        <li><a href="#">Sweaters/Knits</a></li>
                                        <li><a href="#">Jackets/Coats</a></li>
                                    </ul>
                                </div>
                                <div class="drop_block">
                                    <p>MAN</p>
                                    <ul class="drop_menu">
                                        <li><a href="#">Dresses</a></li>
                                        <li><a href="#">Tops</a></li>
                                        <li><a href="#">Sweaters/Knits</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="drop_right">
                                <div class="drop_block">
                                    <p>MAN</p>
                                    <ul class="drop_menu">
                                        <li><a href="#">Dresses</a></li>
                                        <li><a href="#">Tops</a></li>
                                        <li><a href="#">Sweaters/Knits</a></li>
                                        <li><a href="#">Jackets/Coats</a></li>
                                    </ul>
                                </div>
                                <div class="drop_sale">
                                    <p>Super
                                        <br>sale!</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="menu_list"><a class="menu_link" @click="contentAPI.getSelected('catalog')">Hot Deals</a>
                        <div class="drop drop_position_right">
                            <div class="drop_block">
                                <p>MAN</p>
                                <ul class="drop_menu">
                                    <li><a href="#">Dresses</a></li>
                                    <li><a href="#">Tops</a></li>
                                    <li><a href="#">Sweaters/Knits</a></li>
                                    <li><a href="#">Jackets/Coats</a></li>
                                    <li><a href="#">Blazers</a></li>
                                    <li><a href="#">Denim</a></li>
                                    <li><a href="#">Leggings/Pants</a></li>
                                    <li><a href="#">Skirts/Shorts</a></li>
                                    <li><a href="#">Accessories </a></li>
                                </ul>
                            </div>
                            <div class="drop_center">
                                <div class="drop_block">
                                    <p>MAN</p>
                                    <ul class="drop_menu">
                                        <li><a href="#">Dresses</a></li>
                                        <li><a href="#">Tops</a></li>
                                        <li><a href="#">Sweaters/Knits</a></li>
                                        <li><a href="#">Jackets/Coats</a></li>
                                    </ul>
                                </div>
                                <div class="drop_block">
                                    <p>MAN</p>
                                    <ul class="drop_menu">
                                        <li><a href="#">Dresses</a></li>
                                        <li><a href="#">Tops</a></li>
                                        <li><a href="#">Sweaters/Knits</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="drop_right">
                                <div class="drop_block">
                                    <p>MAN</p>
                                    <ul class="drop_menu">
                                        <li><a href="#">Dresses</a></li>
                                        <li><a href="#">Tops</a></li>
                                        <li><a href="#">Sweaters/Knits</a></li>
                                        <li><a href="#">Jackets/Coats</a></li>
                                    </ul>
                                </div>
                                <div class="drop_sale">
                                    <p>Super
                                        <br>sale!</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>         
    `
});