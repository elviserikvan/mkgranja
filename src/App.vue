<template>
  <div id="app">
<!--
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
-->
    <router-view/>
  </div>
</template>

<style lang="scss">
	$red: #cf1d16;

	.section-title {
		color: $red;
		font-size: 30pt;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		&::after {
			content: " ";
			width: 5%;
			margin-top: 20px;
			border-bottom: $red 2px solid;
		}
	}

	*,
	*::before,
	*::after {
		margin:0px;
		padding: 0px;
		box-sizing: border-box;
	}

/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
*/
</style>

<script>
	export default {

		async mounted() {
			//console.log('making api call')
			//await this.$store.commit('api_call')
		},
		watch: {
			'$route': {
				handler: (to, from) => {
					document.title = to.meta.title || 'Default Pito'
				},
				immediate: true
			} 
		}
	}
</script>
