Vue.component('range', {
   data(){
       return {
           b: this.$refs.slider,
       }
   },
    methods: {
       a(){
            this.b.ionRangeSlider({
                type: "double",
                min: 0,
                max: 1000,
                from: 200,
                to: 500,
                grid: true
            })
       }
    },
    mounted(){
        this.a();
    },
    template:`
                <form action="#">
                    <input type="text" ref="slider" class="js-range-slider" name="my_range" value="">
                </form>
            `
});