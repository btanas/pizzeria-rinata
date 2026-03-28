'use strict';

// ============================================================
// TRANSLATIONS
// ============================================================
const T = {
  it: {
    nav_home: 'Home',
    nav_menu: 'Menu',
    nav_gallery: 'Galleria',
    nav_contacts: 'Contatti',
    pizza_day_title: 'Pizza del Giorno',
    menu_title: 'Il Nostro Menu',
    tab_pizze: 'Pizze',
    tab_antipasti: 'Antipasti',
    tab_insalate: 'Insalate',
    tab_fritti: 'Fritti',
    tab_bevande: 'Bevande',
    gallery_title: 'Galleria',
    contacts_title: 'Contatti',
    hours_title: 'Orario di Apertura',
    mon: 'Lunedì', tue: 'Martedì', wed: 'Mercoledì', thu: 'Giovedì',
    fri: 'Venerdì', sat: 'Sabato', sun: 'Domenica',
    closed: 'Chiuso',
    reservations: 'Info e prenotazioni',
    address_label: 'Indirizzo',
    rossa: 'Rossa', bianca: 'Bianca', schiaccia: 'Schiaccia',
    extras: '* Aggiunte ingredienti €0.50 – €2',
    footer_text: 'Tutti i diritti riservati'
  },
  de: {
    nav_home: 'Start',
    nav_menu: 'Speisekarte',
    nav_gallery: 'Galerie',
    nav_contacts: 'Kontakt',
    pizza_day_title: 'Pizza des Tages',
    menu_title: 'Unsere Speisekarte',
    tab_pizze: 'Pizzen',
    tab_antipasti: 'Vorspeisen',
    tab_insalate: 'Salate',
    tab_fritti: 'Frittiertes',
    tab_bevande: 'Getränke',
    gallery_title: 'Galerie',
    contacts_title: 'Kontakt',
    hours_title: 'Öffnungszeiten',
    mon: 'Montag', tue: 'Dienstag', wed: 'Mittwoch', thu: 'Donnerstag',
    fri: 'Freitag', sat: 'Samstag', sun: 'Sonntag',
    closed: 'Geschlossen',
    reservations: 'Info & Reservierungen',
    address_label: 'Adresse',
    rossa: 'Rossa', bianca: 'Bianca', schiaccia: 'Schiaccia',
    extras: '* Zutaten €0.50 – €2',
    footer_text: 'Alle Rechte vorbehalten'
  },
  pl: {
    nav_home: 'Strona główna',
    nav_menu: 'Menu',
    nav_gallery: 'Galeria',
    nav_contacts: 'Kontakt',
    pizza_day_title: 'Pizza dnia',
    menu_title: 'Nasze Menu',
    tab_pizze: 'Pizze',
    tab_antipasti: 'Przystawki',
    tab_insalate: 'Sałatki',
    tab_fritti: 'Smażone',
    tab_bevande: 'Napoje',
    gallery_title: 'Galeria',
    contacts_title: 'Kontakt',
    hours_title: 'Godziny otwarcia',
    mon: 'Poniedziałek', tue: 'Wtorek', wed: 'Środa', thu: 'Czwartek',
    fri: 'Piątek', sat: 'Sobota', sun: 'Niedziela',
    closed: 'Zamknięte',
    reservations: 'Info i rezerwacje',
    address_label: 'Adres',
    rossa: 'Rossa', bianca: 'Bianca', schiaccia: 'Schiaccia',
    extras: '* Dodatki €0.50 – €2',
    footer_text: 'Wszelkie prawa zastrzeżone'
  },
  fr: {
    nav_home: 'Accueil',
    nav_menu: 'Menu',
    nav_gallery: 'Galerie',
    nav_contacts: 'Contact',
    pizza_day_title: 'Pizza du Jour',
    menu_title: 'Notre Menu',
    tab_pizze: 'Pizzas',
    tab_antipasti: 'Entrées',
    tab_insalate: 'Salades',
    tab_fritti: 'Fritures',
    tab_bevande: 'Boissons',
    gallery_title: 'Galerie',
    contacts_title: 'Contact',
    hours_title: "Heures d'ouverture",
    mon: 'Lundi', tue: 'Mardi', wed: 'Mercredi', thu: 'Jeudi',
    fri: 'Vendredi', sat: 'Samedi', sun: 'Dimanche',
    closed: 'Fermé',
    reservations: 'Infos & réservations',
    address_label: 'Adresse',
    rossa: 'Rossa', bianca: 'Bianca', schiaccia: 'Schiaccia',
    extras: '* Ingrédients supplémentaires €0.50 – €2',
    footer_text: 'Tous droits réservés'
  },
  es: {
    nav_home: 'Inicio',
    nav_menu: 'Menú',
    nav_gallery: 'Galería',
    nav_contacts: 'Contacto',
    pizza_day_title: 'Pizza del Día',
    menu_title: 'Nuestro Menú',
    tab_pizze: 'Pizzas',
    tab_antipasti: 'Entrantes',
    tab_insalate: 'Ensaladas',
    tab_fritti: 'Fritos',
    tab_bevande: 'Bebidas',
    gallery_title: 'Galería',
    contacts_title: 'Contacto',
    hours_title: 'Horario de Apertura',
    mon: 'Lunes', tue: 'Martes', wed: 'Miércoles', thu: 'Jueves',
    fri: 'Viernes', sat: 'Sábado', sun: 'Domingo',
    closed: 'Cerrado',
    reservations: 'Info y reservas',
    address_label: 'Dirección',
    rossa: 'Rossa', bianca: 'Bianca', schiaccia: 'Schiaccia',
    extras: '* Ingredientes adicionales €0.50 – €2',
    footer_text: 'Todos los derechos reservados'
  },
  en: {
    nav_home: 'Home',
    nav_menu: 'Menu',
    nav_gallery: 'Gallery',
    nav_contacts: 'Contacts',
    pizza_day_title: 'Pizza of the Day',
    menu_title: 'Our Menu',
    tab_pizze: 'Pizzas',
    tab_antipasti: 'Starters',
    tab_insalate: 'Salads',
    tab_fritti: 'Fried',
    tab_bevande: 'Drinks',
    gallery_title: 'Gallery',
    contacts_title: 'Contacts',
    hours_title: 'Opening Hours',
    mon: 'Monday', tue: 'Tuesday', wed: 'Wednesday', thu: 'Thursday',
    fri: 'Friday', sat: 'Saturday', sun: 'Sunday',
    closed: 'Closed',
    reservations: 'Info & reservations',
    address_label: 'Address',
    rossa: 'Rossa', bianca: 'Bianca', schiaccia: 'Schiaccia',
    extras: '* Extra ingredients €0.50 – €2',
    footer_text: 'All rights reserved'
  },
  ru: {
    nav_home: 'Главная',
    nav_menu: 'Меню',
    nav_gallery: 'Галерея',
    nav_contacts: 'Контакты',
    pizza_day_title: 'Пицца дня',
    menu_title: 'Наше Меню',
    tab_pizze: 'Пиццы',
    tab_antipasti: 'Закуски',
    tab_insalate: 'Салаты',
    tab_fritti: 'Жареное',
    tab_bevande: 'Напитки',
    gallery_title: 'Галерея',
    contacts_title: 'Контакты',
    hours_title: 'Часы работы',
    mon: 'Понедельник', tue: 'Вторник', wed: 'Среда', thu: 'Четверг',
    fri: 'Пятница', sat: 'Суббота', sun: 'Воскресенье',
    closed: 'Закрыто',
    reservations: 'Информация и бронирование',
    address_label: 'Адрес',
    rossa: 'Россо', bianca: 'Бьянка', schiaccia: 'Скьяча',
    extras: '* Дополнительные ингредиенты €0.50 – €2',
    footer_text: 'Все права защищены'
  }
};

