import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";


const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  const form = useRef();

  const handleContact = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_htimgt9', 'template_ca3eueg', form.current, {
        publicKey: 'awUsIdcpQCbmMScx6',
      })
      .then(
        () => {
          toast.success('Message Sent');
        },
        (error) => {
          toast.success("Please Try again later");
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <>
     <div className='md:mt-[65px] mt-[65px] flex md:flex-row flex-col'>
      <div className='md:w-1/2 w-screen md:ml-[74px]'>
        <iframe className='md:w-[750px] md:h-[600px] h-[300px] w-screen' src={map}></iframe>
      </div>
      <div className='md:w-1/2 w-screen md:ml-20 md:mr-4 mt-6'>
      <form ref={form} onSubmit={(e)=>e.preventDefault()}>
              <div className='flex'>
                <input className='border-2 px-6 py-2 md:mr-8 my-4 md:mt-6 w-1/2 md:w-1/2 dark:bg-slate-800 dark:text-white dark:border-white mx-2' type='text' placeholder='Name' name='from_name' />
                <input className='border-2 px-6 py-2 my-4 md:mt-6 w-1/2 md:w-1/2 dark:bg-slate-800 dark:text-white dark:border-white mr-2' type='email' placeholder='Email' name='from_email' />
              </div>
              <div>
              <input className='border-2 px-6 py-2 md:w-[590px] dark:bg-slate-800 dark:text-white dark:border-white mx-2 w-[374px]' type='password' placeholder='Enter your Password' name='password'/>
              </div>
              <textarea className='md:my-4 my-4 border-2 px-6 py-2 md:w-[590px] dark:bg-slate-800 dark:text-white dark:border-white mx-2 w-[374px]' cols='30' rows='10' placeholder="Create a message here..." name='message'></textarea>
              <div> 
              <button onClick={handleContact} className='ml-2 border-2 px-8 py-2 md:w-[256px] dark:bg-slate-900 dark:hover:bg-white dark:hover:text-black duration-300 transition-all ease-in-out hover:bg-black hover:text-white'>SEND MESSAGE</button>
              </div>
            </form>
      </div>
    </div>
    </>
  )
}

export default Contact
