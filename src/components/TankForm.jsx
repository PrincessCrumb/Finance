import React, {useState} from 'react';
import MyInput from "./UI/MyInput";
import MyButton from "./UI/MyButton";

const TankForm = ({create}) => {
    const [tank, setTank] = useState({title: '', body: '', type:'', bank: ''})


    const addNewTank = (e) => {
        e.preventDefault()
        const newTank = {
            ...tank, id: Date.now()
        }
        create(newTank)
        setTank({title: '', body: '', type:'', bank: ''})
    }
    

    return (
        <form>
         
            <MyInput
                value={tank.title}
                onChange={e => setTank({...tank, title: e.target.value})}
                type="text"
                placeholder="Название счета"
            />
            <MyInput
                value={tank.type}
                onChange={e => setTank({...tank, type: e.target.value})}
                type="text"
                placeholder="Тип счета"
            />
            
          <MyInput
                value={tank.bank}
                onChange={e => setTank({...tank, bank: e.target.value})}
                type="text"
                placeholder="Банк"
            />
            <MyInput
                value={tank.body}
                onChange={e => setTank({...tank, body: e.target.value})}
                type="text"
                placeholder="Баланс"
            />
            <MyButton onClick={addNewTank}>Создать счет</MyButton>
        </form>
    );
};

export default TankForm;