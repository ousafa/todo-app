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
                    </CardContent>
                </Card>
            </Container>
        </>
    );
};

export default Lists;