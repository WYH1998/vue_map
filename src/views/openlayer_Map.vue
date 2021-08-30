<template>
  <div id="openlayerContainer" class="openlayerContainer">
    <div id="openlayer"></div>
  </div>
</template>
<script>
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import OSM from "ol/source/OSM";
export default {
  name: "openlayer",
  data() {
    return {
      map:'',
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      const googleImageUrl =
        "http://localhost:7890/smartgis.service/image?source=geoBlue&z={z}&x={x}&y={y}";
      let map = new Map({
        target: "openlayer",
        layers: [
          new TileLayer({
            source: new XYZ({
              url:googleImageUrl,
            }),
          }),
        ],
        view: new View({
          projection: "EPSG:4326", //使用这个坐标系
          center: [114, 32], //深圳
          zoom: 4,
        }),
      });
      this.map = map;
    },
    resize(){
      this.map.updateSize();
    }
  },
};
</script>
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
