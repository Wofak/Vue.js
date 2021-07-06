<template>
  <div>
    <DataGrid :header="header" :body="body" />
  </div>
</template>
<script>
import DataGrid from "../components/DataGrid.vue";
export default {
  name: "",
  components: { DataGrid },
  data() {
    return {
      header: ["이름", "연락처"],
      body: [
        ["유재석", "010-2333-0000"],
        ["김종국", "010-0000-0000"],
      ],
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
Loading complete