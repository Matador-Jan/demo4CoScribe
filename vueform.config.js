// vueform.config.(js|ts)

import zh_CN from '@vueform/vueform/locales/zh_CN'
import tailwind from '@vueform/vueform/dist/tailwind'
import { defineConfig } from '@vueform/vueform'

export default defineConfig({
  theme: tailwind,
  locales: { zh_CN },
  locale: 'zh_CN',
})
