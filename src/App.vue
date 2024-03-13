<script setup lang="ts">
import { useRestauranteStore } from './stores/restauranteStore';
import NavbarComponent from './components/NavbarComponent.vue';
import CardComponent from './components/CardComponent.vue';
const restauranteStore = useRestauranteStore();
restauranteStore.getRestaurantes();
</script>

<template>
  <div class="app-component">
    <NavbarComponent/>
    <div v-if="restauranteStore.loading" class="text-center mt-4">
      <h2>
        Carregando...
      </h2>
    </div>
    <div v-else>
      <div class="container overflow-hidden text-center mt-4">
        <div class="row gy-5">
          <div v-for="(item, index) in restauranteStore.restaurantes" :key="index" class="col-3">
            <CardComponent :titulo="item.titulo" :descricao="item.descricao"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
