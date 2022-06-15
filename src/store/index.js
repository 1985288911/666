/* 
    vue仓库 vuex
*/
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    isCollapse: false,//控制侧边栏开关
}

const getters = {
    /* 获得侧边栏的状态 */
    getCollapse(state){
        return state.isCollapse
    },
}

const mutations = {
    /* 改变侧边栏的状态 */
    changeCollapse(state){
        state.isCollapse = !state.isCollapse;
    },
}


export default new Vuex.Store({
    state,
    getters,
    mutations,
})