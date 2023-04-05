import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='flex justify-center items-center w-full h-screen bg-[#0a192f] p-4'>
        <form method="POST" action="https://getform.io/f/aa11666a-c11e-4d27-bdcf-bca2384357fd" className='flex flex-col max-w-[600px] w-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - harshshaktawat.tect@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" name='name' placeholder='Name'/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" name='email' placeholder='Email'/>
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 py-3 my-8 mx-auto px-4'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact;