<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

import useFacts from '@/composables/useCharacters'

const route = useRoute()
const { fetchFacts, facts } = useFacts()

onMounted(async () => {
  await fetchFacts(route.params.id)
  console.log(facts)
  console.log(route.params.id)
})

onUnmounted(() => {
  facts.value = null
})
</script>

<template>
  <main
    class="min-h-screen bg-gradient-to-r from-green-900 to-blue-700 py-8 text-white"
  >
    <div v-if="facts" class="flex flex-col items-center justify-center gap-6">
      <h1 class="text-white-800 text-6xl font-bold">
        Hi, I'm {{ route.params._id }}
      </h1>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(character, index) in facts"
          :key="index"
          class="rounded-lg bg-white p-4 text-black shadow-lg"
        >
          <pre>{{ character.text }}</pre>
        </div>
      </div>
    </div>
    <div v-else-if="error" class="text-red-500">
      {{ error }}
    </div>
    <div v-else>Loading...</div>
  </main>
</template>
