<script setup lang="ts">
import Divider from 'primevue/divider'
import Fieldset from 'primevue/fieldset'
import Button from 'primevue/button'
import { ref } from 'vue'

const recommendCode = ref(
  (() => Math.floor(100000 + Math.random() * 900000).toString())(),
)

const copyRecommendCode = () => {
  navigator.clipboard
    .writeText(recommendCode.value)
    .then(() => {
      console.log('已复制到剪贴板')
      alert('已复制: ' + recommendCode.value)
    })
    .catch(err => {
      console.error('复制失败: ', err)
    })
}
</script>

<template>
  <Divider layout="horizontal" align="center">推广</Divider>

  <Fieldset legend="我的推荐码" class="flex flex-col">
    <div class="flex justify-between items-center">
      <span class="m-0 font-thin text-left text-sm">{{ recommendCode }}</span>
      <Button
        label="复制"
        icon="pi pi-copy"
        class=""
        @click="copyRecommendCode"
      />
    </div>
  </Fieldset>

  <Fieldset legend="推广海报" class="pb-1 px-1">
    <div class="flex items-center justify-between">
      <Button label="海报A" link class="mx-2 flex-1" />
      <Button label="海报B" link class="mx-2 flex-1" />
    </div>
  </Fieldset>
</template>
