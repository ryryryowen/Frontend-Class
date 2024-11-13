import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  searchContents,
  GetMoviesResult,
  searchGeneres,
  getReviews,
  getVideos,
  Movie,
} from "../api";
import { makeImgePath } from "../utills";
import YouTube from "react-youtube";
import Pagination from "react-js-pagination";

const Container = styled.main`
  width: 100%;
  margin-top: 60px;
`;

const SearchBox = styled.div`
  width: 100%;
  padding: 10px;
`;

const MovieSection = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;

const MovieImg = styled.img`
  width: 50%;
`;

const MovieInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MovieTitle = styled.h4`
  font-size: 32px;
  background: ${(props) => props.theme.red};
  color: ${(props) => props.theme.white.darker};
  border-radius: 8px;
  padding: 0px 10px;
`;

const MovieOverview = styled.p`
  font-size: 16px;
  line-height: 1.4;
  border-top: 1px solid ${(props) => props.theme.black.lighter};
  border-bottom: 1px solid ${(props) => props.theme.black.lighter};
  padding: 18px 0px;
`;

const MovieDate = styled.div`
  font-size: 14px;
  span {
    display: block;
    background: #ffa300;
    padding: 10px;
    border-radius: 8px;
  }
`;

const MovieValue = styled.div`
  font-size: 16px;
  width: 50px;
  height: 50px;
  background: ${(props) => props.theme.black.lighter};
  color: ${(props) => props.theme.white.darker};
  text-align: center;
  line-height: 50px;
  border-radius: 8px;
`;

const Generes = styled.div`
  background: #ffa300;
  padding: 10px;
  border-radius: 8px;
`;

const MovieRate = styled.div`
  font-size: 14px;
  span {
    display: block;
    background: #ffa300;
    padding: 10px;
    border-radius: 8px;
  }
`;

const RateNumbers = styled.div`
  font-size: 14px;
  span {
    display: block;
    background: #ffa300;
    padding: 10px;
    border-radius: 8px;
  }
`;

const ReviewSection = styled.div`
  background: ${(props) => props.theme.white.darker};
  color: ${(props) => props.theme.black.lighter};
  margin-top: 20px;
  padding: 20px;
  border-radius: 8px;
  li {
    padding: 10px;
  }
`;

const ReviewAuthor = styled.div`
  background: ${(props) => props.theme.white.lighter};
  width: 150px;
  text-align: center;
  margin-bottom: 8px;
  padding: 8px 0;
  border-radius: 8px;
`;

const ReviewContent = styled.div`
  font-size: 14px;
`;

const VideoSection = styled.div`
  margin-top: 30px;
`;

const ImgBox = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.black.lighter};
  border-radius: 8px;
`;

const StyledPagination = styled.div`
  width: 28%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  ul {
    display: flex;
    gap: 10px;
    a {
      li {
        display: inline-block;
        color: ${(props) => props.theme.red};
        font-size: 20px;
        transition: color 0.3s ease-in-out;
        &:hover {
          color: ${(props) => props.theme.black.darker};
        }
      }
    }
  }
`;

interface GeneresItem {
  id: number;
  name: string;
}

interface ReviewContents {
  author: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string;
    rating: number;
  };
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

interface VideoContent<T> {
  [key: number]: T[];
}

const Search = () => {
  const [videos, setVideos] = useState<VideoContent<string>>({});
  const { search } = useLocation();
  const keyword = new URLSearchParams(search).get("keyword");

  const contents = searchContents(keyword || "");

  const { data: movieData, isLoading: movieLoading } =
    useQuery<GetMoviesResult>({
      queryKey: ["multiContents", keyword],
      queryFn: () => searchContents(keyword || ""),
    });

  const { data: genresData, isLoading: genresLoading } = useQuery({
    queryKey: ["getGenres"],
    queryFn: searchGeneres,
  });

  const ids = movieData?.results.map((movie) => movie.id);

  const { data: reviewData, isLoading: reviewLoading } = useQuery({
    queryKey: ["getReviews", ids],
    queryFn: () =>
      ids ? Promise.all(ids.map((id) => getReviews(id))) : Promise.resolve([]),
    enabled: !!ids,
  });

  const { data: videoData, isLoading: videoLoading } = useQuery({
    queryKey: ["getVideos", ids],
    queryFn: () =>
      ids ? Promise.all(ids.map((id) => getVideos(id))) : Promise.resolve([]),
    enabled: !!ids,
  });

  useEffect(() => {
    if (movieData && videoData) {
      movieData.results.forEach((movie) => {
        getVideos(movie.id).then((data) => {
          if (data?.results) {
            const videoIds = data.results.map((video: any) => video.key);
            setVideos((prev) => ({ ...prev, [movie.id]: videoIds }));
          }
        });
      });
    }
  }, [movieData, videoData]);

  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(2);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;

  const currentMovies: Movie[] =
    movieData?.results.slice(indexOfFirstMovie, indexOfLastMovie) || [];

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container>
      {movieLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {currentMovies?.map((movie, index) => (
            <SearchBox key={index}>
              <MovieSection>
                {movie.backdrop_path ? (
                  <MovieImg src={makeImgePath(movie.backdrop_path)} />
                ) : (
                  <ImgBox>Ready for Images</ImgBox>
                )}

                <MovieInfo>
                  <MovieTitle>{movie?.original_title}</MovieTitle>
                  <MovieOverview>{movie?.overview}</MovieOverview>
                  <MovieDate>
                    <span>Release : {movie.release_date}</span>
                  </MovieDate>
                  <MovieRate>
                    <span>Rate : {movie.vote_average?.toFixed(2)}</span>
                  </MovieRate>
                  <RateNumbers>
                    <span>
                      Members : {movie.vote_count?.toLocaleString("ko-KR")}{" "}
                    </span>
                  </RateNumbers>
                  <MovieValue>{movie?.adults ? "18+" : "ALL"}</MovieValue>
                  <Generes>
                    {movie.genre_ids
                      .map(
                        (id) =>
                          genresData?.genres.find(
                            (item: GeneresItem) => item.id === id
                          ).name
                      )
                      .join(",")}
                  </Generes>
                </MovieInfo>
              </MovieSection>
              <ReviewSection>
                <h3>😎🤟Movie Reviews😎🫵</h3>
                {reviewLoading ? (
                  <div>Review Loading</div>
                ) : (
                  <ul>
                    {reviewData && reviewData[index].results ? (
                      reviewData[index].results.map(
                        (review: ReviewContents) => (
                          <li key={review.id}>
                            <ReviewAuthor>{review.author}</ReviewAuthor>
                            <ReviewContent>{review.content}</ReviewContent>
                          </li>
                        )
                      )
                    ) : (
                      <li>No Reviews...</li>
                    )}
                  </ul>
                )}
              </ReviewSection>
              <VideoSection>
                {videos[movie.id]?.length > 0 ? (
                  <YouTube
                    videoId={videos[movie.id][0]}
                    opts={{ width: "100%", height: "600px" }}
                  />
                ) : (
                  <div>"No Available"</div>
                )}
              </VideoSection>
            </SearchBox>
          ))}
          <StyledPagination>
            <Pagination
              onChange={handlePageChange}
              activePage={currentPage}
              itemsCountPerPage={moviesPerPage}
              totalItemsCount={movieData?.results.length || 0}
              pageRangeDisplayed={5}
            />
          </StyledPagination>
        </>
      )}
    </Container>
  );
};

export default Search;
