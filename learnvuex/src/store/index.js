import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const moudelA = {
  state: {
    name:'Vue'
  },
  mutations: {
    updateName(state) {
      state.name = "Vue CLI"
    },
    updateName3(state,message) {
      state.name = message;
    }
  },
  actions: {
    aUpdateName(context,message) {
      setTimeout(()=>{
        console.log(context)
        context.commit('updateName3',message);
      },1000)
    }
  },
  getters: {
    fullName(state) {
      return state.name + "123";
    },
    fullName1(state,getters) {
      return getters.fullName + "456"
    },
    fullName2(state,getters,rootState) {
      return getters.fullName1 + rootState.count
    }
  }
}

const store = new Vuex.Store({
  state: {
    count: 100,
    info: [
      {age:10},
      {age:20},
      {age:8}
    ]
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    incrementCount(state,num){
      state.count +=num;
    },
    update(state){
      Vue.set(state.info,2,{age:28})
    }
  },
  actions: {
    updateInfo(context,message){
      // setTimeout(() => {
      //   // context.state.info.add({age:30});
      //   // context.state.info[2].age=28;
      //   // context.state.info[2]= {age:28};
      //   Vue.set(context.state.info,2,{age:28})
      // },1000)
      return new Promise((resolve,reject) => {
        setTimeout(() =>{
          context.commit("update");
          console.log(message);
          resolve("成功后调用");
        },1000)
      })
    }
  },
  getters: {
    powerCount(state){
      return state.count * state.count;
    },
    more10Info(state){
      return state.info.filter(info => info.age>10)
    },
    moreAge(state){
      return age => {
        return state.info.filter(info => info.age > age)
      }
    }
  },
  modules: {
    moudelA
  }
});

export default store
