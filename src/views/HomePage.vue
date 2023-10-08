<script setup>
import BaseCard from '@/components/BaseCard.vue'
import useFacts from '@/composables/useCharacters'

const { facts, fetchFacts } = useFacts()
</script>

<template>
  <button
    title="Load Facts"
    class="z-90 fixed bottom-8 right-8 flex h-20 w-20 items-center justify-center rounded-full bg-green-600 text-4xl text-white drop-shadow-lg duration-300 hover:scale-110 hover:bg-green-700 hover:drop-shadow-2xl"
    @click="fetchFacts"
  >
    🚀
  </button>
  <main class="min-h-screen bg-gradient-to-r from-green-900 to-blue-700">
    <div class="container mx-auto grid grid-cols-8 gap-4 py-8">
      <BaseCard v-for="fact in facts" :key="fact.text" :character="fact" />
    </div>
  </main>
</template>
