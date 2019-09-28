Vue.component('headerComp', {
    data(){
        return {
            contentAPI: '',
            index: "index",
        }
    },
    methods: {

    },
    mounted() {
        this.contentAPI = this.$root.$refs["content-main"];
    },
    template: `
               <header class="header">
                    <div class="container header_content">
                        <div class="header_left">
                            <a class="logo_header" @click="contentAPI.getSelected(index)"><img src="img/logo_header.png" alt="logo">BRAN<span>D</span></a>
                            <search ref="search"></search>
                        </div>
                        <div class="header_right">
                        <div class="logo_basket_div">
                        <cart ref="cart" :type="1"></cart>
                        </div>
                        <a href="#" class="buttom_my_account">My&nbsp;Account
                        <img src="img/account_arrow.png" alt="img"></a> 
                        </div>
                     </div>
                     
                </header>
    `
});