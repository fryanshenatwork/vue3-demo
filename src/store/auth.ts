import type { Module } from "vuex/types/index.js"

export interface IAuthState {
  isLogin: boolean
  username: string
}

const stateShape: IAuthState = {
  isLogin: false,
  username: ''
}

const state: () => IAuthState = () => {
  let returning = structuredClone(stateShape)
  try {
    const localInfo = localStorage.getItem('loginInfo') || ''
    const tryParse = JSON.parse(localInfo) as IAuthState
    if (
      typeof tryParse === 'object' &&
      tryParse.isLogin !== undefined &&
      tryParse.username !== undefined 
    ) {
      returning.isLogin = tryParse.isLogin
      returning.username = tryParse.username
    }
  } catch (e) {
    // do nothing
  }
  return returning
}

const mutations = {
  setLogin: (theState: IAuthState, username: string) => {
    theState.isLogin = true
    theState.username = username
    localStorage.setItem('loginInfo', JSON.stringify(theState))
  },
  setLogout: (theState: IAuthState) => {
    theState.isLogin = false
    theState.username = ''
    localStorage.setItem('loginInfo', JSON.stringify(theState))
  }
}

const getters = {
  getAuthState: (state: IAuthState) => state
}

const actions = {
  login: (context, payload: string) => {
    context.commit("setLogin", payload);
  },
  logout: (context) => context.commit("setLogout")
}

const module: Module<IAuthState, object> = {
  state,
  mutations,
  getters,
  actions
}

export default module