<template>
    <div>
        <button v-on:click="myFunction">v-on</button>
        <button @click="myFunction">@click</button>
    <br>

    <select v-model="sel" @change="changeSelect"> @change
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
    </select>
    <br>
    <input type="text" @focus="myFunction"/>
    <input type="text" @blur="myFunction"/>
    <br>
    <input type="text" @keyup.enter="doSearch"/>
    <button @click="doSearch">@조회</button>

    

    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            sel: ""
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        doSearch() {
            console.log("조회실행")
        },
        myFunction() {
            console.log("클릭 이벤트 발생")
        },
        changeSelect() {
            console.log(this.sel)
            
        }
    }
}
</script>