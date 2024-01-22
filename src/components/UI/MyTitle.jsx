import {Typography} from "@mui/material";
import React from "react";


export default function MyTitle(props) {
    return (
        <Typography variant="h3" style={{color: "red"}} gutterBottom>
            {props.text}
        </Typography>
    )
}