<template>
<div>
  <div class="card mb-4">
    <div class="card-body">
      <EmojiInputText />
    </div>
  </div>
  <div class="card mb-4">
    <div class="card-body">
      <EmojiInputTextLarge />
    </div>
  </div>
  <div class="card mb-4">
    <div class="card-body">
      <EmojiInputTextarea />
    </div>
  </div>
</div>
</template>

<script>
import MeteorEmoji from 'meteor-emoji/dist/meteorEmoji';
import EmojiInputText from "@/components/EmojiInputText";
import EmojiInputTextLarge from '@/components/EmojiInputTextLarge.vue'
import EmojiInputTextarea from '@/components/EmojiInputTextarea.vue'

export default {
  name: "InitMeteorEmoji",
  components: {
    EmojiInputText,
    EmojiInputTextLarge,
    EmojiInputTextarea
  },
  mounted() {
    // Make sure to initialize once in a page load
    new MeteorEmoji();
  }
}
</script>

<style scoped>

</style>