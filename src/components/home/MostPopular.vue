<template>
	<b-container class="py-5">
		<h2 class="py-5 text-center section-title">Mas Populares</h2>
		<b-row>
			<b-col cols="12" lg="4" class="most-popular-element" v-for="(ele, index) in elements" :key="index">
				<!--<div class="element" v-bind:style="{ 'background-image': `url('${images_url}${ele.imagen}')`}"> -->
				<div class="element" v-bind:style="{ 'background-image': `url('${ele.image}')`}">
					<div class="overlay"></div>
					<span>{{ele.price}}</span>
					<h3> {{ele.name}} </h3>
				</div>
			</b-col>
		</b-row>
	</b-container>
</template>

<style lang="scss" scoped>
	.most-popular-element {
		padding: 5px;

		.element {
			height: 350px;
/*			border: 1px solid #ccc;	 */

			display: flex;
			align-items: center;
			flex-direction: column;
			justify-content:center;


			position: relative;
			overflow: hidden;

			background-size: cover;
			background-repear: no-repeat;
			background-position: center center;
/*			background-image: url('/images/mostPopular.jpg'); */

			
			&::after {
				content: "";
				position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				background: inherit;
				background-size: cover;
				transform-origin: center;
				transition: transform 0.4s ease-in-out;
			}

			&:hover,
			&:focus {
				&::after {
					transform: scale(1.15);
				}
			}
			

			span {
				z-index: 1;
				color: #fff;
				border-radius: 5px;
				font-weight: bold;
				width: 50%;
				padding: 7px 0px;
				background-color: red;
				position: relative;


				display: flex;
				align-items: center;
				justify-content: center;
			}


			h3 {
				z-index: 1;
				font-size: 14pt;
				font-weight: bold;
				margin-top: 10px;
				color: #fff;
			}

			.overlay {
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
				width: 100%;
				height: 100%;
				background-color: #000;
				opacity: 0.5;
				z-index: 1;
			}
		}
	}
</style>

<script>
	import axios from 'axios'
	export default {
		name: 'MostPopular',
		data() {
			return {
				images_url: 'http://localhost:8000/media/',
				elements: [
					{
						name: 'Harina Pan',
						price: '1.000.000 Bsf.',
						image: "https://cdn.shopify.com/s/files/1/2247/9593/products/harinaPAN_800x.jpg?v=1561745741"
					},
					{
						name: 'Doña Maria',
						price: '1.000.000 Bsf.',
						image: "https://www.construmateriales.com/fotos/7896248500326.jpg"
					},
					{
						name: 'Mantequilla Mavesa',
						price: '1.000.000 Bsf.',
						image: "https://cdn.shopify.com/s/files/1/0307/7727/8603/products/mantecaMavesa500g_c7249f67-959f-4636-8edb-be66443bf4f4_500x.png?v=1604080757"
					}
				]
			}
		},
/*
		async mounted() {
			let request = await axios.get('http://localhost:8000/api/fav')
			this.elements = request.data
			this.elements = this.elements.map(ele => {
				
				try {
					let formatter = new Intl.NumberFormat('VEF')
					var price = formatter.format(ele.precio)
				} catch(e) {
					var price = ele.precio	
				}  

				ele.precio = price + ' Bfs.'

				return ele
			})
		}
*/
	}
</script>
