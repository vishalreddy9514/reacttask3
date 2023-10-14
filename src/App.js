import './App.css';
import ColorPicker from './component/colorPicker';

function App() {
  return (
    <div className='app-container'>
      <h1 className='color-picker-heading'>Color Picker</h1>
      <ColorPicker colorArray = {["red", "chartreuse", "blue", "yellow", "fuchsia", "cyan", "orange", "purple", "pink", "green", "coral", "lightskyblue", "brown", "orangered", "teal", "gold"]}/>
    </div>
  );
}

export default App;