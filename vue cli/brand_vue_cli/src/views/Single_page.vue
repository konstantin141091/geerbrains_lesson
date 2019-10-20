<template>
    <div>
        <Header ref="header"></Header>
        <menu_bar ref="menu_bar"></menu_bar>
        <SingleContent ref="single_content"></SingleContent>
        <FooterComp></FooterComp>

    </div>
</template>

<script>
    import Header from '@/components/Header.vue';
    import menu_bar from '@/components/menu_bar.vue';
    import SingleContent from '@/components/SingleContent.vue';
    import FooterComp from '@/components/FooterComp.vue';
    export default {
        name: "Single_page",
        components: {
            Header,
            menu_bar,
            SingleContent,
            FooterComp
        },
    }
</script>

<style scoped>

</style>