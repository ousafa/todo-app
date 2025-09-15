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

    const [open, setOpen] = useState(false);
    const {todos,setTodos} = useContext(TodosContext);

    // EVENT HANDLERS
    function handleCheckClick() {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        );
        setTodos(updatedTodos);
    }

    function handleDeleteClick() {
        setOpen(true);
    }

    function handleClose()  {
        setOpen(false);
    }

    function handleDeleteConfirm() {
        const updatedTodos = todos.filter((todo)=>{
            return todo.id !== id;
        })
        setTodos(updatedTodos);
    }


    // === EVENT HANDLERS ===

    return (
        <>
           {/* DELETE DIALOG */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    هل أنت متأكد من رغبتك في حذف المهمة؟
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        لا يمكنك التراجع عن الحذف بعد إتمامه.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} style={{color:'#96173D'}}>إغلاق</Button>
                    <Button onClick={handleDeleteConfirm} autoFocus style={{color:'#96173D'}}>
                        نعم، قم بالحذف
                    </Button>
                </DialogActions>
            </Dialog>
            {/* === DELETE DIALOG === */}
            <Card className="list-card" sx={{ minWidth: 275, background:"#4C4BD2", color:'white',marginTop:5 }}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid size={8}>
                            <Typography variant="h5" sx={{ textAlign: "right" }}>
                                {title}
                            </Typography>
                            <Typography variant="h6" sx={{ textAlign: "right" }}>
                                {details}
                            </Typography>
                        </Grid>

                        {/* ACTION BUTTONS */}
                        <Grid size={4} display="flex" justifyContent="space-around" alignItems="center">
                            {/* ChECK ICON BUTTON */}
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
                            {/* === ChECK ICON BUTTON ===  */}
                            <IconButton
                                className="iconButton"
                                aria-label="edit"
                                style={{
                                    color: "#1769aa",
                                    background: "white",
                                    border: "solid #1769aa 3px",
                                }}
                            >
                                <ModeEditOutlineOutlinedIcon />
                            </IconButton>
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

        </>
    );
};

export default List;