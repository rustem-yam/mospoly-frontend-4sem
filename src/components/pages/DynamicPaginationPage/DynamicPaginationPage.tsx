import { FC, useEffect, useState } from "react";
import { IUniversity } from "./types";
import axios from "axios";
import { LIMIT_UNIVERSITIES } from "./constants";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import CardUniversity from "./CardUniversity/CardUniversity";

const ListStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const BlockObserver = styled.div`
  height: 40px;
  background-color: black;
`;

const DynamicPaginationPage: FC = () => {
  const [universities, setUniversities] = useState<IUniversity[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUniversities();
  }, [currentPage]);

  const { ref, inView } = useInView({
    threshold: 1.0,
  });

  useEffect(() => {
    if (inView) {
      setCurrentPage((prev) => prev + 1);
    }
  }, [inView]);

  const fetchUniversities = async () => {
    try {
      setLoading(true);
      const offset = (currentPage - 1) * LIMIT_UNIVERSITIES;
      const { data } = await axios.get(
        `http://universities.hipolabs.com/search?offset=${offset}&limit=${LIMIT_UNIVERSITIES}`,
      );
      setUniversities((prev) => [...prev, ...data]);
    } catch (error) {
      console.log("Error fetching universities...", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ListStyled>
      <h1>List Universities</h1>
      {universities.map((university) => (
        <CardUniversity data={university} key={university.name} />
      ))}
      {loading && <div>Loading...</div>}
      {!loading && <BlockObserver ref={ref}></BlockObserver>}
    </ListStyled>
  );
};

export default DynamicPaginationPage;
