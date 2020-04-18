import React, { useEffect, useState } from "react";
import axios from "axios";

import Layout from "./components/layout";
import Card, { CardContainer } from "./components/card";
import Pagination from "./components/pagination";

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const imagesPerPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}`);

        setImages(res.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        throw err;
      }
    };

    fetchData();
  }, []);

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;

  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Layout>
      {loading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
      ) : (
        <>
          <h1 className="text-3xl text-center mx-auto mt-4">Lorem ipsum</h1>
          <CardContainer>
            {currentImages.map((image) => (
              <Card key={image.id} data={image} />
            ))}
          </CardContainer>
          <Pagination
            imagesPerPage={imagesPerPage}
            totalImages={images.length}
            paginate={paginate}
          />
        </>
      )}
    </Layout>
  );
};

export default App;
