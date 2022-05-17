<template>
    <div class="image-container" @click="imageDetails(image)">
        <div class="figure">
            <img class="image" :src="image.url" alt="">
            <div class="caption">
                <p>{{ image.description }}</p>
                <small>picture by {{ image.user }}</small>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
    name: 'GallerySingle',
    props: ['image'],
    setup() {
        const store = useStore()

        const imageDetails = (image) => {
            store.dispatch('setShowModal', true)
            store.dispatch('setModalImage', image)
        }

        return { imageDetails }
	}
}
</script>

<style>

</style>