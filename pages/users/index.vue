<template>
  <div>
    <div class="container mx-auto">
      <div class="container">
        <div v-if="$fetchState.pending">
          Carregando ...
        </div>
        <div v-else>
          <div v-for="user in users" :key="user.id" class="border-b border-gray-400 py-3">
            <h1 class="text-lg font-bold">{{ user.name }}</h1>
            <h1 class="text-lg font-bold">{{ user.email }}</h1>
          </div>
        </div>
      </div>
    </div>
    <NuxtChild />
  </div>
</template>

<script>
export default {
  name: '',
  data(){
    return {
      users : []
    };
  },
  async fetch(){
    this.users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users')
  },
}
</script>
