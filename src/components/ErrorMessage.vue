<template>
    <div class="error">
        {{ error }}
    </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
    name: 'ErrorMessage',
    setup() {
        const store = useStore()

        const error = store.getters.getError

        return { error }
    }
}
</script>

<style>

</style>