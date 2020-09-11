<template>
  <div id="cesiumContainer" class="cesiumContainer">
    <div id="cesium"></div>
  </div>
</template>
<style scoped>
</style>
<script>
// import "cesium/Build/CesiumUnminified/Widgets/widgets.css";
// import 'cesium/Cesium'
export default {
  data() {
    return {};
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      debugger;
      let viewer = new Cesium.Viewer("cesium");
    },
  },
};
</script>