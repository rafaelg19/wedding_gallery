<template>
    <div class="gallery">
        <GallerySingle v-for="(image, i) in images" :key="i" :image="image"/>
    </div>
</template>

<script>
import GallerySingle from './GallerySingle.vue'
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core'

export default {
	name: 'GalleryList',
    components: { GallerySingle },
    setup() {
        const store = useStore()

        // get gallery from store
        const images = computed(() => store.getters['gallery/getGallery'])

        return { images }
    }
}
</script>

<style>

</style>