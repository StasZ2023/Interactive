// src/App.tsx

import React from 'react';
import TimelineBlock from './components/TimelineBlock';
import { TimePeriod, Event } from '../src/types/timeline';


const App: React.FC = () => {
    const periods: TimePeriod[] = [
        {
          id: 1,
          title: 'Кино',
          startYear: 1987,
          endYear: 1991,
          events: [
            { year: 1987, text: '«Хищник»/Predator, США (реж. Джон Мактирнан)' },
            { year: 1988, text: '«Кто подставил кролика Роджера»/Who Framed Roger Rabbit, США (реж. Роберт Земекис)' },
            { year: 1989, text: '«Назад в будущее 2»/Back To The Future 2, США (реж. Роберт Земекис)' },
            { year: 1990, text: '«Крепкий орешек 2»/Die Hard 2, США (реж. Ренни Харлин)' },
            { year: 1991, text: '«Семейка Адамс»/The Addams Family, США (реж. Барри Зонненфельд)' }
          ]
        },
        {
          id: 2,
          title: 'Литература',
          startYear: 1992,
          endYear: 1997,
          events: [
            { year: 1992, text: 'Нобелевская премия по литературе — Дерек Уолкотт, «За блестящий образец карибского эпоса в 64 разделах».' },
            { year: 1994, text: '«Бессонница» — роман Стивена Кинга.' },
            { year: 1995, text: 'Нобелевская премия по литературе — Шеймас Хини' },
            { year: 1997, text: '«Гарри Поттер и камень философов» — Джоан Роулинг.' }
          ]
        },
        {
          id: 3,
          title: 'Театр',
          startYear: 1999,
          endYear: 2004,
          events: [
            { year: 1999, text: 'Премьера балета «Золушка» в постановке Жан-Кристофа Майо, сценография Эрнеста Пиньона' },
            { year: 2000, text: 'Возобновлено издание журнала «Театр».' },
            { year: 2002, text: 'Премьера трилогии Тома Стоппарда «Берег Утопии», Королевский Национальный театр, Лондон' },
            { year: 2003, text: 'В Венеции, в театре «Фениче» — пожар.' }
          ]
        },
        {
          id: 4,
          title: 'Наука',
          startYear: 2015,
          endYear: 2022,
          events: [
            { year: 2015, text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды' },
            { year: 2016, text: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11' },
            { year: 2017, text: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi' },
            { year: 2018, text: 'Старт космического аппарата Solar Probe Plus, предназначенного для изучения Солнца' },
            { year: 2019, text: 'Google объявил о создании 53-кубитового квантового компьютера' },
            { year: 2020, text: 'Корабль Crew Dragon вернул астронавтов на Землю из первого пилотируемого полёта' },
            { year: 2021, text: 'Первые успешные испытания CRISPR-технологии у человека' },
            { year: 2022, text: 'Чемпионат мира по футболу в Катаре' }
          ]
        },
        {
          id: 5,
          title: 'Музыка',
          startYear: 1995,
          endYear: 2000,
          events: [
            { year: 1995, text: 'Выход альбома «The Dark Side of the Moon» группы Pink Floyd' },
            { year: 1996, text: 'Релиз альбома «OK Computer» группы Radiohead' },
            { year: 1997, text: 'Выход альбома «The Great Escape» группы Blur' },
            { year: 1998, text: 'Выход альбома «Lemonade» группы Beyoncé' },
            { year: 1999, text: 'Выход альбома «Folklore» группы Taylor Swift' }
          ]
        },
        {
          id: 6,
          title: 'Спорт',
          startYear: 2018,
          endYear: 2022,
          events: [
            { year: 2018, text: 'Чемпионат мира по футболу в России' },
            { year: 2019, text: 'Олимпийские игры в Токио' },
            { year: 2020, text: 'Чемпионат мира по футболу в Катаре' },
            { year: 2021, text: 'Чемпионат мира по хоккею в Финляндии' },
            { year: 2022, text: 'Чемпионат мира по футболу в Катаре' }
          ]
        }
      ];

  return (
    <div className="App">
      <TimelineBlock periods={periods} />
    </div>
  );
};

export default App;