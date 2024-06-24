import React, { useState } from "react";
import { Modal } from "@mui/material";
import CollectionList from "../../components/CollectionList";
import SliderComponent from "../../components/SliderComponent";
import MovieList from "../../components/MovieList";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MsgInicial from "../../components/MsgInicial";
import "./styles.scss";

const Home = () => {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <main>
        <Header />
        <SliderComponent />
        <CollectionList />
        <MovieList />
        <Footer />

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <MsgInicial handleClose={handleClose} />
        </Modal>
      </main>
    </div>
  );
};

export default Home;
