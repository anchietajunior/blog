import React from 'react'
import Layout from '../components/layout'

import books from '../sources/books.json'

const ReadingPage = () => {
  return (
    <Layout>
        <h1 className="page-title">Leituras</h1>

	<ul class="reading-list">
		{books.map(book => (
			<li class="reading-list-book" key={book.title}>
				<img src={book.image} height="200" width="150" />
				<div class="reading-list-book-details">
					<a href={book.url}>{book.title}</a>
					<div>
						<span class="reading-list-book-start">{book.start}</span>
						<span class="reading-list-book-status">{book.status}</span>
					</div>
				</div>
			</li>
		))}
	</ul>
    </Layout>
  )
}

export default ReadingPage
