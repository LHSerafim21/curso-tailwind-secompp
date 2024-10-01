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
      <div className="py-16 h-full w-full bg-gray-300 flex items-center">
        <div className="flex flex-col w-full max-w-2xl mx-auto text-center gap-4">
          <h2 className="text-3xl">Produtos</h2>
          <p>
            Encontre o estilo que combina com você
          </p>
          <div className="grid grid-cols-4 gap-4">
            <div className="p-2 rounded shadow bg-white">
              <img className="w-60 h-30 object-cover" src="/camisas/camisa1.png" />
              <div className="flex flex-col text-sm text-start">
                <p>
                  Nome do produto
                </p>
                <p className="ml-auto text-green-300">
                  R$ 100,00
                </p>
              </div>
            </div> 
            <div className="p-2 rounded shadow bg-white">
              <img className="w-60 h-30 object-cover" src="/camisas/camisa2.png" />
              <div className="flex flex-col text-sm text-start">
                <p>
                  Nome do produto
                </p>
                <p className="ml-auto text-green-300">
                  R$ 100,00
                </p>
              </div>
            </div> 
            <div className="p-2 rounded shadow bg-white">
              <img className="w-60 h-30 object-cover" src="/camisas/camisa3.png" />
              <div className="flex flex-col text-sm text-start">
                <p>
                  Nome do produto
                </p>
                <p className="ml-auto text-green-300">
                  R$ 100,00
                </p>
              </div>
            </div> 
            <div className="p-2 rounded shadow bg-white">
              <img className="w-60 h-30 object-cover" src="/camisas/camisa4.png" />
              <div className="flex flex-col text-sm text-start">
                <p>
                  Nome do produto
                </p>
                <p className="ml-auto text-green-300">
                  R$ 100,00
                </p>
              </div>
            </div> 
            <div className="p-2 rounded shadow bg-white">
              <img className="w-60 h-30 object-cover" src="/camisas/camisa5.png" />
              <div className="flex flex-col text-sm text-start">
                <p>
                  Nome do produto
                </p>
                <p className="ml-auto text-green-300">
                  R$ 100,00
                </p>
              </div>
            </div> 
            <div className="p-2 rounded shadow bg-white">
              <img className="w-60 h-30 object-cover" src="/camisas/camisa6.png" />
              <div className="flex flex-col text-sm text-start">
                <p>
                  Nome do produto
                </p>
                <p className="ml-auto text-green-300">
                  R$ 100,00
                </p>
              </div>
            </div> 
            <div className="p-2 rounded shadow bg-white">
              <img className="w-60 h-30 object-cover" src="/camisas/camisa7.png" />
              <div className="flex flex-col text-sm text-start">
                <p>
                  Nome do produto
                </p>
                <p className="ml-auto text-green-300">
                  R$ 100,00
                </p>
              </div>
            </div> 
            <div className="p-2 rounded shadow bg-white">
              <img className="w-60 h-30 object-cover" src="/camisas/camisa1.png" />
              <div className="flex flex-col text-sm text-start">
                <p>
                  Nome do produto
                </p>
                <p className="ml-auto text-green-300">
                  R$ 100,00
                </p>
              </div>
            </div> 
          </div>
        </div>
      </div>
      <div className="w-full bg-black text-white text-xs p-10">
        <div className="w-full h-[1px] bg-white"></div>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <img className="w-40 h-20 object-contain" src="images/Logo.png" alt="" />
            <p>
              Sua camiseta mais confortavel, feita para seu estilo e seu conforto.
            </p>
          </div>
          <div className="flex pt-10 flex-col gap-4">
            <div className="flex gap-8 text-green-700">
              <p>Discovery</p>
              <p>Sobre</p>
              <p>Contate-nos</p>
            </div>
            <div className="flex gap-8 ">
              <p>Nova temporada</p>
              <p>Ajuda</p>
              <p>Contate-nos</p>
            </div>
            <div className="flex gap-8 ">
              <p>Mais pesquisado</p>
              <p>Envio</p>
              <p>Políticas de Privacidade</p>
            </div>
            <div className="flex gap-8 ">
              <p>Mais vendido</p>
              <p>Afiliado</p>
              <p>Termos e Condições</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
