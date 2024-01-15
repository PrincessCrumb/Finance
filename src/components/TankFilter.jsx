import React from 'react';
import MyInput from "./UI/MyInput";
import MySelect from "./UI/MySelect";

const TankFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Поиск..."
            />
            <MySelect
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