import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const[password, setPassword] = useState('');
  const[email, setEmail] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const loginRes = await loginUser(password, email);
      if(loginRes.token){
        localStorage.setItem('token', userData.token);
        localStorage.setItem('user', JSON.stringify(userData.user));
        router.push('/dashboard');
      }
      else{
        throw new Error('Login failed: No token received.');
      }
    }
    catch (error){
      alert (error);
    }

  }
  return (
    <div className='flex flex-col items-center justify-center h-[100vh]'>
      <Head>
        <title>Login </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='block w-100 w-[30%]'>

          <form className="mx-auto ">

                <h1 className='text-center'>
                Welcome to <a href="https://nextjs.org">Next.js!</a>
              </h1>
          
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input type="email" onChange={(e) => setEmail(e.target.value)} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Email" required />
            </div>
            <div className="mb-5">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
              <input type="password" onChange={(e) => setPassword(e.target.value)} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <button type="button" onClick={handleSubmit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          </form>

      </main>

          
    </div>
  );
}
