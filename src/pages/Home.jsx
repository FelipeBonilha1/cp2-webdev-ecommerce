import { useEffect, useState } from "react";
import Titulo from "../components/Titulo";
import Card from "../components/Card";

export default function Home() {
  const [products, setProducts] = useState([])

  const API = import.meta.env.VITE_API_URL

  useEffect(() => {

    fetch(API)
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [API])

  return (
    <>
      <section>
        <Titulo
          title="Eletrônicos"
        />
        <div className="flex gap-10 flex-wrap justify-center">

          {products.map(p =>
            p.category === 'electronics'
              ? (
                <Card
                  key={p.id}
                  image_url={p.image}
                  product_name={p.title}
                  price={p.price}
                />
              )
              : null
          )}

        </div>
      </section >

      <section>
        <Titulo
          title="Joias"
        />
        <div className="flex gap-10 flex-wrap justify-center">

          {products.map(p =>
            p.category === 'jewelery'
              ? (
                <Card
                  key={p.id}
                  image_url={p.image}
                  product_name={p.title}
                  price={p.price}
                />
              )
              : null
          )}

        </div>
      </section >

      <section>
        <Titulo
          title="Roupas Masculinas"
        />
        <div className="flex gap-10 flex-wrap justify-center">

          {products.map(p =>
            p.category === "men's clothing"
              ? (
                <Card
                  key={p.id}
                  image_url={p.image}
                  product_name={p.title}
                  price={p.price}
                />
              )
              : null
          )}

        </div>
      </section >
    </>
  );
}