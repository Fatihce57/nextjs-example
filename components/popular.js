export default function Popular({ movies }) {
    return (
        <div className="popular">
            <h2>Popular Movies</h2>
            <div className="popular-inner">
                {movies.results.map((movie) => (
                    <div key={movie.id}>
                        <h3>{movie.title}</h3>
                        <img
                            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
                        />
                    </div>
                ))}
            </div>
            <style jsx>{`
        .popular {
          width: 1200px;
          margin: 0 auto;
          padding:20px 0;
        }

        h2{
          font-size:40px;
          margin-bottom:20px;  
        }

        .popular-inner {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        div {
          width: calc(25%-10px);
          position: relative;
        }
        
        h3 {
          font-size: 20px;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          color: #fff;
          background: linear-gradient(to top, #000, transparent);
          padding: 50px 20px 20px 20px;
        }

        img {
          width: 100%;
        }
      `}</style>
        </div>
    )
}
