<template>
    <div>
    <div>
        <h1>Hello World!!!{{title1}}</h1>
    </div>
    <div> <h2>Hello World {{title2}}</h2></div>
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            title1: "World",
            title2: "Choi",
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>