<script>
  import { mapState } from 'vuex'

  export default {
    async fetch({ i18n, context, params, store, store: { dispatch, getters } }) {
      await dispatch('getBatalla', params)
      await dispatch('getReadMore', {
            slug: params.slug,
            tags: Object.keys(store.state.batallas.data)
    })
    await dispatch('getPrevNext', params)
    },
    computed: {
      ...mapState({
        batalla: (state) => state.batalla.data,
        readMore: (state) => state.readMore.data,
        prevNext: (state) => state.prevNext.data,
      })
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <div class="row">
    <div class="three columns">
      <img class="u-max-full-width" :src="'/images/batalla/'+batalla.image" alt="Takataka">
    </div>
    <div class="six columns">
     <h4>{{batalla.Nombre}}</h4>
	   Rey Atacante: <NuxtLink :to="'/personajes/personaje'+batalla.id_rey_ataca">{{batalla.rey_ataca}}</NuxtLink><br>
	   Rey Defensor: <NuxtLink :to="'/personajes/personaje'+batalla.id_rey_defensor">{{batalla.rey_defensor}}</NuxtLink><br>
	   
	   Año: {{batalla.annio}}<br>
	   Comandante Atacante: {{batalla.comandante_ataca}} <br>
	   Casa Atacante <NuxtLink :to="'/casas/casa'+batalla.id_casa_ataca">{{batalla.casa_ataca}}</NuxtLink><br><br>
	 </div>
	 <div class="two columns"></div>
   </div>
   <FooterView />
 </div>
</template>