<template>
<Header />
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/databinding">Databinding</router-link>|
    <router-link to="/databindinghtml">Html</router-link> |
    <router-link to="/databindinginputtext">InputText</router-link> | 
    <router-link to="/databindingtextarea">Textarea</router-link> | <br>
    <router-link to="/select">Select</router-link> | 
    <router-link to="/checkbox">Checkbox</router-link> | 
    <router-link to="/radio">Radio</router-link> | 
    <router-link to="/attribute">Attribute</router-link> | 
    <router-link to="/button">Button</router-link> | <br>
    <router-link to="/Class">Class</router-link> | 
    <router-link to="/Class2">Class2</router-link> | 
    <router-link to="/Class3">Class3</router-link> | 
    <router-link to="/Style">Style</router-link> | 
    <router-link to="/List">List</router-link> | 
    <router-link to="/List2">List2</router-link> | <br>
    <router-link to="/renderingif">RenderingIf</router-link> | 
    <router-link to="/eventbinding">EventBinding</router-link> | 
    <br>
    <router-link to="/exampleQ1">ExampleQ1</router-link> | 
    <router-link to="/exampleQ2">ExampleQ2</router-link> | 
    <br>
    <router-link to="/computed">Computed</router-link> | 
    <router-link to="/watch">Watch</router-link> | 
    <br>
    <router-link to="/nestedcomponent">Nested</router-link> | 
    <router-link to="/nestedcomponent2">Nested2</router-link> | 
    <router-link to="/nestedcomponent3">Nested3</router-link> | 
    <router-link to="/nestedcomponent4">Nested4</router-link> | 
    <router-link to="/nestedcomponent5">Nested5</router-link> | <br>
    <router-link to="/parent">Parent</router-link> |
    <router-link to="/parent2">Parent2</router-link> |
    <router-link to="/slotusemodallayout">SlotUseModalLayout</router-link> |
    <router-link to="/provideinject">ProvideInject</router-link> |
    <router-link to="/databindinglist3">DataBindingList3</router-link> |<br>
    <router-link to="/storeaccess">StoreAccess</router-link> |
    <router-link to="/loginaccess">LoginAccess</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/kakaologin">KakaoLogin</router-link> |
    <router-link to="/kakaologin2">KakaoLogin2</router-link> |
    <router-link to="/naverlogin">NaverLogin</router-link> |
    <router-link to="/naverlogin2">NaverLogin2</router-link> |
    <router-link to="/googlelogin">GoogleLogin</router-link> |



  
  
  
  </div>
  <router-view />
</template>
<script>
import Header from "./components/Header.vue"
export default {
  components: { Header },
}
</script>




<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
