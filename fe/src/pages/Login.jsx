import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '@/store/slice/autSlice';
import instance from '@/lib/axios'

export default function Login(){
    const [form, setForm] = useState({
        email:'',
        password:''
      })
    
      const [errors, setErrors] = useState({
        email: false,
        password: false,
      })

      const navigate = useNavigate()
      const dispatch = useDispatch()

      const changeValue = (field, value)=>{
        
        setForm((preForm)=>({
          ...preForm,
          [field]:value
        }))
    
        if(value.trim() !==''){
          setErrors((prevErrors)=>({
            ...prevErrors,
            [field]:false
          }))
        }
      }
    
      const login = (event)=>{
        event.preventDefault()
        
        const currentErrors = {
          email:form.email.trim()==="",
          password:form.password.trim()===""
        }
    
        setErrors(currentErrors)
    
        if(!currentErrors.email && !currentErrors.password){
          
        }else{
          alert("Please fill in all required fields.")
        }

        instance.post('/login',form)
        .then((resp)=>{
          console.log(resp)
          if(resp.data.success){

            dispatch(signin(resp.data.token))
            localStorage.setItem("is_logged",true);
            localStorage.setItem("token", resp.data.token);
            
            navigate("/employee");
          }
        })
        .catch(error=>{
          console.error('error',error)
        })
      }
    
      return (
        <div className='w-full bg-gray-100 flex h-screen dark:bg-neutral-800'>
          <main className="w-full max-w-md p-6 mx-auto">
            <div className="mt-7 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="p-4 sm:p-7">
                <div className="text-center">
                  <h1 className='font-bold text-2xl block text-gray-800'>Sign in</h1>
                  <p className="mt-2 text-sm text-gray-600">Don&apos;t have an account yet?
                    <a className="text-blue-600 decoration-2 hover:underline focus:underline font-medium"> Sign up here</a>
                  </p>
                </div>
                <form action="" className="grid gap-y-4" onSubmit={login}>
                  <div>
                    <label htmlFor="" className="block text-sm mb-2 dark:text-white">Email Address</label>
                    <div className="relative">
                      <input type="text" className={`py-3 px-4 block w-full ${errors.email ? "border border-red-500" : "border border-gray-200"} rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none`} onChange={e => changeValue('email', e.target.value)}/>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-row items-center justify-between">
                      <label htmlFor="" className="block text-sm mb-2 dark:text-white">Password</label>
                      <a href="" className="inline-flex items-center text-sm text-blue-600 decoration-2 hover:underline fucos:outline-none focus:underline font-medium">Forget password?</a>
                    </div>
                    <div className="relative">
                      <input type="password" className={`py-3 px-4 block w-full  ${errors.password ? "border border-red-500" : "border border-gray-200"} rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none`} onChange={e => changeValue('password', e.target.value)}/>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex">
                      <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                    </div>
                    <div className="ms-3">
                      <label htmlFor="" className="text-xs">Remember me</label>
                    </div>
                  </div>
                  <button className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white">Sign in</button>
                </form>
              </div>
            </div>
          </main>
        </div>
      )
}