import React from 'react';
import {
    Card,
    CardContent,
    Container,
    Divider,
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
                    </CardContent>
                </Card>
            </Container>
        </>

    );
};

export default Lists;