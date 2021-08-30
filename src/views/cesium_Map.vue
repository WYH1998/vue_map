<template>
  <div id="cesiumContainer" class="cesiumContainer">
    <div id="cesium"></div>
  </div>
</template>
<style scoped>
</style>
<script>
export default {
  data() {
    return {
      viewer: {},
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      let viewer = new Cesium.Viewer("cesium", {
        animation: false,
        fullscreenButton: false,
        vrButton: false,
        geocoder: false,
        selectionIndicator: false,
        timeline: false,
        infoBox: false,
      });
      viewer.cesiumWidget._creditContainer.style.display = "none";
      viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(
        Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK
      );
      // viewer.scene.screenSpaceCameraController.maximumZoomDistance = 40489014.0;
      viewer.scene.backgroundColor = Cesium.Color.TRANSPARENT;
    },
  },
};
</script>
<style scoped>
#cesiumContainer {
  height: 100%;
  width: 100%;
}
#cesium {
  height: 100%;
  width: 100%;
}
</style> 
