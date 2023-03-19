import Collapsible from 'react-collapsible';
import "./FAQ.css";

const faqs = [
    {
        title: "1. Not able to login into the website.",
        content: `Ans: Should create account first`,
    }, {
        title: "2. Not able verify/booked tickets and transaction successful and mail not received.",
        content: `Ans: Please send your queries to tickets.recharge@rajalakshmi.edu.in`,
    }, {
        title: "3. Will transport be provided?",
        content: `Ans: Yes, transports will be provided for all 3 days. The timings and routes will be updated soon.`,
    }, {
        title: "4. Can other college students and school students participate?",
        content: `Ans: Yes other college students(arts & science, medical, engineering and any degree) students can participate. Students who are 10th passed out, 11th, 12th can also participate`,
    }, {
        title: "5. Where should alumni get the ticket?",
        content: `Ans: Here's the website for Alumini : rajalakshmi.org/rechargealumini`,
    }, {
        title: "6. Can I register only for events and attend the culturals?",
        content: `Ans: No, The pro show registration should be done to allow you inside the campus to attend the events.`,
    }, {
        title: "7. I have paid for the ticket registration, received an invoice but didn't get any ticket.",
        content: `Ans: No problem. Forward the invoice pdf to tickets.recharge@rajalakshmi.edu.in, tickets will be sent.`,
    },
]


const FAQ = () => {

    return (
        <div id="faq" className='text-white flex flex-col justify-center items-center m-12'>
            <div class="main text-6xl justify-center">
                <span class="socod">FAQ</span>
            </div>
            <div className=''>
            {faqs.map((data) => {
                return (<Collapsible trigger={data.title} transitionTime={400}
                 easing={'cubic-bezier(0.175, 0.885, 0.32, 2.275)'}>
                    <p>
                        {data.content}
                    </p>
                </Collapsible>)
            })}
            </div>
        </div>
    );
}

export default FAQ;