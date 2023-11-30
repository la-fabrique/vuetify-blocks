<template>
      <VHover v-if="!isEditing" v-slot="{ isHovering,  props:p }"  class="v-edit-block" ><!--TODO class non prise en compte-->
        <slot :isHovering="isHovering"  :edit="() => isEditing = true" 
        :onMouseenter= "p.onMouseenter"
        :onMouseleave= "p.onMouseleave"
        class="v-edit-block__content"
        />   
        <div class="v-edit-block__append-inner" v-show="isHovering">
          <VIcon class="text-disabled mx-2" @click="isEditing = true" >{{ mdiPencil }}</VIcon>
        </div>  
      </VHover>
    <VTextFieldBlock 
        v-else
        :modelValue="props.modelValue"        
        @update:modelValue="($event?: string ) => emit('update:modelValue',$event)"       
        @close="isEditing = false"        
    />
</template>

<script setup lang="ts">
import { mdiPencil } from '@mdi/js'

const props = defineProps({
    modelValue: {
        type: String,
        default: undefined
    },
 
})
const emit = defineEmits<{
  'update:modelValue': [value?: string]
  'update:editable': [value: boolean]
}>()

const isEditing = ref(false)


defineOptions({
  inheritAttrs: false
})

</script>
<style lang="scss">

.v-edit-block {
  display: grid; 
  grid-template-areas: "content icon";
  grid-template-columns: 1fr auto;
  max-width: 100%;
}

.v-edit-block__content {
  grid-area: content;
  position: relative;
  align-items: flex-start;
  display: flex;
}

.v-edit-block__append-inner {
  display: flex;
  align-items: center;
  padding-top: 0;
  cursor: pointer;
}

</style>
