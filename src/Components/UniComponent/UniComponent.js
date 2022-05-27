import useJsonFetch from "../../Hooks/useJsonFetch";

const UniComponent = (props) => {
  const { type } = props;
  const [data, loading, error] = useJsonFetch(type);

  return <div className="result">{data ? data : error}</div>;
};

export default UniComponent;
