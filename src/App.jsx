import Lists from './components/Lists.jsx';
import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {v4 as uuidv4} from 'uuid';
import {TodosContext} from "./contexts/todosContext.js";
import {useState} from "react";


const theme = createTheme({
    typography: {
        fontFamily: "Alexandria",
    },
    palette:{
        primary:{
            main: "#dd2c00",
        },
    }
})

const initialTodos = [
    {
        id: uuidv4(),
        title: "قراءة كتاب",
        details: "تيسمبتيس يتسبميتس بيمستب",
        isCompleted: false,
    },
    {
        id: uuidv4(),
        title: "قراءة كتاب",
        details: "تيسمبتيس يتسبميتس بيمستب",
        isCompleted: false,
    },
    {
        id: uuidv4(),
        title: "قراءة كتاب",
        details: "تيسمبتيس يتسبميتس بيمستب",
        isCompleted: false,
    },
];
function App() {
    const [todos, setTodos] = useState(initialTodos);
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
            <TodosContext value={{todos, setTodos}}>
                <Lists />
            </TodosContext>
        </div>
      </ThemeProvider>
  )
}

export default App
