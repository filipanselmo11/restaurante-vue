<script lang="ts" setup>
defineProps<{
    titulo: string,
    descricao: string,
}>();

const emits = defineEmits(['mostrarLocalizacao']);
const mostrarLocalizacao = () => {
    emits('mostrarLocalizacao');
}
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
            <button type="button" @click="mostrarLocalizacao" class="btn btn-primary">Ver localização</button>
        </div>
    </div>
</template>

<style scoped>
.card {
    background-color: #000814 !important;
    color: #76c893 !important;
}

.btn.btn-primary {
    background-color: #003566 !important;
    color: #ffc300 !important;
}
</style>