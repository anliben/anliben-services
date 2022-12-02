import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from './../../assets/logo-asp.png'

export default function CustomHeader () {
  
  useEffect(() => {
  })
  return (
      <div className='flex flex-row mt-1 flex-wrap items-center justify-center'>
        <img className='w-16 h-26' src={logo} alt='logo anliben' />
        <div>
          <h1 className='font-bold'>Anliben Services Pro</h1>
          <p className='text-xs'>Tecnologia e seguranca para o seu negocio!</p>
        </div>
        <Link to='d' className='ml-auto mr-2'>
        <p className='rounded bg-black text-white px-2 font-bold'>Entre em contato</p>
        </Link>
      </div>
    )
}