<script setup lang="ts">
import Toolbar from 'primevue/toolbar'
import Button from 'primevue/button'
import { ref } from 'vue'

type mode = 'home' | 'level2'
const mode = ref('home')

const showBackArrow = ref(false)
const showThreeDot = ref(false)
// const showBackArrow = ref(true)
// const showThreeDot = ref(true)
const title = ref('YoYo后台管理中心')

const onClick = () => {
  console.log('click')
}
</script>

<template>
  <div
    class="card border-b-[1px] shadow-sm overflow-hidden sticky z-[1000] top-0 bg-white/95"
  >
    <Toolbar
      class="border-x-0 h-[50px]"
      style="padding: 0.25rem 1rem 0.25rem 1rem; border: 0"
    >
      <template #start>
        <div class="container min-w-12">
          <div class="flex items-center gap-2" v-show="showBackArrow">
            <Button
              icon="pi pi-arrow-left"
              class="mr-2"
              severity="secondary"
              text
            />
          </div>
        </div>
      </template>
      <template #center>
        <div class="flex justify-center items-center font-semibold">
          {{ title }}
        </div>
      </template>

      <template #end>
        <div class="conatiner min-w-12">
          <div class="flex items-center gap-2" v-show="showThreeDot">
            <Button
              icon="pi pi-ellipsis-h"
              class="mr-2"
              severity="secondary"
              text
              @click="onClick"
            />
          </div>
        </div>
      </template>
    </Toolbar>
  </div>
</template>
