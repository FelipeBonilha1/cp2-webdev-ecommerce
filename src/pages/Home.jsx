import { useEffect, useState } from "react";
import Titulo from "../components/Titulo";
import Card from "../components/Card";

export default function Home() {
  const [products, setProducts] = useState([]);
  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Erro ao buscar produtos:", err));
  }, [API]);

  const Grid = ({ children }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch justify-items-center">
      {children}
    </div>
  );

  const CardWrap = ({ children }) => (
    <div className="w-full h-full max-w-[320px]">{children}</div>
  );

  return (
    <>
      <section>
        <Titulo title="Eletrônicos" />
        <Grid>
          {products
            .filter((p) => p.category === "electronics")
            .map((p) => (
              <CardWrap key={p.id}>
                <Card image_url={p.image} product_name={p.title} price={p.price} />
              </CardWrap>
            ))}
        </Grid>
      </section>

      <section>
        <Titulo title="Joias" />
        <Grid>
          {products
            .filter((p) => p.category === "jewelery")
            .map((p) => (
              <CardWrap key={p.id}>
                <Card image_url={p.image} product_name={p.title} price={p.price} />
              </CardWrap>
            ))}
        </Grid>
      </section>

      <section>
        <Titulo title="Roupas Masculinas" />
        <Grid>
          {products
            .filter((p) => p.category === "men's clothing")
            .map((p) => (
              <CardWrap key={p.id}>
                <Card image_url={p.image} product_name={p.title} price={p.price} />
              </CardWrap>
            ))}
        </Grid>
      </section>
    </>
  );
}
