<template>
    <img :src="image.url" />
    <!-- <CommentSection /> -->
</template>

<script>
import { useStore } from 'vuex'
// import CommentSection from '../CommentSection.vue'

export default {
    name: 'GalleryDetails',
    // components: { CommentSection },
    setup() {
        const store = useStore()

        const image = store.getters.getModalImage

        return { image }
    }

}
</script>

<style>

</style>