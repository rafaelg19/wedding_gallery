import axios from 'axios'
import VueJwtDecode from 'vue-jwt-decode'

import router from '../../../router'

const API_URL = 'http://localhost:8000/api'
const AVATAR_DIR = 'https://8cc1f5f0-gallery.s3.sa-east-1.amazonaws.com/avatar/'

const state = {
	user_id: null,
	user_name: null,
	user_admin: null,
	AVATAR_DIR		
}

const getters = {
	// return user as an object
	getUser: state => {
		return {
			id: state.user_id,
			name: state.user_name,
			admin: state.user_admin
		}
	}
}

const mutations = {
	setUser(state, p) {
		// decode token
		const decoded = VueJwtDecode.decode(p)

		state.user_id = decoded.user_id
		state.user_name = decoded.user_name
		state.user_admin = decoded.user_admin
	},
	clearUser(state) {
		state.user_id = null
		state.user_name = null
		state.user_admin = null
	}
}
	
const actions = {
	async login(context, credentials) {
		const data = {
			username: credentials.username,
			password: credentials.password
		}
		// authentication request
		return await axios.post(API_URL+'/auth', data)
		.then(res => {
			context.commit('setToken', res.data.token, { root: true }) 
			context.commit('setUser', res.data.token) // receives token and decodes it
			// redirect to gallery view
			router.push('/gallery')
		})
		.catch(error => {
			context.commit('setError', error.response.data.message, { root: true })
		})
	},
	async register(context, credentials) {
		const data = {
            name: credentials.name,
            description: credentials.description,
            username: credentials.user_name,
            password: credentials.password,
		}
		// register request that returns authentication token
		return await axios.post(API_URL+'/register', data)
		.then(res => {
			context.commit('setToken', res.data.token, { root: true })
			context.commit('setUser', res.data.token) // receives token and decodes it
			// redirect to gallery view
			router.push('/gallery')
		})
		.catch(error => {
			context.commit('setError', error.response.data.message, { root: true })
		})
	},
	async logout(context) {
		const config = {
			headers: {
				'Authorization': 'Bearer ' + context.rootState.token
			}
		}
		return await axios.get(API_URL+'/logout', config)
		.then(() => {
			context.commit('clearUser', null)
			context.commit('setToken', null, { root: true })
			router.push('/')
		})
		.catch(error => {
			context.commit('setError', error.response.data.message, { root: true })
		}) 
	}
	
}

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}