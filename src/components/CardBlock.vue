<template>
    
    <VCard><slot /></VCard>
</template>

<script setup lang="ts">

defineProps({
    title: {
        type: String,
        default: 'Card'
    }
})
</script>
