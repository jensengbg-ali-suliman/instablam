<template>
  <div class="home">
    <Header></Header>
    <video-stream />
    <footer>
      <div class="circle"></div>
      <button id="cta" @click="takePicture"></button>
    </footer>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import VideoStream from "../components/VideoStream.vue";
export default {
  components: {
    Header,
    VideoStream
  },
  methods: {
    takePicture: function() {
      this.$router.push("/image");
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  background: #222;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;

  .circle {
    background: #c4c4c4;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    left: 3rem;
  }

  footer {
    position: relative;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 6rem;
  }
}

@media only screen and (min-width: 768px) {
  .home {
    width: 768px;
    margin: 0 auto;
  }
}
</style>