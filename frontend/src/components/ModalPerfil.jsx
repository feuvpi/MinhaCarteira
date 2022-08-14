import React, { useState, useContext } from 'react';

export const Modal = props => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [password, setPassword] = useState("");

    if(!props.show){
        return null;
    }

    return(
        <div  className="w-72 modal top-8 right-0 m-6 h-fit p-1 border-2 border-indigo-500 absolute rounded-md md:self-right bg-slate-400 self-center">
            <div className="modal-content">
                <div className="modal-header py-4 align-center text-indigo-700 font-bold justify-center align-center">
                    <h4 className="text-center">EDITAR PERFIL</h4>
                </div>
                <div className="modal-body">
                    <form className="flex flex-col px-2">
                        <label className="pt-2 text-indigo-700 font-semibold">NOME:</label>
                        <input onChange={(e) => {setName(e.value.target)}} className="border-2 border-black rounded-md" type="string" id="name" name="name" placeholder="Nome" required/>
                        <label className="pt-2  text-indigo-700 font-semibold">EMAIL:</label>
                        <input onChange={(e) => {setEmail(e.value.target)}} className="border-2 border-black rounded-md" type="text" id="symbol" name="email" placeholder="E-mail" required/>
                        <label className="pt-2  text-indigo-700 font-semibold">SENHA ATUAL:</label>
                        <input onChange={(e) => {setOldPassword(e.value.target)}} className="border-2 border-black rounded-md" type="number" id="symbol" name="oldpassword" placeholder="Senha Atual" required/>
                        <label className="pt-2 text-indigo-700 font-semibold">NOVA SENHA:</label>
                        <input onChange={(e) => {setPassword(e.value.target)}} className="border-2 border-black rounded-md" type="number" id="symbol" name="password" placeholder="Nova Senha" required/>
                        <button className="mt-6">SALVAR</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal;