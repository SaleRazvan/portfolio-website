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
            email: "Write E-mail",
          },
          header: {
            home: "Home",
            skills: "Skills",
            services: "Services",
            api: "Play with my API",
          },
          home: {
            title: "Welcome",
            shortDesc:
              "I'm Sale Razvan, and this is where I share my work, passions, and projects. Whether you're here to explore my creations or connect, I'm glad you stopped by. Take a look around and feel free to reach out!",
            longDesc:
              "Dynamic Fullstack JavaScript/TypeScript Developer adept at building high-performance, scalable web applications using React, Node.js, and cutting-edge database technologies",
            workStatus: "Work Status",
            available: "Available for work",
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
            title: "Skills and expertise",
            shortDesc:
              "Dive into my tech toolkit: a personal journey through the technologies and skills that define my coding approach.",
            warning:
              "Please keep in mind: the following list is not exhaustive",
            linkedin: "Full skills overview",
            list: "List of skills",
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
            title: "Play with my API",
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
            email: "Scrieti E-mail",
          },
          header: {
            home: "Acasa",
            skills: "Competente",
            services: "Servicii oferite",
            api: "Incearca-mi API-ul",
          },
          home: {
            title: "Bun venit",
            shortDesc:
              "Sunt Sale Razvan si aici public munca, pasiunile și proiectele mele. Fie ca esti aici sa explorezi proiectele sau sa ma contactezi, ma bucur ca esti aici. Arunca o privire si nu ezita sa ma contactezi!",
            longDesc:
              "Dezvoltator Fullstack JavaScript/TypeScript, specializat in construirea aplicatiilor web scalabile, utilizand React, Node.js si tehnologii de baze de date de ultima generatie",
            workStatus: "Starea de munca",
            available: "Disponibil",
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
            highschool: "Liceul de Informatica Tiberiu Popoviciu",
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
            title: "Competente si expertiza",
            shortDesc:
              "Competentele mele tehnice, si tehnologiile care imi definesc abordarea de programare",
            warning: "Atentie: lista prezenta nu este exhaustiva",
            linkedin: "Lista completa",
            list: "Lista de competente",
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
