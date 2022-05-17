<template>
    <div class="user">
        <router-link :to="'/user/'+{ userid }">
        <h3>{{ name }}</h3>
        </router-link>
        <p>{{ description }}</p>
    </div>
</template>

<script>
export default {
    props: ['user'],
    data() {
        return {
            userid: this.user.id,
            name: this.user.name,
            description: this.user.description
        }
    }
}
</script>

<style>

</style>