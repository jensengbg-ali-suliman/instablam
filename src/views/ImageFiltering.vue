<template>
  <div class="filtering">
    <Header />
    <section class="img-container">
      <canvas id="img"></canvas>
    </section>
    <filters
      @uppdateBrightness="uppdateBrightness"
      @uppdateSaturation="uppdateSaturation"
      @uppdateContrast="uppdateContrast"
      @uppdateVibrance="uppdateVibrance"
      @uppdateHue="uppdateHue"
    />
    <footer class="filter-footer">
      <button id="back" @click="backToCamera">go back</button>
      <a id="download" @click="download">download</a>
    </footer>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Filters from "../components/Filters.vue";
export default {
  components: {
    Header,
    Filters
  },
  data: () => {
    return {
      imageloaded: false,
      imageURL: "",
      downloadLink: "",
      brightness: 0,
      saturation: 0,
      contrast: 0,
      vibrance: 0,
      hue: 0
    };
  },
  mounted() {
    this.getImage();
  },
  methods: {
    getImage: async function() {
      const stream = this.$store.state.VideoStream;
      const videoTrack = await stream.getVideoTracks()[0];
      const captureImage = new ImageCapture(videoTrack);
      const picture = await captureImage.takePhoto();
      const url = URL.createObjectURL(picture);
      this.imageURL = url;
      this.Caman("#img", this.imageURL, function() {
        this.render();
      });
    },
    backToCamera: function() {
      this.$router.push("/");
    },
    uppdateBrightness: function() {
      let val = this.$store.state.brightness;
      this.Caman("#img", this.imageURL, function() {
        this.brightness(val);
        this.render();
      });
      this.brightness = val;
    },
    uppdateSaturation: function() {
      let val = this.$store.state.saturation;
      this.Caman("#img", this.imageURL, function() {
        this.saturation(val);
        this.render();
      });
      this.saturation = val;
    },
    uppdateContrast: function() {
      let val = this.$store.state.contrast;
      this.Caman("#img", this.imageURL, function() {
        this.contrast(val);
        this.render();
      });
      this.contrast = val;
    },
    uppdateVibrance: function() {
      let val = this.$store.state.vibrance;
      this.Caman("#img", this.imageURL, function() {
        this.vibrance(val);
        this.render();
      });
      this.vibrance = val;
    },
    uppdateHue: function() {
      let val = this.$store.state.hue;
      this.Caman("#img", this.imageURL, function() {
        this.hue(val);
        this.render();
      });
      this.hue = val;
    },
    download: function(e) {
      console.log(e);
      this.Caman("#img", function() {
        let a = document.createElement("a");
        a.href = this.toBase64();
        a.download = Date() + "_image.png";
        a.click();
      });

      new Notification("instablam", {
        body: "your image has been downloaded",
        icon: "../assets/notification_icon.png"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.filtering {
  width: 100vw;
  min-height: 100vh;
  background: #222;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;

  .filter-footer {
    position: relative;
    background: #000;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    min-height: 6rem;

    canvas {
      height: 10rem;
    }

    button,
    a {
      font-size: 0.8rem;
      border: none;
      padding: 0.6rem 2rem;
      border-radius: 5px;
      text-decoration: none;
    }

    #back {
      background: #222;
      color: #dfdfdf;
    }
    #download {
      background: #44af69;
      color: #efefef;
      cursor: pointer;
    }
  }
}

@media only screen and (min-width: 768px) {
  .filtering {
    width: 768px;
    margin: 0 auto;
  }
}
</style>