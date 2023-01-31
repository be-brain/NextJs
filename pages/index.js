import Seo from "@/components/Seo";
import { useEffect, useState } from "react";

const API_KEY = "3f970c9fa9825afd98c2bb4205038325";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        )
      ).json();
      setMovies(results);
    })();
    // 익명함수(바로 실행시키려고)
  }, []);

  return (
    <div>
      <Seo title="Home" />
      {/* {}를 쓸때는 return을 꼭 써줍시다 */}
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => {
        return (
          <div key={movie.id}>
            <h4>{movie.original_title}</h4>
          </div>
        );
      })}
    </div>
  );
}
