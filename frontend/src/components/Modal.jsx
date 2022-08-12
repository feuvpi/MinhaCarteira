import React, { useState, useContext } from 'react';

export const Modal = props => {

    const [symbol, setSymbol] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [total, setTotal] = useState("");
    
    const calc1 = (e) => {
        setPrice(e.target.value)
        setTotal(e.target.value * quantity)
    }

    const calc2 = (e) => {
        setQuantity(e.target.value)
        setTotal(e.target.value * price)
    }

    return(
        <div  className="m-6 h-fit modal p-2 w-72 border-2 border-indigo-500 rounded-md">
            <div className="modal-content">
                <div className="modal-header py-4 align-center text-indigo-700 font-bold justify-center align-center">
                    <h4 className="text-center">NOVA OPERAÇÃO</h4>
                </div>
                <div className="modal-body">
                    <form className="flex flex-col px-2">
                        <label className="pt-2 text-indigo-700 font-semibold">CÓDIGO:</label>
                        <input onChange={(e) => {setSymbol(e)}} className="border-2 border-black rounded-md" type="string" id="symbol" name="symbol" placeholder="CÓDIGO" required/>
                        <label className="pt-2  text-indigo-700 font-semibold">PREÇO:</label>
                        <input onChange={(e) => {calc1(e)}} className="border-2 border-black rounded-md" type="text" id="symbol" name="symbol" placeholder="PREÇO" required/>
                        <label className="pt-2  text-indigo-700 font-semibold">QUANTIDADE:</label>
                        <input onChange={(e) => {calc2(e)}} className="border-2 border-black rounded-md" type="number" id="symbol" name="symbol" placeholder="QUANTIDADE" required/>
                        <label className="pt-2 text-indigo-700 font-semibold">TIPO DE OPERAÇÃO:</label>
                        <select className="border-2 rounded-md border-black">
                            <option value="COMPRAR">COMPRAR</option>
                            <option value="VENDER">VENDER</option>
                        </select>
                        <label className="pt-6 text-indigo-700 font-semibold text-right">TOTAL:</label>
                        <h3 className="text-xl text-right font-bold">R${total}</h3>
                        <button className="mt-6">SALVAR</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal;