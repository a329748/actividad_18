const app = Vue.createApp({
	data() {
		return {
			users: [],
		}
	},

	created() {
		this.getUsers()
	},

	methods: {
		async getUsers() {
			const url = "http://jsonplaceholder.typicode.com/users"
			const response = await fetch(url)
			const users = await response.json()
			this.users = users
		}		
	},
})

const vm = app.mount('#app')