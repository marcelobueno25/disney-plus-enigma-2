import React from "react";
import { Box, Typography, Button } from "@mui/material";
import "./style.scss";

const MsgInicial = ({ handleClose }) => {
  return (
    <Box className="msgMoviesContainer">
      <div className="msgMovies">
        <div className="msgMoviesTexts">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              Bem-vinda ao nosso
            </Typography>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                color: "#009ce9",
              }}
            >
              Disney Plus
            </Typography>
            <Typography variant="h5" sx={{ mt: 5 }}>
              Prepare-se para uma viagem mágica, onde cada filme e serie conta
              um pedacinho da nossa história ou nos leva a mundos de fantasia e
              histórias engraçadas. <br />
              Tudo aqui foi feito com muito carinho para você, para lembrar o
              quanto eu te amo. <br />
              Com todo meu carinho e amor, Marcelo.
            </Typography>
            <Typography variant="h6" sx={{ mt: 5 }}>
              Aperte o botão e deixe a mágica começar!
            </Typography>
            <Button
              variant="contained"
              color="success"
              size="large"
              onClick={handleClose}
              sx={{ marginTop: 3 }}
            >
              entrar
            </Button>
          </Box>
        </div>
      </div>
    </Box>
  );
};

export default MsgInicial;
