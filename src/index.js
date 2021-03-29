import reactDom  from "react-dom";
import CounterApp from "./CounterApp";
import './index.css';;
const div = document.querySelector('#root');
reactDom.render(<CounterApp value={10}  /> , div);