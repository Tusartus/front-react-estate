import React from 'react';
import Layout from "./Layout";
import Slideshowhome from '../Slide';
import Quotes from "../components/Quotes";

const About = () => ( 

  <Layout  title="Home page"  description="About us">
      <div className="row">
     <div className="col-md-8 offset-md-2 p-4 ml-4">
         <h3 className="display-4 text-center">About me</h3>
         <p>
         I started my real estate career in New York City, a naïve 20-something with big dreams, pure grit, and nothing to lose. 
         After making it through the Great Recession still standing,I built my business to the top 3% of company agents nationwide.
        I knew then that there was no turning back; this was the career for me. Settling back in the Bay Area equipped with this
         experience, I fine-tuned my process and strategies to give my clients the best possible buying or selling experience. To me,
         the best part of this profession is that it provides an opportunity for me to build genuine relationships with each client and 
        fellow agent.Now, over a decade later, this business has become who I am. It has seen me through a cross country move,
        a wedding, a Graduate degree, purchasing my first house, my first renovation, and my first child. These experiences
         have helped me to become better and better at doing what I love. 
         </p>
         <p>
         I have a strong ability to advise on proper pricing, develop a staging and marketing aesthetic, negotiate fiercely, 
         and build strong relationships with other agents, effectively allowing for smoother deals from the first offer to the 
         close of escrow. I save you stress and time, and I won't leave a penny on the table. My team flawlessly harmonizes the 
         preparation of your property and provides resources for anything from cleaners to storage and moving companies. 
         When you work with me, you can expect a direct, hands-on approach with strategy, insight, and exceptional service.
         </p>

         <p>
         <small>Our mission statement is taken to heart:</small><br />

          Helping everyone find their place in the world.
         </p>
     </div>

     <div className="col-md-8 offset-md-2 mt-5">
      <h2 className="display-4 text-center text-info">Details of Works </h2> 

         <Slideshowhome />
     </div>
     <div className="col-md-10 offset-md-2 mt-5">
      <h2 className="display-4 text-center text-info">KIND WORDS </h2> 


         <Quotes />
     </div>

          
      </div>
  </Layout>
  
);

export default About;