// ============================================================
// MENU DATA
// ============================================================
const MENU = {
  pizze: [
    { name: 'MARINARA',              price: '€6',    type: 'rossa',    ing: {
      it: 'Pomodoro, Aglio, Origano',
      de: 'Tomatensoße, Knoblauch, Oregano',
      pl: 'Sos pomidorowy, Czosnek, Oregano',
      fr: 'Sauce tomate, Ail, Origan',
      es: 'Salsa de tomate, Ajo, Orégano',
      en: 'Tomato sauce, Garlic, Oregano',
      ru: 'Томатный соус, Чеснок, Орегано'
    }},
    { name: 'MARGHERITA',            price: '€7',    type: 'rossa',    ing: {
      it: 'Pomodoro, Mozzarella, Basilico',
      de: 'Tomatensoße, Mozzarella, Basilikum',
      pl: 'Sos pomidorowy, Mozzarella, Bazylia',
      fr: 'Sauce tomate, Mozzarella, Basilic',
      es: 'Salsa de tomate, Mozzarella, Albahaca',
      en: 'Tomato sauce, Mozzarella, Basil',
      ru: 'Томатный соус, Моцарелла, Базилик'
    }},
    { name: 'SALSICCIA',             price: '€9',    type: 'bianca',   ing: {
      it: 'Mozzarella, Friarielli, Salsiccia di Suino',
      de: 'Mozzarella, Friarielli, Schweinswurst',
      pl: 'Mozzarella, Friarielli, Kiełbasa wieprzowa',
      fr: 'Mozzarella, Friarielli, Saucisse de porc',
      es: 'Mozzarella, Friarielli, Salchicha de cerdo',
      en: 'Mozzarella, Friarielli, Pork sausage',
      ru: 'Моцарелла, Фриарьелли, Свиная колбаса'
    }},
    { name: 'CAPRICCIOSA',           price: '€10',   type: 'rossa',    ing: {
      it: 'Pomodoro, Mozzarella, Prosciutto Cotto, Shampignon, Carciofi, Olive',
      de: 'Tomatensoße, Mozzarella, Gekochter Schinken, Champignons, Artischocken, Oliven',
      pl: 'Sos pomidorowy, Mozzarella, Szynka gotowana, Pieczarki, Karczochy, Oliwki',
      fr: 'Sauce tomate, Mozzarella, Jambon cuit, Champignons, Artichauts, Olives',
      es: 'Salsa de tomate, Mozzarella, Jamón cocido, Champiñones, Alcachofas, Aceitunas',
      en: 'Tomato sauce, Mozzarella, Cooked ham, Mushrooms, Artichokes, Olives',
      ru: 'Томатный соус, Моцарелла, Варёная ветчина, Шампиньоны, Артишоки, Оливки'
    }},
    { name: 'AMERICANA',             price: '€9',    type: 'rossa',    ing: {
      it: 'Pomodoro, Mozzarella, Würstel, Patatine',
      de: 'Tomatensoße, Mozzarella, Würstchen, Pommes frites',
      pl: 'Sos pomidorowy, Mozzarella, Parówki, Frytki',
      fr: 'Sauce tomate, Mozzarella, Saucisses, Frites',
      es: 'Salsa de tomate, Mozzarella, Salchichas, Patatas fritas',
      en: 'Tomato sauce, Mozzarella, Sausages, French fries',
      ru: 'Томатный соус, Моцарелла, Сосиски, Картофель фри'
    }},
    { name: 'CATERINA',              price: '€11.50',type: 'rossa',    ing: {
      it: 'Pomodoro, Mozzarella, Salsiccia di Suino, Prosciutto Cotto, Mascarpone',
      de: 'Tomatensoße, Mozzarella, Schweinswurst, Gekochter Schinken, Mascarpone',
      pl: 'Sos pomidorowy, Mozzarella, Kiełbasa wieprzowa, Szynka gotowana, Mascarpone',
      fr: 'Sauce tomate, Mozzarella, Saucisse de porc, Jambon cuit, Mascarpone',
      es: 'Salsa de tomate, Mozzarella, Salchicha de cerdo, Jamón cocido, Mascarpone',
      en: 'Tomato sauce, Mozzarella, Pork sausage, Cooked ham, Mascarpone',
      ru: 'Томатный соус, Моцарелла, Свиная колбаса, Варёная ветчина, Маскарпоне'
    }},
    { name: 'TONNO E CIPOLLA',       price: '€9',    type: 'rossa',    ing: {
      it: 'Pomodoro, Mozzarella, Tonno, Cipolla',
      de: 'Tomatensoße, Mozzarella, Thunfisch, Zwiebeln',
      pl: 'Sos pomidorowy, Mozzarella, Tuńczyk, Cebula',
      fr: 'Sauce tomate, Mozzarella, Thon, Oignon',
      es: 'Salsa de tomate, Mozzarella, Atún, Cebolla',
      en: 'Tomato sauce, Mozzarella, Tuna, Onion',
      ru: 'Томатный соус, Моцарелла, Тунец, Лук'
    }},
    { name: 'PRIMAVERA',             price: '€8',    type: 'schiaccia',ing: {
      it: "Pomodorini, Stracciatella, Rucola, Glassa all'Aceto Balsamico",
      de: 'Kirschtomaten, Stracciatella, Rucola, Balsamicosirup',
      pl: 'Pomidorki koktajlowe, Stracciatella, Rukola, Glazura balsamiczna',
      fr: 'Tomates cerises, Stracciatella, Roquette, Glaçage balsamique',
      es: 'Tomates cherry, Stracciatella, Rúcula, Glaseado balsámico',
      en: 'Cherry tomatoes, Stracciatella, Rocket, Balsamic glaze',
      ru: 'Черри томаты, Страчателла, Руккола, Бальзамическая глазурь'
    }},
    { name: 'QUATTRO FORMAGGI',      price: '€10',   type: 'bianca',   ing: {
      it: 'Mozzarella, Fontina, Scamorza, Gorgonzola',
      de: 'Mozzarella, Fontina, Scamorza, Gorgonzola',
      pl: 'Mozzarella, Fontina, Scamorza, Gorgonzola',
      fr: 'Mozzarella, Fontina, Scamorza, Gorgonzola',
      es: 'Mozzarella, Fontina, Scamorza, Gorgonzola',
      en: 'Mozzarella, Fontina, Scamorza, Gorgonzola',
      ru: 'Моцарелла, Фонтина, Скаморца, Горгонзола'
    }},
    { name: 'DIAVOLA',               price: '€9',    type: 'rossa',    ing: {
      it: 'Pomodoro, Mozzarella, Salame Piccante, Olive, Peperoncino',
      de: 'Tomatensoße, Mozzarella, Scharfe Salami, Oliven, Chili',
      pl: 'Sos pomidorowy, Mozzarella, Pikantne salami, Oliwki, Chili',
      fr: 'Sauce tomate, Mozzarella, Salami épicé, Olives, Piment',
      es: 'Salsa de tomate, Mozzarella, Salami picante, Aceitunas, Chile',
      en: 'Tomato sauce, Mozzarella, Spicy salami, Olives, Chilli',
      ru: 'Томатный соус, Моцарелла, Острая салями, Оливки, Перец чили'
    }},
    { name: 'BUONA',                 price: '€11',   type: 'rossa',    ing: {
      it: 'Pomodoro, Mozzarella, Salame di Cinghiale, Porcini',
      de: 'Tomatensoße, Mozzarella, Wildschwein-Salami, Steinpilze',
      pl: 'Sos pomidorowy, Mozzarella, Salami z dzika, Grzyby porcini',
      fr: 'Sauce tomate, Mozzarella, Salami de sanglier, Cèpes',
      es: 'Salsa de tomate, Mozzarella, Salami de jabalí, Setas porcini',
      en: 'Tomato sauce, Mozzarella, Wild boar salami, Porcini mushrooms',
      ru: 'Томатный соус, Моцарелла, Салями из кабана, Белые грибы'
    }},
    { name: 'MORTADELLA E PISTACCHIO',price: '€10',  type: 'bianca',   ing: {
      it: 'Mozzarella, Stracciatella, Mortadella, Granella di Pistacchio',
      de: 'Mozzarella, Stracciatella, Mortadella, Pistazienkerne',
      pl: 'Mozzarella, Stracciatella, Mortadela, Posiekane pistacje',
      fr: 'Mozzarella, Stracciatella, Mortadelle, Éclats de pistache',
      es: 'Mozzarella, Stracciatella, Mortadela, Trozos de pistacho',
      en: 'Mozzarella, Stracciatella, Mortadella, Pistachio pieces',
      ru: 'Моцарелла, Страчателла, Мортаделла, Кусочки фисташек'
    }},
    { name: 'ROMANA',                price: '€8.50', type: 'rossa',    ing: {
      it: 'Pomodoro, Mozzarella, Acciughe, Capperi',
      de: 'Tomatensoße, Mozzarella, Sardellen, Kapern',
      pl: 'Sos pomidorowy, Mozzarella, Sardele, Kapary',
      fr: 'Sauce tomate, Mozzarella, Anchois, Câpres',
      es: 'Salsa de tomate, Mozzarella, Anchoas, Alcaparras',
      en: 'Tomato sauce, Mozzarella, Anchovies, Capers',
      ru: 'Томатный соус, Моцарелла, Анчоусы, Каперсы'
    }},
    { name: 'CRUDINA',               price: '€9',    type: 'rossa',    ing: {
      it: 'Pomodoro, Mozzarella, Prosciutto Crudo',
      de: 'Tomatensoße, Mozzarella, Rohschinken',
      pl: 'Sos pomidorowy, Mozzarella, Szynka surowa',
      fr: 'Sauce tomate, Mozzarella, Jambon cru',
      es: 'Salsa de tomate, Mozzarella, Jamón crudo',
      en: 'Tomato sauce, Mozzarella, Cured ham',
      ru: 'Томатный соус, Моцарелла, Сыровяленая ветчина'
    }},
    { name: 'LEGGERA',               price: '€11',   type: 'bianca',   ing: {
      it: 'Mozzarella, Bresaola, Rucola, Scaglie di Grana',
      de: 'Mozzarella, Bresaola, Rucola, Grana-Späne',
      pl: 'Mozzarella, Bresaola, Rukola, Płatki Grana',
      fr: 'Mozzarella, Bresaola, Roquette, Copeaux de Grana',
      es: 'Mozzarella, Bresaola, Rúcula, Virutas de Grana',
      en: 'Mozzarella, Bresaola, Rocket, Grana shavings',
      ru: 'Моцарелла, Брезаола, Руккола, Стружка Гран Падано'
    }},
    { name: 'GUSTOSA',               price: '€11',   type: 'bianca',   ing: {
      it: 'Mozzarella, Porcini, Crema di Tartufo',
      de: 'Mozzarella, Steinpilze, Trüffelcreme',
      pl: 'Mozzarella, Grzyby porcini, Krem truflowy',
      fr: 'Mozzarella, Cèpes, Crème de truffe',
      es: 'Mozzarella, Setas porcini, Crema de trufa',
      en: 'Mozzarella, Porcini mushrooms, Truffle cream',
      ru: 'Моцарелла, Белые грибы, Трюфельный крем'
    }},
    { name: 'SPECK',                 price: '€9',    type: 'rossa',    ing: {
      it: 'Pomodoro, Mozzarella, Speck, Rucola',
      de: 'Tomatensoße, Mozzarella, Speck, Rucola',
      pl: 'Sos pomidorowy, Mozzarella, Speck, Rukola',
      fr: 'Sauce tomate, Mozzarella, Speck, Roquette',
      es: 'Salsa de tomate, Mozzarella, Speck, Rúcula',
      en: 'Tomato sauce, Mozzarella, Speck, Rocket',
      ru: 'Томатный соус, Моцарелла, Шпек, Руккола'
    }},
    { name: 'VEGETARIANA',           price: '€9',    type: 'bianca',   ing: {
      it: 'Mozzarella, Melanzane, Zucchine, Cipolla, Peperoni',
      de: 'Mozzarella, Auberginen, Zucchini, Zwiebeln, Paprika',
      pl: 'Mozzarella, Bakłażan, Cukinia, Cebula, Papryka',
      fr: 'Mozzarella, Aubergines, Courgettes, Oignon, Poivrons',
      es: 'Mozzarella, Berenjenas, Calabacines, Cebolla, Pimientos',
      en: 'Mozzarella, Aubergine, Courgette, Onion, Peppers',
      ru: 'Моцарелла, Баклажан, Кабачки, Лук, Перец'
    }}
  ],
  antipasti: [
    { name: 'Bruscette con Salsa Boscaiola e Funghi Porcini',                              price: '€6' },
    { name: 'Bruscette Stracciatella, Prosciutto Crudo e Pomodori Secchi',                 price: '€6' },
    { name: 'Bruscette Stracciatella, Acciughe, Olive, Pomodorini e Aceto Balsamico',     price: '€6' },
    { name: 'Bruscette con Pomodorini e Basilico',                                         price: '€5' },
    { name: 'Formaggi Misti con Confettura',                                               price: '€7' },
    { name: 'Donzelle Fritte con Salume',                                                  price: '€10' },
    { name: 'Affettati Misti di Salumi',                                                   price: '€10' }
  ],
  insalate: [
    { name: 'Caprese',    price: '€8',    ing: {
      it: "Mozzarella, Pomodori, Pesto di Basilico, Glassa all'Aceto Balsamico",
      de: 'Mozzarella, Tomaten, Basilikumpesto, Balsamicosirup',
      pl: 'Mozzarella, Pomidory, Pesto bazyliowe, Glazura balsamiczna',
      fr: 'Mozzarella, Tomates, Pesto au basilic, Glaçage balsamique',
      es: 'Mozzarella, Tomates, Pesto de albahaca, Glaseado balsámico',
      en: 'Mozzarella, Tomatoes, Basil pesto, Balsamic glaze',
      ru: 'Моцарелла, Помидоры, Базиликовое песто, Бальзамическая глазурь'
    }},
    { name: 'Bresaolana', price: '€9.50', ing: {
      it: 'Bresaola, Rucola, Scaglie di Grana Padano, Pomodorini',
      de: 'Bresaola, Rucola, Grana-Padano-Späne, Kirschtomaten',
      pl: 'Bresaola, Rukola, Płatki Grana Padano, Pomidorki koktajlowe',
      fr: 'Bresaola, Roquette, Copeaux de Grana Padano, Tomates cerises',
      es: 'Bresaola, Rúcula, Virutas de Grana Padano, Tomates cherry',
      en: 'Bresaola, Rocket, Grana Padano shavings, Cherry tomatoes',
      ru: 'Брезаола, Руккола, Стружка Гран Падано, Помидоры черри'
    }}
  ],
  fritti: [
    { name: 'Anelli di Cipolla con Mozzarelline', price: '€5' },
    { name: 'Verdure Miste',                      price: '€5' },
    { name: 'Patatine Fritte',                    price: '€5' },
    { name: 'Nuggets',                            price: '€6' }
  ],
  bevande: [
    { name: 'Acqua Naturale / Frizzante',                    price: '0.75L €2 · 0.5L €1.50' },
    { name: 'Birra alla Spina',                              price: 'Piccola €3 · Media €5' },
    { name: 'Birra Rossa',                                   price: 'Piccola €3.50 · Media €5.50' },
    { name: 'Birra Moretti',                                 price: '66cl €4 · 33cl €3.50' },
    { name: 'Birra Corona',                                  price: '33cl €4' },
    { name: 'Birra Heineken',                                price: '66cl €4 · 33cl €3.50' },
    { name: 'Birra Peroni Analcolica',                       price: '33cl €3.50' },
    { name: 'Vino Bianco/Rosso della Cantina',               price: 'Calice €3 · 0.5L €6' },
    { name: 'Vino Rosso – Terenzi Morellino di Scansano',    price: '€18' },
    { name: 'Vino Bianco – Terenzi Balbino Vermentino',      price: '€18' },
    { name: 'Vino Spumante – San Rabano Vermentino',         price: '€18' },
    { name: 'Pepsi alla Spina',                              price: 'Piccola €3 · 0.5L €5' },
    { name: 'Coca-Cola, Fanta, Sprite',                      price: '33cl €3' },
    { name: 'Tè Limone / Pesca',                             price: '€2.50' },
    { name: 'Succo Mela / Mango',                            price: '€2.50' },
    { name: 'Amari, Liquori, Grappe',                        price: '€3' },
    { name: 'Caffè / Ginseng / Orzo',                        price: '€1.50' },
    { name: 'Caffè Decaffeinato',                            price: '€1.70' }
  ]
};

