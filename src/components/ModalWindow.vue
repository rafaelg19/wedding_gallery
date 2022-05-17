<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" 
            :class="{ 
                dark: theme === 'dark', 
                sm: size === 'sm', 
                md: size === 'md', 
                lg: size === 'lg',
                xl: size === 'xl'
            }">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
    name: 'ModalWindow',
    props: ['size'],
    setup() {
        const store = useStore()

        return {
            closeModal() {
                store.dispatch('setShowModal', false)
            }
        }
    }
}

</script>