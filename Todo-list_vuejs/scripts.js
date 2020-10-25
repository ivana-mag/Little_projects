const ToDoList = {
	data() {
		return {
			tasks: [
				// { text: '', done: true },
				// { text: 'Learn CSS', done: true },
			],
		};
	},
	methods: {
		addNewTask(e) {
			if (e) {
				let newTask = {
					text: document.getElementById('newTask').value,
					done: true,
				};
				this.tasks.push(newTask);
				document.getElementById('newTask').value = '';
			}
		},
	},
};

Vue.createApp(ToDoList).mount('#ToDo');
