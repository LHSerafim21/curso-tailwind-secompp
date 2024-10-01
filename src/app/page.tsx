export default function Home() {
  return (
    <div>
      <div className="h-16 bg-black w-screen absolute text-white flex flex-row justify-between items-center">
        <img src="/images/Logo.png" className="h-12"  />
        <div className="flex gap-16">
          <p>Discovery</p>
          <p>Sobre</p>
          <p>Contate-nos</p>
        </div>
        <div className="flex">
        </div>
      </div>
      <div className="pt-16 h-screen bg-gray-800 text-white flex items-center">
        <div className="flex flex-col w-96 mx-auto text-center gap-4">
          <h2 className="text-3xl">Coleção Streetwear</h2>
          <p>
            Explore o estilo urbano com nossas camisetas. Seja autêntico e faça parte da cultura streetwear com nossas peças únicas e de alta qualidade.
          </p>
          <div className="bg-green-300 rounded px-4 py-1 cursor-pointer font-bold">
            Descubra nossa coleção
          </div>
        </div>
      </div>
    </div>
  );
}
