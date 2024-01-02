import React from 'react'

import './style.sass'

export default function Header() {
  return (
    <header id='headerId'>
      <div className="content">
        <a href="/">Minha Barbearia Online</a>
        <nav>
          <a className='btnEntrarContato' key={'ctaHeader'} href={`https://api.whatsapp.com/send?phone=11965960347`} target="_blank">Fale com atendente</a>
          <a className='btnCliente' key={'btnJaSouCliente'} href={`https://minha-barbearia.online/login`} target="_blank">Já sou cliente</a>
        </nav>
      </div>
    </header>
  )
}
