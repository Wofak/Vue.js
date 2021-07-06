<template>
    <div>
        <h1>Hello,{{firstName}} {{lastName}}</h1>
        <h1>Hello,{{fullName}}</h1>
    
        <input type="text" v-model="firstName" />
        <input type="text" v-model="lastName" />
    

        </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            firstName: "Jaeram",
            lastName: "Choi",
            fullName: ""
        };
    },
    watch: {
      firstName(){
        //computed와 달리 특정요소의 변화를 감시, 변화가 생겨야 반영됨
        this.fullName = this.firstName + this.lastName
      },
      lastName(){
        this.fullName = this.firstName + this.lastName
      }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>