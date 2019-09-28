Vue.component('footerComp', {
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
             <footer>
                <footer class="comment">
                    <div class="comment_content container">
                        <div class="comment_left"> <img src="img/comment_user_img.png" alt="img">
                            <div class="comment_left_text">
                                <p>&laquo;Vestibulum quis porttitor dui! Quisque viverra nunc&nbsp;mi, a&nbsp;pulvinar purus condimentum&nbsp;a. Aliquam condimentum mattis neque sed pretium&raquo;</p>
                                <p>Bin Burhan</p>
                                <p>Dhaka, Bd</p>
                                <div class="comment_slider">
                                    <div class="comment_slider_white"></div>
                                    <div class="comment_slider_red"></div>
                                    <div class="comment_slider_white"></div>
                                </div>
                            </div>
                        </div> <img src="img/comment_hr.png" alt="img">
                        <div class="comment_right">
                            <p>Subscribe</p>
                            <p>FOR OUR NEWLETTER AND PROMOTION</p>
                            <form action="#" class="comment_form">
                                <input type="email" placeholder="Enter Your Email">
                                <a href="#" class="comment_button">Subscribe</a>
                            </form>
                        </div>
                    </div>
                </footer>
                <footer class="footer">
                    <div class="footer_top container">
                        <div class="footer_top_left">
                            <a href="index.html" class="logo_footer"><img src="img/logo_header.png" alt="logo">BRAN<span>D</span></a>
                            <p>Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate multidisciplinary materials before go&nbsp;forward benefits. Intrinsicly syndicate an&nbsp;expanded array of&nbsp;processes and cross-unit partnerships.</p>
                            <p>Efficiently plagiarize 24/365 action items and focused infomediaries. Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.</p>
                        </div>
                        <div class="footer_top_right">
                            <div class="footer_menu_top">
                                <p>COMPANY</p>
                                <ul class="footer_menu">
                                    <li><a href="#" @click="contentAPI.getSelected('index')">Home </a></li>
                                    <li><a href="#" @click="contentAPI.getSelected('index')">Shop</a></li>
                                    <li><a href="#" @click="contentAPI.getSelected('index')">About</a></li>
                                    <li><a href="#" @click="contentAPI.getSelected('index')">How It&nbsp;Works</a></li>
                                    <li><a href="#" @click="contentAPI.getSelected('index')">Contact</a></li>
                                </ul>
                            </div>
                            <div class="footer_menu_top">
                                <p>INFORMATION</p>
                                <ul class="footer_menu">
                                    <li><a href="#">Tearms &amp;&nbsp;Condition</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">How to&nbsp;Buy</a></li>
                                    <li><a href="#">How to&nbsp;Sell</a></li>
                                    <li><a href="#">Promotion</a></li>
                                </ul>
                            </div>
                            <div class="footer_menu_top">
                                <p>SHOP CATEGORY</p>
                                <ul class="footer_menu">
                                    <li><a href="#" @click="contentAPI.getSelected('catalog')">Men</a></li>
                                    <li><a href="#" @click="contentAPI.getSelected('catalog')">Women</a></li>
                                    <li><a href="#" @click="contentAPI.getSelected('catalog')">Child</a></li>
                                    <li><a href="#" @click="contentAPI.getSelected('catalog')">Apparel</a></li>
                                    <li><a href="#" @click="contentAPI.getSelected('catalog')">Brows All</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="footer_bottom">
                        <div class="footer_bottom_content container">
                            <p>&copy;&nbsp;2019 Brand All Rights Reserved.</p>
                            <div class="footer_link">
                                <a href="#" class="footer_social_link"><i class="facebook fab fa-facebook-f"></i></a>
                                <a href="#" class="footer_social_link"><i class="fab fa-twitter twitter"></i></a>
                                <a href="#" class="footer_social_link"><i class="fab fa-linkedin-in linkedin-in"></i></a>
                                <a href="#" class="footer_social_link"><i class="fab fa-pinterest-p pinterest-p"></i></a>
                                <a href="#" class="footer_social_link"><i class="fab fa-google-plus-g google-plus-g"></i></a>
                            </div>
                        </div>
                    </div>
                </footer>  
            </footer>
    `
});