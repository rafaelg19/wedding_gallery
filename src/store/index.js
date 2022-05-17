import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import users from './modules/users'
import gallery from './modules/gallery'

export default createStore({
	state: {
		token: null,
		isLoading: false,
		error: null,
		showModal: false
	},
	getters: {
		getToken: state => state.token,
		getIsLoading: state => state.isLoading,
		getError: state => state.error,
		getShowModal: state => state.showModal
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
		}
	},
	actions: {
		
	},
	modules: {
		users,
		gallery
	},
	plugins: [createPersistedState()]

})
