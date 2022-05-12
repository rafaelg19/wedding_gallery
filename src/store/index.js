import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default createStore({
	state: {
		displayName: null,
		avatar: null
	},
	getters: {

	},
	mutations: {

	},
	actions: {

	},
	modules: {
		
	},
	plugins: [createPersistedState(	{})]
})
