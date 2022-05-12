<template>
	<NavbarMenu />
	<router-view/>
</template>

<script>
import NavbarMenu from './components/NavbarMenu.vue'

export default {
	components: { NavbarMenu }
}
</script>