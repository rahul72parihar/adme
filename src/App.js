import { useEffect, useState } from "react";
import "./App.css";
import Grid from "./Grid";
import HeaderComponent from "./HeaderComponent";
import HeaderImage from "./HeaderImage";
import LoadingComponent from "./LoadingComponent";

function App() {
  const [imageData, setImageData] = useState([]);
  const [page, setPage] = useState(0);
  const getImageData = async () => {
    const res = await fetch("https://picsum.photos/v2/list?page=2&limit=100");
    const data = await res.json();
    setImageData(data);
  };
  useEffect(() => {
    getImageData();
  }, []);
  const addPage = () => {
    setPage((prev) => page + 1);
  };
  const subtractPage = () => {
    setPage((prev) => page - 1);
  };
  if (!imageData.length) return <LoadingComponent />;
  return (
    <div className="App">
      <HeaderComponent />
      <HeaderImage />
      <Grid imageData={imageData.slice(page * 5, page * 5 + 5)} />
      <div className="pageSelectionDiv">
        {page !== 0 ? <div onClick={subtractPage}>{"<"}</div> : <div></div>}
        <div>{page + 1}</div>
        {page + 1 !== imageData.length / 5 ? <div onClick={addPage}>{">"}</div> : <div></div>}
      </div>
    </div>
  );
}

export default App;
