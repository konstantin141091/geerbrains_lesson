Vue.component('search', {
    data(){
        return {
            searchLine: '',
            productAPI: '',
        }
    },
    methods: {

    },
    mounted() {

    },
    template: `
        <form action="#" class="form_logo" @submit.prevent="productAPI.filter(searchLine)">
                    <div class="buttom_browse_div">
                        <a href="#" class="button_browse">
                            Browse
                            <img src="img/browse_arrow.png" alt="img">
                        </a>
                        <div class="drop_browse">
                            <div class="drop_browse_block">
                                <p>Women</p>
                                <ul class="drop_browse_menu">
                                    <li><a class="drop_browse_link" href="#">Dresses</a></li>
                                    <li><a href="#" class="drop_browse_link" >Tops</a></li>
                                    <li><a href="#" class="drop_browse_link" >Sweaters/Knits</a></li>
                                    <li><a href="#" class="drop_browse_link" >Jackets/Coats</a></li>
                                    <li><a href="#" class="drop_browse_link" >Blazers</a></li>
                                    <li><a href="#" class="drop_browse_link" >Denim</a></li>
                                    <li><a href="#" class="drop_browse_link" >Leggings/Pants</a></li>
                                    <li><a href="#" class="drop_browse_link" >Skirts/Shorts</a></li>
                                    <li><a href="#" class="drop_browse_link" >Accessories </a></li>
                                </ul>
                            </div>
                            <div class="drop_browse_block">
                                <p>MEN</p>
                                <ul class="drop_browse_menu">
                                    <li><a class="drop_browse_link" href="#">Tees/Tank tops</a></li>
                                    <li><a href="#" class="drop_browse_link" >Shirts/Polos</a></li>
                                    <li><a href="#" class="drop_browse_link" >Sweaters</a></li>
                                    <li><a href="#" class="drop_browse_link" >Sweatshirts/Hoodies</a></li>
                                    <li><a href="#" class="drop_browse_link" >Blazers</a></li>
                                    <li><a href="#" class="drop_browse_link" >Jackets/vests</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <input type="search" class="logo_search" placeholder="Search for Item..." v-model="searchLine">
                    <a href="#" class="buttom_search"><img src="img/search_header.png" alt="img"></a>
                </form>
    `
});