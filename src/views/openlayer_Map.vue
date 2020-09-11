<template>
  <div id="openlayerContainer" class="openlayerContainer">
    <div id="openlayer"></div>
  </div>
</template>
<style scoped>
#openlayerContainer {
  height: 100%;
  width: 100%;
}
#openlayer {
  height: 100%;
  width: 100%;
}
</style>
<script>
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
export default {
  name: "openlayer",
  data() {
    return {};
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      const googleImageUrl =
        "http://localhost:8080/smartgis.service1/image/geoqblue?x={x}&y={y}&z={z}";
      let map = new Map({
        target: "openlayer",
        llayers: [
          new TileLayer({
            source: new OSM()
          })
        ],
        view: new View({
          projection: "EPSG:4326", //使用这个坐标系
          center: [114.064839, 22.548857], //深圳
          zoom: 12
        })
      });
    }
  }
};
</script>