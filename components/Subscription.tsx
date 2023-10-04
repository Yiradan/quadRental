'use client'
import { FormEvent, useState } from 'react'


const Subscription = () => {

  const [subscription, setSubscription] = useState('')

  const submit = (e:FormEvent) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={submit}>
      <input
      className='w-full h-auto text-xl outline-none bg-gray-200 my-3 p-2
      rounded-sm'
      placeholder='Your e-mail...'
      type='text'
      value={subscription}
      onChange={(e) => setSubscription(e.target.value)}
      />
      <button
        type='submit'
        className='w-full h-auto text-2xl bg-orange-500 hover:bg-slate-700
        duration-300 font-semibold text-white rounded-sm'
        >
        Submit
      </button>
    </form>
  )
}

export default Subscription
