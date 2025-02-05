import loadingImg from "../assets/loading.png";

const LoadingSpinner = () => {
  return (
    <div className="h-screen w-full bg-muted-body flex items-center justify-center">
      <img className="w-[80px]" src={loadingImg} alt="loading image" />
    </div>
  );
};

export default LoadingSpinner;
