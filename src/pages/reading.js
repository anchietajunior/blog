import React from 'react'
import Layout from '../components/layout'

const ReadingPage = () => {
  return (
    <Layout>
      <div className="contact-page">
        <h1 className="page-title contact-title">Leituras</h1>

	<ul class="reading-list">
	  <li>
	    <h2>Código limpo: Habilidades Práticas do Agile Software</h2>
	    <span>
	      <strong>Tema:</strong> Tecnologia |
	      <strong>Início:</strong> 17/05/2020 | 
	      <strong>Status:</strong> Em progresso
	    </span>
	    <img src="https://images-na.ssl-images-amazon.com/images/I/41aHzYSXZkL._SX380_BO1,204,203,200_.jpg" height="200" width="150" />
	  </li>
	  <li>
	    <h2>Como desenvolver Microsserviços: Top 10 Hacks para Modelar, Integrar e Implantar Microsserviços</h2>
	    <span>
	      <strong>Tema:</strong> Tecnologia |
	      <strong>Início:</strong> 14/05/2020 | 
	      <strong>Status:</strong> Concluído
	    </span>
	    <img src="https://m.media-amazon.com/images/I/51gNf8JCApL._SY346_.jpg" height="200" width="150" />
	  </li>
	  <li>
	    <h2>Essencialismo: A disciplinada busca por menos</h2>
	    <span>
	      <strong>Tema:</strong> Autoajuda |
	      <strong>Início:</strong> 10/04/2020 | 
	      <strong>Status:</strong> Em progresso
	    </span>
	    <img src="https://m.media-amazon.com/images/I/51GIcNUQyIL.jpg" height="200" width="150" />
	  </li>
	  <li>
	    <h2>O programador apaixonado: Construindo uma carreira notável em desenvolvimento de software</h2>
	    <span>
	      <strong>Tema:</strong> Carreira |
	      <strong>Início:</strong> 29/03/2020 | 
	      <strong>Status:</strong> Em progresso
	    </span>
	    <img src="https://m.media-amazon.com/images/I/512OdQxWXuL.jpg" height="200" width="150" />
	  </li>
	  <li>
	    <h2>Os segredos da mente milionária</h2>
	    <span>
	      <strong>Tema:</strong> Economia |
	      <strong>Início:</strong> 23/03/2020 | 
	      <strong>Status:</strong> Concluído
	    </span>
	    <img src="https://lojasaraiva.vteximg.com.br/arquivos/ids/12100776/1009412203.jpg?v=637142217795870000" height="200" width="150" />
	  </li>
	</ul>
      </div>
    </Layout>
  )
}

export default ReadingPage
