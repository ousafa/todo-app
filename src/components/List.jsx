import React, {useContext, useState} from 'react';
import {
    Button,
    Card,
    CardContent,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    TextField,
    Typography
} from "@mui/material";

// ICONS
import CheckIcon from "@mui/icons-material/Check";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import IconButton from "@mui/material/IconButton";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

//OTHERS
import {TodosContext} from "../contexts/todosContext.js";

const List = ({todo: {id,title,details,isCompleted}}) => {

    const [dialogType , setDialogType ] = useState(null);

    const {todos,setTodos} = useContext(TodosContext);
    const [updatedTodo, setUpdatedTodo] = useState({title:title,details:details})

    // EVENT HANDLERS
    function handleCheckClick() {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        );
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
    }

    function handleDeleteClick() {
       setDialogType('delete');
    }

    function handleClose()  {
        setDialogType(null);
    }

    function handleDeleteConfirm() {
        const updatedTodos = todos.filter((todo)=>{
            return todo.id !== id;
        })
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        setDialogType(null);
    }

    function handleUpdateClick() {
        setDialogType("update");
    }

    function handleUpdateConfirm() {
        const updatedTodos = todos.map((todo)=>{
            if(todo.id === id){
                return {
                    ...todo,
                    title:updatedTodo.title,
                    details:updatedTodo.details,
                }
            }else{
                return todo;
            }
        });
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        setDialogType(null);
    }
    // === EVENT HANDLERS ===

    return (
        <>
            {/* DELETE & UPDATE DIALOG */}
            <Dialog open={dialogType !== null} onClose={handleClose}>
                {dialogType === "delete" && (
                    <>
                        <DialogTitle>هل أنت متأكد من رغبتك في حذف المهمة؟</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                لا يمكنك التراجع عن الحذف بعد إتمامه.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} >
                                إغلاق
                            </Button>
                            <Button
                                onClick={handleDeleteConfirm}
                                autoFocus
                            >
                                نعم، قم بالحذف
                            </Button>
                        </DialogActions>
                    </>
                )}

                {dialogType === "update" && (
                    <>
                        <DialogTitle>تعديل مهمة</DialogTitle>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="title"
                                name="title"
                                label="عنوان المهمة"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={updatedTodo.title}
                                onChange={(e)=>{
                                    setUpdatedTodo({...updatedTodo, title:e.target.value});
                                }}
                            />
                            <TextField
                                margin="dense"
                                id="details"
                                name="details"
                                label="تفاصيل"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={updatedTodo.details}
                                onChange={(e)=>{
                                    setUpdatedTodo({...updatedTodo, details:e.target.value});
                                }}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} style={{ color: "#96173D" }}>
                                إغلاق
                            </Button>
                            <Button
                                onClick={handleUpdateConfirm}
                                autoFocus
                                style={{ color: "#96173D" }}
                            >
                                حفظ التغييرات
                            </Button>
                        </DialogActions>
                    </>
                )}
            </Dialog>
            {/* === DELETE & UPDATE DIALOG === */}

            {/* TODO CARD */}
            <Card className="list-card" sx={{ minWidth: 275, background:"#4C4BD2", color:'white',marginTop:5 }}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid size={8}>
                            <Typography variant="h5" sx={{ textAlign: "right", textDecoration: isCompleted ? "line-through" : "none" }}>
                                {title}
                            </Typography>
                            <Typography variant="h6" sx={{ textAlign: "right" }}>
                                {details}
                            </Typography>
                        </Grid>

                        {/* ACTION BUTTONS */}
                        <Grid size={4} display="flex" justifyContent="space-around" alignItems="center">
                            {/* CHECK ICON BUTTON */}
                            <IconButton
                                onClick={handleCheckClick}
                                className="iconButton"
                                aria-label="check"
                                style={{
                                    color: isCompleted ? "white" : "#8bc34a",
                                    background: isCompleted ? "#8bc34a" : "white",
                                    border: "solid #8bc34a 3px",
                                }}
                            >
                                <CheckIcon />
                            </IconButton>
                            {/* === CHECK ICON BUTTON ===  */}

                            {/* UPDATE ICON BUTTON */}
                            <IconButton
                                className="iconButton"
                                aria-label="edit"
                                style={{
                                    color: "#1769aa",
                                    background: "white",
                                    border: "solid #1769aa 3px",
                                }}
                                onClick={handleUpdateClick}
                            >
                                <ModeEditOutlineOutlinedIcon />
                            </IconButton>

                            {/* === UPDATE ICON BUTTON === */}
                            {/* DELETE ICON BUTTON */}
                            <IconButton
                                className="iconButton"
                                aria-label="delete"
                                style={{
                                    color: "#b23c17",
                                    background: "white",
                                    border: "solid #b23c17 3px",
                                }}
                                onClick={handleDeleteClick}
                            >
                                <DeleteOutlineOutlinedIcon />
                            </IconButton>
                            {/* === DELETE ICON BUTTON === */}
                        </Grid>
                        {/* === ACTION BUTTONS === */}
                    </Grid>
                </CardContent>
            </Card>
            {/* === TODO CARD === */}
        </>
    );
};

export default List;