<template>
	<b-container class="py-5">
		<b-form @submit.prevent="searchProduct" class="mb-5 d-flex no-wrap alig-items-center">
			<b-form-input
				size="lg"
				v-model="pattern"
				class="mb-2 mr-sm-2 mb-sm-0"
				placeholder="Buscar Productos"
			></b-form-input>


			<b-button @click="searchProduct" variant="primary">Buscar</b-button>
		</b-form>

		<b-table :items="list"></b-table>
		
	</b-container>
</template>

<script>
	import { mapState } from 'vuex'

	export default {
		name: 'ProductsList',
		//computed: mapState(['products']),
		data() {
			return {
				pattern: '',
				products: [
					{nombre: 'Harina Pan', price: '1.000.000 Bfs.'},
					{nombre: 'Harina Trigo', price: '1.000.000 Bfs.'},
					{nombre: 'Mantequilla', price: '1.000.000 Bfs.'},
					{nombre: 'Salsa de tomate', price: '1.000.000 Bfs.'},
				],
				list: []
			}
		},
		methods: {
			searchProduct() {
				// If the input is empty, show all list
				if (this.pattern == '') {
					this.list = this.products;
				}
		
				// Filter the list array and get only the products that matches the name with the input value 
				this.list = this.products.filter(element => this.checkString(element.nombre))
			},
			checkString(_string) {
				let regx = RegExp(this.pattern, 'i')
				return _string.search(regx) > -1 ? true : false
			}
		},
		watch: {

			// Watch the input value
			'pattern': {
				handler: function(value) {
					this.pattern = value
					this.searchProduct()
				}
			},

			// Once the 'products' array changes in 'vuex' update it here
			'products': {
				handler: function(value) {
					this.list = value
				}
			}

		},
		mounted() {
			// Update the list everytime the user viewes the page
			this.list = this.products
		}
	}
</script>
