<template>
    <div>
        <Header ref="header"></Header>
        <menu_bar ref="menu_bar"></menu_bar>
        <IndexContent ref="index_content"></IndexContent>
        <FooterComp></FooterComp>
    </div>


</template>

<script>
    import IndexContent from '@/components/IndexContent.vue';
    import Header from '@/components/Header.vue';
    import menu_bar from '@/components/menu_bar.vue';
    import FooterComp from '@/components/FooterComp.vue';
    export default {
        name: 'home',
        components: {
            IndexContent,
            Header,
            menu_bar,
            FooterComp
        },
    };
</script>
