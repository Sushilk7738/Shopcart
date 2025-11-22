import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import firebaseAppConfig from "../util/firebase-config"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

const auth = getAuth(firebaseAppConfig)

const Signup = ()=>{
    const[passwordType,setPasswordType] = useState('password')
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const [loader, setLoader] =  useState(false)
    
    const [formValue, setFormValue] = useState({
        fullname : '',
        email : '',
        password : '',
    })
    
    const signup= async (e)=>{
        try {
            e.preventDefault()
            setLoader(true)
            await createUserWithEmailAndPassword(auth, formValue.email, formValue.password)
            navigate('/')    
        }
        catch(err) 
        {
            setError(err.message)
        }
        finally {
            setLoader(false)
        }
        
    }
    
    const handleOnChange = (e)=>{
        const input = e.target
        const name = input.name
        const value = input.value
        setFormValue({
            ...formValue,
            [name] : value,
        })

        setError(null)
    }   
    
    return(
        <div className="grid md:grid-cols-2 md:h-screen md:overflow-hidden animate__animated animate__fadeIn">
            <img src="/images/shop.jpg" className="w-full md:h-full h-80 object-cover" />
            <div className="flex flex-col md:p-16 p-8">
                <h1 className="text-4xl font-bold">New User</h1>
                <p className="text-lg text-gray-600">Create your account to start shopping</p>

                <form className="mt-8 space-y-6" onSubmit= {signup}>
                    <div className="flex flex-col">
                        <label className="font-semibold text-lg mb-1">FullName</label>
                        <input type="text" 
                            onChange = {handleOnChange}
                            required
                            name="fullname"
                            placeholder="sushil kamble"
                            className="p-3 border border-gray-300 rounded"
                        />
                    </div>
                    
                    <div className="flex flex-col">
                        <label className="font-semibold text-lg mb-1">Email id</label>
                        <input 
                            onChange = {handleOnChange}
                            required
                            type = "email"
                            name="email"
                            placeholder="example@gmail.com"
                            className="p-3 border border-gray-300 rounded"
                        />
                    </div>
                    
                    <div className="flex flex-col relative">
                        <label className="font-semibold text-lg mb-1">Password</label>
                        <input 
                            onChange = {handleOnChange}
                            required
                            type = {passwordType}
                            name="password"
                            placeholder="************"
                            className="p-3 border border-gray-300 rounded"
                        />

                        <button onClick={()=>setPasswordType(passwordType === "password" ? "text" : "password")} type="button" className="absolute top-11 right-4 w-8 h-8 rounded-full hover:bg-[#faf1e8] hover:text-green">
                            {
                                passwordType === 'password' ?
                                    <i className="ri-eye-line"></i>
                                :
                                    <i className="ri-eye-close-line"></i>
                            }
                            
                        </button>
                    </div>

                    {
                        loader ?
                        <h1 className="text-lg font-semibold text-gray-600">Loading...</h1>
                        :
                        <button className="py-3 px-8 bg-[#bca48c] text-white rounded hover:bg-rose-500 font-semibold">Signup</button>
                    }
                    
                </form>
                <div className="mt-2">
                    Already have an account ? <Link to= "/login" className="text-[#bca48c] font-semibold ">Signin</Link>
                </div>
                {
                    error && 
                    <div className="flex justify-between items-center mt-2 bg-rose-500 text-white text-center font-semibold p-3 rounded shadow animate__animated animate-pulse">
                        <p>{error}</p>
                        <button onClick={()=>setError(null)}>
                            <i className="ri-close-line"></i>
                        </button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Signup