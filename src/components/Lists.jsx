import React, {
    useContext,
    useEffect,
    useState
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
    Button,
    Card,
    CardContent,
    Container,
    Divider,
    Grid,
    TextField,
    ToggleButton,
    ToggleButtonGroup,
    Typography
} from "@mui/material";

//Components
import List from './List.jsx'

//Others
import {TodosContext} from "../contexts/todosContext.js";


const Lists = () => {
   const {todos, setTodos} = useContext(TodosContext);
   const [title, setTitle] = useState('');

    useEffect(() => {
        const storageTodos = JSON.parse(localStorage.getItem("todos"));
        setTodos(storageTodos);
    }, []);


    function handleAddClick() {
        const newTodos = {
            id: uuidv4(),
            title: title,
            details: '',
            isCompleted: false,
        }
        const updatedTodos = [...todos, newTodos]
        setTodos(updatedTodos)
        localStorage.setItem('todos', JSON.stringify(updatedTodos))
        setTitle('')

    }
    return (
        <>
            <Container maxWidth="sm">
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography variant="h2" style={{fontWeight:"bold"}}>مهامي</Typography>
                        <Divider variant="middle"  />

                        {/* FILTER BUTTONS */}
                        <ToggleButtonGroup
                            style={{direction:"ltr",marginTop:"30px"}}
                            color="primary"
                            //value={alignment}
                            exclusive //only one button to be selected at a time.
                            //onChange={handleChange}
                            aria-label="Filter"
                        >
                            <ToggleButton value="web">غير المنجز</ToggleButton>
                            <ToggleButton value="android">المنجز</ToggleButton>
                            <ToggleButton value="ios">الكل</ToggleButton>
                        </ToggleButtonGroup>
                        {/* === FILTER BUTTONS === */}

                        {/* ALL TODOS */}
                        {todos.map((todo) => {
                            return <List key={todo.id} todo={todo}/>
                        })}
                        {/* === ALL TODOS === */}

                        {/* INPUT + SUBMIT BUTTON */}
                        <Grid container style={{marginTop:"20px"}} spacing={1}>
                            <Grid size={8} display="flex" justifyContent="space-around" alignItems="center">
                                <TextField
                                    style={{width:"100%"}}
                                    id="outlined-basic"
                                    label="عنوان المهمة"
                                    variant="outlined"
                                    value = {title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </Grid>
                            <Grid size={4} display="flex" justifyContent="space-around" alignItems="center">
                                <Button
                                    style={{ width: "100%",height: "100%", background:"#96173D" }}
                                    variant="contained"
                                    onClick={handleAddClick}
                                >
                                    إضافة
                                </Button>
                            </Grid>
                        </Grid>
                        {/* === INPUT + SUBMIT BUTTON ===*/}
                    </CardContent>
                </Card>
            </Container>
        </>

    );
};

export default Lists;