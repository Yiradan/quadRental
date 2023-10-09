'use client'
import Image from "next/image"

import { FormEvent, useState } from "react"

const ContactUs = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [question, setQuestion] = useState('')

  const submit = (e:FormEvent) =>{
    e.preventDefault()
    setName('')
    setEmail('')
    setQuestion('')
  }

  return (
    <form onSubmit={submit} className="lg: lg:ml-[15vw] flex lg:w-3/5 w-full mt-16 lg:mt-0 flex-col">
      <div className="flex-col flex mb-10">
      <label htmlFor="name" className='pl-1 text-lg font-bold'>Your full name</label>
        <input
          id='name'
          required
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Your full name'
          className='mt-3 outline-none bg-gray-200 p-3'
        />
      </div>

      <div className="flex-col flex mb-10">
      <label htmlFor="email" className='pl-1 text-lg font-bold'>Email</label>
        <input
          id='email'
          required
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Your email'
          className='mt-3 outline-none bg-gray-200 p-3'
        />
      </div>

      <div className="flex-col flex mb-10">
      <label htmlFor="question" className='pl-1 text-lg font-bold'>Tell us about it</label>
        <textarea
          id='question'
          required
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder='Write here...'
          className='mt-3 outline-none bg-gray-200 p-3 min-h-[150px]'
        />
      </div>

      <button type='submit' className='text-xl bg-orange-500 rounded-md w-full
      p-3 text-white flex items-center justify-center font-bold duration-300
      hover:bg-slate-700'>
        <Image width={20} height={20} src='/static/envelope.png' alt='envelope' className='h-6 w-auto pr-3' />
        Send message
      </button>
    </form>
  )
}

export default ContactUs
