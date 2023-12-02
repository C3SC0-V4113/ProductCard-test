import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "cvs-product-card";
import "./App.css";

function App() {
  return (
    <>
      <div className="card">
        <h1>Hola Mundo</h1>
        <ProductCard
          product={{
            id: "1",
            title: "Hola Mundo",
          }}
        >
          {() => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )}
        </ProductCard>
        <ProductCard
          product={{
            id: "1",
            title: "Hola Mundo",
          }}
          initialValues={{
            count: 3,
            maxCount: 9,
          }}
        >
          {() => (
            <>
              <ProductCard.Image />
              <ProductCard.Title title="Soy el segundo" />
              <ProductCard.Buttons />
            </>
          )}
        </ProductCard>
      </div>
    </>
  );
}

export default App;
