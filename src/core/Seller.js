import React, {useState} from 'react';
import Layout from "./Layout";
import FAQ from '../FAQ';

const Seller = () =>{
 
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    country:'',
    message:'',
    error: '',
    success: false
});

const { name, email, password,address,country,message, success, error } = values;

const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
};

  const sellerForm = () => (
    <form>
        <div className="form-group">
            <label className="text-muted">Name</label>
            <input type="text" onChange={handleChange('name')} className="form-control" value={name} />
        </div>

        <div className="form-group">
            <label className="text-muted">Email</label>
            <input  type="email"onChange={handleChange('email')}  className="form-control" value={email} />
        </div>

        <div className="form-group">
            <label className="text-muted">Password</label>
            <input  type="password" onChange={handleChange('password')} className="form-control" value={password} />
        </div>
        
        <div className="form-group">
            <label className="text-muted">Adress</label>
            <input  type="text" onChange={handleChange('address')} className="form-control" value={address} />
        </div>
        
        <div className="form-group">
            <label className="text-muted">Country</label>
            <input  type="text" onChange={handleChange('country')} className="form-control" value={country} />
        </div>
        
        <div className="form-group">
            <label className="text-muted"> Additional Information</label>
            <textarea  onChange={handleChange('message')} className="form-control" rows="6" value={message} placeholder="Is there anything about your home I should know or when we'd like to meet?"> </textarea>
        </div>


        <button   className="btn btn-info text-white display-4">
            Submit
        </button>
    </form>
);





const [faqs, setfaqs] = useState([
  {
    question: 'Should I sell my current home before buying a new one?',
    answer: 'If the built-up equity in your current home will be applied to the down payment on the new home, naturally the former will need to be sold first the current home will not need to be sold. However, your loan advisor will still need to evaluate your risk profile and credit history to determine whether making a loan on a new home is feasible while retaining title to the old home.Buyers often have a short time frame to sell their current home when relocating to a new city because of a job transfer. If you are moving but taking a position with the same employer, check to see if they offer relocation assistance to help offset some of the costs.',
    open : true
  },

  {
    question: 'How long can the seller take to respond to my offer?',
    answer: 'Written offers should stipulate the timeframe in which the seller should respond. Giving them twenty-four hours should be sufficient.',
    open : false
  },
  {
    question: 'What is earnest money? ',
    answer: ' When you make an offer on a home, your agent will ask for a check to accompany it (checks are the same as cash, and the deposit is typically 1% to 2% of the purchase price). Earnest money is made in good faith to demonstrate - to the seller - that the buyer’s offer is genuine. Earnest money essentially takes the home off the market to anyone else and reserves it for you.',
    open : false
  }

  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }



return( 

  <Layout  title="Seller page "  description="I am here for you">
        <div className="container">
          <div className="row">
             <div className="col-md-8 offset-md-2">
               <p className="p-2">
               THE RESPONSIBILITY OF SELLING YOUR HOME DOES NOT COME LIGHTLY TO ME. I UNDERSTAND THE CHALLENGES, TIMING,
                AND NUANCES THAT SURROUND THIS DECISION, AND HAVE THE TOOLS, RESOURCES, AND STRATEGIES TO GUIDE YOU THROUGH 
                IT. I'M HERE TO PROVIDE YOU WITH THE GUIDANCE YOU NEED TO FEEL CONFIDENT, SECURE, AND ABSOLUTE CERTAINTY THAT 
                YOU ARE IN THE RIGHT HANDS. WITH THE HIGHEST STANDARDS IN AESTHETIC, ACCOUNTABILITY, AND DETAIL, I'M HERE TO 
                GIVE YOU PRIDE IN THE WAY I REPRESENT YOUR HOME. I PRIORITIZE YOUR GOALS. MOST OF THE TIME, THAT MEANS SELLING 
                QUICKLY FOR THE HIGHEST POSSIBLE PRICE. SOMETIMES THERE ARE TRICKIER CIRCUMSTANCES THAT GIVE HIGHER PRIORITY TO
                 OTHER ASPECTS OF THE SALE. I CAN ASSURE YOU THAT YOU'LL RECEIVE MY UTMOST CARE, ATTENTION TO DETAIL, AND COMMITMENT.
                  MY RELATIONSHIPS WITH CLIENTS LAST LONG AFTER  THE CLOSE OF THE SALE, AND IT IS THAT UNDERLYING PHILOSOPHY THAT
                  DRIVES MY WORK ETHIC AND THE SUCCESS OF MY BUSINESS. 

               </p>
             </div>
             </div>
             
            
                 <div className="col-md-8 ofset-md-2">
                   <h2 className="content-justify-center mb-4">What's my home worth?</h2>
               <p>Interested in knowing what your home is worth? Give me a few details and I will provide you with a complimentary home assessment. </p>
                    </div>


            
                   
                <div className="row"> 
              <div className="col-md-6 m-5">
               <div className="content-justify-center mb-4"> {sellerForm()}
               
               </div>
              </div>
       <hr/>
              <div className="col-md-10 offset-md-2 App">
              <header>
           <h1>FQ page</h1> 
              </header>
              <div className="faqs">
           {faqs.map((faq, i) => ( 
            
            <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ}/>
            
           ))}

         </div>
              </div>
                
              </div> 





              </div>


              




        
  </Layout>
  
);


};

export default Seller;

