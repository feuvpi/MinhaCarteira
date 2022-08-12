import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import About from '../components/About'
import Support from '../components/Support'
import AllInOne from '../components/AllInOne'
import Pricing from '../components/Pricing'
import { useNavigate } from 'react-router-dom';



import React from 'react'

export const Operations = () => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/assets')
    }

  return (
    <>
    
    <Navbar/>
    <div className="h-screen flex flex-col pt-28 px-8 bg-gray-700">
    
        <div className="flex justify-center"><div class="inline-flex">
  <button onClick={handleClick} class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
    CARTEIRA
  </button>
  <button class="bg-slate-500 hover:bg-slate-500 hover:text-gray-800 text-gray-800 font-bold py-2 px-4 rounded-r focus:outline-none disabled:opacity-75" disabled>
    OPERAÇÕES
            </button>
        </div>
    </div>
    
    <div className="w-full flex flex-col justify-between pt-4 px-0.5 md:px-8">
    <button type="button" class="mb-5 inline-block px-4 py-1.5 bg-slate-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">+OPERAÇÃO</button>
        <div class="overflow-x-auto relative"> 
    <table class="w-full text-sm text-left text-black">
        <thead class="text-xs text-gray-700 uppercase bg-indigo-500 dark:text-white">
            <tr>
                <th scope="col" class="py-3 px-6">
                    ATIVO
                </th>
                <th scope="col" class="py-3 px-6">
                    TIPO
                </th>
                <th scope="col" class="py-3 px-6">
                    PREÇO
                </th>
                <th scope="col" class="py-3 px-6">
                    QUANTIDADE
                </th>
                <th scope="col" class="py-3 px-6">
                    TOTAL
                </th>
                <th scope="col" class="py-3 px-6">
                    DATA
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-slate-400 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-black whitespace-nowrap dark:text-black">
                    PETR4
                </th>
                <td class="py-4 px-6">
                    COMPRA
                </td>
                <td class="py-4 px-6">
                    R$10.00
                </td>
                <td class="py-4 px-6">
                    2000
                </td>
                <td class="py-4 px-6">
                    R$20000.00
                </td>
                <td class="py-4 px-6">
                    07/08/2022
                </td>
                
            </tr>
        </tbody>
    </table>
</div>
    </div>
    </div>
    </>
  )
}

export default Operations;
