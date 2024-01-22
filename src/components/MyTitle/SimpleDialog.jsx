import Dialog from "@mui/material/Dialog";
import React from "react";
import PropTypes from "prop-types";
import {DialogTitle, Typography} from "@mui/material";
import MyTitle from "../UI/MyTitle";

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    tank: PropTypes.object.isRequired,
};

export function SimpleDialog(props) {
    const {onClose, tank, open} = props;

    const handleClose = () => {
        onClose(tank);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <Typography variant="h2" >Детали счета</Typography>
            <MyTitle text={tank.title}></MyTitle>
            <Typography variant="h3" style={{color: "red"}} gutterBottom>
                {tank.title}
            </Typography>
            <div>
                Тип: {tank.type}
            </div>
            <div>
                Банк: {tank.bank}
            </div>
            <div>
                Баланс: {tank.body}
            </div>
        </Dialog>
    );
}