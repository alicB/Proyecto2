<script>
  import { mapState } from 'vuex'

  export default {
    async fetch({ i18n, context, params, store, store: { dispatch, getters } }) {
      await dispatch('getPersonaje', params)
      await dispatch('getReadMore', {
            slug: params.slug,
            tags: Object.keys(store.state.personajes.data)
    })
    await dispatch('getPrevNext', params)
    },
    computed: {
      ...mapState({
        personaje: (state) => state.personaje.data,
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
      <img class="u-max-full-width" :src="'/images/personajes/'+personaje.image" alt="Es la cobra takataka">
    </div>
    <div class="six columns">
     <h4>{{personaje.nombre}}</h4>
	   Casa Atacante: <NuxtLink :to="'/personajes/personaje'+personaje.id_rey_ataca">{{personaje.casa_nacimiento}}</NuxtLink><br>
	   Region: <NuxtLink :to="'/personajes/personaje'+personaje.id_rey_defensor">{{personaje.region}}</NuxtLink><br>
	   
	   Titulo: {{personaje.titulo}}<br>
	   Edad: {{personaje.edad}} <br>
	 </div>
	 <div class="two columns"></div>
   </div>
   <FooterView />
 </div>
</template>