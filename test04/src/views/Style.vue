<template>
    <div>
    <div v-bind:style="styleObject">인라인 스타일 바인딩</div>
    <div style="color: red; font-size: 30px">인라인 스타일 바인딩</div>
    <!-- 두가지 방법이 동일함 -->
</div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            styleObject:{
                color:"red",
                fontSize: "30px",
                // (-)가 존재하면 camelcase로 변환입력
            }
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>