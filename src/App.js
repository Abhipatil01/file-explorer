import "./styles.css";
import data from './data/data';
import Folder from './Folder'

export default function App() {
  return (
    <div className="App">
      <Folder explorer={data}/>
    </div>
  );
}
