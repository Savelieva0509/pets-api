import ClipLoader from "react-spinners/ClipLoader";

const Loader: React.FC = () => (
  <div className="flex justify-center items-center h-full">
    <ClipLoader size={150} color="#000000" />
  </div>
);

export default Loader;
