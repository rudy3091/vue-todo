import axios from 'axios';

export function handleDone(id, todo) {
	todo.done = true;
	axios
		.put(`http://localhost:8081/api/todos/${id}`, todo)
		.then(res => console.log(res));
}

export function handleUpdate(id, todo) {
	axios
		.put(`http://localhost:8081/api/todos/${id}`, todo)
		.then(res => console.log(res));
}

export function handleDelete(id) {
	axios
		.delete(`http://localhost:8081/api/todos/${id}`)
		.then(res => console.log(res));
}
