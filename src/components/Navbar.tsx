import React from 'react'

export default function Navbar() {
  return (
    <div className="flex w-screen h-32 absolute top-0 bg-red-400 font-qsand text-white font-semibold">
      <div className="flex-none w-1/6 flex items-center justify-center border-r-2 border-red-500">
        LOGO
      </div>
      <div className="flex-auto flex-col">
        <div className="h-1/2 flex items-center justify-center ">
          <p className="text-xl">
            Imobiliária
          </p>
        </div>
        <div className="h-1/2 grid grid-flow-col grid-cols-5 gap-4 border-t-2 border-red-500">
          <div className="p-5 text-center">
            <p>
              Imóveis
            </p>
          </div>
          <div className="p-5 text-center">
            <p>
              Imóveis
            </p>
          </div>
          <div className="p-5 text-center">
            <p>
              Imóveis
            </p>
          </div>
          <div className="p-5 text-center">
            <p>
              Imóveis
            </p>
          </div>
          <div className="p-5 text-center">
            <p>
              Imóveis
            </p>
          </div>
        </div>
      </div>
      <div className="flex-none w-1/6 border-l-2 border-red-500">
        <div className="h-1/2 flex items-center justify-center ">
          <p>
            Bem - vindo
          </p>
        </div>
        <div className="h-1/2 flex items-center justify-center ">
          <p>
            Entre ou cadastre-se
          </p>
        </div>
      </div>
    </div>
  )
}