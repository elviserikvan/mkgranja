<template>
	<div class="main">
		<b-container>
			<b-row class="different-cols py-5">
				<b-col class="my-5 py-5 border-secondary border-bottom" cols="12" sm="4">
					<h5>Sobre Nosotros</h5>
					<p>{{info.acerca}}</p>

					<div class="links">
						<span class="icon-wrapper"><a :href="info.social_media.twitter">
							<i class="fab fa-twitter"></i>
						</a></span>

						<span class="icon-wrapper"><a :href="info.social_media.facebook">
							<i class="fab fa-facebook-f"></i>
						</a></span>

						<span class="icon-wrapper"><a :href="info.social_media.instagram">
							<i class="fab fa-instagram"></i>
						</a></span>
					</div>
				</b-col>
				<b-col class="my-5 py-5 border-secondary border-bottom" cols="12" sm="4">
					<div class="opening-hours">
						<h5>Abierto</h5>
						<strong>Lunes - Sabados</strong>
						<p>8AM - 6PM</p>
					</div>

					<div class="contact-info">
						<h5>Contacto</h5>
						<span class="address">
							<p class="title">Direccion:</p>
							<p>{{info.direction}}</p>
						</span>
	
						<span class="phone">
							<p class="title">Telefono:</p>
							<p>{{info.phone}}</p>
						</span>
						<span class="email">
							<p class="title">Email:</p>
							<p>{{info.email}}</p>
						</span>
						
					</div>
				</b-col>
				<b-col class="my-5 py-5 border-secondary border-bottom"  cols="12" sm="4">
					<h5>Links Rapidos</h5>
					
					<ul>
						<li><router-link to="/">Home</router-link></li>
						<li><router-link to="/products">Productos</router-link></li>
					</ul>
				</b-col>
			</b-row>

			<b-row class="text-center py-5 copyright">
				<b-col>
					<p>Copyright &copy; 2020 - Merka Granja</p>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<style lang="scss" scoped>

	$bg_color: #262626;
	$text_color: #868686;
	$links_color: #cf1d16;

	.main {
		color: #fff;
		background-color: $bg_color;

		.different-cols {
			h5 {
				margin-bottom: 30px;
				font-size: 13pt;
				font-weight: bold;
			}

			p {
				color: $text_color;
				line-height: 1.6rem;
				font-size: 11pt;
			}


			ul {
				list-style: none;
				
				li {

					margin: 10px 0px;

					a {
						color: $links_color;
						text-decoration: none;
						transition: 0.2s ease color, 0.2s ease border-bottom;
						
						&:hover {
							color: #fff;
							border-bottom: 1px solid $text_color;
						}
					}
				}
			}
			
			.links {

				display: flex;

				.icon-wrapper {
					width: 30px;
					height: 30px;
					border-radius: 100%;
					margin: 0px 5px;
					border: 1px solid $text_color;
					transition: 0.2s ease background-color, 0.2s ease color;

					a {
						color: $links_color;
						display: block;
						width: 100%;
						height: 100%;
						text-decoration: none;

						display: flex;
						justify-content: center;
						align-items: center;
					}


					&:hover {
						background-color: #fff;

						a {
							color: $bg_color;
						}
					}
				}
			}


			.opening-hours {

				strong {
					font-size: 11pt;
					color: $text_color;
				}

			}

			.contact-info {

				p { color: #fff; }				

				.title {
					margin: 0px;
					color: $text_color;
				}
			}
		}

		.copyright {
			color: $text_color;
		}
	}
</style>


<script>
	import { mapState } from 'vuex'

	export default {
		name: 'Footer',
		data() {
			return {
				info: {
					acerca: 'Merka Granja es tu tienda preferida de viveres y charcuteria donde conseguiras productos de primera calidad a los mejores precios del mercado',
					direction: 'Calle Cuba C/c en el tanque',
					phone: '+58 000-000000',
					email: 'fake_email@gmail.com',
					social_media: {
						instragram: '#',
						facebook: '#',
						instagram: '#'
					}

				}				
			}
		}
//		computed: mapState(['info']),
	}
</script>
