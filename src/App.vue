<template>
	<NavbarMenu />
	<ErrorMessage v-if="error !== null"/>
	<LoadingSpinner v-if="isLoading"/>
	<ModalWindow v-if="showModal" size="lg">
		<GalleryDetails />
	</ModalWindow>
	<router-view/>
</template>

<script>
import NavbarMenu from './components/NavbarMenu.vue'
import LoadingSpinner from './components/LoadingSpinner.vue'
import ErrorMessage from './components/ErrorMessage.vue'
import ModalWindow from './components/ModalWindow.vue'
import GalleryDetails from './components/gallery/GalleryDetails.vue'
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core'

export default {
	components: { NavbarMenu, LoadingSpinner, ErrorMessage, ModalWindow, GalleryDetails },
	setup() {
		const store = useStore()

		const error = computed(() => store.getters.error)
		const isLoading = computed(() => store.getters.isLoading)
		const showModal = computed(() => store.getters.getShowModal)

		return { error, isLoading, showModal }
	}
}
</script>