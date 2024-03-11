import { defineStore } from "pinia";
import { api } from "../services/api";
import { RestauranteInterface } from "../types/types";
export const useRestauranteStore = defineStore('restauranteStore', {
    state: () => ({
        restaurantes: [] as RestauranteInterface[],
        loading: true
    }),
    actions: {
        async getRestaurantes(): Promise<void> {
            this.loading = true;
            await api.get('/restaurantes').then(res => {
                this.restaurantes = res.data.restaurantes;
            }).catch(error => {
                console.log('API ERROR ', error);
            });
            this.loading = false;
        }
    },
});