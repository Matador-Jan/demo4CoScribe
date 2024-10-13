<script setup lang="ts">
import CommunityIcon from '../components/icons/IconCommunity.vue'
import Divider from 'primevue/divider'
import Fieldset from 'primevue/fieldset'
import Panel from 'primevue/panel'
import Button from 'primevue/button'
import { ref } from 'vue'

const isCollapsed = ref(true)

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
  <main class="p-4 max-w-screen-md md:mx-auto">
    <Panel header="公告" toggleable :collapsed="isCollapsed" class="">
      <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </Panel>
    <Divider layout="horizontal" align="center">基础数据</Divider>

    <div class="flex gap-1">
      <Fieldset legend="我的钻石" class="flex-1 py-2 px-2">
        <p class="m-0 font-thin text-right text-sm">99999.99</p>
      </Fieldset>
      <Fieldset legend="我的余额" class="flex-1 py-2 px-2">
        <p class="m-0 font-thin text-right text-sm">99999.00</p>
      </Fieldset>
    </div>
    <div class="flex gap-1">
      <Fieldset legend="今日收益" class="flex-1 py-2 px-2">
        <p class="m-0 font-thin text-right text-sm">99999.00</p>
      </Fieldset>
      <Fieldset legend="昨日收益" class="flex-1 py-2 px-2">
        <p class="m-0 font-thin text-right text-sm">99999.00</p>
      </Fieldset>
    </div>

    <Divider layout="horizontal" class="flex md:hidden" align="center"
      >系统功能</Divider
    >
    <div class="grid grid-cols-3 gap-2">
      <div class="card border shadow-sm rounded-md p-2" v-for="i in 8" :key="i">
        <div class="flex justify-center items-center m-3">
          <CommunityIcon />
        </div>
        <p class="m-0 text-center text-sm font-sans font-light">钻石转赠</p>
      </div>
    </div>

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

    <Divider layout="horizontal" class="flex" align="center">提现</Divider>

    <div class="flex gap-1">
      <Fieldset legend="支付宝" class="flex items-center justify-between">
        <span class="pr-4">已绑定</span>
        <Button label="重新绑定" outlined severity="danger" />
      </Fieldset>
      <Button label="提现" class="flex-1" />
    </div>

    <Divider
      layout="horizontal"
      align="center"
      class="text-sm font-light text-slate-400 text-opacity-80 mt-16"
    >
    </Divider>
    <div class="flex gap-1 my-4">
      <Button label="修改密码" class="flex-1" severity="danger" />
      <Button label="退出系统" class="flex-1" severity="secondary" />
    </div>

    <Divider layout="horizontal" align="center"> </Divider>
  </main>
</template>

<style scoped>
main {
  /* border: 1px solid red; */
}
.card {
  /* border: 1px solid red; */
}
</style>
