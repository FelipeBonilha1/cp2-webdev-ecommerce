
export default function Card({ image_url, product_name, price }) {

  return (
    <>
        <div className="my-10 flex flex-col">
          <img className="w-1/4" src={image_url} alt="" />
          <h1 className="font-semibold text-3xl w-100">{product_name}</h1>
          <p className="font-medium text-gray-600">${price}</p>
          <button className="px-6 py-2 w-70 text-black bg-yellow-400 rounded-[10px]">Ver detalhes</button>
        </div>
    </>
  )
}