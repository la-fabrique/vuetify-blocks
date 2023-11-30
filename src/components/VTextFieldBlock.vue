<template>
 <VTextField 
        v-model="newValue"       
        clearable 
        v-click-outside="onCancel"            
    >
    <template #append-inner>
        <VIcon @click="onConfirm" class="ml-4 mr-2">{{ mdiCheck }}</VIcon>
        <VIcon @click="onCancel" >{{ mdiUndo }}</VIcon>
    </template>
    </VTextField>   
</template>
<script setup lang="ts">
import {mdiUndo,  mdiCheck} from '@mdi/js'

const props= defineProps  ({
    modelValue: {
        type: String,
        required: true
    },
})

const emit = defineEmits<{
  'update:modelValue': [value?: string]
  'close': []
}>()

const onConfirm = () => {    
    emit('update:modelValue', newValue.value)
    emit('close')
}
const onCancel = () => {
    emit('close')
}

const newValue = ref(props.modelValue)


</script>