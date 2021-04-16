<template>
  <div class="container">
    <div class="d-flex justify-content-center">
      <div class="text-center">
        <img alt="Vue logo" src="./assets/logo.png">
        <h1>VueJS 3 - Meteor Emoji Picker</h1>
      </div>
    </div>
    <div>
      <InitMeteorEmoji />
    </div>
  </div>
</template>

<script>
import InitMeteorEmoji from "@/components/InitMeteorEmoji";

export default {
  name: 'App',
  components: {
    InitMeteorEmoji,
  }
}
</script>

<style>
</style>
