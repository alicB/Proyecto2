<script>
  import { mapState } from 'vuex'

  export default {
    async fetch({ params, store: { dispatch, getters } }) {
      await dispatch('getPersonajes')
    },
    computed: {
      ...mapState({
        personajes: (state) => state.personajes.data,
      })
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 15px">Personajes </h3>
   <ul class="ul">
     <li v-for="p of personajes" :key="p.slug">
       <div class="card">
          <div>
            <img class="card-img" :src="'/images/' + p.image" />
          </div>
          <div class="card-text">
            <h4 class="card-title"><strong> {{ p.nombre }} </strong></h4>
            <p class="card-description">
              <span>Edad: {{p.edad}}</span><br>
              <span>Casa: {{p.casa_nacimiento}}</span><br>
            </p>
            <NuxtLink :to="{ name: 'personajes-slug', params: { slug: p.slug } }" class="button">
                Detalles
            </NuxtLink>
          </div>
        </div>
     </li>
   </ul>
   <FooterView />
 </div>
</template>