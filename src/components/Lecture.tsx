import { motion } from "framer-motion";

const sections = [
  {
    id: "intro",
    label: "Введение",
    title: "Последняя точка на Балтике",
    body: `10 мая 1945 года Краснознамённый Балтийский флот провёл одну из последних и символически важных операций Великой Отечественной войны — морской десант на датский остров Борнхольм. Этот эпизод стал не только завершением боевых действий на Балтике, но и демонстрацией решимости и военного мастерства советских войск, которые поставили точку в сопротивлении фашистов уже после официальной капитуляции Германии.`,
  },
  {
    id: "significance",
    label: "Стратегия",
    title: "Стратегическое значение острова",
    body: `Борнхольм — небольшой остров в Балтийском море, расположенный между Швецией и материковой Данией. Несмотря на скромные размеры (36 км в длину и 20 км в ширину), его значение для контроля над морскими путями было огромным. Остров прикрывал подходы к Датским проливам, а также Померанскую и Мекленбургскую бухты — ключевые пункты для эвакуации немецких войск из Курляндского котла, Норвегии и Восточной Пруссии.\n\nНа острове были оборудованы аэродром, береговые и зенитные батареи, радиолокационные и гидроакустические станции. К маю 1945 года гарнизон насчитывал около 12 000 человек и продолжал выполнять приказы немецкого командования, несмотря на общую капитуляцию вермахта.`,
  },
  {
    id: "context",
    label: "Обстановка",
    title: "Политическая и военная обстановка",
    body: `8 мая 1945 года по приказу гросс-адмирала Карла Дёница боевые действия германских вооружённых сил должны были быть прекращены. Однако гарнизон Борнхольма продолжал сопротивление, ожидая прибытия британских войск и отказываясь сдаваться советским частям. Немецкое командование рассматривало остров как «перевалочную базу» для эвакуации остатков своих войск с востока.\n\nСоветское руководство, стремясь предотвратить бегство фашистов и обеспечить контроль над Балтикой, приняло решение о проведении десантной операции.`,
  },
  {
    id: "operation",
    label: "Операция",
    title: "Подготовка и ход операции",
    body: `План операции был разработан штабом 2-го Белорусского фронта и Кольбергской военно-морской базы. Из-за нехватки плавсредств решили сначала нанести массированные авиаудары по острову. 7 и 8 мая советская авиация нанесла удары по немецким судам и портам Рённе и Нексё.\n\nВ ночь на 9 мая из порта Кольберг вышли шесть торпедных катеров с десантом — стрелковой ротой численностью 108 человек под командованием капитана 2 ранга Дмитрия Шавцова. В условиях густого тумана отряд достиг порта Рённе только к середине дня. Высадка прошла без боя, но десант оказался в окружении тысяч вооружённых немцев.\n\nСоветские моряки заняли оборону в порту, освободили из трюма баржи подневольных рабочих, а местные жители помогли в разведке немецких позиций. Немецкое командование предъявило ультиматум — покинуть порт. Капитан Шавцов ответил, что условия будет ставить советское командование, и пригрозил штурмовой авиацией. Над островом пролетели советские истребители — это окончательно убедило немцев в бессмысленности сопротивления.`,
  },
  {
    id: "surrender",
    label: "Капитуляция",
    title: "Капитуляция и разоружение",
    body: `К вечеру 9 мая часть немецкого командования согласилась на капитуляцию, однако отдельные группы пытались бежать в Швецию. Советские катера пресекли эти попытки.\n\n10 мая начался процесс сдачи оружия: разоружённых немцев перевозили на материк на датских рыбацких лодках. Всего было пленено около 12 000 человек. Операция прошла без потерь среди советских десантников.`,
  },
  {
    id: "legacy",
    label: "Итоги",
    title: "Последствия и историческое значение",
    body: `Освобождение Борнхольма стало последней крупной боевой операцией на Балтике и символом окончательного разгрома нацизма. Советские войска находились на острове 11 месяцев, обеспечивая разминирование морских районов и восстановление нормальной жизни.\n\nЖители острова выразили благодарность советским воинам за избавление от оккупации. 5 апреля 1946 года Борнхольм был торжественно передан датским властям.`,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Lecture() {
  return (
    <div className="bg-[#f5f0e8] text-neutral-900">
      {/* Header strip */}
      <div className="border-b border-neutral-300 px-6 md:px-16 py-6 flex items-center justify-between">
        <span className="uppercase text-xs tracking-[0.25em] text-neutral-500">Лекционный материал</span>
        <span className="uppercase text-xs tracking-[0.25em] text-neutral-500">Краснознамённый Балтийский флот · 1945</span>
      </div>

      {/* Nav tabs */}
      <div className="border-b border-neutral-300 px-6 md:px-16 overflow-x-auto">
        <div className="flex gap-0 min-w-max">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="px-4 py-4 text-xs uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors border-r border-neutral-300 first:border-l whitespace-nowrap"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* Sections */}
      <div className="divide-y divide-neutral-300">
        {sections.map((section, i) => (
          <motion.div
            key={section.id}
            id={section.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="grid grid-cols-1 md:grid-cols-12 gap-0"
          >
            {/* Number + label column */}
            <div className="md:col-span-2 px-6 md:px-16 py-10 md:py-16 border-b md:border-b-0 md:border-r border-neutral-300 flex md:flex-col justify-between md:justify-start gap-4">
              <span className="text-[3rem] md:text-[5rem] font-bold leading-none text-neutral-200 select-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="uppercase text-xs tracking-widest text-neutral-400 md:mt-4 self-end md:self-auto">
                {section.label}
              </span>
            </div>

            {/* Content column */}
            <div className="md:col-span-10 px-6 md:px-16 py-10 md:py-16">
              <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight tracking-tight">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.body.split("\n\n").map((para, j) => (
                  <p key={j} className="text-base md:text-lg text-neutral-700 leading-relaxed max-w-3xl">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Conclusion banner */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="bg-neutral-900 text-white px-6 md:px-16 py-16 md:py-24"
      >
        <p className="uppercase text-xs tracking-[0.25em] text-neutral-400 mb-6">Заключение</p>
        <p className="text-2xl md:text-4xl lg:text-5xl leading-tight max-w-4xl font-light">
          Десант на Борнхольм — пример мужества, выдержки и высокого профессионализма советских моряков.
          Эта операция завершила войну на Балтике и стала важной страницей в истории <em>Великой Победы</em>.
        </p>
      </motion.div>
    </div>
  );
}
