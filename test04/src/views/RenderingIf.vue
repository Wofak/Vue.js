<template>
    <div>
        <h1 v-if="type == 'A'">A</h1>
        <h1 v-else-if="type == 'B'">B</h1>
        <h1 v-else>C</h1>

        <button>조회</button>
        <button v-if="userRole == 'Admin'">생성</button>
        <button v-show=true>True면 보임</button>
        <!-- 위 두가지의 차이는 화면에 구현 여부 -->
        <!-- v-if는 조건 불충족시 생성도x, 생성 삭제 빈도가 적은 요소에 사용  -->
        <!-- v-show는 생성은 되지만 숨겨져있는 것, 생성 삭제 빈도가 많은 요소에 사용 -->


    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            type: "D",
            userRole:"Admin"
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>