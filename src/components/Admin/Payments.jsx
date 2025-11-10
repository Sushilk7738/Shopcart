import { useState } from "react"
import Layout from "./Layout"

const Payments = ()=>{
    const[payments, setPayments] = useState([
        {
            paymentId : '#22333jal',
            customerName : 'Sushil kamble',
            email : 'sushil@7gmail.com',
            mobile : '+91 9632457687',
            product : 'Asus Laptop',
            amount : 58000,
            date : '11-11-2001 11:11:11 Pm',
            status : 'pending'
        },
        {
            paymentId : '#22333jal',
            customerName : 'Sushil kamble',
            email : 'sushil@7gmail.com',
            mobile : '+91 9632457687',
            product : 'Asus Laptop',
            amount : 58000,
            date : '11-11-2001 11:11:11 Pm',
            status : 'pending'
        },
        {
            paymentId : '#22333jal',
            customerName : 'Sushil kamble',
            email : 'sushil@7gmail.com',
            mobile : '+91 9632457687',
            product : 'Asus Laptop',
            amount : 58000,
            date : '11-11-2001 11:11:11 Pm',
            status : 'pending'
        },
        {
            paymentId : '#22333jal',
            customerName : 'Sushil kamble',
            email : 'sushil@7gmail.com',
            mobile : '+91 9632457687',
            product : 'Asus Laptop',
            amount : 58000,
            date : '11-11-2001 11:11:11 Pm',
            status : 'pending'
        },
        {
            paymentId : '#22333jal',
            customerName : 'Sushil kamble',
            email : 'sushil@7gmail.com',
            mobile : '+91 9632457687',
            product : 'Asus Laptop',
            amount : 58000,
            date : '11-11-2001 11:11:11 Pm',
            status : 'pending'
        },
        {
            paymentId : '#22333jal',
            customerName : 'Sushil kamble',
            email : 'sushil@7gmail.com',
            mobile : '+91 9632457687',
            product : 'Asus Laptop',
            amount : 58000,
            date : '11-11-2001 11:11:11 Pm',
            status : 'pending'
        },
        {
            paymentId : '#22333jal',
            customerName : 'Sushil kamble',
            email : 'sushil@7gmail.com',
            mobile : '+91 9632457687',
            product : 'Asus Laptop',
            amount : 58000,
            date : '11-11-2001 11:11:11 Pm',
            status : 'pending'
        },
        {
            paymentId : '#22333jal',
            customerName : 'Sushil kamble',
            email : 'sushil@7gmail.com',
            mobile : '+91 9632457687',
            product : 'Asus Laptop',
            amount : 58000,
            date : '11-11-2001 11:11:11 Pm',
            status : 'pending'
        },

    ]) 
    
    return(
        <Layout>
            <div>
                <h1 className="text-xl font-semibold">Payments</h1>
                <div className="mt-6">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-rose-600 text-white">
                                <th className="py-4">Payment Id</th>
                                <th>Customer`s Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Product</th>
                                <th>Amount</th>
                                <th>Date</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                payments.map((item, index)=>(
                                    <tr className="text-center" key={index} style={{
                                        background:(index + 1)%2 === 0 ? '#f1f5f9' : 'white'
                                    }}>
                                        <td className="py-4">{item.paymentId}</td>
                                        <td className="capitalize">{item.customerName}</td>
                                        <td>{item.email}</td>
                                        <td>{item.mobile}</td>
                                        <td className="capitalize">{item.product}</td>
                                        <td>₹{item.amount.toLocaleString()}</td>
                                        <td>{item.date}</td>
                                        
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

export default Payments