import React, {useState} from 'react';
import MyButton from './UI/MyButton';
import './DetaisModal.css';

function DetailsButton(props) {
    const [showModal, setShowModal] = useState(false);

    const handleModalToggle = () => {
        setShowModal(!showModal);
    };

    return (
        <>
            <MyButton onClick={handleModalToggle}>Детали</MyButton>
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2>Детали счета</h2>
                        <h3>
                            {props.tank.title}
                        </h3>
                        <div>
                            Тип: {props.tank.type}
                        </div>
                        <div>
                            Банк: {props.tank.bank}
                        </div>
                        <div>
                            Баланс: {props.tank.body}
                        </div>
                        <h3>
                            Транзакции:
                        </h3>
                        <div>
                            <p>1.</p>
                            <p>2.</p>
                            <p>3.</p>
                            <p>4.</p>
                            <p>5.</p>

                        </div>

                        <MyButton onClick={handleModalToggle}>Закрыть</MyButton>
                    </div>
                </div>
            )}
        </>
    );
}

export default DetailsButton;