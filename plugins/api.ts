import { useUserStore } from "~/stores/user";



export default defineNuxtPlugin({
    name: 'api',
    setup() {
        const nuxtApp = useNuxtApp()
        const userStore = useUserStore()
        const api = $fetch.create({
            baseURL: 'https://fakestoreapi.com/',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            onRequest({ options }) {
                if (userStore.user.token) {
                  const headers = options.headers ||= {};
                  if (Array.isArray(headers)) {
                    headers.push(['Authorization', `Bearer ${userStore.user.token}`]);
                  } else if (headers instanceof Headers) {
                    headers.set('Authorization', `Bearer ${userStore.user.token}`);
                  } else {
                    headers.Authorization = `Bearer ${userStore.user.token}`;
                  }
                }
              },
              onResponseError({ response }) {
                if (response.status === 401) {
                  nuxtApp.runWithContext(() => navigateTo('/login'));
                }
              }
          
            // onRequest(config) {
            //     const userStore = useUserStore()
            //     config.headers['Authorization'] = `Bearer ${userStore.user.token}`
            // }
        })
        return {
            provide: {
                api
            }
        }
    }
})

// const api = $fetch.create({
    //     baseURL: 'https://fakestoreapi.com/',
    // onRequest(config) {
    //     const userStore = useUserStore()
    //     config.options.headers = {
    //         Authorization: `Bearer ${userStore.user.token}`
    //     };
    // },
    // });
    // return {
    //     provide: {
    //         $api: api,
    //     },
    // }