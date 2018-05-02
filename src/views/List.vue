<template>
    <div class="container">
        <div class="row">
            <app-restaurant-tile v-for="restaurant in restaurants" :key="restaurant.name" :restaurant="restaurant">{{restaurant.name}}</app-restaurant-tile>
        </div>
    </div>
</template>

<script>
import RestaurantListTile from '@/components/RestaurantListTile.vue';

export default {
    components: {
        appRestaurantTile: RestaurantListTile
    },
    computed: {
        restaurants() {
            return this.$store.getters.restaurants;
        }
    },
    created() {
        this.$store.dispatch("initRestaurants");
    }
}
</script>

<style>
</style>
