import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

const GET_MOViE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
    }
  }
`;

export default () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOViE, {
    variables: { id: Number(id) },
  });
  if (loading) {
    return "loading...";
  }
  if (data && data.movie) {
    return data.movie.title;
  }
};
