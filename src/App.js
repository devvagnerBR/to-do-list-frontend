import ToDoList from "./to-do-list/ToDoList";
import styles from './styles/App.module.css'

function App() {
	return (
		<div className={styles.App}>
			<ToDoList />
		</div>
	);
}

export default App;
