import React
    from 'react';
import {
    Card,
    CardContent,
    Grid,
    Typography
} from "@mui/material";
// ICONS
import CheckIcon from "@mui/icons-material/Check";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import IconButton from "@mui/material/IconButton";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

const List = () => {
    return (
        <>
            <Card sx={{ minWidth: 275, background:"#283593", color:'white',marginTop:5 }}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid size={8}>
                            <Typography variant="h5" sx={{ textAlign: "right" }}>
                                title
                            </Typography>
                        </Grid>

                        {/* ACTION BUTTONS */}
                        <Grid size={4} display="flex" justifyContent="space-around" alignItems="center">
                            <IconButton
                                className="iconButton"
                                aria-label="check"
                                style={{
                                    color: "#8bc34a",
                                    background: "white",
                                    border: "solid #8bc34a 3px",
                                }}
                            >
                                <CheckIcon />
                            </IconButton>
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
                            <IconButton
                                className="iconButton"
                                aria-label="delete"
                                style={{
                                    color: "#b23c17",
                                    background: "white",
                                    border: "solid #b23c17 3px",
                                }}
                            >
                                <DeleteOutlineOutlinedIcon />
                            </IconButton>
                        </Grid>
                        {/* === ACTION BUTTONS === */}
                    </Grid>
                </CardContent>
            </Card>

        </>
    );
};

export default List;