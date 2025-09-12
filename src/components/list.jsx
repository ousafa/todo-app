import React from 'react';
import {
    Button
} from "@mui/material";

const List = () => {
    return (
        <div>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
        </div>
    );
};

export default List;