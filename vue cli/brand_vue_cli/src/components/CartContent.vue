<template>
    <main>
        <div class="new_arrivals">
            <div class="block_show_top container">
                <p>New Arrivals </p>
                <div class="block_show_menu"> <a href="#" @click="getSelected(index)">Home</a>&nbsp;/ <a href="#" @click="getSelected(catalog)">Men</a>&nbsp;/ <a class="show_menu_activ" href="#">New Arrivals</a> </div>
            </div>
        </div>
        <Cart ref="cart" :type="2"></Cart>
    </main>
</template>

<script>
    import Cart from '@/components/Cart.vue';
    export default {
        name: "CartContent",
        components: {
            Cart,
        },
    }
</script>

<style scoped>

</style>