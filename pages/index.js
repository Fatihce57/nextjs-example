import Head from 'next/head'
import Popular from '../components/popular'

export default function Home({ movies }) {
  return (
    <>
      <Head>
        <title>Popular movie</title>
      </Head>
      <Popular movies={movies} />
    </>
  )
}

export async function getServerSideProps() {
  const request = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=fb610eb829d30acfac99f7dbaa1c937c&language=en-US&page=1`)
  const movies = await request.json();
  return {
    props: {
      movies
    }
  }
}