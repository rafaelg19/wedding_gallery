<template>
    <div class="comment-single">
        <div class="comment-single__header">
            <h3>{{ comment.author }}</h3>
            <p>{{ comment.date }}</p>
        </div>
        <div class="comment-single__body">
            <p>{{ comment.body }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommentSingle',
    setup() {
        
    }
}
</script>

<style>

</style>