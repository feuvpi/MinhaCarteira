import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import About from '../components/About'
import Support from '../components/Support'
import AllInOne from '../components/AllInOne'
import Pricing from '../components/Pricing'



import React from 'react'

export const Assets = () => {
  return (
    <>
    
    <Navbar/>
    <div className="flex flex-col pt-28 px-8 bg-gray-700">
    
        <div className="flex justify-center"><div class="inline-flex">
  <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
    CARTEIRA
  </button>
  <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
    OPERAÇÕES
            </button>
        </div>
    </div>
    
    <div className="w-full md:h-screen flex flex-col justify-between pt-4 pr-12 pl-8">
        <div class="overflow-x-auto relative">
    <table class="w-full text-sm text-left text-black">
        <thead class="text-xs text-gray-700 uppercase bg-indigo-500 dark:text-white">
            <tr>
                <th scope="col" class="py-3 px-6">
                    ATIVO
                </th>
                <th scope="col" class="py-3 px-6">
                    COTAÇÃO
                </th>
                <th scope="col" class="py-3 px-6">
                    QUANTIDADE
                </th>
                <th scope="col" class="py-3 px-6">
                    PREÇO MÉDIO
                </th>
                <th scope="col" class="py-3 px-6">
                    TOTAL
                </th>
                <th scope="col" class="py-3 px-6">
                    RENDIMENTO
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-slate-400 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-black whitespace-nowrap dark:text-black">
                    PETR4
                </th>
                <td class="py-4 px-6">
                    12.0
                </td>
                <td class="py-4 px-6">
                    2000
                </td>
                <td class="py-4 px-6">
                    10.0
                </td>
                <td class="py-4 px-6">
                    24000.00
                </td>
                <td class="py-4 px-6">
                    20%
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

export default Assets;
