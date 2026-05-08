export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="/images/woman-horse.jpg"
          alt="Woman on horse in countryside"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Стратегическое значение</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Маленький остров с огромной ролью. Борнхольм контролировал подходы к Датским проливам
          и прикрывал пути отступления немецких войск с востока.
        </p>
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div>
            <p className="text-3xl lg:text-4xl font-bold text-neutral-900">108</p>
            <p className="text-sm text-neutral-500 mt-1">десантников в отряде</p>
          </div>
          <div>
            <p className="text-3xl lg:text-4xl font-bold text-neutral-900">12 000</p>
            <p className="text-sm text-neutral-500 mt-1">пленных немцев</p>
          </div>
          <div>
            <p className="text-3xl lg:text-4xl font-bold text-neutral-900">0</p>
            <p className="text-sm text-neutral-500 mt-1">потерь среди десанта</p>
          </div>
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Читать лекцию
        </button>
      </div>
    </div>
  );
}