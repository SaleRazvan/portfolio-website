import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

export const languages: Record<string, { shortName: string }> = {
  en: { shortName: "EN" },
  ro: { shortName: "RO" },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          dialog: {
            title: "Leaving site",
            desc: "You are about to leave the site to access an external resource",
            cancel: "Cancel",
            github: "Open GitHub",
            linkedin: "Open LinkedIn",
            endava: "Open Endava website",
            bmw: "Open BMW website",
            email: "Write E-mail",
          },
          header: {
            home: "Home",
            skills: "Skills",
            career: "Career",
            services: "Services",
            api: "GeoData Visualizer",
            journeys: "My travels",
          },
          home: {
            title: "Welcome",
            shortDesc:
              "I'm Sale Razvan, and this is where I share my work, passions, and projects. Whether you're here to explore my creations or connect, I'm glad you stopped by. Take a look around and feel free to reach out!",
            longDesc:
              "Dynamic Fullstack JavaScript/TypeScript Developer adept at building high-performance, scalable web applications using React, Node.js, and cutting-edge database technologies",
            workStatus: "Work Status",
            available: "Available for work",
            notAvailable: "Happily employed",
            company: "Current Company",
            phone: "Phone",
            about: "About me",
            subtitle: "Hi There! I'm Sale Razvan!",
            role: "Current role",
            developer: "JS Developer",
            birthday: "Birthday",
            from: "From",
            workexp: "Work experience",
            education: "Education",
            highschool: "Tiberiu Popoviciu High School",
            university: "Babes-Bolyai University",
            languages: "Languages",
            romanian: "Romanian",
            english: "English",
            german: "German",
            hobbies: "Hobbies",
            history: "Study of history",
            art: "Artistic expression",
            sports: "Sports",
            cv: "Download CV",
          },
          skills: {
            title: "Skills, expertise, and services",
            shortDesc:
              " Explore the web development services I provide, and dive into my tech toolkit: a personal journey through the technologies and skills that define my coding approach.",
            warning:
              "Please keep in mind: the following list is not exhaustive",
            linkedin: "Full skills overview",
            list: "List of skills",
          },
          career: {
            title: "Career summary",
            shortDesc:
              "A curated showcase of my technical journey. Review my completed projects to see examples of problem-solving, data integration, and my commitment to clean, efficient web development.",
            info: "Have a challenging problem? I'm actively seeking opportunities. Let's connect and discuss your challenges!",
            work: "Showcasing the past",
            bmwAchievement1:
              "As part of the core engineering team, I contributed in maintaining the stability and high availability of the BMW and MINI e-commerce platform. This system reliably processed all direct customer and dealer-initiated purchases across multiple international markets, languages, and brands",
            bmwAchievement2:
              "I was tasked with maintaining the reliable display of vehicle data, configurations, and prices by managing and coordinating the integration points with multiple external APIs and back-end inventory systems, ensuring the accuracy of the online catalogue",
            bmwAchievement3:
              "The role involved the implementation of technical improvements to the platform's architecture necessary for achieving optimal search engine visibility (SEO), which was crucial for organic customer discovery and traffic generation for online sales channels",
            otAchievement1:
              "Maintained the stability and continuous availability of the third-party-facing incident management platform, which was critical for external organizations relying on the system for their diverse operational use cases",
            otAchievement2:
              "Required to join meetings directly with external clients to debug their specific platform instances, analyze their reported issues, and translate technical problems into actionable solutions for the development team",
            endavaAchievement1:
              "Contributed to the development of a specialized VS Code extension designed to streamline the workflow for embedded programmers, integrating critical functions like pin configuration and pinmuxing directly into the IDE",
            endavaAchievement2:
              "I was tasked with building and maintaining the extension features responsible for exporting user-defined hardware configurations (pins, peripherals) directly into ready-to-use C code files, significantly accelerating the project setup phase",
            endavaAchievement3:
              "In a separate project, I dealt with resolving defects and improving the accuracy of an interactive map displaying real estate prices, alongside developing reusable and customizable advertisement components to simplify lead generation across the client's digital presence",
            endavaTechstack:
              "Here, I worked with: React and Vue (and analogues), mastering state management via Redux/Vuex, and building applications with NestJS. The stack leverages JavaScript/TypeScript for universal development, including SSR with Next.js. Styling involves CSS pre-processors, Tailwind, and in-house component libraries, alongside bespoke raw Web Components",
            otTechstack:
              "At this position, I primarily focused on maintaining and extending legacy applications built with AngularJS. This environment required deep expertise in the framework's complex architectural patterns, and all interface styling was handled directly using regular CSS. The work demanded meticulous attention to detail within a more traditional development paradigm.",
            bmwTechstack:
              "My work here centers on modern full-stack development. I primarily utilize Vue 3 and Vuex for frontend architecture, supplementing it with encapsulated Web Components built using Lit. Backend development is handled via NestJS, with Nuxt.js used for specialized needs. For UI implementation, I combine Tailwind CSS and SCSS while strictly adhering to a built-in component library.",
          },
          services: {
            title: "Services",
            shortDesc:
              "Explore the web development services I provide, highlighting my expertise and capabilities. Let's connect!",
            warning:
              "Information in this section could potentially be outdated. For up-to-date information, please contact me directly",
            list: "List of services",
            github: "Check out my work",
            webdev: {
              title: "Web App Development",
              desc: "Build highly interactive and responsive single page applications using frameworks like React, Vue.js, or Angular",
            },
            apidev: {
              title: "API Development",
              desc: "Design and develop RESTful APIs to power your applications and integrate with external services",
            },
            database: {
              title: "Database Integration",
              desc: " Implement robust data storage and management solutions using popular databases like MongoDB, PostgreSQL, or MySQL",
            },
            uiuxdesign: {
              title: "UI/UX Design",
              desc: "Collaborate with designers to create visually appealing and user-friendly interfaces for your applications",
            },
            serverside: {
              title: "Server-side Scripting",
              desc: "Develop server-side logic using NodeJS and frameworks (Nestjs) to power the backend of your applications",
            },
            techconsult: {
              title: "Technical Consulting",
              desc: "Provide technical consulting services to help clients plan, architect, and implement their JavaScript-based solutions",
            },
          },
          api: {
            title: "GeoData Visualizer",
            shortDesc:
              "A Leaflet-powered map with markers revealing fun facts for every country, dynamically fetched from my custom backend",
            warning:
              "Notice that, due to provider limitations, it may take up to one minute for the map to load",
            github: "Explore repository",
            map: "Leaflet-powered interactive map",
            warning2:
              "Feel free to help me populate the DB. Keep in mind though, records need to be validated before showing up",
            country: "Add Country",
            fact: "Add Fact",
            button: "Submit",
            success: "Request sent succesfully",
          },
          journeys: {
            title: "My travels",
            shortDesc:
              "A collection of moments and memories from my journeys around the world, captured through my lens",
            submit: "Submit",
            cancel: "Cancel",
            toggle: "Toggle section",
            unlockDesc:
              "In order to access following section, a secret key is required",
            secretKey: "Add secret key",
          },
          notAvailable: {
            title: "Sorry, this route is not available",
            warning:
              "Please try one of the following routes instead: /home/{lang}, /skills/{lang}, /services/{lang}",
            navigate: "Or navigate home by pressing",
          },
          smallScreen: {
            title:
              "Sorry, this website is not yet optimized for mobile devices",
            warning:
              "Please retry this operation on a device with larger resolution",
          },
        },
      },
      ro: {
        translation: {
          dialog: {
            title: "Parasiti site-ul",
            desc: "Sunteti pe cale sa parasiti site-ul pentru a accesa o resursa externa",
            cancel: "Anuleaza",
            github: "Accesati GitHub",
            linkedin: "Accesati LinkedIn",
            endava: "Accesati site-ul Endava",
            bmw: "Accesati site-ul BMW",
            email: "Scrieti E-mail",
          },
          header: {
            home: "Acasa",
            skills: "Competente",
            career: "Experienta de lucru",
            services: "Servicii oferite",
            api: "GeoData Visualizer",
            journeys: "Calatorii",
          },
          home: {
            title: "Bun venit",
            shortDesc:
              "Sunt Sale Razvan si aici public munca, pasiunile și proiectele mele. Fie ca esti aici sa explorezi proiectele sau sa ma contactezi, ma bucur ca esti aici. Arunca o privire si nu ezita sa ma contactezi!",
            longDesc:
              "Dezvoltator Fullstack JavaScript/TypeScript, specializat in construirea aplicatiilor web scalabile, utilizand React, Node.js si tehnologii de baze de date de ultima generatie",
            workStatus: "Starea de munca",
            available: "Disponibil",
            notAvailable: "Angajat",
            phone: "Numar de telefon",
            about: "Despre mine",
            subtitle: "Salut! Sunt Sale Razvan!",
            role: "Ocupatie curenta",
            developer: "Dezvoltator JS",
            company: "Companie curenta",
            birthday: "Zi de nastere",
            from: "Domiciliu",
            workexp: "Experienta profesionala",
            education: "Studii",
            highschool: "Liceul de Informatica T. Popoviciu",
            university: "Universitatea Babes-Bolyai",
            languages: "Limbi cunoscute",
            romanian: "Romana",
            english: "Engleza",
            german: "Germana",
            hobbies: "Hobby-uri",
            history: "Studiu istoric",
            art: "Exprimare artistica",
            sports: "Sporturi",
            cv: "Descarca CV",
          },
          skills: {
            title: "Competente si servicii oferite",
            shortDesc:
              "In sectiunea curenta descriu serviciile oferite - precum si competentele mele tehnice, tehnologiile care imi definesc abordarea de programare",
            warning: "Atentie: lista prezenta nu este exhaustiva",
            linkedin: "Lista completa",
            list: "Lista de competente",
          },
          career: {
            title: "Experienta mea de lucru",
            shortDesc:
              "Aici imi prezint parcursul tehnic si profesional. Te invit sa analizezi proiectele finalizate pentru a vedea exemple de problem-solving, integrare de date si dedicarea mea pentru un cod curat si o dezvoltare web eficienta",
            info: "Ai o provocare tehnica? Sunt in cautarea de noi oportunitati. Hai sa discutam despre necesitatile proiectului tau!",
            work: "Experienta profesionala",
            bmwAchievement1:
              "Am contribuit la mentinerea stabilitatii si disponibilitatii platformei de e-commerce BMW si MINI. Acest sistem a gestionat in mod fiabil toate achizitiile clientilor directi si ale dealerilor pe multiple piete internationale si branduri",
            bmwAchievement2:
              "Am fost responsabil cu mentinerea afisarii corecte a datelor, configuratiilor si preturilor vehiculelor. Aceasta a implicat gestionarea integrarii cu API-uri externe si sisteme de inventar back-end multiple, asigurand acuratetea catalogului online",
            bmwAchievement3:
              "Rolul a presupus implementarea de imbunatatiri tehnice ale arhitecturii platformei, esentiale pentru optimizarea vizibilitatii in motoarele de cautare (SEO), cruciala pentru generarea de trafic organic si vanzari online",
            otAchievement1:
              "Am asigurat stabilitatea si disponibilitatea continua a unei platformei de gestionare a incidentelor, care era vitala pentru organizatiile externe ce o foloseau in diverse scopuri operationale",
            otAchievement2:
              "Am participat direct la intalniri cu clienti externi pentru a depana instantele lor specifice ale platformei, a analiza problemele raportate si a transforma problemele tehnice in solutii concrete pentru echipa de dezvoltare",
            endavaAchievement1:
              "Am contribuit la dezvoltarea unei extensii VS Code specializate, creata pentru a optimiza fluxul de lucru al programatorilor embedded, integrand functii critice (precum configurarea de pini si pinmuxing) direct in mediul de dezvoltare",
            endavaAchievement2:
              "Am fost responsabil cu construirea si mentinerea functionalitatilor extensiei care exportau configuratiile hardware definite de utilizator in fisiere de cod C gata de utilizare, accelerand semnificativ faza de setup a proiectului",
            endavaAchievement3:
              "Intr-un proiect separat, m-am ocupat de rezolvarea defectelor si cresterea preciziei unei harti interactive cu preturi imobiliare. De asemenea, am dezvoltat componente de advertising reutilizabile si personalizabile pentru a eficientiza generarea de lead-uri pe canalele digitale ale clientului",
            endavaTechstack:
              "Aici am lucrat cu: React si Vue (si framework-uri similare), stapanind state management-ul prin Redux/Vuex si dezvoltand aplicatii cu NestJS. Stack-ul utilizeaza JavaScript/TypeScript pentru dezvoltare universala, inclusiv SSR cu Next.js. Pentru styling am combinat pre-procesoare CSS, Tailwind si biblioteci de componente proprii, alaturi de Web Components pure",
            otTechstack:
              "In cadrul acestei pozitii, m-am concentrat pe mentinerea si extinderea aplicatiilor legacy construite cu AngularJS. Acest mediu a necesitat o intelegere aprofundata a tiparelor arhitecturale complexe ale framework-ului, iar interfata era stilizata exclusiv cu CSS standard. Munca a cerut o atentie deosebita la detalii intr-o abordare de dezvoltare mai traditionala",
            bmwTechstack:
              "Activitatea mea aici se axeaza pe dezvoltare full-stack moderna, in principal Vue 3 si Vuex pentru arhitectura de frontend, suplimentat de Web Components cu Lit. Backend-ul este gestionat prin NestJS, iar Nuxt.js este folosit pentru cerinte specializate. Pentru implementarea UI, combin Tailwind CSS si SCSS, respectand strict o biblioteca de componente interna",
          },
          services: {
            title: "Servicii oferite",
            shortDesc:
              "Serviciile de dezvoltare web oferite. Nu ezita sa ma contactezi!",
            warning:
              "Informatiile din aceasta sectiune ar putea fi invechite. Pentru informatii actualizate, rog contactarea directa",
            list: "Lista de servicii",
            github: "Vezi proiecte",
            webdev: {
              title: "Dezvoltarea aplicatiilor web",
              desc: "Constructia aplicatiilor interactive de tip SPA utilizand framework-uri precum React, Vue.js, sau Angular",
            },
            apidev: {
              title: "Dezvoltarea API-urilor",
              desc: "Proiectarea si dezvoltarea API-urilor de tip RESTful si integrarea cu servicii externe",
            },
            database: {
              title: "Integrarea bazelor de date",
              desc: "Implementarea unor solutii robuste de stocare si gestionare a datelor - MongoDB/PostgreSQL",
            },
            uiuxdesign: {
              title: "Design UI/UX",
              desc: "Furnizarea de interfete facile si atractive dpdv vizual, prin colaborarea activa cu designeri UX",
            },
            serverside: {
              title: "Programare Server-side",
              desc: "Dezvoltarea logicii de business pe partea de server, prin intermediul tehnologiilor specifice NodeJS/NestJS",
            },
            techconsult: {
              title: "Consultare tehnica",
              desc: "Servicii de consultanta tehnica, pentru a ajuta clientii sa planifice, sa proiecteze si sa implementeze solutii JS",
            },
          },
          api: {
            title: "Incearca-mi API-ul",
            shortDesc:
              "O harta generata cu Leaflet, cu markere care dezvaluie curiozitati despre fiecare tara, preluate de pe propriul server",
            warning:
              "Din cauza limitarilor de la furnizor, incarcarea hartii poate dura pana la un minut",
            github: "Acceseaza cod sursa",
            map: "Harta interactiva (Leaflet)",
            warning2:
              "Ajuta-ma sa populez baza de date. Tine cont insa ca inregistrarile trebuie validate înainte de a fi afisate",
            country: "Tara",
            fact: "Curiozitate",
            button: "Trimite",
            success: "Request trimis cu succes",
          },
          journeys: {
            title: "Calatorii",
            shortDesc: "O colectie de momente si memorii din calatoriile mele",
            submit: "Trimite",
            cancel: "Anuleaza",
            toggle: "Activeaza sectiunea",
            unlockDesc:
              "Accesul la sectiunea de dedesubt este restrictionat de facilitarea unei chei secrete",
            secretKey: "Insereaza cheia secreta",
          },
          notAvailable: {
            title: "Ruta curenta nu este disponibila",
            warning:
              "Incearca una din urmatoarele rute: /home/{lang}, /skills/{lang}, /services/{lang}",
            navigate: "Sau actioneaza trimitere folosind butonul",
          },
          smallScreen: {
            title:
              "Din pacate, site-ul nu este inca optimizat pentru dispozitive mobile",
            warning:
              "Accesarea este restrictionata dispozitivelor cu rezolutii mai mari",
          },
        },
      },
    },
  });

export default i18n;