// ============================================================
// INGREDIENT TRANSLATIONS (Italian → other languages)
// Sorted longest-first so multi-word phrases match before single words
// ============================================================
const INGREDIENTS = [
  ["glassa all'aceto balsamico", { de:'Balsamicosirup',        pl:'Glazura balsamiczna',      fr:"Glaçage balsamique",      es:'Glaseado balsámico',       en:'Balsamic glaze',          ru:'Бальзамическая глазурь' }],
  ['scaglie di grana padano',    { de:'Grana-Padano-Späne',    pl:'Płatki Grana Padano',      fr:'Copeaux de Grana Padano', es:'Virutas de Grana Padano',  en:'Grana Padano shavings',   ru:'Стружка Гран Падано' }],
  ['salame di cinghiale',        { de:'Wildschwein-Salami',    pl:'Salami z dzika',           fr:'Salami de sanglier',      es:'Salami de jabalí',         en:'Wild boar salami',        ru:'Салями из кабана' }],
  ['granella di pistacchio',     { de:'Pistazienkerne',        pl:'Posiekane pistacje',       fr:'Éclats de pistache',      es:'Trozos de pistacho',       en:'Pistachio pieces',        ru:'Кусочки фисташек' }],
  ['salsiccia di suino',         { de:'Schweinswurst',         pl:'Kiełbasa wieprzowa',       fr:'Saucisse de porc',        es:'Salchicha de cerdo',       en:'Pork sausage',            ru:'Свиная колбаса' }],
  ['scaglie di grana',           { de:'Grana-Späne',           pl:'Płatki Grana',             fr:'Copeaux de Grana',        es:'Virutas de Grana',         en:'Grana shavings',          ru:'Стружка Гран Падано' }],
  ['prosciutto cotto',           { de:'Gekochter Schinken',    pl:'Szynka gotowana',          fr:'Jambon cuit',             es:'Jamón cocido',             en:'Cooked ham',              ru:'Варёная ветчина' }],
  ['prosciutto crudo',           { de:'Rohschinken',           pl:'Szynka surowa',            fr:'Jambon cru',              es:'Jamón crudo',              en:'Cured ham',               ru:'Сыровяленая ветчина' }],
  ['pesto di basilico',          { de:'Basilikumpesto',        pl:'Pesto bazyliowe',          fr:'Pesto au basilic',        es:'Pesto de albahaca',        en:'Basil pesto',             ru:'Базиликовое песто' }],
  ['crema di tartufo',           { de:'Trüffelcreme',          pl:'Krem truflowy',            fr:'Crème de truffe',         es:'Crema de trufa',           en:'Truffle cream',           ru:'Трюфельный крем' }],
  ['salame piccante',            { de:'Scharfe Salami',        pl:'Pikantne salami',          fr:'Salami épicé',            es:'Salami picante',           en:'Spicy salami',            ru:'Острая салями' }],
  ['pomodorini',                 { de:'Kirschtomaten',         pl:'Pomidorki koktajlowe',     fr:'Tomates cerises',         es:'Tomates cherry',           en:'Cherry tomatoes',         ru:'Помидоры черри' }],
  ['stracciatella',              { de:'Stracciatella',         pl:'Stracciatella',            fr:'Stracciatella',           es:'Stracciatella',            en:'Stracciatella',           ru:'Страчателла' }],
  ['peperoncino',                { de:'Chili',                 pl:'Chili',                    fr:'Piment',                  es:'Chile',                    en:'Chilli',                  ru:'Перец чили' }],
  ['mascarpone',                 { de:'Mascarpone',            pl:'Mascarpone',               fr:'Mascarpone',              es:'Mascarpone',               en:'Mascarpone',              ru:'Маскарпоне' }],
  ['mortadella',                 { de:'Mortadella',            pl:'Mortadela',                fr:'Mortadelle',              es:'Mortadela',                en:'Mortadella',              ru:'Мортаделла' }],
  ['mozzarella',                 { de:'Mozzarella',            pl:'Mozzarella',               fr:'Mozzarella',              es:'Mozzarella',               en:'Mozzarella',              ru:'Моцарелла' }],
  ['friarielli',                 { de:'Friarielli',            pl:'Friarielli',               fr:'Friarielli',              es:'Friarielli',               en:'Friarielli',              ru:'Фриарьелли' }],
  ['gorgonzola',                 { de:'Gorgonzola',            pl:'Gorgonzola',               fr:'Gorgonzola',              es:'Gorgonzola',               en:'Gorgonzola',              ru:'Горгонзола' }],
  ['shampignon',                 { de:'Champignons',           pl:'Pieczarki',                fr:'Champignons',             es:'Champiñones',              en:'Mushrooms',               ru:'Шампиньоны' }],
  ['melanzane',                  { de:'Auberginen',            pl:'Bakłażan',                 fr:'Aubergines',              es:'Berenjenas',               en:'Aubergine',               ru:'Баклажан' }],
  ['pomodori',                   { de:'Tomaten',               pl:'Pomidory',                 fr:'Tomates',                 es:'Tomates',                  en:'Tomatoes',                ru:'Помидоры' }],
  ['pomodoro',                   { de:'Tomatensoße',           pl:'Sos pomidorowy',           fr:'Sauce tomate',            es:'Salsa de tomate',          en:'Tomato sauce',            ru:'Томатный соус' }],
  ['bresaola',                   { de:'Bresaola',              pl:'Bresaola',                 fr:'Bresaola',                es:'Bresaola',                 en:'Bresaola',                ru:'Брезаола' }],
  ['scamorza',                   { de:'Scamorza',              pl:'Scamorza',                 fr:'Scamorza',                es:'Scamorza',                 en:'Scamorza',                ru:'Скаморца' }],
  ['carciofi',                   { de:'Artischocken',          pl:'Karczochy',                fr:'Artichauts',              es:'Alcachofas',               en:'Artichokes',              ru:'Артишоки' }],
  ['acciughe',                   { de:'Sardellen',             pl:'Sardele',                  fr:'Anchois',                 es:'Anchoas',                  en:'Anchovies',               ru:'Анчоусы' }],
  ['zucchine',                   { de:'Zucchini',              pl:'Cukinia',                  fr:'Courgettes',              es:'Calabacines',              en:'Courgette',               ru:'Кабачки' }],
  ['peperoni',                   { de:'Paprika',               pl:'Papryka',                  fr:'Poivrons',                es:'Pimientos',                en:'Peppers',                 ru:'Перец' }],
  ['basilico',                   { de:'Basilikum',             pl:'Bazylia',                  fr:'Basilic',                 es:'Albahaca',                 en:'Basil',                   ru:'Базилик' }],
  ['origano',                    { de:'Oregano',               pl:'Oregano',                  fr:'Origan',                  es:'Orégano',                  en:'Oregano',                 ru:'Орегано' }],
  ['fontina',                    { de:'Fontina',               pl:'Fontina',                  fr:'Fontina',                 es:'Fontina',                  en:'Fontina',                 ru:'Фонтина' }],
  ['würstel',                    { de:'Würstchen',             pl:'Parówki',                  fr:'Saucisses',               es:'Salchichas',               en:'Sausages',                ru:'Сосиски' }],
  ['patatine',                   { de:'Pommes frites',         pl:'Frytki',                   fr:'Frites',                  es:'Patatas fritas',           en:'French fries',            ru:'Картофель фри' }],
  ['porcini',                    { de:'Steinpilze',            pl:'Grzyby porcini',           fr:'Cèpes',                   es:'Setas porcini',            en:'Porcini mushrooms',       ru:'Белые грибы' }],
  ['capperi',                    { de:'Kapern',                pl:'Kapary',                   fr:'Câpres',                  es:'Alcaparras',               en:'Capers',                  ru:'Каперсы' }],
  ['rucola',                     { de:'Rucola',                pl:'Rukola',                   fr:'Roquette',                es:'Rúcula',                   en:'Rocket',                  ru:'Руккола' }],
  ['cipolla',                    { de:'Zwiebeln',              pl:'Cebula',                   fr:'Oignon',                  es:'Cebolla',                  en:'Onion',                   ru:'Лук' }],
  ['tonno',                      { de:'Thunfisch',             pl:'Tuńczyk',                  fr:'Thon',                    es:'Atún',                     en:'Tuna',                    ru:'Тунец' }],
  ['aglio',                      { de:'Knoblauch',             pl:'Czosnek',                  fr:'Ail',                     es:'Ajo',                      en:'Garlic',                  ru:'Чеснок' }],
  ['olive',                      { de:'Oliven',                pl:'Oliwki',                   fr:'Olives',                  es:'Aceitunas',                en:'Olives',                  ru:'Оливки' }],
  ['speck',                      { de:'Speck',                 pl:'Speck',                    fr:'Speck',                   es:'Speck',                    en:'Speck',                   ru:'Шпек' }],
];

