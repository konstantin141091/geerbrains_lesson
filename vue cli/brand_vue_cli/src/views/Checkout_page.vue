<template>
    <div>
        <Header ref="header"></Header>
        <menu_bar ref="menu_bar"></menu_bar>
        <CheckoutContent></CheckoutContent>
        <FooterComp></FooterComp>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue';
    import menu_bar from '@/components/menu_bar.vue';
    import CheckoutContent from '@/components/CheckoutContent.vue';
    import FooterComp from '@/components/FooterComp.vue';
    export default {
        name: "Checkout_page",
        components: {
            Header,
            menu_bar,
            CheckoutContent,
            FooterComp
        },
    }
</script>

<style scoped>

</style>