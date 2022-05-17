<template>
    <div class="user-list">
        <div v-for="user in users" :key="user.id">
            <UserSingle :user="user"/>
        </div>
    </div>
</template>

<script>
import UserSingle from './UserSingle.vue'

export default {
    props: ['users'],
    components: { UserSingle }
}
</script>

<style>

</style>