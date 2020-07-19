import React from 'react'
import Layout from '../components/layout'

const ContactPage = () => {
  return (
    <Layout>
      <div className="contact-page">
        <h1 className="page-title contact-title">Contato</h1>

        <p>Olá, meu nome é Anchieta Júnior, sou um desenvolvedor Ruby e Javascript com 9
          anos de experiência em desenvolvimento de projetos web.
        </p>
        <p>Sou graduado em Sistemas de Informação pela Universidade do Rio São Francisco 
          (Unirios) e atualmente estou me especializando em Arquitetura de Sistemas Distribuídos.
        </p>

        <p>Você pode me encontrar pelo <a href="https://twitter.com/anchietajnr" rel="noopener noreferrer" target="_blank">Twitter</a>, 
          <a href="https://github.com/anchietajunior" rel="noopener noreferrer" target="_blank">Github</a>, 
          <a href="https://www.linkedin.com/in/anchietajunior/" rel="noopener noreferrer" target="_blank">Linkedin</a> ou 
          pelo e-mail: santosjr87@gmail.com</p>
      </div>
    </Layout>
  )
}

export default ContactPage