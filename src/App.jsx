import Lists from './components/Lists';
import './App.css'

function App() {

  return (
    <div className="App" style={{
        background: "#191b1f",
        direction:"rtl",
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",}}>
        <Lists />
    </div>
  )
}

export default App
