<template>
    <div>
        <p>{{count}}</p>
        <!-- <p>{{cart.toString()}}</p> -->
        <button @click="addCart">장바구니 추가</button>
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            sampleData: ""
        };
    },
    computed: {
        count() {
            return this.$store.state.count;
            /* mutation에서 값이 바뀌어도 변경사항 반영 */
        },
        cart() {
            return this.$store.state.cart;
        }
    },
    setup() {},
    created() {},
    updated() {
        console.table(this.cart);
    },
    mounted() {},
    unmounted() {},
    methods: {
        addCart(){
            this.$store.commit("addCart",{productId:"1",productName:"마우스",price:22000,})
        }
    }
}
</script>