import Seo from "@/components/Seo";

export default function Home({ results }) {
  return (
    <div className="container">
      <Seo title="Home" />
      {/* {}를 쓸때는 return을 꼭 써줍시다 */}
      {results?.map((movie) => {
        return (
          <div key={movie.id} className="movie">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <h4>{movie.original_title}</h4>
          </div>
        );
      })}

      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: { results },
    // props안에는 원하는 data를 넣을수있다
    // 무엇을 return하던 이걸 props로써 page에 전달하게 된다(Home({results})
    // → _app.js의 pageProps
  };
}
// 위의 코드는 Server에서 돌아간다
// API key를 여기서 실행할 경우 유저에게는 보여지지 않는다(백엔드에서만 실행되니까)
