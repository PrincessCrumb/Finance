
import React from "react";
import MyButton from "./UI/MyButton";
import DetailsButton from "./DetailsButton";

const TankItem = (props) => {
    
return(
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
    <DetailsButton tank={props.tank}/>
      
    <MyButton onClick ={()=> props.remove(props.tank)}>Удалить</MyButton>
  </div>
</div>
   
    
    );
};

export default TankItem;
