export default function Titulo({title}) {
  return (
    <>
        <div className="flex justify-center w-full h-20 items-center bg-black mt-4">
            <h1 className="text-yellow-400 font-semibold text-3xl">{title}</h1>    
        </div>
    </>
  )
}