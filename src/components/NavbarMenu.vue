<template>
    <header>
        <h1>Mary & John's Wedding</h1>
        <nav>
            <div v-if="token">
                <ul>
                    <li><router-link to="/gallery" :class="{ active : routeName === 'gallery' }">Gallery</router-link></li>
                    <li><router-link to="/upload" :class="{ active : routeName === 'upload' }">Upload</router-link></li>
                    <li v-if="user.admin"><router-link to="/approve" :class="{ active : routeName === 'approve' }">Approve</router-link></li>
                    <li><p>Hey There, {{ user.name }}</p></li>
                    <li><button @click="handleClick">Logout</button></li>
                </ul>
            </div>
            <div v-else>
                <ul>
                    <li><router-link v-if="routeName !== 'login'" to="/">Login</router-link></li>
                    <li><router-link v-if="routeName !== 'register'" to="/register">Register</router-link></li>
                </ul>                
            </div>
        </nav>
    </header>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
    name: 'NavbarMenu',
    setup() {
        const route = useRouter()
        const store = useStore()

        const token = computed(() => store.getters.getToken)
        const user = computed(() => store.getters['users/getUser'])

        const routeName = computed(() => route.currentRoute.value.name)

        if(token.value == null && (routeName.value !== '' || routeName.value !== 'register')) {
            route.push('/')
        }
        
        const handleClick = () => {
            store.dispatch('users/logout')
        }
        return { user, token, routeName, handleClick }
    }
}
</script>

<style>

</style>