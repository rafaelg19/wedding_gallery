import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import users from './modules/users'
import gallery from './modules/gallery'

export default createStore({
	state: {
		token: null,
		isLoading: false,
		error: null,
		showModal: false,
		modalImage: null
	},
	getters: {
		getToken: state => state.token,
		getIsLoading: state => state.isLoading,
		getError: state => state.error,
		getShowModal: state => state.showModal,
		getModalImage: state => state.modalImage
	},
	mutations: {
		setError (state, error) {
			state.error = error
		},
		setToken (state, token) {
			state.token = token
		},
		setIsLoading (state, isLoading) {
			state.isLoading = isLoading
		},
		setShowModal (state, showModal) {
			state.showModal = showModal
		},
		setModalImage (state, image) {
			state.modalImage = image
		}
	},
	actions: {
		setError({ commit }, error) {
			commit('setError', error)
		},
		setToken({ commit }, token) {
			commit('setToken', token)
		},
		setIsLoading({ commit }, isLoading) {
			commit('setIsLoading', isLoading)
		},
		setShowModal({ commit }, showModal) {
			commit('setShowModal', showModal)
		},
		setModalImage({ commit }, image) {
			commit('setModalImage', image)
		}
	},
	modules: {
		users,
		gallery
	},
	plugins: [createPersistedState()]

})
