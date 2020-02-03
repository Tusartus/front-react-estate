import React, {useState} from 'react';
//import '../App.css';
import './Quotes.css';
import {css}  from "emotion";

const Quote = () =>{
    const quotes = {
        0:{
            client: "John and  Nancy L.",
            quote: "We worked with Jennifer to sell our condo in San Francisco as we planned our move out-of-state. Jenn was an absolute professional throughout the entire transaction and obtained a significantly higher sales price than we expected. We were able to leave our keys with her at the beginning of the listing process and Jenn coordinated the entire sale with us while we were 1,000 miles away. She maintained a regular, scheduled communication cadence, which was very much appreciated. Jennifer handled our “last-minute” plans to sell our condo with ease and was able to coordinate professional staging and updates in a timely manner, enabling us to sell the condo in advance of the holiday lull. Early on, we considered using a discount brokerage. We’re extremely thankful that we didn’t, as Jenn completely streamlined the sales process and undoubtedly maximized our profits. We hope to work with Jenn again in the future. You should not hesitate to work with her - she’s a serious rock star."
        },
        1:{
            client: "Nolan & Anna K",
            quote: "Jena more than helped just sell our San Francisco condo, she helped provide a sense of peace and calm (in a timely and professional manner) in the midst of one of the most chaotic times in life. Buying or selling a home is potentially one of the biggest financial decisions one can make. My wife and I were in a time-sensitive situation and needed to sell our condo as soon as possible as it was being used as collateral to purchase our new home. Since day one of meeting Jenn, she was honest, responsive, clear, concise, and full of integrity. She treated us with a white glove service that no other realtor we had in the past compared to. She answered all questions we had and made the whole process so easy for my family to understand. If you are looking for a true professional that cares and puts your interests before all things, Jenn is the person for you. She comes highly recommended. Needless to say, we sold our place. "
        },
        2:{
            client: " Francis and Megan G",
            quote: " Jennifer was our agent for the recent purchase of our new home in San Rafael. It was a real pleasure to work with her. As a first time buyer it can be a bit daunting, but she always took the time to make sure we understood what was going on and what we needed to do next. She also made a point of following up regularly. You can count on her to tell you what’s good and bad about a home so that you can make an educated decision. I would definitely recommend working with Jennifer if you are a first time buyer trying to understand the Marin market. You will not be disappointed!."
        },
        3:{
            client: "Lena & Ben B.",
            quote: "We were immediately drawn to Jen’s generous laugh, positive spirit, and knowledge of the vagaries of the San Francisco real estate market - and knew instinctively that she would be someone great to have on our side as first-time home buyers in a competitive market. Jen continually impressed us with her responsiveness, dedication, and great eye to detail and visual aesthetics. She seemed to always be thinking about us as she saw new inventory coming onto the market on broker tour or received off-market opportunities ."
        },
        4:{
            client: "Stephanie & Vincent S..",
            quote: "She helped us buy our first home in San Francisco and we are so thankful that we got to work with her! Throughout the whole process she was always patient with us, managing expectations while keeping us sane at the same time. She kept up with our changing tastes over the course of many months, and always had our needs in mind when previewing listings. As first time home-buyers her experience and expertise was especially helpful— ."
        },
        5:{
            client: " Han & Fran V..",
            quote: "As first time home buyers, Jennifer expertly guided us through an unfamiliar and frightening process. Enthusiastic, genuine and immensely patient, she was always available to answer our many questions. The few times she did not have an immediate answer, there was no pretending, but she immediately went to work to hunt down the answer. What was even more wonderful than Jennifer’s detailed knowledge of the San Francisco market, her eye for detail, and her proactive approach to disclosures and the whole closing process, was her empathy ."
        },
        6:{
            client: " Corinne & Dan B..",
            quote:"She helped us buy our first home in San Francisco! We just moved here from the east coast and really relied on her to guide us through neighborhoods to consider + the differences in the process out here. She made the experience seamless - we love our new home and couldn’t have done it without her.."
        }
    }
    const [current, setCurrent] = useState(quotes[0])

    const [active, setActive] = useState(0)

    const handleSetClick = (event) =>{
         //console.log('hello');
         setCurrent(quotes[event.target.getAttribute("data-quote")])
         setActive(event.target.getAttribute("data-quotes"))
    }

    return (
        <div className="quotescontent">
            <p> {current.quote}</p>
            <p>{current.client}</p>
             <div 
             className={css`
             display: flex;

             span{
                 height: 20px;
                 width: 20px;
                 margin: 0 3px;
                 display: flex;
                 align-items: center;
                 justify-content: center;
                 cursor: pointer;
             }

             span::before{
                content: ".";
                height: 6px;
                width: 6px;
                background-color: #4d4d44;
                border-radius: 50%;
                transition: background-color 0.3s ease;
            }
            span::hover::before {
                 background-color: #45454d;
            
            }
            span[data-quote= "${active}"]::before{
                  background-color: #45454d;
            }
             
             `}
             
             
             
             
             
             
             >
                 {Object.keys(quotes).map(index =>(
                      <span  
                      className="spana"
                       onClick = {event => handleSetClick(event)}
                         data-quote = {index}
                         key= {index}
                      />
                 ))}
             </div>

        </div>
    )

}
export default Quote;