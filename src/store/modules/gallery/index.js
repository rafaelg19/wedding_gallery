import axios from 'axios'

const API_URL = 'http://localhost:8000/api'

const state = {
    gallery: []
}

const getters = {
    getGallery: state => state.gallery
}

const mutations = {
    setGallery(state, gallery) {
        state.gallery = gallery
    }
}
	
const actions = {
	async fetch_gallery(context) {
		const config = {
			headers: {
				'Authorization': 'Bearer ' + context.rootGetters.getToken
			}
		}
		// axios request
		return await axios.get(API_URL+'/gallery', config)
		.then(res => {
			context.commit('setGallery', res.data)
		})
		.catch(error => {
			context.commit('setError', error.response.data.message, { root: true })
		})
	},
	async add_image(context, data) {
		const config = {
			headers: {
				'Content-Type': 'multipart/form-data',
				'Authorization': 'Bearer ' + context.rootGetters.getToken
			}
		}
		// axios request
		return await axios.post(API_URL+'/upload', data, config)
		.then(res => {
			console.log(res.data)
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