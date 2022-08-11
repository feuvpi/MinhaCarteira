import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import About from '../components/About'
import Support from '../components/Support'
import AllInOne from '../components/AllInOne'
import Pricing from '../components/Pricing'



import React from 'react'

export const User = () => {
  return (
    <div className="w-full md:h-screen bg-zinc-200 flex flex-col justify-between p-28">
        <div class="overflow-x-auto relative">
    <table class="w-full text-sm text-left text-black">
        <thead class="text-xs text-gray-700 uppercase bg-gray-400 dark:bg-indigo-600 dark:text-white">
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
            <tr class="bg-white border-b dark:bg-gray-200 dark:border-gray-700">
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
  )
}

export default User;
