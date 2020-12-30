<template>
	<div class="main">
		<b-container>
			<h2 class="py-5 text-center section-title">¿Que Ofrecemos?</h2>

			<b-row class="py-5">
				<b-col class="text-center item-wrapper my-5" cols="12" sm="6" lg="3">
					<i class="fas fa-glass-cheers"></i>
					<h3 class="title my-3">Bebidas</h3>
					<p class="text"> Te ofrecemos una amplia seleccion de bebidas para que elijas la que mas te guste.  </p>
				</b-col>

				<b-col class="text-center item-wrapper my-5" cols="12" sm="6" lg="3">
					<i class="fas fa-bread-slice"></i>
					<h3 class="title my-3">Panaderia</h3>
					<p class="text"> Ofrecemos los mejores panes de la ciudad a los mejores precios. </p>
					
				</b-col>
				<b-col class="text-center item-wrapper my-5" cols="12" sm="6" lg="3">
					<i class="fas fa-cheese"></i>
					<h3 class="title my-3">Charcuteria</h3>
					<p class="text"> Desde varios tipos de quesos hasta los mejores jamones, cubre todas tus necesidades.  </p>
					
				</b-col>
				<b-col class="text-center item-wrapper my-5" cols="12" sm="6" lg="3">
					<i class="fas fa-drumstick-bite"></i>
					<h3 class="title my-3">Carniceria</h3>
					<p class="text"> Gran variedad de carnes en buen estado, todas de buena calidad.  </p>
					
				</b-col>

			</b-row>
		</b-container>
	</div>
</template>


<style lang="scss" scoped>
	$bg_color: #f8f9fa;
	$title_name: #cf1d16;
	$text_name: #949ba2;

	.main {
		margin: 0px;
		background-color: $bg_color;


		.title {
			color: $title_name;
			font: {
				size: 17pt;
			}
		}

		.text {
			color: $text_name;
			line-height: 1.7rem;
			font: {
				size: 11pt;
			}
		}

		.item-wrapper {

			i {
				font-size: 34pt;
			}
		}
	}
</style>

<script>
	export default {
		name: 'ContentIcons'
	}
</script>
