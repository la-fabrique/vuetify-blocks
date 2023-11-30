<template>
    <VEditBlock   v-slot="{  onMouseenter, onMouseleave, edit }" :modelValue="modelValue" @update:modelValue="$event => emit('update:modelValue', $event)">
        <VCardTitle 
        @click="edit"        
        v-bind="$attrs" 
        @mouseenter= "onMouseenter"
        @mouseleave= "onMouseleave"
        >
            {{ modelValue }}
        </VCardTitle>
    </VEditBlock>   
</template>
<script setup lang="ts">
//import { mdiPencil } from '@mdi/js'
import VEditBlock from './VEditBlock.vue';

const props = defineProps({
    modelValue: {
        type: String,
        default: undefined
    },
    editable: {
        type: Boolean,
        default: false
    }
})
const emit = defineEmits<{
  'update:modelValue': [value?: string]
  'update:editable': [value: boolean]
}>()

 defineOptions({
  inheritAttrs: false
}) 

</script>
<style lang="scss">
    
.v-card-title {
    cursor: pointer;
}

</style>

