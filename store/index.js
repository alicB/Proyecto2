import STATUS_TYPES from './config/statusTypes'
import { parsesJSON } from './utils'

const state = () => ({
    batallas: {
        status: STATUS_TYPES.INIT,
        error: null,
        data: []
    },
    batalla: {
        status: STATUS_TYPES.INIT,
        error: null,
        data: {}
    },
    personajes: {
        status: STATUS_TYPES.INIT,
        error: null,
        data: []
    },
    personaje: {
        status: STATUS_TYPES.INIT,
        error: null,
        data: {}
    },
    prevNext: {
        status: STATUS_TYPES.INIT,
        error: null,
        data: {}
    },
    readMore: {
        status: STATUS_TYPES.INIT,
        error: null,
        data: []
    }
});
/* All states mutations */
const mutations = {
    GET_BATALLAS(state, payload) {
        state.batallas.data = payload
        state.batallas.status = STATUS_TYPES.SUCCESS
    },
    GET_BATALLA(state, payload) {
        state.batalla.data = payload
        state.batalla.status = STATUS_TYPES.SUCCESS
    },
    GET_PERSONAJES(state, payload) {
        state.personajes.data = payload
        state.personajes.status = STATUS_TYPES.SUCCESS
    },
    GET_PERSONAJE(state, payload) {
        state.personaje.data = payload
        state.personaje.status = STATUS_TYPES.SUCCESS
    },
    GET_READ_MORE(state, payload) {
        state.readMore.data = payload
        state.readMore.status = STATUS_TYPES.SUCCESS
    },
    GET_PREV_NEXT(state, payload) {
        state.prevNext.data = payload
        state.prevNext.status = STATUS_TYPES.SUCCESS
    }
};
/* All states getters */
const getters = {
    getBatallas: (state) => parsesJSON(state.batallas),
    getBatalla: (state) => parsesJSON(state.batalla),
    getPersonajes: (state) => parsesJSON(state.personajes),
    getPersonaje: (state) => parsesJSON(state.personaje),
    getPrevNext: (state) => parsesJSON(state.prevNext),
    getReadMore: (state) => parsesJSON(state.readMore)
};
/* All states actions */
const actions = {
    async getBatallas({ commit }, params, callback) {
        const storeBatallas = await this.$content('Batallas')
            .fetch()
        commit('GET_BATALLAS', storeBatallas)
    },
    async getBatalla({ commit }, params, callback) {
        const storeBatalla = await this.$content('Batallas', params.slug).fetch()
        console.log(storeBatalla);
        commit('GET_BATALLA', storeBatalla)
    },
    async getPersonajes({ commit }, params, callback) {
        const storePersonajes = await this.$content('Personajes')
            .fetch()
        commit('GET_PERSONAJES', storePersonajes)
    },
    async getPersonaje({ commit }, params, callback) {
        const storePersonaje = await this.$content('Personajes', params.slug).fetch()
        console.log(storePersonaje);
        commit('GET_PERSONAJE', storePersonaje)
    },
    async getPrevNext({ commit }, params, callback) {
        const [prev, next] = await this.$content('Batallas')
            .surround(params.slug)
            .fetch()
        commit('GET_PREV_NEXT', { prev, next })
    },
    async getReadMore({ commit }, params, callback) {
        const storeReadMore = await this.$content('Batallas')
            .where({
                slug: { $ne: params.slug },
            })
            .limit(3)
            .fetch()
        commit('GET_READ_MORE', storeReadMore)
    }
};
/* Export all stores */
export default {
    state,
    mutations,
    getters,
    actions
}