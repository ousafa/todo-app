import React from 'react';
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
const Lists = () => {
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
                        <List />
                        {/* === ALL TODOS === */}

                        {/* INPUT + SUBMIT BUTTON */}
                        <Grid container style={{marginTop:"20px"}} spacing={1}>
                            <Grid size={8} display="flex" justifyContent="space-around" alignItems="center">
                                <TextField  style={{width:"100%"}} id="outlined-basic" label="عنوان المهمة"  variant="outlined" />
                            </Grid>
                            <Grid size={4} display="flex" justifyContent="space-around" alignItems="center">
                                <Button
                                    style={{ width: "100%",height: "100%", background:"#96173D" }}
                                    variant="contained"
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