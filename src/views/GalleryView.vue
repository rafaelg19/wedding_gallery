<template>
	<div class="container">
		<GalleryList />
	</div>
</template>

<script>
import GalleryList from '../components/gallery/GalleryList.vue'
import { useStore } from 'vuex'

export default {
	name: 'GalleryView',
	components: { GalleryList },
	setup() {
		const store = useStore()

		// load gallery from store when component is mounted
		store.dispatch('gallery/fetch_gallery')
	}
}
</script>
