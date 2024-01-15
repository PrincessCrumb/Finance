import React, {useMemo, useState} from "react";
import MyButton from './components/UI/MyButton';
import TankList from "./components/TankList";
import TankForm from './components/TankForm';
import MyModal from "./components/UI/MyModal";
import TankFilter from "./components/TankFilter";
import cl from "./styles/App.css";


function App() {
  
  const [tanks, setTanks] = useState([
    {id:1, title:"Счет в Офшорах",type:"текущие счета",bank:"ВТБ" ,body:"788897"},
    {id:2, title:"Вклад в Сбербанке",type:"бюджетные счета",bank:"СберБанк",body:"23500"},
    {id:3, title:"Кредитка",type:"счета службы судебных приставов",bank:"Открытие" ,body:"-5000"},
  ])

  
const[filter, setFilter] = useState({sort: '', query: ''})
const [modal, setModal] = useState(false);

/*bfgbf*/
const sortedTanks = useMemo(() =>{
  console.log('Отработано')
if (filter.sort) {
return [...tanks].sort((a,b)=>a[filter.sort].localeCompare(b[filter.sort]));
}
return tanks;
}, [filter.sort, tanks])

const sortedAndSearchedTanks = useMemo(()=>{
  return sortedTanks.filter(tank => tank.title.toLowerCase().includes(filter.query.toLowerCase()))
}, [filter.query, sortedTanks])

const createTank = (newTank) => {
setTanks([...tanks, newTank])
setModal(false)
}

const removeTank = (tank) => {
  setTanks(tanks.filter(p => p.id !==tank.id))
}

  
  return(
    
    <div className='App'> 
    <MyButton  style ={{marginTop: 30 }}onClick ={()=> setModal(true)}>
Создать счет
    </MyButton>
    <MyModal visible={modal} setVisible={setModal}>
      <TankForm create ={createTank}/>
      </MyModal>

<hr style={{margin: '15px 0'}}/>
<TankFilter 
filter={filter} 
setFilter={setFilter}
/>
  <TankList remove={removeTank} tanks={sortedAndSearchedTanks} title="Список счетов"/>
    </div>
    );  
        };
  
 
export default App;
