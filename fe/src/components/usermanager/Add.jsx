import { useState, useEffect } from 'react'
import instance from '@/lib/axios'

export default function Add(){

    const [form, setForm] = useState({
        name:'',
        email:''
    })

    const [error, setError] = useState({
        name:false,
        email:false
    })

    const change = (field, value) =>{

        setForm((prev)=>({
            ...prev,
            [field]:value
        }))

        if(value.trim() !==''){
            setError((prevError)=>({
                ...prevError,
                [field]:true
            }))
        }
    }

    const addProcess = (e) =>{
        e.preventDefault()

        const currentError = {
            name:form.name.trim()==='',
            email:form.email.trim()==='',
        }

        setError(currentError);

        const formData = new FormData();
        formData.append('name', form.name);
        formData.append('email', form.email);

        if (Object.values(currentError).includes(true)) {
            alert("Please fill in all required fields.");
        } else {
            instance.post('/user/create', formData)
                .then((response) => {
                    if (response.data.success) {
                        alert(response.data.message);
                        navigate('/usermanager');
                    }
                })
                .catch(err => {
                    console.log(err.response?.data?.message);
                    console.error('error:', err);
                });
        }
    }

    return(
        <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    <div className="mx-auto max-w-2xl">
                        <div className="text-center">
                            <h2 className="text-xl text-gray-800 font-bold sm:text-3xl dark:text-white">
                                Add User
                            </h2>
                        </div>

                        <div className="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-neutral-900 dark:border-neutral-700">
                            <form onSubmit={addProcess}>
                                <div className="mb-4 sm:mb-8">
                                    <label for="hs-feedback-post-comment-name-1" className="block mb-2 text-sm font-medium dark:text-white">Full name</label>
                                    <input type="text" id="hs-feedback-post-comment-name-1" className={`py-3 px-4 block w-full border ${error.name ? 'border-gray-200' :'border-red-500'} rounded-lg text-sm ${error.name ? 'focus:border-blue-500 focus:ring-blue-500' :'focus:border-red-500 focus:ring-red-500'} disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600`} onChange={e=>change('name', e.target.value)} placeholder="Full name"/>
                                </div>

                                <div className="mb-4 sm:mb-8">
                                    <label for="hs-feedback-post-comment-email-1" className="block mb-2 text-sm font-medium dark:text-white">Email address</label>
                                    <input type="email" id="hs-feedback-post-comment-email-1" className={`py-3 px-4 block w-full border ${error.name ? 'border-gray-200' :'border-red-500'} rounded-lg text-sm ${error.name ? 'focus:border-blue-500 focus:ring-blue-500' :'focus:border-red-500 focus:ring-red-500'} disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600`} onChange={e=>change('email', e.target.value)} placeholder="Email address"/>
                                </div>

                                <div className="mt-6 grid">
                                    <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}