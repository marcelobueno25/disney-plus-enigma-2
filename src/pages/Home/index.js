import React from "react";
import CollectionList from "../../components/CollectionList";
import SliderComponent from "../../components/SliderComponent";
import MovieList from "../../components/MovieList";
import Header from "../../components/Header";
import "./styles.scss";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div>
      <main>
        <Header />
        <SliderComponent />
        <CollectionList />
        <MovieList />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
