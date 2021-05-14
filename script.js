const app = Vue.createApp({
	data() {
		return {
			users: [],
			usersA: []
		}
	},

	created() {
		this.getUsers()
		this.getUsersA()
	},

	methods: {
		getUsers() {
			fetch('http://jsonplaceholder.typicode.com/users')
				.then(response => response.json())
				.then(json => {
					this.users = json
				})
		},

		async getUsersA() {
			const url = "http://jsonplaceholder.typicode.com/users"
			const response = await fetch(url)
			const users = await response.json()
			this.usersA = users
		}		
	},

	computed: {

	}
})

const vm = app.mount('#app')