function translateIngredients(text, targetLang) {
  if (!text || targetLang === 'it') return text;
  return text.split(',').map(part => {
    const trimmed = part.trim();
    const lower   = trimmed.toLowerCase();
    for (const [key, trans] of INGREDIENTS) {
      if (lower === key) return trans[targetLang] || trimmed;
    }
    return trimmed;
  }).join(', ');
}

// ============================================================
// ADMIN CONFIG
// Щоб змінити пароль — відредагуйте рядок нижче
// Per cambiare la password — modifica la riga qui sotto
// ============================================================
const ADMIN_PASSWORD = 'Rinata2025';
const LS_PIZZA_KEY  = 'rinata_pizza_day';
const LS_PHOTO_KEY  = 'rinata_pizza_photo';

// ============================================================
// STATE
// ============================================================
let lang = 'it';
let activeTab = 'pizze';
let pdIngredients = ''; // завжди зберігається як Italian

// ============================================================
// LANGUAGE
// ============================================================
function detectBrowserLang() {
  const code = (navigator.language || 'it').slice(0, 2).toLowerCase();
  return T[code] ? code : 'it';
}

function setLang(l) {
  lang = l;
  localStorage.setItem('lang', l);
  document.documentElement.lang = l;
  applyTranslations();
  renderMenu(activeTab);
  if (pdIngredients) {
    document.querySelector('.pd-ingredients').textContent = translateIngredients(pdIngredients, lang);
  }
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === l);
  });
}

