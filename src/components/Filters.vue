<template>
  <div class="filters-container">
    <section class="filter">
      <label for="brightness">brightness</label>
      <input
        type="range"
        name
        id="brightness"
        min="-100"
        max="100"
        value="0"
        @input="changeBrightness"
      />
    </section>
    <section class="filter">
      <label for="saturation">saturation</label>
      <input
        type="range"
        name
        id="saturation"
        min="-100"
        max="100"
        value="0"
        @input="changeSaturation"
      />
    </section>
    <section class="filter">
      <label for="contrast">contrast</label>
      <input type="range" name id="contrast" min="-100" max="100" value="0" @input="changeContrast" />
    </section>
    <section class="filter">
      <label for="vibrance">vibrance</label>
      <input type="range" name id="vibrance" min="-100" max="100" value="0" @input="changeVibrance" />
    </section>
    <section class="filter">
      <label for="hue">hue</label>
      <input type="range" name id="hue" min="-100" max="100" value="0" @input="changeHue" />
    </section>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      brightness: 0,
      saturation: 0,
      contrast: 0,
      vibrance: 0,
      hue: 0
    };
  },
  methods: {
    changeBrightness: function(e) {
      let val = e.target.value;
      let valToSend = 0;
      if (val == 0) {
        valToSend = 0;
      } else {
        valToSend = val - this.brightness;
      }
      this.$store.dispatch("uppdateBrightness", valToSend);
      this.$emit("uppdateBrightness");
      this.brightness = val;
    },
    changeSaturation: function(e) {
      let val = e.target.value;
      let valToSend = 0;
      if (val == 0) {
        valToSend = 0;
      } else {
        valToSend = val - this.saturation;
      }
      this.$store.dispatch("uppdateSaturation", valToSend);
      this.$emit("uppdateSaturation");
      this.saturation = val;
    },
    changeContrast: function(e) {
      let val = e.target.value;
      let valToSend = 0;
      if (val == 0) {
        valToSend = 0;
      } else {
        valToSend = val - this.contrast;
      }
      this.$store.dispatch("uppdateContrast", valToSend);
      this.$emit("uppdateContrast");
      this.contrast = val;
    },
    changeVibrance: function(e) {
      let val = e.target.value;
      let valToSend = 0;
      if (val == 0) {
        valToSend = 0;
      } else {
        valToSend = val - this.vibrance;
      }
      this.$store.dispatch("uppdateVibrance", valToSend);
      this.$emit("uppdateVibrance");
      this.vibrance = val;
    },
    changeHue: function(e) {
      let val = e.target.value;
      let valToSend = 0;
      if (val == 0) {
        valToSend = 0;
      } else {
        valToSend = val - this.hue;
      }
      this.$store.dispatch("uppdateHue", valToSend);
      this.$emit("uppdateHue");
      this.hue = val;
    }
  }
};
</script>

<style lang="scss" scoped>
.filters-container {
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 4rem;
  max-width: 500px;

  width: 90%;
  min-height: 10rem;

  .filter {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: #9f9f9f;
    font-size: 0.8rem;

    label {
      margin-top: 0.8rem;
      margin-bottom: 1rem;
    }

    input {
      width: 100%;
    }

    input[type="range"]::-ms-thumb {
      background-color: green;
    }
    input[type="range"]::-webkit-slider-runnable-track {
      height: 2.2px;
      cursor: pointer;
      background: #444;
      height: 0.2px;
    }
    input[type="range"]::-webkit-slider-thumb {
      margin-top: -10px;
      cursor: pointer;
      height: 0.2px;
    }
    input[type="range"]:focus::-webkit-slider-runnable-track {
      background: #44af69;
      height: 0.2px;
    }
  }
}
</style>