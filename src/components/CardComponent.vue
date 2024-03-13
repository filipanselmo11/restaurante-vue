<script lang="ts" setup>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { onMounted, ref } from 'vue';
defineProps<{
    titulo: string,
    descricao: string,
}>();

let map = null;
let tileLayer = null;
const loading = ref(true);
const initMap = () => {
    loading.value = true;
    map = L.map("map").setView([-0.1306783854436242, -67.08850595028112], 16);
    tileLayer = L.tileLayer(
        "https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png",
        {
            maxZoom: 18,
            attribution:
                '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
        }
    );
    tileLayer.addTo(map);
    loading.value = false;
};

onMounted(() => {
    initMap();
});
</script>

<template>
    <div class="card" style="width: 300px; height: 190px;">
        <div class="card-body">
            <h5 class="card-title">
                {{ titulo }}
            </h5>
            <p class="card-text">
                {{ descricao }}
            </p>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Ver localização
            </button>

        </div>
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">{{ titulo }}</h1>
                </div>
                <div class="modal-body">
                    <div id="map"></div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Fechar</button>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
#map {
    height: 900px !important;
}

.card {
    background-color: #000814 !important;
    color: #76c893 !important;
}

.btn.btn-primary {
    /* position: fixed !important; */
    /* left: 0 !important;
    bottom: 0 !important; */
    background-color: #003566 !important;
    color: #ffc300 !important;
}
</style>