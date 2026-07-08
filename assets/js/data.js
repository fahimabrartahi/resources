
const SITE_DATA = {
  lectures: [
    {
      term: "Term 1",
      termSlug: "term-1",
      courses: [
        { name: "Physics-I", slug: "phy131", code: "Phy131", credit: 3.00, type: "theory", lectures: [] },
        { name: "Chemistry", slug: "chem131", code: "Chem131", credit: 3.00, type: "theory", lectures: [] },
        { name: "Calculus and Geometry", slug: "math131", code: "Math131", credit: 4.00, type: "theory", lectures: [] },
        { name: "Sociology and Industrial Psychology", slug: "hum131", code: "Hum131", credit: 3.00, type: "theory", lectures: [
          {
            number: 1,                        
            date: "2026-07-05",                
            title: "Importance of Studying Social Sciences in Engineering Education",
            slide: "https://drive.google.com/file/d/1-gyM73By3wZ5PYuh_ysm5dnUP8dANuXo/view?usp=sharing"
          },
          {
            number: 2,                        
            date: "2026-07-06",                
            title: "Introduction to Psychology",
            slide: "https://drive.google.com/file/d/1Nk37lbxDkrwkyYY9QYSOyXQn1CpIHsBx/view?usp=sharing"
          }
        ] },
        { name: "Thermal Engineering", slug: "me111", code: "ME111", credit: 3.00, type: "theory", lectures: [] },
        { name: "Chemistry Sessional", slug: "chem132", code: "Chem132", credit: 1.50, type: "sessional", lectures: [] },
        { name: "Thermal Engineering Sessional", slug: "me112", code: "ME112", credit: 0.75, type: "sessional", lectures: [] },
        { name: "Welding and Foundry", slug: "me152", code: "ME152", credit: 0.75, type: "sessional", lectures: [] },
        { name: "Mechanical Drawing and AutoCAD", slug: "me172", code: "ME172", credit: 1.50, type: "sessional", lectures: [] }
      ]
    }
  ],

  books: [
    {
      term: "Term 1",
      termSlug: "term-1",
      courses: [
        { name: "Physics-I", slug: "phy131", code: "Phy131", books: [] },
        { name: "Chemistry", slug: "chem131", code: "Chem131", books: [] },
        { name: "Calculus and Geometry", slug: "math131", code: "Math131", books: [] },
        { name: "Sociology and Industrial Psychology", slug: "hum131", code: "Hum131", books: [] },
        { name: "Thermal Engineering", slug: "me111", code: "ME111", books: [] },
        { name: "Chemistry Sessional", slug: "chem132", code: "Chem132", books: [] },
        { name: "Thermal Engineering Sessional", slug: "me112", code: "ME112", books: [] },
        { name: "Welding and Foundry", slug: "me152", code: "ME152", books: [] },
        { name: "Mechanical Drawing and AutoCAD", slug: "me172", code: "ME172", books: [] }
      ]
    }
  ]
};

const CONTACT_EMAIL = "u2503105@student.cuet.ac.bd";
