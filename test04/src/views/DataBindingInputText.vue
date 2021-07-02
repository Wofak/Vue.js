<template>
   <div>
    <input type="text" v-model="txt1" /><br>

    <input type="text" v-model.number="num1" /> 
    <input type="number" v-model="num1" /> 
    
    <button @click="changeValue()"> 값 변경  </button>
</div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            txt1: "",
            num1: 0,
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        changeValue(){
            console.log("버튼실행");
            this.txt1 = "South Korea";
            // data return 요소에는 var이 아니라 this를 사용해야 함
        }
    }
}
</script>