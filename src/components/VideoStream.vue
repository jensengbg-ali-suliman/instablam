<template>
  <div class="wrapper">
    <p v-if="!videoOn">loadding camera feed . . .</p>
    <video v-if="videoOn" :src-object.prop.camel="videoStream" @loadedmetadata="play"></video>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      videoOn: false,
      videoStream: {}
    };
  },
  mounted() {
    this.getVideoStream();
  },
  methods: {
    getVideoStream: async function() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true
        });
        this.videoStream = await stream;
        this.videoOn = true;
        this.$store.dispatch("getVideoStream", stream);
      } catch (err) {
        alert("Error getting camera stream \n" + err);
      }
    },
    play: function(e) {
      e.target.play();
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: #fff6;
  }

  video {
    max-width: 100%;
  }
}
</style>