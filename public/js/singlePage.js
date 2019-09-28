Vue.component('singleComp', {
    props: ['singlePageProduct',],
    data(){
        return {
            contentAPI: '',
            quantityLine: 0,
            cartAPI: this.$root.$refs["header-comp"].$refs.cart,
        }
    },
    mounted() {
        this.contentAPI = this.$root.$refs["content-main"];
    },
    template: `
               <div>
                   <div class="block_show">
                   <div class="block_show_top">
                        <div class="block_show_top_content container">
                            <p>New Arrivals </p>
                            <div class="block_show_menu"> <a @click="contentAPI.getSelected('index')">Home</a>&nbsp;/ <a @click="contentAPI.getSelected('catalog')">Men</a>&nbsp;/ <a href="#">New Arrivals</a> </div>
                        </div>
                    </div>
                   <div class="block_show_bottom">
            <div class="show_bottom_content container"> <img :src="singlePageProduct.img" alt="img"> </div>
        </div>
                   </div>
                   <div class="show_info container">
                    <div class="show_info_text">
                        <p>WOMEN COLLECTION</p> <img src="img/show_info_hr_white.png" alt="img"> <img src="img/show_info_hr.png" alt="img">
                        <p>Moschino Cheap And Chic</p>
                        <p>Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals.</p>
                        <p>MATERIAL: <span>COTTON</span>DESIGNER: <span>BINBURHAN</span></p>
                        <p>$ {{ singlePageProduct.price }}</p> <img src="img/show_info_hr_long.png" alt="img"> 
                    </div>
    <div class="show_info_bottom">
        <div class="show_info_form">
            <p>CHOOSE COLOR</p>
            <select name="color_select" id="color">
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="black">Black</option>
            </select>
        </div>
        <div class="show_info_form">
            <p>CHOOSE SIZE</p>
            <select name="color_select" id="size">
                <option value="XXL">XXL</option>
                <option value="XL">XL</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
            </select>
        </div>
        <div class="show_info_form">
            <p>QUANTITY</p>
            <select name="color_select" id="quantify" v-model="quantityLine">
            <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
            </select>
        </div>
    </div>
    <a @click="cartAPI.addProduct(singlePageProduct, quantityLine)" class="show_info_button">
        <div class="show_info_button_div"> <img src="img/show_info_button_cut.png" alt="img">Add to&nbsp;Cart </div>
    </a>
</div>
                    <div class="single_page_products container">
                    <h3>you may like also</h3>
                    <products ref="products"></products>
                    </div>
               </div>
    `
});