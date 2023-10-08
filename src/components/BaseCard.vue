<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<script setup>
const props = defineProps({
  character: {
    type: Object,
    default: () => ({
      _id: -1,
      user: 'Unknown',
      imageUrl: 'https://via.placeholder.com/150',
    }),
  },
})
</script>

<template>
  <RouterLink
    v-if="props.character._id"
    :to="`/cards/${props.character.user}`"
    class="rounded-lg bg-white shadow-lg"
  >
    <img
      class="w-full rounded-t-lg object-cover"
      :src="props.character.imageUrl"
    />
    <div class="p-4">
      <h2 class="text-1xl font-semibold text-gray-800">
        {{ props.character.user }}
      </h2>
      <p>
        {{ props.character.text }}
      </p>
    </div>
  </RouterLink>
</template>
