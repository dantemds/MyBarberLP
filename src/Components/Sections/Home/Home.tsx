import React from 'react'

import phoneImage from '../../../Assets/Images/iphone.png'

import './style.sass'

import { BsCheckLg, BsWhatsapp, BsInstagram, BsEnvelope } from 'react-icons/bs'

export default function Home() {

  return (
    <section id='home'>
      <div className='MainContent'>
        <div className="contentLeft">
          <h1>Um sistema de agendamento para a sua barbearia</h1>
          <h2>Um site moderno e personalizável com sistema de agendamento 24h para sua barbearia.</h2>
          <a className='BtnCta' key={'BtnCta'} href={`https://api.whatsapp.com/send?phone=11965960347`} target="_blank">Quero um app</a>
          <span className='SpanPreco'>Apartir de 79,90 R$ / mês</span>
        </div>
        <div className="contentRight">
          <img src={phoneImage} alt="app-celular" />
          <div className="cardPhone">
            <h1>Por que um App ?</h1>
            <p>Quem atende por ordem de chegada ou marca os serviços no caderno PERDE DINHEIRO.
            </p>
            <p>Inove e acabe com as filas, seus concorrentes ODIARÃO!</p>
            <a className='ctaBarbeariaModelo' key={'BtnCta'} href={`https://minha-barbearia.online/barbearia-modelo`} target="_blank">Ver barbearia modelo</a>
          </div>
        </div>
      </div>
      <div className="BottomContent">
        <div className="wrapCols">
          <div className="col col-1">
            <h2>Principais recursos</h2>
            <ul>
              <li><BsCheckLg />As informações do seu salão como endereço, contato, fotos, serviços, entre outras estarão visíveis por toda a internet.</li>
              <li><BsCheckLg />Seus clientes consultam os horários disponíveis e agendam diretamente pelo site.</li>
              <li><BsCheckLg />Os cabelereiros terão uma agenda para consultar todos os serviços marcados e dados do cliente.</li>
            </ul>
          </div>
          <div className="col col-2">
            <h2>Benefícios</h2>
            <ul>
              <li><BsCheckLg />Site personalizado para que todos da sua região vejam.</li>
              <li><BsCheckLg />Fidelize e atraia clientes que não têm tempo de esperar para serem atendidos.
              </li>
              <li><BsCheckLg />Reduza o custo com atendentes.</li>
              <li><BsCheckLg />Aumente a organização do seu dia a dia.</li>
            </ul>
          </div>
          <div className="col col-3">
            <h2>Entre em contato</h2>
            <ul>
              <li><BsWhatsapp /><a key={'11965960347'} href={`https://api.whatsapp.com/send?phone=11965960347`} target="_blank">(11) 96596 - 0347</a></li>
              <li><BsInstagram /><a key={'minha_barbearia_online'} href={`https://www.instagram.com/minha_barbearia_online`} target="_blank">@minha_barbearia_online</a></li>
              <li><BsEnvelope /><a key={'email'} href={`mailto:viniciusnapolitano75@gmail.com?subject=Quero conhecer o App`} target="_blank">viniciusnapolitano75@gmail.com</a></li>
              <li ><a className='linkWpp' key={'11965960347'} href={`https://api.whatsapp.com/send?phone=11965960347`} target="_blank">Fale com atendente</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
