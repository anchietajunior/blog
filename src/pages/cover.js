import React from 'react'
import Layout from '../components/layout'
import coverImage from "../assets/cover.png"

const CoverPage = () => {
  return (
    <Layout>
      <div className="contact-page">
        <h1 className="page-title contact-title">Cover Letter</h1>

        <h2>"Honesty in small things is not a small thing".</h2>
        <p>
          This quote above, describes me. Being honest with yourself 
          about what you like to do is an attitude that changes the 
          way you see life. I'm a Software Developer passionate by code 
          and for me is a pleasure work with technology helping people 
          to solve their problems with solutions developed by me and 
          my team. 
        </p>

        <p>
        When I was younger and I wrote my first "Hello World application" 
        and I opened the file on browser, it was one of the best feelings
         i had in my life. This feeling is with me every day, when i 
         learn a new technology or create a new project. I never stopped 
         studying and always that possible, teach other people what I've 
         learned. 
        </p>

        <p>
        During my graduation i got my first job opportunity at InfluirTec 
        a consulting company, working with Oracle DB and Java. It was a 
        great experience to learn how to work with a team, learn about 
        code delivery, scrum and I could learn a lot on how to deal with 
        people. After almost a year in this position, I discovered Ruby 
        and Rails, so that i decided that would be my main development 
        stack.
        </p>

        <p>
        And then, i moved to my second job opportunity at RoyalTI, a 
        startup focused on commercial systems and i had the chance to 
        work with i like most using the tools i wanted, so that was great! 
        I learned a lot about the communication with the customer and 
        their needs. 
        </p>

        <p>
        In 2016, after 8 months working at Royal i received a proposal 
        to work on a project with more than 6 years of existence and with 
        a large number of users, the biggest application i have worked on 
        so far. This is my third job opportunity at Instituto Padre Pio, 
        a company that maintains an online courses platform.
        </p>

        <p>
        In this position, i learned a lot about performance, third apis 
        integrations, SQL and NoSQL, application security, automated tests, 
        design patterns, application deploy, refactoring, background jobs 
        and many other tools like Sinatra, Redis and React.
        </p>

        <p>
        So far, it's been a great journey and i know it's just the beginning.
        </p>
          
        <img src={coverImage} class="hidden-image" />
      </div>
    </Layout>
  )
}

export default CoverPage