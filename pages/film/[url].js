import Head from 'next/head'

export default function FilmDescription({ movie }) {
  return (
    <div className="movie">
      <Head>
        <title>{movie.title}</title>
      </Head>
      <div className="cover"></div>
      <h3>{movie.title}</h3>
      <div className="summary">{movie.overview}</div>
      <style jsx>{`
        .movie {
          width: 1200px;
          margin: 20px auto;
          position: relative;
          padding: 20px;

          .cover {
            background-image: url('https://www.themoviedb.org/t/p/original${movie.backdrop_path}');
            background-size: cover;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 600px;
            opacity: 0.3;
            z-index: -1;

            &::before {
              content: '';
              background: linear-gradient(to bottom, transparent, #ddd);
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            }
          }

          h3 {
            font-size: 30px;
            font-weight: bold;
            margin-bottom: 20px;
          }

          .summary {
            font-size: 18px;
            color: #666;
            line-height: 1.7;
          }
        }
      `}</style>
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const request = await fetch(
    `https://api.themoviedb.org/3/movie/${params.url}?api_key=fb610eb829d30acfac99f7dbaa1c937c&language=en-US`
  )
  const movie = await request.json()

  return {
    props: {
      movie,
    },
  }
}
