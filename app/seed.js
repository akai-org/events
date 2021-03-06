const database = require('./helpers/database');

database.insert(
  'events',
  {
    "title": "Onepage",
    "components": [
      {
        "name": "home",
        "data": {
          "title": "Webstarter 2017",
          "subtitle": "Akai",
          "backgroundImg": "/img/background.png",
          "description": "Zbiór prelekcji wprowadzających w świat webdevelopmentu przygotowanych przez firmy IT we współpracy z Akademickim Kołem Aplikacji Internetowych.",
          "primaryButton": {
            "text": "Zarezerwuj miejsce",
            "link": "#"
          },
          "secondaryButton": {
            "text": "Kontakt",
            "link": "#"
          },
          "scrollButton": {
            "text": "Dowiedz się więcej",
            "link": "#"
          }
        }
      },
      {
        "name": "about",
        "data": {
          "title": "Z roku na rok rozwój technologiczny nabiera rozpędu",
          "subtitle": "O wydarzeniu",
          "text": [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lectus massa, maximus in diam in, egestas commodo sapien. Etiam molestie ex eget est faucibus ornare. Aenean hendrerit gravida lorem vel commodo. Maecenas varius orci dui, a pellentesque justo rhoncus ut. Nullam eu velit ex. Donec vitae magna vel purus blandit fringilla non et mauris. Vestibulum placerat nulla quis blandit euismod. Phasellus ac neque blandit, molestie lectus sit amet, luctus enim.",
            "Curabitur dictum, metus eget auctor laoreet, tortor velit egestas mauris, ut tincidunt enim lorem a nibh. Vivamus et lacinia elit. Sed suscipit rutrum dolor a ultrices. Suspendisse id vestibulum felis, lacinia lacinia ante."
          ],
          "image": {
            "src": "http://placehold.it/350x350",
            "alt": "Photo"
          }
        }
      },
      {
        "name": "dateAndVenue",
        "data": {
          "date": "30.03",
          "time": "18:00",
          "venue": "Centrum wykładowe Politechniki Poznańskiej",
          "venueDetails": "Sala 8",
          "calendar": {
            "google": "https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=NmtzajBvcjRjbGhqaWI5Z2M4b2owYjlrNjBzamFiOW82NWhqZWI5bzYwcjNhcDFsYzhxMzBjOXA2ayB0b21hc3pnaWwucG9tQG0&amp;tmsrc=tomaszgil.pom%40gmail.com",
            "apple": "#"
          }
        }
      },
      {
        "name": "events",
        "data": {
          "events": [
            {
              "title": "Web Development, based on Paymentwall experience and business perspective",
              "time": "17:30",
              "author": "Ivan Kovalyov, Paymentwall",
              "aboutAuthor": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mi tellus, mattis sed faucibus sit amet, euismod in urna. Nulla id felis mollis, condimentum lectus vel, pulvinar libero. Quisque dictum id felis a egestas. Praesent risus mi, feugiat vel dictum nec, maximus vitae risus. Aenean et arcu lectus. Etiam eros orci, semper a convallis et, posuere non ex. Quisque tortor enim, cursus at elit et, pulvinar bibendum mi. Praesent tempor molestie turpis, in porta velit sodales lobortis.",
              "information": [
                "Jak szybko dostarczać informacje w każdym miejscu w Polsce",
                "Jak szybko dostarczać informacje w każdym miejscu w Polsce",
                "Jak szybko dostarczać informacje w każdym miejscu w Polsce"
              ],
              "image": {
                "src": "http://placehold.it/350x350",
                "alt": "Photo"
              }
            },
            {
              "title": "Web Development, based on Paymentwall experience and business perspective",
              "time": "17:30",
              "author": "Ivan Kovalyov, Paymentwall",
              "aboutAuthor": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mi tellus, mattis sed faucibus sit amet, euismod in urna. Nulla id felis mollis, condimentum lectus vel, pulvinar libero. Quisque dictum id felis a egestas. Praesent risus mi, feugiat vel dictum nec, maximus vitae risus. Aenean et arcu lectus. Etiam eros orci, semper a convallis et, posuere non ex. Quisque tortor enim, cursus at elit et, pulvinar bibendum mi. Praesent tempor molestie turpis, in porta velit sodales lobortis.",
              "information": [
                "Jak szybko dostarczać informacje w każdym miejscu w Polsce",
                "Jak szybko dostarczać informacje w każdym miejscu w Polsce",
                "Jak szybko dostarczać informacje w każdym miejscu w Polsce"
              ],
              "image": {
                "src": "http://placehold.it/350x350",
                "alt": "Photo"
              }
            },
            {
              "title": "Web Development, based on Paymentwall experience and business perspective",
              "time": "17:30",
              "author": "Ivan Kovalyov, Paymentwall",
              "aboutAuthor": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mi tellus, mattis sed faucibus sit amet, euismod in urna. Nulla id felis mollis, condimentum lectus vel, pulvinar libero. Quisque dictum id felis a egestas. Praesent risus mi, feugiat vel dictum nec, maximus vitae risus. Aenean et arcu lectus. Etiam eros orci, semper a convallis et, posuere non ex. Quisque tortor enim, cursus at elit et, pulvinar bibendum mi. Praesent tempor molestie turpis, in porta velit sodales lobortis.",
              "information": [
                "Jak szybko dostarczać informacje w każdym miejscu w Polsce",
                "Jak szybko dostarczać informacje w każdym miejscu w Polsce",
                "Jak szybko dostarczać informacje w każdym miejscu w Polsce"
              ],
              "image": {
                "src": "http://placehold.it/350x350",
                "alt": "Photo"
              }
            },
            {
              "title": "Web Development, based on Paymentwall experience and business perspective",
              "time": "17:30",
              "author": "Ivan Kovalyov, Paymentwall",
              "aboutAuthor": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mi tellus, mattis sed faucibus sit amet, euismod in urna. Nulla id felis mollis, condimentum lectus vel, pulvinar libero. Quisque dictum id felis a egestas. Praesent risus mi, feugiat vel dictum nec, maximus vitae risus. Aenean et arcu lectus. Etiam eros orci, semper a convallis et, posuere non ex. Quisque tortor enim, cursus at elit et, pulvinar bibendum mi. Praesent tempor molestie turpis, in porta velit sodales lobortis.",
              "information": [
                "Jak szybko dostarczać informacje w każdym miejscu w Polsce",
                "Jak szybko dostarczać informacje w każdym miejscu w Polsce",
                "Jak szybko dostarczać informacje w każdym miejscu w Polsce"
              ],
              "image": {
                "src": "http://placehold.it/350x350",
                "alt": "Photo"
              }
            }
          ]
        }
      },
      {
        "name": "gallery",
        "data": {
          "title": "Zobacz jak było!",
          "photos": [
            "/img/photos/backendCamp1.jpg",
            "/img/photos/backendCamp2.jpg",
            "/img/photos/backendCamp3.jpg"
          ]
        }
      },
      {
        "name": "contact",
        "data": {
          "title": "Zainteresowany współpracą?",
          "text": "Jeśli chcesz promować swoją firmę, przedstawić trudne lub ciekawe zagadnienie, zostaw swoją propozycję, na pewno odpiszemy!",
          "buttonText": "Zostaw wiadomość"
        }
      },
      {
        "name": "collaborationPricing",
        "data": {
          "title": "Chcesz promować swoją firmę?",
          "text": "W grupie można osiągnąć więcej. Zapoznaj się z ofertą skierowaną do firm zajmujących się developmentem dla web oraz mobile.",
          "collaboration": {
            "benefits": {
              "name": "Co dostajesz?",
              "categories": [
                "Logo na stronie",
                "Dostęp do grupy AKAI Praca",
                "Możliwość wystawienia materiałów promocyjnych na eventach (rollup, ulotki)",
                "Logo na grafikach eventów",
                "Logo na stronie promującej event",
                "Udostępnianie postów z wydarzeniami i ofertami pracy na Fanpage FB"
              ]
            },
            "plans": [
              {
                "name": "Bronze",
                "price": "200 zł",
                "period": "semestr",
                "benefits": [
                  "Logo w sekcji brązowej",
                  true,
                  false,
                  false,
                  false,
                  false
                ]
              },
              {
                "name": "Silver",
                "price": "500 zł",
                "period": "semestr",
                "benefits": [
                  "Logo w sekcji srebrnej",
                  true,
                  true,
                  true,
                  true,
                  false
                ]
              },
              {
                "name": "Gold",
                "price": "1000 zł",
                "period": "semestr",
                "benefits": [
                  "Logo w sekcji złotej",
                  true,
                  true,
                  true,
                  true,
                  true
                ]
              }
            ]
          },
          "additional": {
            "title": "Nota",
            "text": "Możesz także skorzystać z bezpłatnego pakietu Copper, w którym zapewniamy umieszczenie logo na stronie wydarzenia i na Fanpage w postach promujących wydarzenie, w którym sponsor bierze udział oraz Wspieranie darmowych niekomercyjnych eventów skierowanych do społeczności."
          },
          "cta": "Wybrałeś pakiet współpracy?",
          "contactButton": {
            "text": "Skontaktuj się z nami",
            "link": "#"
          }
        }
      },
      {
        "name": "footer",
        "data": {
          "title": "AKAI webstarter",
          "copy": "&copy; 2017 Akademickie Koło Aplikacji Internetowych",
          "email": "webstarter@akai.org.pl",
          "socials": [
            {
              "icon": "fa-facebook",
              "link": "https://www.facebook.com/akai.pp"
            },
            {
              "icon": "fa-twitter",
              "link": "https://twitter.com/akai.pp"
            }
          ]
        }
      }
    ]
  }
);