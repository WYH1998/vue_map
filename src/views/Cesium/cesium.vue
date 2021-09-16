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
      const googleImageUrl =
        "http://localhost:7890/smartgis.service/image?source=geoBlue&z={z}&x={x}&y={y}";
      let terrainURL = "http://localhost:7890/smartgis.service/terrain";
      let viewer = new Cesium.Viewer("cesium", {
        animation: false, //动画控制，默认true
        fullscreenButton: false, //地图切换控件(底图以及地形图)是否显示,默认显示true
        vrButton: false, //双屏模式,默认不显示false
        geocoder: false, //地名查找,默认true
        selectionIndicator: false, //选中元素显示,默认true
        timeline: false, //时间线,默认true
        infoBox: false, //点击要素之后显示的信息,默认true
        navigationHelpButton:false,// 导航帮助说明
        baseLayerPicker:false,// 地图切换空间
        scene3DOnly:true,// 只显示3D场景
        imageryProvider: new Cesium.UrlTemplateImageryProvider({
          url: googleImageUrl,
        }),
        terrainProvider: new Cesium.CesiumTerrainProvider({
          url: terrainURL,
        }),
      });
      viewer.cesiumWidget._creditContainer.style.display = "none";
      viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(
        Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK
      );
      // viewer.scene.screenSpaceCameraController.maximumZoomDistance = 40489014.0;
      viewer.scene.backgroundColor = Cesium.Color.TRANSPARENT;

      viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(110, 20, 10000000),
        orientation: {
          //此视角为观察者/相机
          heading: Cesium.Math.toRadians(0.0),
          //偏航
          pitch: Cesium.Math.toRadians(-75.0),
          //俯仰，人如果在赤道上空，俯仰角为0可见地球。如果在北纬，俯仰角为负才能见地球
          roll: Cesium.Math.toRadians(0.0), //翻滚
        },
      });
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
