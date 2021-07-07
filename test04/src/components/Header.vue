<template>
    <div>
        <button @click="login">로그인</button>
        <button @click="logout">로그아웃</button>
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
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        login() {
            this.$store.commit("user", { 
                id:"jaeramChoi",
                email:"JRC@gmail.com",
                name:"JaeRam Choi",
            });
        },
        logout() {
            this.$store.commit("user",{});
        }
    }
}
</script>