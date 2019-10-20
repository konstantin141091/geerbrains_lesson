<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
    <router-view></router-view>
  </div>
</template>
<script>
    export default {
        name: 'home',
        methods: {
            getJson(url){
                return fetch(url)
                    .then(result => result.json())
                    .catch(error => {
                        this.$refs.error.setError(error);
                    })
            },
            postJson(url, data) {
                return fetch(url, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                }).then(result => result.json())
                    .catch(error => {
                        this.$refs.error.setError(error);
                    });
            },
            putJson(url, data) {
                return fetch(url, {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                }).then(result => result.json())
                    .catch(error => {
                        this.$refs.error.setError(error);
                    });
            },
            deleteJson(url, data) {
                return fetch(url, {
                    method: 'DELETE',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                }).then(result => result.json())
                    .catch(error => {
                        console.log(error);
                    });
            },
        },

    };
</script>

<style lang="scss">

  $color-pink: #f16d7f;

  * {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Lato', sans-serif;
  }
  a {
    text-decoration: none;
  }
  .container {
    margin: 0 auto;
    width: 1140px;
  }

  .header {
    position: fixed;
    width: 100%;
    z-index: 100;
    height: 100px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.17);
    border: 1px solid #ececec;
    background-color: #ffffff;
    .header_content{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
    }
    .header_left, .header_right {
      display: flex;
      align-items: center;
    }
  }

  .logo_header {
    display: flex;
    height: 51px;
    align-items: center;
    margin-right: 37px;
    color: #222222;
    font-size: 27px;
    font-weight: 300;
    line-height: 32px;
    text-transform: uppercase;
    letter-spacing: 0.68px;
    cursor: pointer;
  }

  .logo_header img {
    margin-right: 13px;
  }

  .logo_header span {
    color: $color-pink;
    font-weight: 400;
    letter-spacing: 0.68px;
  }

  .button_browse {
    display: block;
    width: 70px;
    height: 38px;
    border-radius: 3px 0 0 3px;
    border: 1px solid #e6e6e6;
    background-color: #f7f7f7;
    color: #222222;
    font-size: 14px;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: 0.35px;
    padding-left: 15px;
    .button_browse img {
      margin: 0 0 1px 3px;
    }
  }
  .form_logo {
    display: flex;
    align-items: center;
  }
  .logo_search {
    width: 280px;
    height: 40px;
    border: 1px solid #e6e6e6;
    background-color: #ffffff;
    border-left: none;
    border-right: none;
    color: #a4a4a4;
    font-size: 14px;
    font-weight: 300;
    line-height: 32px;
    padding-left: 16px;
    padding-right: 28px;
  }
  .buttom_search {
    display: block;
    border: 1px solid #e6e6e6;
    border-radius: 0 3px 3px 0;
  }
  .buttom_search img {
    margin: 10px 11px 10.4px 11px;
  }
  .logo_basket {
    margin-right: 26px;
  }
  .logo_basket img {
    transition: 1s;
  }
  .logo_basket img:hover {
    transform: rotate(360deg);
  }
  .logo_basket_div:hover .basket_drop {
    display: block;
  }
  .buttom_my_account {
    display: block;
    width: 111px;
    height: 38px;
    background-color: $color-pink;
    color: #ffffff;
    font-size: 15px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0.38px;
    padding-left: 19px;
  }
  .buttom_my_account img {
    margin: 0 0 1px 8px;
  }
  nav {
    position: fixed;
    width: 100%;
    margin-top: 100px;
    background-color: #ffffff;
    z-index: 80;
  }
  .menu {
    height: 51px;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .menu_link {
    color: #222222;
    font-size: 14px;
    font-weight: 700;
    line-height: 26px;
    padding: 20px 20px;
    text-transform: uppercase;
    cursor: pointer;
  }
  .menu_link:hover {
    color: $color-pink;
  }
  main {
    padding-top: 151px;
  }
  .promo {
    height: 614px;
    background-color: #e8e8e8;
  }
  .promo_content {
    background-image: url(assets/img/promo_img.jpg);
    height: 100%;
    background-position: 0 -51px;
  }
  .promo_text {
    float: left;
    margin-top: 224px;
    color: #222222;
    font-size: 40px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border-left: solid 12px $color-pink;
    line-height: 37px;
  }
  .promo_text p:first-child {
    color: #222222;
    font-weight: 400;
    font-size: 60px;
    letter-spacing: 1.5px;
    margin-bottom: 20px;
    line-height: 40px;
  }
  .promo_text span {
    color: $color-pink;
    letter-spacing: 1px;
  }
  .promo_text p {
    margin-left: 12px;
  }
  .block1 {
    height: 1021px;
    display: flex;
    justify-content: space-between;
  }
  .block1_img_big_left {
    width: 560px;
    height: 542px;
    background-image: url(assets/img/block1_img_big_left.jpg);
  }
  .block1_img_mini_left {
    width: 560px;
    height: 261px;
    background-color: #dadad2;
    background-image: url(assets/img/block1_img_mini_left.jpg);
    background-repeat: no-repeat;
    background-position: 149px;
  }
  .block1_img_mini_right {
    width: 560px;
    height: 261px;
    background-image: url(assets/img/block1_img_mini_right.jpg);
  }
  .block1_img_big_right {
    width: 560px;
    height: 542px;
    background-image: url(assets/img/block1_img_big_right.jpg);
  }
  .block1_left {
    margin-top: 98px;
  }
  .block1_right {
    margin-top: 98px;
  }
  .block1_left div:first-child {
    margin-bottom: 20px;
  }
  .block1_right div:first-child {
    margin-bottom: 20px;
  }
  .block1_text {
    float: left;
    background-color: #ffffff;
    padding: 16px 20px;
    margin-top: 26px;
  }
  .block1_text p {
    font-weight: 400;
    color: $color-pink;
    font-size: 30px;
    letter-spacing: 0.75px;
    text-transform: uppercase;
  }
  .block1_text p:first-child {
    color: #222222;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0.45px;
  }
  .block2 {
    height: 1072px;
  }
  .block2_header {
    text-align: center;
    margin-bottom: 60px;
  }
  .block2_header h3 {
    color: #222222;
    font-size: 30px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.75px;
    margin-bottom: 16px;
  }
  .block2_header p {
    color: #9f9f9f;
    font-size: 14px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0.35px;
  }
  .block2_buttom {
    display: block;
    width: 188px;
    height: 48px;
    background-color: $color-pink;
    color: #ffffff;
    font-size: 16px;
    font-weight: 700;
    line-height: 47px;
    letter-spacing: 0.4px;
    text-decoration: none;
    padding-left: 24px;
    transition: 0.5s;
  }
  .block2_buttom:hover {
    background-image: url(assets/img/block2_buttom_arrow.png);
    background-repeat: no-repeat;
    background-position: 178px 21px;
    transform: scale(1.1);
  }
  .block2_buttom_div {
    display: flex;
    justify-content: center;
    margin-top: 19px;
  }
  .block3 {
    height: 626px;
  }
  .block3_content {
    height: 529px;
    background: #222224;
    background-image: url(assets/img/block3_content.png);
    background-repeat: no-repeat;
  }
  .block3_left_text {
    float: left;
    margin: 146px 0 0 39px;
    color: #ffffff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 32px;
    letter-spacing: 0.9px;
  }
  .block3_left_text p:first-child {
    color: #ffffff;
    font-size: 54px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    line-height: 38px;
  }
  .block3_left_text span {
    color: $color-pink;
    letter-spacing: 1.5px;
  }
  .block3_right {
    display: flex;
  }
  .block3_right_img img {
    display: flex;
    flex-direction: column;
  }
  .block3_right_img img:nth-child(2) {
    margin: 124px 0 114px 0;
  }
  .block3_right_text .block3_right_text_top:nth-child(2) {
    margin-top: 62px;
  }
  .block3_right_text_top {
    color: #fbfbfb;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.5px;
    margin-bottom: 17px;
    line-height: 1;
  }
  .block3_right_text_bottom {
    color: #fbfbfb;
    width: 219px;
    font-size: 14px;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: 0.35px;
  }
  .block3_right_img {
    margin: 48px 0 0 471px;
  }
  .block3_right_text {
    margin: 55px 0 0 33px;
  }
  .block3_right_text p:nth-child(3) {
    margin-top: 48px;
  }
  .block3_right_text p:nth-child(5) {
    margin-top: 48px;
  }
  .comment {
    height: 438px;
    background-image: url(assets/img/comment_fon.png);
    background-repeat: no-repeat;
    background-position: center;
  }
  .comment_left p {
    width: 386px;
  }
  .comment_left img {
    height: 83px;
  }
  .comment_content {
    display: flex;
    justify-content: space-between;
  }
  .comment_left {
    display: flex;
    margin-top: 111px;
  }
  .comment_left_text {
    margin: 5px 0 0 28px;
  }
  .comment_left_text p:first-child {
    color: #222224;
    font-size: 16px;
    font-style: italic;
    line-height: 26px;
    letter-spacing: 0.4px;
  }
  .comment_left_text p:nth-child(2) {
    color: $color-pink;
    font-size: 16px;
    font-weight: 900;
    letter-spacing: 0.4px;
    line-height: 26px;
  }
  .comment_left_text p:nth-child(3) {
    color: #222224;
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 0.3px;
    line-height: 14px;
  }
  .comment_right {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 148px;
  }
  .comment_right p:first-child {
    color: #222224;
    font-weight: 400;
    font-size: 24px;
    letter-spacing: 0.6px;
    text-transform: uppercase;
  }
  .comment_right p:nth-child(2) {
    color: #222224;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.35px;
    line-height: 24px;
    text-transform: uppercase;
  }
  .comment_form input {
    height: 46px;
    width: 236px;
    border-radius: 23px 0 0 23px;
    border: none;
    background-color: #e1e1e1;
    opacity: 0.67;
    color: #222224;
    font-size: 14px;
    font-weight: 400;
    line-height: 54px;
    letter-spacing: 0.35px;
    padding-left: 28px;
    padding-right: 28px;
    outline: none;
  }
  .comment_button {
    width: 74px;
    display: block;
    padding: 14px 20px;
    border-radius: 0 23px 23px 0;
    background-color: $color-pink;
    color: #ffffff;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.35px;
    text-decoration: none;
  }
  .comment_form {
    display: flex;
    margin-top: 17px;
  }
  .comment_slider_white {
    width: 38px;
    height: 4px;
    background-color: #d6d6d6;
  }
  .comment_slider_red {
    width: 38px;
    height: 4px;
    background-color: $color-pink;
    margin: 0 13px;
  }
  .comment_slider {
    margin-top: 41px;
    display: flex;
  }
  .footer_top {
    height: 458px;
    display: flex;
  }
  .logo_footer {
    display: flex;
    height: 51px;
    align-items: center;
    text-decoration: none;
    color: #222222;
    font-size: 27px;
    font-weight: 300;
    line-height: 32px;
    text-transform: uppercase;
    letter-spacing: 0.68px;
    margin-bottom: 17px;
  }
  .logo_footer span {
    color: $color-pink;
    font-weight: 400;
    letter-spacing: 0.68px;
  }
  .logo_footer img {
    margin-right: 13px;
  }
  .footer_top_left p {
    width: 427px;
    color: #898989;
    font-size: 14px;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: 0.35px;
    margin-bottom: 25px;
  }
  .footer_menu li {
    list-style: none;
  }
  .footer_top_right {
    display: flex;
    margin: 123px 0 0 63px;
  }
  .footer_menu_top p {
    color: $color-pink;
    font-size: 18px;
    font-weight: 700;
    line-height: 4px;
    text-transform: uppercase;
    letter-spacing: 0.45px;
    margin-bottom: 45px;
  }
  .footer_menu li a {
    display: block;
    text-decoration: none;
    color: #898989;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.4px;
  }
  .footer_menu li {
    margin-bottom: 21px;
  }
  .footer_top_right .footer_menu_top:nth-child(2) {
    margin: 0 80px 0 129px;
  }
  .footer_top_left {
    margin-top: 109px;
  }
  .footer_bottom_content {
    height: 100%;
    display: flex;
    justify-content: space-between;
  }
  .footer_social_link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    margin-left: 8px;
    text-decoration: none;
    background-color: #ffffff;
  }
  .footer_social_link:hover {
    background-color: $color-pink;
    i {
      color: #f7f7f8;
    }
  }
  .footer_bottom_content p {
    color: #7a7a7a;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.4px;
    margin-top: 33px;
  }
  .footer_link {
    display: flex;
    align-items: center;
  }

  .footer_bottom {
    height: 79px;
    background-color: #e6e6e6;
  }
  .footer_menu li a:hover {
    color: $color-pink;
  }
  .block2_product {
    width: 263px;
    position: relative;
    margin-bottom: 39px;
    transition: 0.5s;
  }
  .block2_product:hover {
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.16);
    transform: scale(1.1);
  }
  .block2_product:hover .product_basket {
    display: block;
  }
  .block2_product:hover .product_rating {
    display: block;
  }
  .block2_product:hover .product_img {
    filter: brightness(35%);
  }
  .product_img {
    width: 100%;
  }
  .product_basket {
    display: block;
    width: 123px;
    height: 39px;
    border: 1px solid #ffffff;
    text-decoration: none;
    position: absolute;
    top: 98px;
    left: 70px;
    color: #ffffff;
    font-size: 13px;
    font-weight: 700;
    line-height: 39px;
    display: none;
    cursor: pointer;
  }
  .product_basket img {
    margin: 10px 0 0 12px;
    float: left;
  }
  .product_basket p {
    float: left;
    line-height: 40px;
    margin-left: 6px;
  }
  .product_text a {
    color: #222222;
    font-size: 13px;
    font-weight: 400;
    text-transform: uppercase;
    text-decoration: none;
    margin: 17px 0 0 15px;
    display: block;
  }
  .product_text p {
    color: $color-pink;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    margin: 17px 0 21px 17px;
    float: left;
  }
  .product_rating {
    float: right;
    margin: 19px 13px 0 0;
    display: none;
  }
  .block2_products {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .drop {
    position: absolute;
    top: 30px;
    border-radius: 5px;
    background-color: #ffffff;
    border: 1px solid #e6e6e6;
    padding: 10px 25px 10px 25px;
    display: none;
    z-index: 100;
  }
  .drop:before {
    content: '';
    display: block;
    width: 12px;
    height: 12px;
    background-color: #fff;
    position: absolute;
    top: -7px;
    left: 28px;
    transform: rotate(45deg);
    border-top: solid 1px #e8e8e8;
    border-left: solid 1px #e8e8e8;
  }
  .drop_menu {
    list-style-type: none;
    margin-top: 9px;
  }
  .drop_menu li a {
    text-decoration: none;
    color: #646464;
    font-size: 14px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.35px;
  }
  .drop_menu li a:hover {
    color: $color-pink;
  }
  .drop_block p {
    color: #232323;
    font-size: 14px;
    font-weight: 400;
    line-height: 32px;
    text-transform: uppercase;
    letter-spacing: 0.35px;
    border-bottom: solid 1px #e8e8e8;
  }
  .drop_block {
    width: 235px;
  }
  .drop_center .drop_block:nth-child(2) {
    margin-top: 14px;
  }
  .drop_center {
    margin: 0 46px 0 46px;
  }
  .drop_sale {
    width: 255px;
    height: 118px;
    background-image: url(assets/img/drop_img.jpg);
    margin-top: 18px;
  }
  .drop_sale p {
    color: #ffffff;
    font-size: 22px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.55px;
    float: right;
    margin-top: 60px;
  }
  .menu_list {
    position: relative;
  }
  .menu_list:hover .drop {
    display: flex;
  }
  .drop_position_right {
    right: -15px !important;
  }
  .drop_position_right:before {
    left: 781px;
  }
  .drop_position_center {
    left: -190px !important;
  }
  .drop_position_center:before {
    left: 215px;
  }
  .basket_drop {
    border-radius: 5px;
    background-color: #ffffff;
    border: solid 1px #e8e8e8;
    position: absolute!important;
    top: 54px;
    left: -16px;
    padding: 21px 16px;
  }
  .basket_drop_product_text a {
    color: #222222;
    font-size: 12px;
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;
  }
  .basket_drop_product {
    display: flex;
    border-bottom: solid 1px #e8e8e8;
    padding: 0 0 14px 0;
    margin-bottom: 16px;
  }
  .basket_drop_product_img {
    width: 72px;
    height: 85px;
  }
  .basket_drop_product_text p {
    color: $color-pink;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 10px;
  }
  .basket_drop_product_text {
    margin: 10px 52px 0 14px;
    width: 75px;
    display: flex;
    flex-direction: column;
  }
  .basket_drop_product_text img {
    width: 56px;
    margin: 10px 0 12px 0;
  }
  .basket_drop_i {
    margin-top: 34px;
  }
  .basket_drop_i:hover {
    color: $color-pink;
  }
  .basket_drop_summa p {
    color: #222222;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
  }
  .basket_drop_summa {
    display: flex;
    justify-content: space-between;
  }
  .basket_drop_buttom_block {
    display: flex;
    flex-direction: column;
    margin-top: 32px;
  }
  .basket_drop_buttom_block .basket_drop_buttom:first-child {
    margin-bottom: 11px;
  }
  .basket_drop_buttom {
    display: flex;
    width: 225px;
    height: 50px;
    border: 1px solid #eaeaea;
    background-color: #ffffff;
    color: #4a4a4a;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .basket_drop_buttom:hover {
    border: solid 1px $color-pink;
    color: $color-pink;
  }
  .basket_drop:before {
    content: '';
    display: block;
    width: 12px;
    height: 12px;
    background-color: #fff;
    position: absolute;
    top: -7px;
    left: 28px;
    transform: rotate(45deg);
    border-top: solid 1px #e8e8e8;
    border-left: solid 1px #e8e8e8;
  }
  .logo_basket_div:hover .basket_drop {
    display: block;
    position: relative;
  }
  .logo_basket_div {
    position: relative;
    height: 60px;
    display: flex;
    align-items: center;
  }
  .drop_browse {
    position: absolute;
    border-radius: 5px;
    background-color: #ffffff;
    border: solid 1px #e8e8e8;
    padding: 4px 13px 11px 13px;
    width: 238px;
    display: none;
  }
  .drop_browse:before {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    background-color: #fff;
    position: absolute;
    top: -6px;
    left: 68px;
    transform: rotate(45deg);
    border-top: solid 1px #e8e8e8;
    border-left: solid 1px #e8e8e8;
  }
  .drop_browse .drop_browse_block:nth-child(2) {
    margin-top: 15px;
  }
  .drop_browse_menu {
    list-style-type: none;
    margin-left: 5px;
  }
  .drop_browse_link {
    text-decoration: none;
    color: #4f4f4f;
    font-size: 14px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.35px;
  }
  .drop_browse_link:hover {
    color: $color-pink;
  }
  .drop_browse_block p {
    border-bottom: solid 1px #e8e8e8;
  }
  .buttom_browse_div:hover .drop_browse {
    display: block;
    z-index: 999;
  }
  .drop_browse_block p {
    color: #232323;
    font-size: 14px;
    font-weight: 400;
    line-height: 32px;
    text-transform: uppercase;
    letter-spacing: 0.35px;
  }
  .buttom_browse_div {
    position: relative;
  }
  .footer_social_link i {
    color: #b2b2b2;
  }

  .new_arrivals {
    background-color: #f8f3f4;
    height: 148px;
  }
  .block_show_top p {
    color: $color-pink;
    font-size: 24px;
    font-weight: 400;
    line-height: 20px;
    text-transform: uppercase;
  }
  .block_show_menu a {
    text-decoration: none;
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
    text-transform: uppercase;
    color: #636363;
  }
  .block_show_menu a:hover {
    color: $color-pink;
  }
  .block_show_top {
    height: 148px;
    background-color: #f8f3f4;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .block_show_top a:last-child {
    font-weight: 700;
    color: $color-pink;
  }
  .cart_button {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    width: 233px;
    height: 50px;
    border: 1px solid #eaeaea;
    background-color: #ffffff;
    color: #4a4a4a;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
  }
  .cart_button:hover {
    border: 1px solid $color-pink;
    color: $color-pink;
  }
  .cart_forms {
    margin-top: 63px;
    display: flex;
    justify-content: space-between;
  }
  .cart_forms h3 {
    color: #222222;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
  }
  .cart_form2 input {
    width: 317px;
    height: 43px;
    border: 1px solid #eaeaea;
    background-color: #ffffff;
    color: #b1b1b1;
    outline: none;
    font-size: 13px;
    font-weight: 300;
    padding-left: 18px;
    padding-right: 18px;
  }

  .fa-times-circle {
    color: #c0c0c0;
    transition: 0.5s;
  }

  .fa-times-circle:hover {
    color: $color-pink;
    transform: scale(1.5);
  }
  .catalog_block_content {
      height: 1644px;
      display: flex;
  }
  .catalog_block_left {
      width: 243px;
      margin-top: 59px;
  }
  .catalog_details summary {
      border-left: solid 5px #ef5b70;
      border-bottom: solid 1px #e8e8e8;
      color: #ef5b70;
      font-size: 14px;
      font-weight: 700;
      line-height: 20px;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 37px;
      padding-left: 11px;
  }
  .catalog_details_ul {
      list-style-type: none;
      margin: 9px 0 0 22px;
  }
  .catalog_details_ul li a {
      text-decoration: none;
      color: #6f6e6e;
      font-size: 14px;
      font-weight: 400;
      line-height: 33px;
  }
  .catalog_details_ul li a:hover {
      color: #ef5b70;
  }
  .catalog_details {
      margin-bottom: 18px;
      cursor: pointer;
      width: 237px;
  }
  details:focus,
  summary:focus {
      outline: 0;
      outline: none;
  }
  .catalog_setting {
      height: 245px;
      margin-left: 50px;
      margin-top: 71px;
  }
  .catalog_setting_trend h3 {
      color: #6f6e6e;
      font-size: 14px;
      font-weight: 700;
      line-height: 20px;
      text-transform: uppercase;
      margin-bottom: 25px;
  }
  .catalog_setting_trend p {
      color: #6f6e6e;
      font-size: 14px;
      font-weight: 400;
      line-height: 26px;
  }
  .catalog_setting_trend p span {
      color: #dfdfdf;
      margin: 0 9px;
  }
  .catalog_setting_size form {
      color: #6f6e6e;
      font-family: "Open Sans";
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      text-transform: uppercase;
      display: flex;
  }
  .catalog_setting_size h3 {
      color: #6f6e6e;
      font-size: 14px;
      font-weight: 700;
      line-height: 20px;
      text-transform: uppercase;
      margin-bottom: 27px;
  }
  .catalog_setting_size form:nth-child(2) {
      margin-top: 10px;
  }
  /* Base for label styling */
  [type="checkbox"]:not(:checked),
  [type="checkbox"]:checked {
      position: absolute;
      left: -9999px;
  }
  [type="checkbox"]:not(:checked) + label,
  [type="checkbox"]:checked + label {
      position: relative;
      padding-left: 25px;
      cursor: pointer;
      margin-bottom: 5px;
      display: inline-block;
      font-size: 14px;
      color: #6f6e6e;
      font-family: "Open Sans";
      font-weight: 400;
      line-height: 22px;
      text-transform: uppercase;
      width: 44px;
  }
  /* checkbox aspect */
  [type="checkbox"]:not(:checked) + label:before,
  [type="checkbox"]:checked + label:before {
      content: '';
      position: absolute;
      left: 5px;
      top: 4px;
      width: 11px;
      height: 11px;
      border: 1px solid #ebebeb;
      background: #ffffff;
      border-radius: 0;
  }
  /* checked mark aspect */
  [type="checkbox"]:not(:checked) + label:after,
  [type="checkbox"]:checked + label:after {
      content: '\2713';
      position: absolute;
      top: 0;
      left: 6px;
      font-size: 15px;
      line-height: 1.4;
      color: #000000;
      transition: all .2s;

  }
  /* checked mark aspect changes */
  [type="checkbox"]:not(:checked) + label:after {
      opacity: 0;
      transform: scale(0);
  }
  [type="checkbox"]:checked + label:after {
      opacity: 1;
      transform: scale(1);
  }
  /* disabled checkbox */
  [type="checkbox"]:disabled:not(:checked) + label:before,
  [type="checkbox"]:disabled:checked + label:before {
      box-shadow: none;
      border-color: #fff9f9;
      background-color: #ffffff;
  }
  [type="checkbox"]:disabled:checked + label:after {
      color: #fff9f9;
  }
  [type="checkbox"]:disabled + label {
      color: #aaaaaa;
  }
  /* accessibility */
  [type="checkbox"]:checked:focus + label:before,
  [type="checkbox"]:not(:checked):focus + label:before {
      border: 2px dotted #ffffff;
  }
  /* hover style just for information */
  .catalog_setting_price h3 {
      color: #6f6e6e;
      font-size: 14px;
      font-weight: 700;
      line-height: 20px;
      text-transform: uppercase;
  }
  .catalog_setting_size {
      float: left;
      margin-left: 114px;
      margin-right: 10px;
  }
  .catalog_setting_trend {
      float: left;
  }
  .catalog_setting_price {
      float: left;
      width: 262px;
  }
  .catalog_setting_watch {
      height: 50px;
      background-color: #f3f3f3;
      float: left;
      width: 100%;
      margin-top: 34px;
      display: flex;
      align-items: center;
  }
  .catalog_setting_sort {
      width: 153px;
      height: 30px;
      border: 1px solid #ebebeb;
      background-color: #ffffff;
      color: #6f6e6e;
      font-size: 14px;
      font-weight: 400;
      line-height: 26px;
      display: flex;
      align-items: center;
      margin: 0 10px 0 9px;
  }
  .catalog_setting_sort p {
      margin-left: 13px;
      border-right: 1px solid #ebebeb;
      height: 100%;
      padding-top: 3px;
      padding-right: 8px;
  }
  .catalog_setting_sort select {
      color: #6f6e6e;
      font-size: 14px;
      font-weight: 400;
      line-height: 26px;
      border: none;
      outline: none;
      margin-left: 4px;
      width: 82px;
      height: 30px;
  }
  /*This will work for firefox*/
  @-moz-document url-prefix() {
      .catalog_setting_sort select{
          -moz-appearance: none;
          -webkit-appearance: none;
          appearance: none;
          background: transparent url('assets/img/arrow_sort.png') no-repeat right center;
          padding: 2px 30px 2px 2px;
          border: none;
          width: 71px;
          margin-right: 6px;
      }
      .catalog_setting_show select {
          -moz-appearance: none;
          -webkit-appearance: none;
          appearance: none;
          background: transparent url('assets/img/arrow_sort.png') no-repeat right center;
          padding: 2px 30px 2px 2px;
          border: none;
          margin-right: 3px;
      }
  }
  .catalog_setting_show p {
      color: #6f6e6e;
      font-size: 14px;
      font-weight: 400;
      line-height: 26px;
      margin-left: 12px;
      border-right: 1px solid #ebebeb;
      height: 100%;
      padding-top: 5px;
      padding-right: 9px;
  }
  .catalog_setting_show {
      width: 119px;
      height: 30px;
      border: 1px solid #ebebeb;
      background-color: #ffffff;
      display: flex;
      align-items: center;
  }
  .catalog_setting_show select {
      border: none;
      outline: none;
      color: #6f6e6e;
      font-size: 14px;
      font-weight: 400;
      line-height: 26px;
      margin-left: 8px;
      height: 30px;
  }
  .catalog_product {
      height: 364px;
  }
  .catalog_product_fon {
      width: 263px;
      height: 277px;
      background-color: #e9e9e9;
      display: flex;
      justify-content: center;
  }
  .block2_product:hover .catalog_product_fon {
      filter: brightness(35%);
  }
  .block2_product:hover .catalog_img_hover {
      filter: brightness(95%) !important;
  }
  .catalog_img {
      width: 100%;
      height: 277px;
  }
  .button_view_all {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 150px;
      height: 44px;
      border-radius: 3px;
      border: 1px solid #eaeaea;
      background-color: #ffffff;
      text-decoration: none;
      color: #4a4a4a;
      font-size: 16px;
      font-weight: bold;
      transition: 0.5s;
  }
  .button_view_all:hover {
      border: 1px solid #ef5b70;
      color: #ef5b70;
      transform: scale(1.1);
  }
  .catalog_view {
      display: flex;
      justify-content: space-between;
      margin-left: 49px;
  }

  .catalog__block2 {
      display: flex;
      align-items: center;
      &__content {
          display: flex;
          justify-content: space-between;
      }
      height: 341px;
      background-color: #222224;
      &__info {
          width: 309px;
          color: #f1f1f1;
          display: flex;
          flex-direction: column;
          align-items: center;
          & h4 {
              font-size: 20px;
              margin: 32px 0 17px 0;
          }
          & p {
              font-size: 14px;
          }
      }
  }
  .catalog_products {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-left: 49px;
  }
  .cart_block {
      padding-top: 90px;
      padding-bottom: 90px;
  }
  .cart_h3 {
      color: #222222;
      font-size: 13px;
      font-weight: 700;
      line-height: 20px;
      text-transform: uppercase;
      letter-spacing: -0.2px;
      border-bottom: 1px solid #eaeaea;
      padding-bottom: 36px;
  }
  .cart_h3 {
      display: flex;
      justify-content: space-between;
  }
  //.cart_products {
  //  height: 713px;
  //}
  .cart_h3_right {
      display: flex;
  }
  .cart_h3_right h3:nth-child(4) {
      margin-left: 83px;
      margin-right: 53px;
  }

  .cart_h3_right h3:nth-child(2) {
      margin-left: 96px;
      margin-right: 77px;
  }
  .cart_product {
      padding: 22px 0 25px 0;
      border-bottom: 1px solid #eaeaea;
      display: flex;
      justify-content: space-between;
      margin-bottom: 4px;
  }
  .cart_product_text_a {
      display: block;
      text-decoration: none;
      color: #222222;
      font-size: 13px;
      font-weight: 400;
      text-transform: uppercase;
      margin-bottom: 32px;
  }
  .cart_product_text p {
      color: #6f6e6e;
      font-size: 13px;
      font-weight: 300;
      line-height: 20px;
  }
  .cart_product_text p span {
      font-weight: 400;
      color: #575757;
      font-family: "Lato - Regular";
      margin-right: 4px;
  }
  .cart_product_right {
      display: flex;
  }
  .cart_product_right img {
      width: 100px;
      height: 115px;
  }
  .cart_product_right img:hover {
      filter: brightness(35%);
  }
  .cart_product_right a:hover {
      color: #f16d7f;
  }
  .cart_product_text {
      margin-top: 13px;
      margin-left: 21px;
  }
  .cart_product_left {
      display: flex;
      align-items: center;
      padding-right: 18px;
  }
  .cart_product_left p {
      color: #656565;
      font-size: 13px;
      font-weight: 400;
  }
  .cart_product_left p:nth-child(4) {
      margin-right: 101px;
      margin-left: 125px;
  }
  .cart_product_left input {
      width: 38px;
      height: 30px;
      border: 1px solid #eaeaea;
      background-color: #ffffff;
      text-align: center;
      color: #656565;
      outline: none;
      font-size: 13px;
      font-weight: 400;
      padding: 0 7px;
      margin-right: 107px;
      margin-left: 138px;
      -moz-appearance: textfield;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
      -webkit-appearance: none;
  }
  .fa-times-circle {
      color: #c0c0c0;
      font-size: 15px;
      cursor: pointer;
  }
  .fa-times-circle:hover {
      color: #f16d7f;
  }
  .cart_button2 {
      width: 223px!important;
  }
  .cart_buttons {
      display: flex;
      justify-content: space-between;
      margin-top: 40px;
  }
  .cart_button {
      transition: 0.5s;
  }

  .cart_button:hover{
      transform: scale(1.1);
  }
  .cart_form1 select {
      width: 355px;
      height: 45px;
      border: 1px solid #eaeaea;
      background-color: #ffffff;
      outline: none;
      color: #b1b1b1;
      font-size: 13px;
      font-weight: 300;
      padding-left: 18px;
      padding-right: 9px;
      margin: 22px 0 20px 0;
  }

  /*This will work for firefox*/
  @-moz-document url-prefix() {
      .cart_form1 select {
          -moz-appearance: none;
          -webkit-appearance: none;
          appearance: none;
          background: transparent url('assets/img/arrow_country.png') no-repeat right center;
          background-position: 334px;
          padding: 2px 30px 2px 2px;
          border: 1px solid #eaeaea;
          margin-right: 6px;
      }
  }
  .cart_form1 input {
      width: 317px;
      height: 43px;
      border: 1px solid #eaeaea;
      background-color: #ffffff;
      color: #b1b1b1;
      outline: none;
      font-size: 13px;
      font-weight: 300;
      padding-left: 18px;
      padding-right: 18px;
      margin-bottom: 20px;
  }
  input::-moz-placeholder {
      color: #b1b1b1;
  }
  input::-webkit-input-placeholder {
      color: #b1b1b1;
  }
  input:-ms-input-placeholder {
      color: #b1b1b1;
  }
  input::-ms-input-placeholder {
      color: #b1b1b1;
  }
  input::placeholder {
      color: #b1b1b1;
  }
  .cart_form1 form {
      display: flex;
      flex-direction: column;
  }
  .cart_form1_button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 98px;
      height: 33px;
      border: 1px solid #eaeaea;
      background-color: #ffffff;
      text-decoration: none;
      color: #4a4a4a;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      margin-top: 3px;
      transition: 0.5s;
  }
  .cart_form1_button:hover,
  .cart_form2_button:hover {
      border: 1px solid #f16d7f;
      color: #f16d7f;
      transform: scale(1.1);
  }
  .cart_form2 p {
      color: #000000;
      font-size: 14px;
      font-weight: 300;
      margin: 28px 0 25px 0;
  }
  .cart_form2_button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 116px;
      height: 33px;
      border: 1px solid #eaeaea;
      background-color: #ffffff;
      text-decoration: none;
      color: #4a4a4a;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      margin-top: 25px;
      transition: 0.5s;
  }
  .cart_form3 {
      height: 214px;
      background-color: #f5f3f3;
      padding: 0 42px 0 43px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
  }
  .cart_form3 p:nth-child(1) {
      color: #4a4a4a;
      font-size: 11px;
      font-weight: 400;
      text-transform: uppercase;
      margin: 40px 0 14px;
  }
  .cart_form3 p:nth-child(2) {
      color: #222222;
      font-size: 16px;
      font-weight: 700;
      text-transform: uppercase;
      border-bottom: solid 1px #e2e2e2;
      padding-bottom: 20px;
      width: 100%;
      display: flex;
      justify-content: flex-end;
  }
  .cart_form3 p:nth-child(1) span {
      margin-left: 18px;
  }
  .cart_form3 p:nth-child(2) span {
      margin-left: 18px;
      color: #f16d7f;
  }
  .cart_form3_button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 273px;
      height: 50px;
      background-color: #f16d7f;
      text-decoration: none;
      color: #ffffff;
      font-size: 16px;
      font-weight: 700;
      text-transform: uppercase;
      margin: 17px 1px 0 1px;
      transition: 0.5s;
  }
  .cart_form3_button:hover{
      transform: scale(1.1);
  }
</style>
