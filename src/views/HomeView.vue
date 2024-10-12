<script setup lang="ts">
import CommunityIcon from '../components/icons/IconCommunity.vue'
import Divider from 'primevue/divider'
import Fieldset from 'primevue/fieldset'
import Panel from 'primevue/panel'
</script>

<template>
  <main class="p-4 max-w-screen-md md:mx-auto">
    <Panel header="公告" toggleable class="">
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
      <span class="m-0 font-thin text-left text-sm">234987</span>
    </Fieldset>
    <div class="flex gap-1">
      <Fieldset legend="推广海报" class="flex-1 py-2 px-2">
        <p class="m-0 font-thin text-right text-sm">A(点击查看)</p>
      </Fieldset>
      <Fieldset legend="推广海报" class="flex-1 py-2 px-2">
        <p class="m-0 font-thin text-right text-sm">B(点击查看)</p>
      </Fieldset>
    </div>

    <Divider layout="horizontal" class="flex" align="center">提现</Divider>
    <div class="flex gap-1">
      <Fieldset legend="提现按钮" class="flex-1 py-2 px-2">
        <p class="m-0 font-thin text-right text-sm">(点击提现)</p>
      </Fieldset>
      <Fieldset legend="支付宝绑定" class="flex-1 py-2 px-2">
        <p class="m-0 font-thin text-right text-sm">(点击绑定)</p>
      </Fieldset>
    </div>
    <Divider
      layout="horizontal"
      align="center"
      class="text-sm font-light text-slate-400 text-opacity-80 mt-16"
    >
      我也是有底线的
    </Divider>
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
