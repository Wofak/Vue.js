<template>
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

  
  
  
  </div>
  <router-view />
</template>

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
