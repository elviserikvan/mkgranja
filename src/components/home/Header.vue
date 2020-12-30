<template>
		<div v-bind:class="[full_screen ? 'full-height' : 'mid-height']" class="wrapper d-flex align-items-center">

			<div class="overlay"></div>

			<b-container class="b-container pt-5 pt-5">
				<Nav style="z-index: 10;"></Nav>
				<b-row class="pt-5">
					<b-col cols="12" class="text-white text-center">
						<h2>{{title}}</h2>
						<p>{{description}}</p>
					</b-col>
					<b-col v-if="button == false ? false : true" class="d-flex justify-content-center py-5" cols="12">
						<b-button href="#Map-section" class="header-btn" variant="outline-light">VISITANOS</b-button>
					</b-col>
				</b-row>

				<div class="header-location-mark">
					<p>Ciudad Bolivar, Estado Bolivar, Venezuela</p>
				</div>
			</b-container>
		</div>
</template>


<style lang="scss" scoped>
	
	$wrapper_bg_color: #333;


	.wrapper.full-height {
		height: 100vh;
	}

	.wrapper.mid-height {
		height: 70vh;
	}

	.wrapper {
		min-height: 490px;
		background-color: $wrapper_bg_color;
		background-size: cover;
		background-image: url('/images/home-slide-1.jpg');
		position: relative;

		
		.overlay {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			width: 100%;
			height: 100%;
			background-color: #333;
			opacity: 0.5;
			z-index: 2;
		}		

		.b-container {
			z-index: 3;
		}


		.header-location-mark {
			position: absolute;
			bottom: 0px;
			color: #fff;
			left: 50%;
			transform: translateX(-50%);
			text-align:center;
		}
		

		.header-btn {
			font-weight: bold;
		}
		
		.text-white h2 {
			text-transform: uppercase;
			font: {
				weight: 800;
			}
		}

		.text-white p {
			width: 80%;
			display: block;
			margin: 0px auto;
			font: {
				weight: thin;
				size: 14pt;
			}
		}
	}
</style>


<script>
	import Nav from '@/components/home/Nav'

	export default {
		name: 'Header',
		props: {
			title: String,
			button: Boolean,
			full_screen: Boolean,
			description: String,
		},
		components: {
			Nav
		}
	}
</script>
