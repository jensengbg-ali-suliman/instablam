<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

* {
  padding: 0rem;
  margin: 0rem;
  box-sizing: border-box;
  outline: none;
}

#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #141414;

  #cta {
    width: 3.4rem;
    height: 3.4rem;
    background: #efefef;
    border-radius: 1rem;
  }
}
</style>
