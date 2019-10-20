<template>
        <header class="header">
            <div class="container header_content">
                <div class="header_left">
                    <router-link to="/" class="logo_header">
                        <img src="../assets/img/logo_header.png" alt="logo">BRAN<span>D</span></router-link>
                    <search ref="search"></search>
                </div>
                <div class="header_right">
                    <div class="logo_basket_div">
                        <Cart ref="cart" :type="1"></Cart>
                    </div>
                    <a href="#" class="buttom_my_account">My&nbsp;Account
                        <img src="../assets/img/account_arrow.png" alt="img"></a>
                </div>
            </div>
        </header>
</template>

<script>
    import Cart from '@/components/Cart.vue';
    import search from '@/components/search.vue';

    export default {
        name: 'Header',
        components: {
            Cart,
            search,
        },
        data() {
            return {

            }
        }
    };
</script>
