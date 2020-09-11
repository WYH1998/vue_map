<template>
  <div id="mapContainer">
    <!-- 二维 -->
    <div id="openlayer">
      <button @click="openlayerHandler()">openlayer</button>
    </div>
    <!-- 三维 -->
    <div id="cesium">
      <button @click="cesiumHandler()">cesium</button>
    </div>
  </div>
</template>
<style scoped>
#mapContainer {
  width: 100%;
  height: 100%;
}
</style>
<script>
export default {
  name: "mainMap",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    openlayerHandler() {
      this.$router.push("openlayers");
    },
    cesiumHandler() {
      this.$router.push("cesium");
    }
  }
};
</script>