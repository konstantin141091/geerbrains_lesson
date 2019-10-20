<template>
    <footer>
        <footer class="comment">
            <div class="comment_content container">
                <div class="comment_left"> <img src="../assets/img/comment_user_img.png" alt="img">
                    <div class="comment_left_text">
                        <p>“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”</p>
                        <p>Bin Burhan</p>
                        <p>Dhaka, Bd</p>
                        <div class="comment_slider">
                            <div class="comment_slider_white"></div>
                            <div class="comment_slider_red"></div>
                            <div class="comment_slider_white"></div>
                        </div>
                    </div>
                </div> <img src="../assets/img/comment_hr.png" alt="img">
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
                    <router-link to="/" class="logo_footer"><img src="../assets/img/logo_header.png" alt="logo">BRAN<span>D</span></router-link>
                    <p>Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded array of processes and cross-unit partnerships.</p>
                    <p>Efficiently plagiarize 24/365 action items and focused infomediaries. Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.</p>
                </div>
                <div class="footer_top_right">
                    <div class="footer_menu_top">
                        <p>COMPANY</p>
                        <ul class="footer_menu">
                            <li><router-link to="/">Home </router-link></li>
                            <li><router-link to="/catalog_page">Shop</router-link></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">How It Works</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div class="footer_menu_top">
                        <p>INFORMATION</p>
                        <ul class="footer_menu">
                            <li><a href="#">Tearms & Condition</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">How to Buy</a></li>
                            <li><a href="#">How to Sell</a></li>
                            <li><a href="#">Promotion</a></li>
                        </ul>
                    </div>
                    <div class="footer_menu_top">
                        <p>SHOP CATEGORY</p>
                        <ul class="footer_menu">
                            <li><router-link to="/catalog_page">Men</router-link></li>
                            <li><router-link to="/catalog_page">Women</router-link></li>
                            <li><router-link to="/catalog_page">Child</router-link></li>
                            <li><router-link to="/catalog_page">Apparel</router-link></li>
                            <li><router-link to="/catalog_page">Brows All</router-link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer_bottom">
                <div class="footer_bottom_content container">
                    <p>© 2019 Brand All Rights Reserved.</p>
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
</template>

<script>
    export default {
        name: "FooterComp"
    }
</script>

<style scoped>

</style>