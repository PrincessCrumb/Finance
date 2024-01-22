import React from "react";
import MyButton from "./UI/MyButton";
import {Button} from "@mui/material";
import DetailsButton from "./DetailsButton";
import {SimpleDialog} from "./MyTitle/SimpleDialog";

const TankItem = (props) => {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(props.tank);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <div className="tank">
            <div className="tank__content">
                <strong>{props.number}. {props.tank.title}</strong>
                <div>
                    Тип: {props.tank.type}
                </div>
                <div>
                    Банк: {props.tank.bank}
                </div>
                <div>
                    Баланс: {props.tank.body}
                </div>
            </div>

            <div className='tank__btns'>
                <Button variant="text"
                        onClick={handleClickOpen}>
                    Детали
                </Button>
                <SimpleDialog
                    tank={selectedValue}
                    open={open}
                    onClose={handleClose}
                />
                <DetailsButton tank={props.tank}/>

                <MyButton onClick={() => props.remove(props.tank)}>Удалить</MyButton>
            </div>
        </div>


    );
};

export default TankItem;
