<template>
	<div class="error" v-if="gallery_error">{{ gallery_error }}</div>
	<div v-else-if="gallery.length">
		<GalleryList :gallery="gallery"/>
	</div>
	<div v-else>
		<LoadingSpinner/>
	</div>
</template>

<script>
import GalleryList from '../components/gallery/GalleryList.vue'
import LoadingSpinner from '../components/LoadingSpinner.vue'
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core'

export default {
	name: 'ApproveView',
	components: { GalleryList, LoadingSpinner },
	setup() {
		const store = useStore()

		const gallery = computed(() => store.getters.gallery) 
		const gallery_error = computed(() => store.getters.gallery_error)
		const loadGallery = (p) => store.dispatch('loadGallery', p)

		return { gallery, gallery_error, loadGallery }
	}
}
</script>
