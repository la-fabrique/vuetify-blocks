<template>
  <Story auto-props-disabled>
    <VContainer>
    <VCard>
      <VCardTitleBlock v-model="title" v-model:editable="editable" color="red"/>      
      <VCardSubtitleBlock v-model="subtitle" v-model:editable="subtitleEditable" color="red"/>
    </VCard>
  </VContainer>
    <template #controls>
      <div class="controls d3-controls">
        <HstCheckbox v-model="editable" title="Editable" />
        </div>
    </template>
</Story>
</template>
<script setup lang="ts">

const title = ref("Card Title")
const subtitle = ref("Card Subtitle")
const editable = ref(false)
const subtitleEditable = ref(false)
</script>