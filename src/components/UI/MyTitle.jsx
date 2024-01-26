import {Typography} from "@mui/material";
import React from "react";


export default function MyTitle(props) {
    return (
        <Typography variant="h5" gutterBottom>
            {props.text}
        </Typography>
    )
}