<style>
#jazz{
  position: absolute;
  margin-left: -17%;
  margin-top: -4%;
}

.b{
  padding-left: 10px;
  padding-right: 10px;
  border-left: 1px solid black;
}
.a{
  padding-right: 10px;
}
.c{
  width: 100%;
  text-align-last: center;
}

.c .a,.c .b{
  text-decoration: none;
  color: black;
  font-size: 14pt;
}
</style>

<template>
  <div>
    <H1 id="jazz"><img src="/images/jazz.png" width="150px"></H1>
    <div class="row c"  style="margin-top: 15px;">  
      <NuxtLink class="a" to="/">Home</NuxtLink> 
      <NuxtLink class="b" to="/batallas_index">Batallas</NuxtLink>
      <NuxtLink class="b" to="/personajes_index">Personajes</NuxtLink>
      <NuxtLink class="b" to="/discograficas_index">Discográficas</NuxtLink>
    </div>
  </div>
</template>