<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <main-audio></main-audio>
    <audio-volume></audio-volume>
  </div>
</template>

<script>
// @ is an alias to /src



import MainAudio from "../components/audio/MainAudio";
import AudioVolume from "../components/audio/AudioVolume";
export default {
  name: 'Home',
  components: {
    AudioVolume,
    MainAudio
  }
}
</script>
