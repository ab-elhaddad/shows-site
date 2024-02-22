import Spinner from 'react-bootstrap/Spinner';

const LoadingSpinner = () => {
  return (
    <dev className="spinner-container">
      <Spinner animation="border" role="status" className="spinner">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </dev>
  );
};

export default LoadingSpinner;
