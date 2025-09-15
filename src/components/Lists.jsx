import React, {useContext, useEffect, useState} from 'react';
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

//COMPONENTS
import List from './List.jsx'

//OTHERS
import {TodosContext} from "../contexts/todosContext.js";
import { v4 as uuidv4 } from 'uuid';



const Lists = () => {

    const {todos, setTodos} = useContext(TodosContext);
    const [title, setTitle] = useState('');

    const [todosType, setTodosType] = useState("all")

    useEffect(() => {
        const storageTodos = JSON.parse(localStorage.getItem("todos"));
        setTodos(storageTodos);
    }, []);


    // EVENT HANDLERS
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
    // === EVENT HANDLERS ===

    function changeTodosType(e){
        setTodosType(e.target.value);
    }
    return (
        <>
            <Container maxWidth="sm">
                <Card sx={{ minWidth: 275 }} style={{
                    maxHeight: "90vh",
                    overflow: "scroll"

                }}>
                    <CardContent>
                        <Typography variant="h2" style={{fontWeight:"bold"}}>مهامي</Typography>
                        <Divider variant="middle"  />

                        {/* FILTER BUTTONS */}
                        <ToggleButtonGroup
                            style={{direction:"ltr",marginTop:"30px"}}
                            color="primary"
                            value={todosType}
                            exclusive //only one button to be selected at a time.
                            //onChange={handleChange}
                            aria-label="Filter"
                            onChange={changeTodosType}
                        >
                            <ToggleButton value="non-completed">غير المنجز</ToggleButton>
                            <ToggleButton value="completed">المنجز</ToggleButton>
                            <ToggleButton value="all">الكل</ToggleButton>
                        </ToggleButtonGroup>
                        {/* === FILTER BUTTONS === */}

                        {/* ALL TODOS */}
                        {todosType === 'all' &&
                            todos.map((todo) => (
                                    <List key={todo.id} todo={todo}/>
                        ))}
                        {/* === ALL TODOS === */}

                        {/* COMPLETED TODOS */}
                        {todosType === 'completed' &&
                            todos.filter((todo) => todo.isCompleted)
                                .map((todo) => (
                                <List key={todo.id} todo={todo} />
                            ))
                        }
                        {/* === COMPLETED TODOS === */}

                        {/* NON COMPLETED TODOS */}
                        {todosType === 'non-completed' &&
                            todos.filter((todo) => !todo.isCompleted)
                                .map((todo) => (
                                    <List key={todo.id} todo={todo} />
                                ))
                        }
                        {/* === NON COMPLETED TODOS === */}

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
                                    style={{ width: "100%",height: "100%" }}
                                    variant="contained"
                                    onClick={handleAddClick}
                                    disabled={title.length === 0}
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