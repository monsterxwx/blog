<template>
  <div
    id="map"
    class="w-100% map-class"
  />
  <!-- 弹框 -->
  <div
    ref="diyPopupRef"
    class="popup"
    v-show="shopPopup"
  >
    <div class="flex justify-between  gap-10px">
      <img
        class="w-100px border-rd-8px object-cover"
        :src="curData.image"
        alt=""
      >
      <div class="flex-1 min-w-0 flex flex-col gap-5px">
        <div class="text-18px w-full font-700 truncate">
          {{ curData.title }}
        </div>
        <div class="w-full text-14px color-#606266 truncate">
          {{ curData.desc }}
        </div>
        <div class="flex justify-end text-12px color-#606266">
          {{ curData.time }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { list, flagUrl } from './data'
import { Map, View, Feature, Overlay } from 'ol'
import * as olProj from 'ol/proj'
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer'
import { XYZ, Vector as VectorSource } from 'ol/source'
import { onMounted, ref } from 'vue'
import { Point } from 'ol/geom'
import { Style, Icon } from 'ol/style'
import { useRouter } from 'vitepress'

const openMap = ref(null)

const curData = ref({})

const router = useRouter()

const initMap = () => {
  openMap.value = new Map({
    target: 'map',
    layers: [
      new TileLayer({
        source: new XYZ({
          url: 'https://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}'
        })
      })
    ],
    view: new View({
      center: olProj.fromLonLat([102.945951, 38.465262]),
      zoom: 4.8
    }),
    controls: []
  })
}

const setMarker = (data) => {
  const _style = new Style({
    image: new Icon({
      src: flagUrl,
      scale: 1,
      anchor: [0.15, 0.9] // 图标的锚点位置，[0.5, 1] 表示图标底部中心
    })
  })
  const _feature = new Feature({
    geometry: new Point(olProj.fromLonLat(data.point))
  })
  _feature.setStyle(_style)
  _feature._data = data
  const _marker = new VectorLayer({
    source: new VectorSource({
      features: [_feature]
    })
  })
  openMap.value.addLayer(_marker)
}

const diyPopupRef = ref(null)
const popup = ref(null)
const shopPopup = ref(false)

const clickHandle = () => {
  openMap.value.on('click', (e) => {
    // 判断是否点击在点上
    const feature = openMap.value.forEachFeatureAtPixel(
      e.pixel,
      (feature) => feature
    )
    if (feature) {
      router.go(feature._data.page)
    }
  })
}

const pointermoveHandle = () => {
  openMap.value.on('pointermove', (e) => {
    // 判断是否点击在点上
    const feature = openMap.value.forEachFeatureAtPixel(
      e.pixel,
      (feature) => feature
    )
    if (feature) {
      curData.value = {
        ...feature._data
      }
      shopPopup.value = true
      // 设置弹窗位置
      const coordinates = feature.getGeometry().getCoordinates()
      popup.value.setPosition(coordinates)
    } else {
      shopPopup.value = false
    }
  })
}

const pointermove = () => {
  openMap.value.on('pointermove', (e) => {
    if (openMap.value.hasFeatureAtPixel(e.pixel)) {
      openMap.value.getViewport().style.cursor = 'pointer'
    } else {
      openMap.value.getViewport().style.cursor = 'inherit'
    }
  })
}

const addOverlay = () => {
  // 创建Overlay
  popup.value = new Overlay({
    element: diyPopupRef.value,
    positioning: 'bottom-center',
    stopEvent: false,
    offset: [150, 40]
  })
  openMap.value.addOverlay(popup.value)
}

onMounted(() => {
  initMap()
  list.forEach(item => {
    setMarker(item)
  })
  addOverlay()
  pointermoveHandle()
  clickHandle()
  pointermove()
})
</script>

<style lang="scss" scoped>
.map-class {
  height: calc(100vh - 64px);
}
.popup {
  padding: 18px;
  width: 250px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 0 15px rgb(177 177 177);
}
</style>
