const ToDoList = {
	data() {
		return {
			newTaskText: '',
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
					text: this.newTaskText, //document.getElementById('newTask').value,
					done: true,
				};
				this.tasks.push(newTask);
				this.newTaskText = '';
			}
		},
	},
};

Vue.createApp(ToDoList).mount('#ToDo');
