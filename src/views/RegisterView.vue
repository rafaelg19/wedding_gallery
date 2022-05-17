<template>
    <form>
        <label for="name">Name</label>
        <input type="text" id="name" required v-model="name" />
        <label for="description">Description</label>
        <input type="text" id="description" required v-model="description" />
        <label for="username">Username</label>
        <input type="text" id="username" required v-model="username" />
        <label for="password">Password</label>
        <input type="password" id="password" required v-model="password" />
        <div class="error" v-if="error">{{ error }}</div>
        <button type="submit" @click.prevent="handleSubmit">Register</button>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'

export default {
	name: 'RegisterView',
    setup() {
        const name = ref('')
        const description = ref('')
        const username = ref('')
        const password = ref('')

        const store = useStore()

        const error = store.getters.error

        const handleSubmit = async () => {
            try {
                await store.dispatch('users/register', { name: name.value, description: description.value, username: username.value, password: password.value })
            } catch (error) {
                error.value = error.message
            }
        }
        return { name, description, username, password, error, handleSubmit }
    }
}
</script>

<style>
    
</style>