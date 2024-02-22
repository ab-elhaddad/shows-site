import Spinner from 'react-bootstrap/Spinner';

const SmLoadingSpinner = () => {
  return (
    <dev className="sm-spinner-container">
      <Spinner animation="border" role="status" className="sm-spinner">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </dev>
  );
};

export default SmLoadingSpinner;
