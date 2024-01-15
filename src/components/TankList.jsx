import React from "react";
import TankItem from "./TankItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const TankList = ({ tanks, title, remove }) => {
    if (!tanks.length) {
      return <h1 style={{ textAlign: "center" }}>Счета не найдены!</h1>;
    }
  
    return (
      <div >
        <h1 style={{ textAlign: "center" }}>{title}</h1>
        <TransitionGroup>
          {tanks.map((tank, index) => (
            <CSSTransition 
            key={tank.id} 
            timeout={500} 
            classNames="tank">
              <TankItem remove={remove} number={index + 1} tank={tank} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    );
  };
  
  export default TankList;