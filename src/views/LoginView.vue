<script setup lang="ts">
import LoginForm from '../components/LoginForm.vue'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const visible = ref(false)
const router = useRouter()

const relogin = () => {
  localStorage.removeItem('isAuthenticated')
  visible.value = false
}

const back2home = () => {
  router.push('/')
}

onMounted(() => {
  const isAuthenticated = !!localStorage.getItem('isAuthenticated')
  visible.value = isAuthenticated
  console.log('isAuthenticated', isAuthenticated)
})
</script>

<template>
  <div class="login px-4">
    <LoginForm />
  </div>

  <!-- <Button label="Show" @click="visible = true" /> -->

  <Dialog v-model:visible="visible" modal class="w-80">
    <template #container>
      <div class="p-4">
        <h1 class="pb-8 text-center font-bold text-xl">当前已登录</h1>
        <div class="flex justify-center gap-2">
          <Button
            type="button"
            label="重新登录"
            severity="secondary"
            @click="relogin"
          ></Button>
          <Button type="button" label="返回首页" @click="back2home"></Button>
        </div>
      </div>
    </template>
  </Dialog>
</template>
