<template>
	<NavbarMenu />
	<ErrorMessage v-if="error !== null"/>
	<LoadingSpinner v-if="isLoading"/>
	<router-view/>
</template>

<script>
import NavbarMenu from './components/NavbarMenu.vue'
import LoadingSpinner from './components/LoadingSpinner.vue'
import ErrorMessage from './components/ErrorMessage.vue'
import { useStore } from 'vuex'

export default {
	components: { NavbarMenu, LoadingSpinner, ErrorMessage },
	setup() {
		const store = useStore()

		const error = store.getters.getError

		const isLoading = store.getters.isLoading

		return { isLoading, error }
	}
}
</script>