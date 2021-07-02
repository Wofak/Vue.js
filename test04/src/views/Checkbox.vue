<template>
    <div>
        <label><input type="checkbox" v-bind:value="seoul" v-model="cities">서울</label>
        <label><input type="checkbox" value="064" v-model="cities">제주</label>
        <label><input type="checkbox" value="031" v-model="cities">경기</label>

    <!-- v-model 은 밸류값을 가져오지만 체크박스의 경우 checked/unchecked의 값만 가짐 -->
    <!-- v-model의 경우 그럼에도 불구하고 자동으로 value를 가져오는 상황 -->
    <!-- 따라서 정확히 값을 고정하고, 단방향으로만 입력하도록 하려면 v-bind 속성 활용,(:) 만 적어도 가능 -->
    <br>
    <div>선택한 지역: {{cities}}</div>
    
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            cities: [], 
            seoul:"02",
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script> 