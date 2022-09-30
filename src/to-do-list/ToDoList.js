import React from "react";
import styles from "../styles/ToDoList.module.css";

const ToDoList = () => {
	const [tasks, setTasks] = React.useState([]);
	const [newTask, setNewTask] = React.useState("");

	// delete Task
	const deleteTask = (del) => {
		let i = localStorage.length;
		while (i-- > 0) {
			let key = localStorage.key(i);
			if (localStorage.getItem(key) === del) {
				localStorage.removeItem(key);
				setTasks(Object.values(localStorage));
			}
		}
	};

	// Show Tasks
	const renderTasks =
		tasks &&
		tasks.map((i, index) => {
			return (
				<div className={styles.tasks_list} key={index + 1}>
          <p>{index + 1}</p>
					<h1 key={index + 10}>{i}</h1>
					<button key={index + 25} onClick={() => deleteTask(i)}>
						deletar
					</button>
				</div>
			);
		});

	// save the text input
	const onChange = ({ target }) => {
		setNewTask(target.value);
	};

	// create Task
	const handleClick = () => {
		if (Object.values(localStorage).includes(newTask)) {
			alert("task already exists ");
			setNewTask("");
		} else {
			window.localStorage.setItem(Date.now(), newTask);
			setTasks([newTask, ...tasks]);
			setNewTask("");
		}
	};

	React.useEffect(() => {
		setTasks(Object.values(localStorage));
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.screen}>
				<div className={styles.infos}>
					<div className={styles.title}>
						<h1>To Do list 📒</h1>
					</div>

					<div className={styles.add_task}>
						<input
							onChange={onChange}
							placeholder="get a new job"
							value={newTask}
						/>
						<button onClick={handleClick}>Add</button>
					</div>
				</div>

				{renderTasks}
			</div>
		</div>
	);
};

export default ToDoList;
