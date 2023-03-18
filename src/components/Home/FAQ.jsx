const FAQ = () =>{
    return(
        <div className="max-h-auto bg-white text-black">
            <div className="main mt-1 items-center flex justify-center">
                    <span className="socod text-6xl ">FAQ</span>
            </div>
            <div className="flex flex-row">
                <div className="basis-1/2 ">
                    <p className="flex ml-24">1. Not able to login into the website.</p>
                    <p className="ml-24">Ans: Should create account first</p><br/>
                    <p className="flex ml-24">2. Not able verify/booked tickets and transaction successful and mail not received.</p>
                    <p className="ml-24">Ans: Please send your queries to tickets.recharge@rajalakshmi.edu.in</p><br/>
                    <p className="flex ml-24">3. Will transport be provided?</p>
                    <p className="ml-24">Ans: Yes,transports will be provided for all 3 days. The timings and routes will be updated soon.</p><br/>
                    <p className="flex ml-24">4. Can other college students and school students participate?</p>
                    <p className="ml-24">Ans: Yes other college students(arts & science,medical, engineering and any degree) students can participate. Students who are 10th passed out,11th,12th can also participate </p><br/>                    
                </div>
                <div className="basis-1/2">
                    <p className="flex ml-24">5. Where should alumni get the ticket?</p>
                    <p className="ml-24">Ans: Here's the website for Alumini <a href="rajalakshmi.org/rechargealumini">rajalakshmi.org/rechargealumini</a></p><br/>                    
                    <p className="flex ml-24">6. Can I register only for events and attend the culturals?</p>
                    <p className="ml-24">Ans: No,The pro show registration should be done to allow you inside the campus to attend the events.</p><br/>                    
                    <p className="flex ml-24">7.I have paid for the ticket registration, received an invoice but didn't get any ticket.</p>
                    <p className="ml-24">Ans: No problem. Forward the invoice pdf to <a href="tickets.recharge@rajalakshmi.edu.in">tickets.recharge@rajalakshmi.edu.in</a> , tickets will be sent.</p><br/>                    

                </div>
                
            </div>

        </div>
    )
}
export default FAQ