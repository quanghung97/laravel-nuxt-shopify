import axios from './../../plugins/axios'

// axios.defaults.baseURL = 'http://localhost/vuejs-laravel-learning/laravel-nuxtjs-more-easy-to-learn/public/api'
// axios.defaults.headers.common['Authorization'] = "Bearer "+token;
// axios.defaults.headers.post['Content-Type'] = 'application/json';

export default {
    namespaced: true,
    state: {
        checkLogin: false,
        userName: ''
    },

    mutations: {
        logged(state, data) {
            state.userName = data
            // state.userName = localStorage.getItem('userName')
        }
    },
    actions: {
        async fetchToken({ commit, state }) {
             const { data } = await axios.get('/info')
             commit('logged', data)
        }
    }
}
