import React from "react";
import CollectionCard from "../CollectionCard";
import { collectionItems } from "../../utils/dbcollection.js";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import "./style.scss";

const CollectionList = () => {
  return (
    <div className="collectionList">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <Grid container spacing={2} columns={6}>
          {collectionItems.map((item, index) => (
            <CollectionCard key={index} item={item} index={index} />
          ))}
        </Grid>
      </motion.div>
    </div>
  );
};

export default CollectionList;
