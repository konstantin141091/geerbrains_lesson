<template>
    <div>
        <Header ref="header"></Header>
        <menu_bar ref="menu_bar"></menu_bar>
        <CatalogContent ref="catalog_content">

        </CatalogContent>

        <FooterComp></FooterComp>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue';
    import menu_bar from '@/components/menu_bar.vue';
    import CatalogContent from '@/components/CatalogContent.vue';
    import FooterComp from '@/components/FooterComp.vue';
    export default {
        name: "Catalog_page",
        components: {
            Header,
            menu_bar,
            CatalogContent,
            FooterComp
        },
    }
</script>

<style scoped>

</style>