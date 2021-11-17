<style>
.card {
  display: flex;
  justify-content: space-around;
  padding: 20px;
  max-width: 400px;
  height: 155px;
  margin: 20px;
  border-radius: 10px;
  background-color: #e2e8f0;
  box-shadow: 0 9px 33px rgba(0, 0, 0, 0.07);
}

.card-text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  margin-left: 10px;
}

.card-img {
  width: 80px;
  height: 80px;
  border-radius: 10%;
  background-color: #4F46E5;
}

.card-description {
  margin: 10px 0;
  font-size: 12px;
  color: #64748B;
}

.card-title{
  font-size: 16px;
  color: #334155;
}

.card-link {
  margin-top: 20px;
  font-size: 12px;
  color: #4F46E5;
}

.card-skills {
  display: flex;
  justify-content: space-between;
}
.card-skills .skill {
  font-size: 12px;
  font-weight: 600;
  color: #475569;
}

.ul{
  list-style-type: none;
}

.ul li{
  list-style: none;
  float: left;
}

.ul li a {
  display: block;
  color: blue;
  text-align: center;
  text-decoration: none;
  z-index: 1;
}

</style>

<script>

import { mapState } from 'vuex'

export default {
  async fetch({ params, store: { dispatch, getters } }) {
    await dispatch('getBatallas')
  },
  computed: {
    ...mapState({
      batallas: (state) => state.batallas.data,
    })
  }
}
</script>

<template>
  <div class="container">
    <HeaderView />
    <h3 style="margin-top: 15px">Batallas</h3>
    <ul class="ul">
      <li v-for="b of batallas" :key="b.slug">
        <div class="card">
          <div>
            <img class="card-img" :src="'/images/batalla/' + b.image" />
          </div>
          <div class="card-text">
            <h4 class="card-title"><strong> {{ b.Nombre }} </strong></h4>
            <p class="card-description">
              <span>Año: {{b.annio}}</span><br>
              <span>Lugar: {{b.lugar}}</span><br>
			        <span>Region: {{b.region}}</span><br>
            </p>
            <NuxtLink :to="{ name: 'batallas-slug', params: { slug: b.slug } }" class="button">
                Detalles
            </NuxtLink>
          </div>
        </div>
      </li>
    </ul>
    <FooterView />
  </div>
</template>