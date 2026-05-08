import { motion } from "framer-motion";

const sections = [
  {
    id: "intro",
    label: "Введение",
    title: "Путь от рабочего до Маршала",
    body: `Алексей Иванович Леонов — выдающийся советский военачальник, внёсший значительный вклад в развитие системы связи Вооружённых сил СССР. Родился 20 мая 1902 года в станице Каменской (ныне город Каменск-Шахтинский Ростовской области). Его биография — это путь от простого рабочего до Маршала войск связи, человека, который обеспечивал надёжное управление войсками в самые трудные годы XX века.`,
    stats: [
      { value: "1902", label: "год рождения" },
      { value: "1961", label: "год присвоения маршала" },
      { value: "70 лет", label: "жизненный путь" },
    ],
  },
  {
    id: "early",
    label: "Ранние годы",
    title: "Начало службы и Гражданская война",
    body: `Алексей Иванович родился в семье рабочего. В 1918 году, в возрасте 16 лет, он поступил на службу в Рабоче-крестьянскую Красную армию. Участвовал в Гражданской войне, где проявил себя как инициативный и ответственный боец.\n\nВ 1921 году окончил курсы политсостава, а в 1926 году — Киевскую объединённую военную школу. Служил в кавалерийских частях, а с 1932 года — в войсках связи, что стало определяющим в его дальнейшей карьере.`,
    stats: [
      { value: "16 лет", label: "возраст призыва в РККА" },
      { value: "1926", label: "окончил Киевскую военную школу" },
      { value: "1932", label: "переход в войска связи" },
    ],
  },
  {
    id: "prewar",
    label: "До войны",
    title: "Образование и межвоенная служба",
    body: `В 1938 году Леонов окончил Военную электротехническую академию, что позволило ему занять ключевые посты в системе войск связи. Он принимал участие в боях на реке Халхин-Гол в 1939 году, где был начальником связи 57-го стрелкового корпуса.\n\nС 1940 года занимал должность начальника отдела (управления) связи Забайкальского военного округа (фронта), накапливая бесценный опыт организации военной связи.`,
    stats: [
      { value: "1938", label: "окончил Военную электротехническую академию" },
      { value: "1939", label: "Халхин-Гол, начальник связи корпуса" },
      { value: "1940", label: "Забайкальский военный округ" },
    ],
  },
  {
    id: "war",
    label: "Великая война",
    title: "Великая Отечественная война",
    body: `С началом Великой Отечественной войны Леонов был направлен на Западный фронт, где стал заместителем начальника войск связи. В октябре 1942 года назначен начальником войск связи Юго-Западного фронта.\n\nВ ходе боевых операций на Дону и Украине в 1943 году связисты под его руководством обеспечили установку и восстановление более 15 500 км линий связи. За два месяца телеграфный обмен составил более 4,7 млн слов, а радиообмен — более 530 тысяч групп.\n\nПосле переименования фронта в 3-й Украинский Леонов продолжал обеспечивать бесперебойное управление войсками. С июня 1944 года — начальник связи 2-го Украинского фронта. По завершении боёв в Европе направлен на Дальний Восток — возглавил связь Забайкальского фронта в войне с Японией.`,
    stats: [
      { value: "15 500 км", label: "линий связи восстановлено" },
      { value: "4,7 млн", label: "слов телеграфного обмена" },
      { value: "530 000", label: "групп радиообмена" },
    ],
  },
  {
    id: "postwar",
    label: "После войны",
    title: "Послевоенная служба и руководство",
    body: `После войны Алексей Иванович продолжил службу в Вооружённых силах. В 1947 году стал начальником Управления связи Главкома войск Дальнего Востока. В 1951 году окончил Высшие академические курсы при Военной академии Генерального штаба и был назначен начальником войск связи ВВС СССР.\n\nС 1953 по 1957 год руководил Центральным управлением связи Вооружённых сил СССР. В феврале 1957 года стал первым заместителем начальника, а с апреля 1958 года — начальником войск связи. В условиях холодной войны связь становилась ключевым элементом стратегического управления.`,
    stats: [
      { value: "1947", label: "управление связи Дальнего Востока" },
      { value: "1953–57", label: "ЦУС Вооружённых сил СССР" },
      { value: "1958", label: "начальник войск связи" },
    ],
  },
  {
    id: "marshal",
    label: "Маршал",
    title: "Звание Маршала войск связи",
    body: `6 мая 1961 года Алексей Иванович Леонов был удостоен звания Маршала войск связи. Это стало признанием его выдающихся заслуг в развитии системы связи и обеспечении боеспособности Вооружённых сил СССР.\n\nОн активно работал над модернизацией средств связи, внедрением новых технологий и подготовкой кадров. Алексей Иванович Леонов скончался 14 ноября 1972 года в Москве.`,
    stats: [
      { value: "6 мая", label: "1961 — присвоено звание маршала" },
      { value: "54 года", label: "воинской службы" },
      { value: "1972", label: "год ухода из жизни" },
    ],
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
      <div className="border-b border-neutral-300 px-6 md:px-16 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <span className="uppercase text-xs tracking-[0.25em] text-neutral-500">Лекционный материал</span>
        <span className="uppercase text-xs tracking-[0.25em] text-neutral-500">Маршал войск связи · А.И. Леонов</span>
      </div>

      {/* Nav tabs */}
      <div className="border-b border-neutral-300 px-6 md:px-16 overflow-x-auto">
        <div className="flex gap-0 min-w-max">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#lec-${s.id}`}
              className="px-4 py-4 text-xs uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors border-r border-neutral-300 first:border-l whitespace-nowrap"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* Hero quote */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="px-6 md:px-16 py-16 md:py-24 border-b border-neutral-300 bg-neutral-900 text-white"
      >
        <p className="uppercase text-xs tracking-[0.25em] text-neutral-400 mb-8">Биографическая лекция</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tight mb-6">
          АЛЕКСЕЙ<br />ЛЕОНОВ
        </h1>
        <p className="text-neutral-400 text-lg md:text-xl max-w-2xl leading-relaxed">
          Маршал войск связи · 1902–1972 · От Гражданской войны до холодной войны
        </p>
      </motion.div>

      {/* Sections */}
      <div className="divide-y divide-neutral-300">
        {sections.map((section, i) => (
          <motion.div
            key={section.id}
            id={`lec-${section.id}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            {/* Top row: number + title */}
            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-2 px-6 md:px-16 pt-10 md:pt-16 pb-4 md:pb-0 md:border-r border-neutral-300 flex md:flex-col items-center md:items-start gap-4 md:gap-0">
                <span className="text-[3rem] md:text-[5rem] font-bold leading-none text-neutral-200 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="uppercase text-xs tracking-widest text-neutral-400 md:mt-4">
                  {section.label}
                </span>
              </div>
              <div className="md:col-span-10 px-6 md:px-16 pt-4 md:pt-16 pb-8 md:pb-10">
                <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight tracking-tight">
                  {section.title}
                </h2>
                <div className="space-y-4 mb-10">
                  {section.body.split("\n\n").map((para, j) => (
                    <p key={j} className="text-base md:text-lg text-neutral-700 leading-relaxed max-w-3xl">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 md:gap-8 border-t border-neutral-200 pt-8">
                  {section.stats.map((stat, k) => (
                    <div key={k}>
                      <p className="text-2xl md:text-3xl font-bold text-neutral-900 leading-none mb-1">
                        {stat.value}
                      </p>
                      <p className="text-xs text-neutral-500 uppercase tracking-wide leading-tight">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Conclusion */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="bg-neutral-900 text-white px-6 md:px-16 py-16 md:py-24"
      >
        <p className="uppercase text-xs tracking-[0.25em] text-neutral-400 mb-6">Заключение</p>
        <p className="text-2xl md:text-4xl lg:text-5xl leading-tight max-w-4xl font-light">
          Вклад Алексея Ивановича Леонова в развитие системы связи и обеспечение управления войсками в годы войны и в послевоенный период невозможно переоценить. Его путь — от 16-летнего бойца до <em>Маршала войск связи</em>.
        </p>
      </motion.div>
    </div>
  );
}
