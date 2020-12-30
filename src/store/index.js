import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  api_url: process.env.NODE_ENV == 'development' ? 'http://localhost:8000' : '',
//	  api_url: 'http://localhost:8000',
	  info: [{}],
	  products: [{}]
  },
  mutations: {
	  async api_call(state) {
		
		console.log(state.api_url)

		let _info = await axios.get(`${state.api_url}/api/info`);
		let _prod = await axios.get(`${state.api_url}/api/products`);
		
		state.info = _info.data
		state.products = _prod.data
	  }
  },
  actions: {
  },
  modules: {
  }
})
