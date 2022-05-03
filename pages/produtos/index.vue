<template>
  <div>
      <h1 class="text-lg font-bold">Produtos</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officiis reiciendis aliquam iusto magnam excepturi possimus, amet ut eligendi voluptatem! Perferendis distinctio id quo rerum temporibus delectus illo iste fuga?</p>
      <div class="container mx-auto flex items-center space-x-4 h-10">
        <NuxtLink to="/produtos/produto-a">produto a</NuxtLink>
        <NuxtLink to="/produtos/produto-b">produto b</NuxtLink>
      </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
