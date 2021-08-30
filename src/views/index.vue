<template>
  <div id="mapContainer">
    <split-pane split="vertical" @resize="resize">
      <template slot="paneL">
        <!-- 二维 -->
        <openlayer-map ref="openlayer"></openlayer-map>
      </template>
      <template slot="paneR">
        <!-- 三维 -->
        <cesium-map ref="cesium"></cesium-map>
      </template>
    </split-pane>
  </div>
</template>

<script>
import splitPane from "vue-splitpane";
import cesiumMap from "./cesium_Map";
import openlayerMap from "./openlayer_Map";
export default {
  name: "mainMap",
  data() {
    return {};
  },
  components: {
    splitPane,
    cesiumMap,
    openlayerMap,
  },
  mounted() {},
  methods: {
    resize() {
      this.$nextTick(_=>{
        this.$refs['openlayer'].resize();
      })
    }
  },
};
</script>
<style scoped>
#mapContainer {
  width: 100%;
  height: 100%;
}
</style>
<style lang="scss" scoped>
::v-deep .splitter-pane-resizer {
  opacity: 0.8;
}

::v-deep .splitter-pane-resizer.vertical {
  width: 3px;
  border-left: 2px solid aqua;
  border-right: 2px solid aqua;
}
</style>

 


