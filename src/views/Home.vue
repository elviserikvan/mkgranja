<template>
	<div class="wrapper">
		<Header 
			:title="header_title" 
			:description="header_description" 
			:button="header_button" 
			:full_screen="header_full_height"></Header>

		<ContentIcons></ContentIcons>
		<MostPopular></MostPopular>
		<Map></Map>
		<Footer></Footer>
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Footer from '@/components/Footer.vue'
import Header from '@/components/home/Header.vue'
import Map from '@/components/home/Map.vue'
import ContentIcons from '@/components/home/ContentIcons.vue'
import MostPopular from '@/components/home/MostPopular.vue'

export default {
	name: 'Home',
	data() {
		return {
			header_title: 'Tu Mercado Preferido',
			header_description: 'Merka Granja es tu tienda preferida de viveres y charcuteria donde conseguiras productos de primera calidad a los mejores precios del mercado',
			header_button: true,
			header_full_height: true
		}
	},
	components: {
		HelloWorld,
		Header,
		Footer,
		Map,
		ContentIcons,
		MostPopular
	}
}
</script>

<style lang="scss" scoped>

</style>
