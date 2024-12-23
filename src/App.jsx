
import "./App.css";
import Card from "./Components/Card/Card";

import { Data } from "./data";

const App = () => {

  return (
    <>
      {Data ? (
        Data.map((e, i) => {
          return <Card key={i} counts={e.rating.count} rating={e.rating.rate} category={e.category} price={e.price} id={e.id} imgSrc={e.image} title={e.title} desc={e.description} />;
        })
      ) : <h3>Data Not Found...!</h3>}

    </>
  );
};

export default App;
