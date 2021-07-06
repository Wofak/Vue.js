<template>
    <div>
        <h1>Hello,{{firstName}} {{lastName}}</h1>
        <h1>Hello,{{fullName}}</h1>
        <!--computed는 데이터 안에 없는 새로운 요소를 생성해주는는 역할 -->
        <!-- + 실시간으로 업데이트를 반영하기 때문에 v-model로 요소가 변하면 -->
       <!-- computed도 변화 -->
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
            lastName: "Choi"
        };
    },
    computed: {
        fullName(){
            return this.firstName + this.lastName
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>