function applyTranslations() {
  const t = T[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });
}

// ============================================================
// MENU RENDERING
// ============================================================
function renderMenu(tab) {
  activeTab = tab;
  const t = T[lang];
  const container = document.getElementById('menu-content');

  if (tab === 'pizze') {
    const cards = MENU.pizze.map(p => `
      <div class="pizza-card">
        <div class="pizza-card-header">
          <div class="pizza-card-name">${p.name}</div>
          <div class="pizza-card-price">${p.price}</div>
        </div>
        <div class="pizza-card-type badge-${p.type}">${t[p.type]}</div>
        <div class="pizza-card-ing">${p.ing[lang] || p.ing.it}</div>
      </div>`).join('');

    container.innerHTML = `
      <div class="pizza-grid">${cards}</div>
      <div class="menu-extras-wrap"><div class="menu-extras">${t.extras}</div></div>`;

  } else if (tab === 'insalate') {
    const items = MENU.insalate.map(it => `
      <div class="simple-item">
        <div>
          <div class="simple-item-name">${it.name}</div>
          <div class="simple-item-sub">${it.ing[lang] || it.ing.it}</div>
        </div>
        <div class="simple-item-price">${it.price}</div>
      </div>`).join('');

    container.innerHTML = `<div class="simple-list">${items}</div>`;

  } else {
    const items = MENU[tab].map(it => `
      <div class="simple-item">
        <div class="simple-item-name">${it.name}</div>
        <div class="simple-item-price">${it.price}</div>
      </div>`).join('');

    container.innerHTML = `<div class="simple-list">${items}</div>`;
  }
}

