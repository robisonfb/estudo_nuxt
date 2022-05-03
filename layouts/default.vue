<template>
  <div>
    <div class="bg-gray-100">
      <div class="container mx-auto flex items-center space-x-4 h-10">
      <NuxtLink :to="{name :'empresa' , params:{} }">A Empresa</NuxtLink>
      <NuxtLink :to="{name :'servicos' , params:{} }">Serviços</NuxtLink>
      <NuxtLink :to="{name :'produtos' , params:{} }">Produtos</NuxtLink>
      <NuxtLink :to="{name :'articles' , params:{} }">Artigos</NuxtLink>
      <NuxtLink :to="{name :'users' , params:{} }">Users</NuxtLink>
      </div>
    </div>
    <div class="container mx-auto">
    <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: ''
};
</script>
