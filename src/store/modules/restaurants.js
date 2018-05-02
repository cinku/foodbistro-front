import restaurants from '../../data/restaurants';

const state = {
    restaurants: []
};

const mutations = {
    'SET_RESTAURANTS' (state, restaurants) {
        state.restaurants = restaurants;
    }
};

const actions = {
    initRestaurants: ({ commit }) => {
        commit('SET_RESTAURANTS', restaurants);
    }
};

const getters = {
    restaurants: state => state.restaurants
};

export default {
    state,
    mutations,
    actions,
    getters
};