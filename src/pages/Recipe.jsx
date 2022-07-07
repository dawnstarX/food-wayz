import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import React from "react";

const Recipe = () => {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setactiveTab] = useState("instructions");
  const [ingredients, setIngredients] = useState([]);

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailsData = await data.json();
    setIngredients(detailsData.extendedIngredients);
    setDetails(detailsData);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <DetailWrapper
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <Imagediv>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </Imagediv>
      <Info>
        <div style={{ display: "flex" }}>
          <Button
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => {
              setactiveTab("instructions");
            }}
          >
            Instructions
          </Button>
          <Button
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => {
              setactiveTab("ingredients");
            }}
          >
            Ingredients
          </Button>
        </div>
        {activeTab === "instructions" && (
          <div>
            <h1 dangerouslySetInnerHTML={{ __html: details.summary }}></h1>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {ingredients.map((i) => {
              return <li key={i.id}>{i.name}</li>;
            })}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
};

const Imagediv = styled.div`
  height: 370px;
  width: 500px;
`;
const DetailWrapper = styled(motion.div)`
  margin-top: 2rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
  }
  img {
    width: 500px;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  h1 {
    margin-top: 2rem;
    font-size: 1.1rem;
    line-height: 1.5rem;
    font-weight: bold;
  }
  ul {
    margin-left: 4rem;
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  height: fit-content;
  cursor: pointer;
`;

const Info = styled.div`
  margin-left: 2rem;
`;

export default Recipe;
