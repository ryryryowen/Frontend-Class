import React, { ReactNode, useEffect } from "react";
import style from "./index.module.css";
import books from "@/mock/book.json";
import SearchableLayout from "@/components/searchable-layout";
import BookItem from "@/components/book-item";
import { InferGetServerSidePropsType } from "next";
import fetchBooks from "@/lib/fetch-books";
import fetchRandomBooks from "@/lib/fetch-random-books";

export const getServerSideProps = async () => {
  // Home이라는 페이지 컴포넌트가 실행되기 전에 먼저 실행되어서,
  // 컴포넌트에 필요한 데이터를 사전에 패칭 및 불러와주는 기능을 하는 함수
  // const allBooks = await fetchBooks();
  // const recoBooks = await fetchRandomBooks();

  //  굳이 위에꺼 안쓰고 한번ㅇ Promise.all([]) << 이걸로 한번에 가능
  const [allBooks, recoBooks] = await Promise.all([
    fetchBooks(),
    fetchRandomBooks(),
  ]);

  return {
    props: { allBooks, recoBooks },
  };
};

const Home = ({
  allBooks,
  recoBooks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(allBooks);
  return (
    <main className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {recoBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {allBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </main>
  );
};

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};

export default Home;
