<template>
   <main>
       <div class="promo">
           <div class="promo_content container">
               <div class="promo_text">
                   <p>THE BRAND</p>
                   <p>OF&nbsp;LUXERIOUS <span>FASHION</span></p>
               </div>
           </div>
       </div>
       <div class="block1 container">
           <div class="block1_left">
               <div class="block1_img_big_left">
                   <div class="block1_text">
                       <p>HOT DEAL</p>
                       <p>FOR MEN</p>
                   </div>
               </div>
               <div class="block1_img_mini_left">
                   <div class="block1_text">
                       <p>LUXIROUS &amp;&nbsp;trendy</p>
                       <p>ACCESORIES</p>
                   </div>
               </div>
           </div>
           <div class="block1_right">
               <div class="block1_img_mini_right">
                   <div class="block1_text">
                       <p>30% offer</p>
                       <p>women</p>
                   </div>
               </div>
               <div class="block1_img_big_right">
                   <div class="block1_text">
                       <p>new arrivals</p>
                       <p>FOR kids</p>
                   </div>
               </div>
           </div>
       </div>
       <div class="block2 container">
           <div class="block2_header">
               <h3>Fetured Items</h3>
               <p>Shop for items based on&nbsp;what we&nbsp;featured in&nbsp;this week</p>
           </div>

           <products ref="products" :type="1"></products>
           <div class="block2_buttom_div"> <a href="catalog.html" class="block2_buttom">Browse All Product</a> </div>
       </div>
       <div class="block3">
           <div class="block3_content container">
               <div class="block3_left_text">
                   <p>30% <span>OFFER</span></p>
                   <p>FOR WOMEN</p>
               </div>
               <div class="block3_right">
                   <div class="block3_right_img"> <img src="../assets/img/block3_logo1.png" alt="img"> <img src="../assets/img/block3_logo2.png" alt="img"> <img src="../assets/img/block3_logo3.png" alt="img"> </div>
                   <div class="block3_right_text">
                       <p class="block3_right_text_top">Free Delivery</p>
                       <p class="block3_right_text_bottom">Worldwide delivery on&nbsp;all. Authorit tively morph next-generation innov tion with extensive models.</p>
                       <p class="block3_right_text_top">Sales &amp;&nbsp;discounts</p>
                       <p class="block3_right_text_bottom">Worldwide delivery on&nbsp;all. Authorit tively morph next-generation innov tion with extensive models.</p>
                       <p class="block3_right_text_top">Quality assurance</p>
                       <p class="block3_right_text_bottom">Worldwide delivery on&nbsp;all. Authorit tively morph next-generation innov tion with extensive models.</p>
                   </div>
               </div>
           </div>
       </div>
   </main>
</template>

<script>
    import products from '@/components/products.vue';
    export default {
        name: "IndexContent",
        components: {
            products,
        },
    }

</script>

<style scoped>

</style>