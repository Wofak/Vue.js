<template>
    <ProvideInjectChild />
</template>
<script>
import ProvideInjectChild from '../components/ProvideInjectChild.vue'
export default {
    name: "",
    components: {ProvideInjectChild},
    data() {
        return {
            items: ['A','B'],
        };
    },
    provide() {
        return {
            itemLength: this.items.length
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>