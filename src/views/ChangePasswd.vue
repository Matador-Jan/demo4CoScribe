<script setup lang="ts">
import Password from 'primevue/password'
import Button from 'primevue/button'
import IftaLabel from 'primevue/iftalabel'
import Divider from 'primevue/divider'

import { reactive } from 'vue'

const password = reactive({
  old: '',
  again: '',
  new: '',
})
</script>

<template>
  <div
    class="card flex justify-center border rounded-2xl py-16 my-16 mx-4 lg:max-w-[60rem] lg:mx-auto"
  >
    <div class="flex flex-col gap-2">
      <IftaLabel>
        <Password
          v-model="password.old"
          inputId="passwordOld"
          toggleMask
          :feedback="false"
        />
        <label for="passwordOld">旧密码</label>
      </IftaLabel>
      <Divider />
      <IftaLabel>
        <Password
          v-model="password.new"
          inputId="passwordNew"
          toggleMask
          :feedback="false"
        />
        <label for="passwordNew">新密码</label>
      </IftaLabel>

      <IftaLabel>
        <Password
          v-model="password.again"
          inputId="passwordAgain"
          variant="filled"
          toggleMask
          :feedback="false"
        />
        <label for="passwordAgain">再次输入</label>
      </IftaLabel>
      <Button label="修改密码" />
    </div>
  </div>
</template>

<style scoped>
:deep(input) {
  width: 16rem;
}
</style>
