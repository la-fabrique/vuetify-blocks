<template>
    <VHover v-if="!editable"  v-slot="{ isHovering,  props:p }">
        <VCardSubtitle
        @click="emit('update:editable', true)"        
        v-bind="{...$attrs, ...p}"  >
            {{ props.modelValue }}
            <VIcon v-show="isHovering" class="float-right text-disabled p-2" >{{ mdiPencil }}</VIcon>
        </VCardSubtitle>
    </VHover>
    <VTextFieldBlock 
        v-else
        :modelValue="props.modelValue"        
        @update:modelValue="emit('update:modelValue',$event)"       
        @close="emit('update:editable', false)"        
    />
   
</template>
<script setup lang="ts">
import { mdiPencil } from '@mdi/js'

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

