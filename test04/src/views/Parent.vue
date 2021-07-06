<template>
    <div>
        <Child ref="child_component" />
    </div>
</template>
<script>
import Child from '../components/Child.vue';
export default {
    name: "",
    components: {Child},
    data() {
        return {
            sampleData: ""
        };
    },
    setup() {},
    created() {},
    mounted() {
        //document.getElementById /* 이것과 같은 역할 */
        this.$refs.child_component.$refs.btn.click();
        // this.$refs.child_component.myFunction();; /* 위와 같음 */
        this.$refs.child_component.fullname = "jaeram"
    },
    unmounted() {},
    methods: {}
}
</script>