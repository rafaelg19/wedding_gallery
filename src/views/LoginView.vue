<template>
    <form>
        <label for="username">Username</label>
        <input type="text" id="username" required v-model="username" />
        <label for="password">Password</label>
        <input type="password" id="password" required v-model="password" />
        <div class="error" v-if="error">{{ error }}</div>
        <button type="submit" @click.prevent="handleSubmit">Log in</button>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'

export default {
    setup() {
        const username = ref('')
        const password = ref('')
        const error = ref('')

        const store = useStore()

        const handleSubmit = async () => {
            try {
                await store.dispatch('users/login', { username: username.value, password: password.value })
                // redirect to gallery
            } catch (error) {
                error.value = error.message
            }
        }
        return { username, password, error, handleSubmit }
    }
    
}
</script>

<style>

</style>