// ============================================================
// PIZZA DEL GIORNO — load / save
// ============================================================
function applyPizzaPhoto(src) {
  const img = document.getElementById('pd-photo');
  if (src) {
    img.src = src;
    img.classList.remove('hidden');
  } else {
    img.src = '';
    img.classList.add('hidden');
  }
}

function loadPizzaDelGiorno() {
  const raw = localStorage.getItem(LS_PIZZA_KEY);
  if (!raw) return;
  try {
    const d = JSON.parse(raw);
    if (d.name)  document.querySelector('.pd-name').textContent  = d.name;
    if (d.price) document.querySelector('.pd-price').textContent = d.price;
    if (d.type)  document.querySelector('.pd-type').textContent  = d.type;
    if (d.ing) {
      pdIngredients = d.ing;
      document.querySelector('.pd-ingredients').textContent = translateIngredients(d.ing, lang);
    }
  } catch (e) {}
  applyPizzaPhoto(localStorage.getItem(LS_PHOTO_KEY) || '');
}

function savePizzaDelGiorno(name, price, type, ing, photoSrc) {
  pdIngredients = ing;
  localStorage.setItem(LS_PIZZA_KEY, JSON.stringify({ name, price, type, ing }));
  if (photoSrc !== null) {
    if (photoSrc) {
      localStorage.setItem(LS_PHOTO_KEY, photoSrc);
    } else {
      localStorage.removeItem(LS_PHOTO_KEY);
    }
  }
  document.querySelector('.pd-name').textContent        = name;
  document.querySelector('.pd-price').textContent       = price;
  document.querySelector('.pd-type').textContent        = type;
  document.querySelector('.pd-ingredients').textContent = translateIngredients(ing, lang);
  applyPizzaPhoto(photoSrc !== null ? photoSrc : (localStorage.getItem(LS_PHOTO_KEY) || ''));
}

