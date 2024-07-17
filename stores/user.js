import { defineStore, acceptHMRUpdate } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
        user:{
            token : '',
            name : '',
            email : '',
            role : '',
        }
    };
  },
  getters: {},
  actions: {
    restState(){
        this.user.token = ''
        this.user.name = ''
        this.user.email = ''
        this.user.role = ''
    },

    setState(data){
        this.user.token = data.token
        this.user.name = data.name
        this.user.email = data.email
        this.user.role = data.role
    }
  },

  persist: true,
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
