import useJsonFetch from "../../Hooks/useJsonFetch";
import PropTypes from "prop-types";

const UniComponent = (props) => {
  const { type } = props;
  const [data, loading, error] = useJsonFetch(type);

  if (loading) {
    return <progress></progress>;
  }
  return <div className="result">{data ? data : error}</div>;
};

UniComponent.propTypes = {
  type: PropTypes.string.isRequired,
};

export default UniComponent;