// ============================================================
// ADMIN PANEL
// ============================================================
function initAdmin() {
  const trigger      = document.getElementById('admin-trigger');
  const overlay      = document.getElementById('admin-overlay');
  const stepPass     = document.getElementById('step-pass');
  const stepEdit     = document.getElementById('step-edit');
  const passInput    = document.getElementById('admin-pass');
  const passErr      = document.getElementById('admin-err');
  const btnLogin     = document.getElementById('btn-login');
  const btnCancel    = document.getElementById('btn-cancel');
  const btnSave      = document.getElementById('btn-save');
  const btnCancelEdit = document.getElementById('btn-cancel-edit');
  const editName       = document.getElementById('edit-name');
  const editPrice      = document.getElementById('edit-price');
  const editType       = document.getElementById('edit-type');
  const editIng        = document.getElementById('edit-ing');
  const editPhoto      = document.getElementById('edit-photo');
  const photoPreview   = document.getElementById('photo-preview');
  const btnRemovePhoto = document.getElementById('btn-remove-photo');

  let pendingPhotoSrc = null; // null = no change, '' = remove, 'data:...' = new photo

  function updatePhotoPreview(src) {
    if (src) {
      photoPreview.src = src;
      photoPreview.classList.remove('hidden');
      btnRemovePhoto.classList.remove('hidden');
    } else {
      photoPreview.src = '';
      photoPreview.classList.add('hidden');
      btnRemovePhoto.classList.add('hidden');
    }
  }

  editPhoto.addEventListener('change', () => {
    const file = editPhoto.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
      pendingPhotoSrc = e.target.result;
      updatePhotoPreview(pendingPhotoSrc);
    };
    reader.readAsDataURL(file);
  });

  btnRemovePhoto.addEventListener('click', () => {
    pendingPhotoSrc = '';
    updatePhotoPreview('');
    editPhoto.value = '';
  });

  function openOverlay() {
    overlay.classList.remove('hidden');
    stepPass.classList.remove('hidden');
    stepEdit.classList.add('hidden');
    passInput.value = '';
    passErr.classList.add('hidden');
    setTimeout(() => passInput.focus(), 50);
  }

  function closeOverlay() {
    overlay.classList.add('hidden');
    passInput.value = '';
  }

  function showEditForm() {
    stepPass.classList.add('hidden');
    stepEdit.classList.remove('hidden');
    editName.value  = document.querySelector('.pd-name').textContent;
    editPrice.value = document.querySelector('.pd-price').textContent;
    const currentType = document.querySelector('.pd-type').textContent;
    editType.value  = ['Rossa','Bianca','Schiaccia'].includes(currentType) ? currentType : 'Rossa';
    editIng.value   = document.querySelector('.pd-ingredients').textContent;
    // reset photo state
    pendingPhotoSrc = null;
    editPhoto.value = '';
    updatePhotoPreview(localStorage.getItem(LS_PHOTO_KEY) || '');
    setTimeout(() => editName.focus(), 50);
  }

  trigger.addEventListener('click', openOverlay);
  btnCancel.addEventListener('click', closeOverlay);
  btnCancelEdit.addEventListener('click', closeOverlay);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeOverlay(); });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeOverlay();
  });

  btnLogin.addEventListener('click', () => {
    if (passInput.value === ADMIN_PASSWORD) {
      passErr.classList.add('hidden');
      showEditForm();
    } else {
      passErr.classList.remove('hidden');
      passInput.value = '';
      passInput.focus();
    }
  });

  passInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') btnLogin.click();
  });

  btnSave.addEventListener('click', () => {
    const name  = editName.value.trim();
    const price = editPrice.value.trim();
    const type  = editType.value;
    const ing   = editIng.value.trim();
    if (!name || !price) return;
    savePizzaDelGiorno(name, price, type, ing, pendingPhotoSrc);
    closeOverlay();
  });
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {

  // Initial language
  const saved = localStorage.getItem('lang');
  lang = (saved && T[saved]) ? saved : detectBrowserLang();

  // Language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  // Tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderMenu(btn.dataset.tab);
    });
  });

  // Gallery lightbox
  const lightbox = document.getElementById('lightbox');
  const lbImg    = document.getElementById('lb-img');

  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      lbImg.src = item.dataset.src;
      lightbox.classList.add('open');
    });
  });

  document.getElementById('lb-close').addEventListener('click', () => {
    lightbox.classList.remove('open');
  });

  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) lightbox.classList.remove('open');
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') lightbox.classList.remove('open');
  });

  // Burger menu
  const burger    = document.getElementById('burger');
  const mobileNav = document.getElementById('mobile-nav');

  burger.addEventListener('click', () => mobileNav.classList.toggle('open'));

  document.querySelectorAll('.mobile-nav a').forEach(a => {
    a.addEventListener('click', () => mobileNav.classList.remove('open'));
  });

  // Init pdIngredients from default HTML content (Italian)
  pdIngredients = document.querySelector('.pd-ingredients').textContent.trim();

  // Load pizza of the day from localStorage (if set)
  loadPizzaDelGiorno();

  // Initialize admin panel
  initAdmin();

  // Initialize translations + menu
  setLang(lang);
  renderMenu('pizze');
});
