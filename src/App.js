import logo from "./logo.svg";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { useRef } from "react";
function App() {
	const input = useRef();
	const dispatch = useDispatch();
	const data = useSelector((state) => state);
	return (
		<div className="App">
			<input ref={input} />
			<button
				onClick={() => {
					dispatch({
						type: "add",
						payload: input.current.value,
					});
				}}
			>
				Thêm
			</button>
			<h1>Danh sách các việc làm</h1>
			<ul>
				{data.map((e, index) => {
					return (
						<li key={index}>
							<span>{e}</span>
							<button
								onClick={() =>
									dispatch({
										type: "delete",
										payload: e,
									})
								}
							>
								Xóa
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default App;
