import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //数据，相当于data
  state: {
    token: '',
    // userInfo: JSON.parse(sessionStorage.getItem("userInfo"))
    userInfo: ''
  },
  getters: {
    getUser: state => {
      return state.userInfo
    }
  },
  //里面定义方法，操作state方发
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
      localStorage.setItem("token", token)
    },
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo
      sessionStorage.setItem("userInfo", JSON.stringify(userInfo))
    },
    REMOVE_INFO: (state) => {
      localStorage.setItem("token", '')
      sessionStorage.setItem("userInfo", JSON.stringify(''))
      state.userInfo = {}
    }
  },
  // 操作异步操作mutation
  actions: {

  },
  modules: {

  },
})
