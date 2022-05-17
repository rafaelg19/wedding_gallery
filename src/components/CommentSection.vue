<template>
    <div class="comment-section">
        <div class="comment-section__header">
            <h3>Comments</h3>
        </div>
        <div class="comment-section__body">
            <CommentSingle v-for="(comment, i) in comments" :comment="comment" :key="i"/>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import CommentSingle from './CommentSingle.vue'

export default {
    name: 'CommentSection',
    components: { CommentSingle },
    setup() {
        const store = useStore()

        return {
            comments: store.state.comments
        }
    }
}
</script>

<style>

</style>