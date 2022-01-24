import Head from 'next/head'
import Link from 'next/link'

export default function Home({ movies }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>

      <h3>Popular Movies</h3>
      {movies.results.map(movie =>(
        <div key={movie.id}>
          <h3>{movie.title}</h3>
        </div>
      ))}

    </>
  )
}

export async function getStaticProps() {
  const request = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=fb610eb829d30acfac99f7dbaa1c937c&language=en-US&page=1`)
  const movies = await request.json();
  return {
    props: {
      movies
    }
  }
}