<template>
    <div>
        <ChildComponent :num=num1 :isSelected="true" :arr=[1,2,3,4] />
    </div>
</template>
<script>
import ChildComponent from '../components/ChildComponent.vue';
export default {
    name: "",
    components: {ChildComponent},
    data() {
        return {
            num1:5,
            isSelected: true
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>