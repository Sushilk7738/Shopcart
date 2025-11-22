import Layout from "./Layout"

const Contact = () =>{
    return (
        <Layout>
            <div className="bg-white md:w-6/12 shadow-lg border-none md:my-16 mx-auto">
                <img src="/images/contact.jpg" />
                <div className="p-8">
                    <form className="space-y-6">
                    <div className="flex flex-col">
                        <label className="font-semibold text-lg mb-1">FullName</label>
                        <input type="text" 
                            required
                            name="fullname"
                            placeholder="sushil kamble"
                            className="p-3 border border-gray-300 rounded"
                        />
                    </div>
                    
                    <div className="flex flex-col">
                        <label className="font-semibold text-lg mb-1">Email id</label>
                        <input 
                            required
                            type = "email"
                            name="email"
                            placeholder="example@gmail.com"
                            className="p-3 border border-gray-300 rounded"
                        />
                    </div>
                    
                    <div className="flex flex-col">
                        <label className="font-semibold text-lg mb-1">Message</label>
                        <textarea 
                            required
                            name="message"
                            placeholder="Enter your message here"
                            className="p-3 border border-gray-300 rounded"
                            rows={4}
                        />
                    </div>

                    <button className="py-3 px-8 bg-[#bca48c] text-white rounded hover:bg-rose-500 font-semibold">Get Quote</button>
                </form>
                </div>

            </div>
        </Layout>
    )
}

export default Contact