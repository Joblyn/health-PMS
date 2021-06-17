import React from "react";
import { Container, Button } from "shards-react";

const PageNotFound = () => {
  return (
    <Container fluid className="main-content-container px-4 pb-4">
      <div className="error">
        <div className="error__content">
          <h2>404</h2>
          <h3>Page Not Found!</h3>
          <p>It appears the page url does not exist.</p>
          <Button pill>
            &larr; Go Back
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default PageNotFound;
