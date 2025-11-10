import { useState } from "react"
import Layout from "./Layout"

const Customers = ()=>{
    const[customers, setCustomers] = useState([
        {
            customerName : 'Sushil kamble',
            email : 'sushil@7gmail.com',
            mobile : '+91 9632457687',
            date : '11-11-2001 11:11:11 Pm',
            address:'Dream city, Phase-2, Mumbai, Maharashtra 400024'
        },
        {
            customerName : 'Sushil kamble',
            email : 'sushil@7gmail.com',
            mobile : '+91 9632457687',
            date : '11-11-2001 11:11:11 Pm',
            address:'Dream city, Phase-2, Mumbai, Maharashtra 400024'
        },
        {
            customerName : 'Sushil kamble',
            email : 'sushil@7gmail.com',
            mobile : '+91 9632457687',
            date : '11-11-2001 11:11:11 Pm',
            address:'Dream city, Phase-2, Mumbai, Maharashtra 400024'
        },
        {
            customerName : 'Sushil kamble',
            email : 'sushil@7gmail.com',
            mobile : '+91 9632457687',
            date : '11-11-2001 11:11:11 Pm',
            address:'Dream city, Phase-2, Mumbai, Maharashtra 400024'
        },
        {
            customerName : 'Sushil kamble',
            email : 'sushil@7gmail.com',
            mobile : '+91 9632457687',
            date : '11-11-2001 11:11:11 Pm',
            address:'Dream city, Phase-2, Mumbai, Maharashtra 400024'
        },
        {
            customerName : 'Sushil kamble',
            email : 'sushil@7gmail.com',
            mobile : '+91 9632457687',
            date : '11-11-2001 11:11:11 Pm',
            address:'Dream city, Phase-2, Mumbai, Maharashtra 400024'
        },
    
    ]) 
    
    return(
        <Layout>
            <div>
                <h1 className="text-xl font-semibold">Customers</h1>
                <div className="mt-6">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-rose-600 text-white text-left">
                                <th className="p-4">Customer`s Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Date</th>
                                <th>Address</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                customers.map((item, index)=>(
                                    <tr key={index} style={{
                                        background:(index + 1)%2 === 0 ? '#f1f5f9' : 'white'
                                    }}>
                                        <td className="capitalize px-4 py-2">
                                            <div className="flex gap-3 items-center">
                                                <img className="w-10 h-10 rounded-full"  src="/images/icon.jpg"/>
                                                <div className="flex flex-col justify-center">
                                                    <span className="font-semibold">{item.customerName}</span>
                                                    <small className="text-gray-500">{item.date}</small>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{item.email}</td>
                                        <td>{item.mobile}</td>
                                        <td>{item.date}</td>
                                        <td>{item.address}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    ) 
}

export default Customers