<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <EmojiInputText />
</template>

<script>
import EmojiInputText from './components/EmojiInputText.vue'

export default {
  name: 'App',
  components: {
    EmojiInputText
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
  width: 50%;
}
</style>
