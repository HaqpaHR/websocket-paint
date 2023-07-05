import './styles/app.scss';
import Toolbar from "./component/Toolbar";
import SettingBar from "./component/SettingBar";
import Canvas from "./component/Canvas";

function App() {
  return (
    <div className="app">
      <Toolbar/>
      <SettingBar/>
      <Canvas/>
    </div>
  );
}

export default App;
