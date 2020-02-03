import React from 'react';
import Layout from "./Layout";
import Slideshowhome from '../Slide';

const Home = () => ( 

  <Layout  title="Home page "  description="Bringing Wellness to Real Estate ">
      <div className="allcontent">

     
      <div className="home-contentone">
       <p className="phomecont">We are all biochemically unique. Buying or selling your home should be, too.
       </p>

      </div>

      <hr className="col-md-8 offset-md-2" />
      
      <div className="row centeracont">
        <div className="col-md-5 mr-2 ml-4 mb-2 bgcolorinf">
          <div className="card cardcont">
          <p className="card-content pncard1"> 
          I believe that everything boils down to the human connection and in everything I do, I honor these relationships. I
           do this through honest communication, removing unknowns, and constant growth to benefit my clients. Helping people to buy 
           or sell their home is the way I get to fulfill my passion of genuine connection! I prioritize your underlying goals with
            a direct, hands-on approach. My relationships with clients last long after the close of the sale, 
          and it is that underlying philosophy that drives my worth ethic and the success of my business.
          </p>

             <div className="letconect">

          
          <h2 className="card-title text-center mr-2 ml-2"> Let's connect</h2>
          <p className="card-body">Should we work together? If this speaks to you, give me a call or send me a note. I look forward to hearing from you!   </p>
              </div>
          
          </div>
          
        </div>
        <div className="col-md-5 mr-2 mb-2 bgcolorpri">
        <div className="card cardcont">
          <p className="card-img  centrahere">
            <img className="img-card-responsive" src="https://images.unsplash.com/flagged/photo-1558954157-aa76c0d246c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="about" />
          </p>
            <h2 className="card-body">
             BRINGING WELLNESS TO REAL ESTATE
              </h2>
          <p className="card-body">I aim to bridge the gap between Real Estate and Wellness for my buyers and sellers in San Francisco and Mainn. My background in Nutrition & Functional Medicine has taught me there are many underlying similarities. Identifying the root cause or goal is the way to move forward successfully. I help my clients to identify their underlying goals for buying or selling, and diligently
           manage the process from start to finish, so you can remain clear-headed, healthy, and well. </p>
          </div>



          </div>
      </div>
         <div className="row">
           <div className="col-10 ">
             <Slideshowhome />
           </div>
         </div>

      </div>
  </Layout>
  
);

export default Home;
