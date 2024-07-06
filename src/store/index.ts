import type { App, InjectionKey } from 'vue'
import { createStore } from 'vuex'

import auth from './auth'
import type { IAuthState } from './auth'
import type { Store } from 'vuex/types/index.js'

export const key: InjectionKey<Store<
IAuthState>> = Symbol()

export const store = createStore({
  modules: { auth }
})

export default (app: App) => app.use(store)