<script setup lang="ts">
import PromotionSubView from './PromotionSubView.vue'
import FunctionMenuSubView from './FunctionMenuSubView.vue'
import Divider from 'primevue/divider'
import Fieldset from 'primevue/fieldset'
import Panel from 'primevue/panel'
import Button from 'primevue/button'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const isCollapsed = ref(true)
const onLogout = () => {
  localStorage.removeItem('isAuthenticated')
  router.push('/login')
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

    <FunctionMenuSubView />

    <PromotionSubView />

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
      <Button
        label="退出系统"
        class="flex-1"
        severity="secondary"
        @click="onLogout"
      />
    </div>

    <Divider layout="horizontal" align="center"> </Divider>
  </main>
</template>
