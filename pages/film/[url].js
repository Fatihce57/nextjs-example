import Head from 'next/head';

export default function FilmDescription({ movie }) {

    return (
        <div className="movie">
            <Head>
                <title>{movie.title}</title>
            </Head>
            <h3>{movie.title}</h3>
            <div className="summary">
                {movie.overview}
            </div>
            <style jsx>{`
            
            `}</style>
        </div>
    )
}

export async function getServerSideProps({ params }) {
    const request = await fetch(`https://api.themoviedb.org/3/movie/${params.url}?api_key=fb610eb829d30acfac99f7dbaa1c937c&language=en-US`)
    const movie = await request.json()

    return {
        props: {
            movie
        }
    }
}