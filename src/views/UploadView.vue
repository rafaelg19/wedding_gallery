<template>
	<label for="file">Upload file</label>
	<input type="file" id="file" @change="handleFile">
</template>

<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'

export default {
	name: 'UploadView',
	setup() {
		const store = useStore()

		const file = ref(null)

		const handleFile = () => {
			const formData = new FormData()
			formData.append('file', file)
			store.dispatch('gallery/add_image', formData)
		}

		return { handleFile }
	}
}
</script>

<style>

</style>