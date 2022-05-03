<template>
  <div>
    <div class="container mx-auto">
      <div class="container">
        <div v-for="article in articles" :key="article.id"
             class="border-b border-gray-400 py-3"
        >
          <h1 class="text-lg font-bold">{{ article.title }}</h1>
          <p>{{ article.body }}</p>
        </div>
      </div>
    </div>
    <NuxtChild />
  </div>
</template>

<script>
export default {
  name: '',
  head(){
    return {
      title: 'Artigos',
      meta:[
        { hid: 'description', name: 'description', content: '' },
      ],
      bodyAttrs:{
        class: 'bg-gray-400'
      }
    }
  },
  async asyncData({ $axios }) {
    const articles = await $axios.$get('https://jsonplaceholder.typicode.com/posts')
    return {
      articles,
    }
  },
}
</script>
