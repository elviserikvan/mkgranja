<template>

	<div class="main py-5">

		<b-container class="nav-wrapper">


			<b-navbar toggleable="md" type="" variant="">
				<b-navbar-brand to="/" class="text-white">{{brand}}</b-navbar-brand>
				<b-navbar-toggle target="nav-collapse">
					<template #default="{ expanded }">
						<b-icon variant="light" v-if="expanded" icon="chevron-bar-up"></b-icon>
						<b-icon variant="light" v-else icon="chevron-bar-down"></b-icon>
					</template>
				</b-navbar-toggle>

				<b-collapse id="nav-collapse" is-nav>
					<b-navbar-nav class="ml-auto">
						<b-nav-item to="/">Home</b-nav-item>
						<b-nav-item to="/products">Productos</b-nav-item>
					</b-navbar-nav>
				</b-collapse>
			</b-navbar>

<!--
			<nav class="d-flex align-items-center justify-content-between">
 				<div class="brand">
					<h1>{{brand}}</h1>
				</div>

				<div class="links d-flex align-items-center justify-content-center">
					<ul class="mb-0 d-flex align-items-center justify-content-center">
						<li class="mx-2"><router-link to="/">Home</router-link></li>
						<li class="mx-2"><router-link to="/products">Productos</router-link></li>
					</ul>
				</div>
				
				<div class="section">
					<h1>{{brand}}</h1>
				</div>
			</nav>
-->
		</b-container>
	</div>
</template>

<style scoped lang="scss">

	.main {
		top:0;
		left: 0;
		width: 100%;
		position: absolute;
		
	}
	
	.nav-wrapper {
		.brand h1,
		.section h1 {
			color: #fff;
			font-size: 13pt;
			margin: 0px;
			text-transform: uppercase;
		}

		.section {
			opacity: 0;
		}


		ul {
			list-style: none;
			
			li {
				a {
					font-size: 11pt;
					color: #fff;
					text-transform: uppercase;
				}
				
			}
		}
	}
	
</style>


<script>
	export default {
		name: 'Nav',
		data() {
			return {
				brand: 'Merka Granja'
			}
		}
	}
</script>
