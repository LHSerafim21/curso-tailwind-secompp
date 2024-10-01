export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="h-16 bg-black w-full absolute text-white flex items-center justify-center overflow-x-hidden">
        <div className="flex flex-row justify-between items-center w-full max-w-[768px]">
          <img src="/images/Logo.png" className="h-12"/>
          <div className="flex gap-16">
            <p>Discovery</p>
            <p>Sobre</p>
            <p>Contate-nos</p>
          </div>
          <div className="flex gap-2">
            <img src="/icons/user-icon.svg" className="w-6 h-6" alt="" />
            <img src="/icons/cart-shopping.svg" className="w-6 h-6" alt="" />
          </div>
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
      <div className="pt-16 h-screen w-full bg-gray-200  flex items-center">
        <div className="flex flex-col w-96 mx-auto text-center gap-4">
          <h2 className="text-3xl">Produtos</h2>
          <p>
            Encontre o estilo que combina com você
          </p>
          <div className="grid grid-cols-4">
            <img src="/camisas/camisa1.png" />
            <img src="/camisas/camisa2.png" />
            <img src="/camisas/camisa3.png" />
            <img src="/camisas/camisa4.png" />
            <img src="/camisas/camisa5.png" />
            <img src="/camisas/camisa6.png" />
            <img src="/camisas/camisa7.png" />
            <img src="/camisas/camisa1.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
