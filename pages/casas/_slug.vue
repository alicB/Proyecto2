<script>
  export default {
    async asyncData({ $content, params }) {
      const discografica = await $content('discograficas', params.slug).fetch()
      const album = await $content('album').where({ discograficaId: params.slug }).fetch()
      return { discografica, album }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <div class="row">
     <div class="three columns">
       <img class="u-max-full-width" :src="'/images/'+discografica.image">
     </div>
     <div class="six columns">
       <h4>{{discografica.name}}</h4>
        Fundación: {{discografica.founded}}<br>
        País: {{discografica.country}} <br><br>
	   
	    <b>Historia</b><br>
	    <nuxt-content :document="discografica" />
	  </div>
	 <div class="three columns"></div>
	   <h5>Álbumes Publicados</h5>
	   <ul>
	     <li v-for="a of album" :key="a.slug">
	       <NuxtLink :to="{ name: 'album-slug', params: { slug: a.slug } }">{{a.title}}</NuxtLink>
	     </li>
	   </ul>
	   
	   
	   
	   
   </div>
   <FooterView />
 </div>
</template>