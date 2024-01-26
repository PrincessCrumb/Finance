import React from 'react';
/*import MyInput from "./UI/MyInput";*/
import MySelect from "./UI/MySelect";
/*import Box from '@mui/material/Box';*/
import TextField from '@mui/material/TextField';
/*import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';*/


const TankFilter = ({filter, setFilter}) => {
    return (
        <div>
            <TextField
             id="outlined-basic" 
             
             variant="outlined" 
             value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Поиск..."/>
           <p></p>
         
            <MySelect classname="mySelect"
            
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Сортировка"
                options={[
                    {value: 'title', name: 'По счету'},
                    {value: 'body', name: 'По балансу'},
                ]}
            />
        </div>
    );
};

export default TankFilter;