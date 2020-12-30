<template>
	<div>
		<Header :title="header_title" description="" :button="header_button" :full_screen="header_full_height"></Header>
		<ProductsList></ProductsList>
		<Footer></Footer>
	</div>
</template>

<script>
	import Header from '@/components/home/Header'
	import Footer from '@/components/Footer'
	import ProductsList from '@/components/products/ProductsList'

	export default {
		name: 'Products',
		data() {
			return {
				header_title: 'Lista de Productos',
				header_button: false,
				header_full_height: false
			}
		},
		components: {
			Header,
			ProductsList,
			Footer
		}
	}
</script>
