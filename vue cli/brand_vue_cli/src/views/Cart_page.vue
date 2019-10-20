<template>
  <div>
    <Header ref="header"></Header>
    <menu_bar ref="menu_bar"></menu_bar>
    <CartContent></CartContent>
    <FooterComp></FooterComp>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue';
  import menu_bar from '@/components/menu_bar.vue';
  import CartContent from '@/components/CartContent.vue';
  import FooterComp from '@/components/FooterComp.vue';
  export default {
    name: "Cart_page",
    components: {
      Header,
      menu_bar,
      CartContent,
      FooterComp
    },
  }
</script>
