
const SITE_DATA = {
  lectures: [
    {
      term: "Term 1",
      termSlug: "term-1",
      courses: [
        { name: "Physics-I", slug: "phy131", code: "Phy131", credit: 3.00, type: "theory", lectures: [
          {
            number: 0,                        
            date: "2026-07-07",                
            title: "Phy-131 course plan",
            slide: "https://drive.google.com/file/d/1-gyM73By3wZ5PYuh_ysm5dnUP8dANuXo/view?usp=sharing"
          },
          {
            number: 5,                        
            date: "2026-07-15",                
            title: "Simple Harmonic Motion-SKR",
            slide: "https://drive.google.com/file/d/1jos6jmcylTZVg85j9nd95He8t26ED--E/view?usp=sharing"
          }
        ] },
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
          },
          {
            number: 3,                        
            date: "2026-07-12",                
            title: "Perception",
            slide: "https://drive.google.com/file/d/1PLuIbd3mcjNNjaWa3tVxm3WdSjm_p6KN/view?usp=sharing"
          },
          {
            number: 4,                        
            date: "2026-07-13",                
            title: "Attribution Theory",
            slide: "https://drive.google.com/file/d/1-LdLzi80dHdR3fZ57OfLtV_n2vX49Ygt/view?usp=sharing"
          }
        ] },
        { name: "Thermal Engineering", slug: "me111", code: "ME111", credit: 3.00, type: "theory", lectures: [
          {
            number: 1,                        
            date: "2026-07-06",                
            title: "Introduction",
            slide: "https://drive.google.com/file/d/14pdvEh2YRrGhKO_TWXnUM1cq_5syiDsu/view?usp=sharing"
          },
          {
            number: 2,                        
            date: "2026-07-07",                
            title: "",
            slide: ""
          }
        ] },
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
        { name: "Physics-I", slug: "phy131", code: "Phy131", books: [
          {
            title: "Properties of Matter",
            author: "Brijlal & Subramaniam",
            chapters: [
              { number: 8, title: "Surface tension", file: "https://drive.google.com/file/d/1AacgTUPeW7IeaK1gHULfbqrUB0FfoMZ2/view?usp=sharing" }
            ]
          },
          {
            title: "Physics for engineers part-1",
            author: "DR. Gias Uddin Ahmad",
            file: "https://drive.google.com/file/d/1yL9Vf006Icsi99yZ-DtbeuXnR5B-1yZq/view?usp=sharing"
          }
        ] },
        { name: "Chemistry", slug: "chem131", code: "Chem131", books: [
          {
            title: "Essentials of Physical Chemistry",
            author: "Arun Bahl, B. S. Bahl and G. D. Tuli",
            file: "https://drive.google.com/file/d/1U3QxFs_nlCos8w0zipsUHYVmlbNfYGh6/view?usp=sharing"}
        ] },
        { name: "Calculus and Geometry", slug: "math131", code: "Math131", books: [
          {
            title: "Differencial Calculus",
            author: "Muhammad, Bhattacharjee and Latif",
            file: "https://drive.google.com/drive/folders/1xHBVRlYIgd6WB6sykM1uAdjDNgbZW1zx?usp=sharing",
            chapters: [
              { number: 1, title: "Introductory pages", file: "https://drive.google.com/file/d/1JV6RVhSSdWc22GfgN2MyUpbNmceuBEvA/view?usp=sharing" },
              { number: 2, title: "Chapter 01-04", file: "https://drive.google.com/file/d/1LDjIacExmuI13i3h4ngRMdddutXw3V5X/view?usp=sharing" },
              { number: 3, title: "Chapter 05-08", file: "https://drive.google.com/file/d/1CdPT15WrEYqMWtWBubiS5i7_z4aVwJes/view?usp=sharing" },
              { number: 4, title: "Chapter 09-12", file: "https://drive.google.com/file/d/1HkBu5tMaYlV4qxg0NvHcb_wYwM7Hdtb-/view?usp=sharing" },
              { number: 5, title: "Chapter 13-16", file: "https://drive.google.com/file/d/1FMuM6No6FI15w7o55EE3BHgQXXb8XQZI/view?usp=sharing" },
              { number: 6, title: "Questions", file: "https://drive.google.com/file/d/14v-eOwZRu6pBU0H_jqhNHDqi1qzbRDd-/view?usp=sharing" }
            ]
          },
          {
            title: "Integral Calculus",
            author: "Muhammad, Bhattacharjee and Latif",
            file: "https://drive.google.com/file/d/1UdXQlGrGS31Hy2KuLXMewqHV5E52S2ZH/view?usp=sharing"}
        ] },
        { name: "Sociology and Industrial Psychology", slug: "hum131", code: "Hum131", books: [
          {
            title: "Organizational Behavior",
            author: "Stephen P. Robbins & Timothy A. Judge",
            file: "https://drive.google.com/file/d/1lJDILHk9oRj9tNRz0GOVXJQSczeUdgYU/view?usp=drive_link"
          }
        ] },
        { name: "Thermal Engineering", slug: "me111", code: "ME111", books: [] },
        { name: "Chemistry Sessional", slug: "chem132", code: "Chem132", books: [] },
        { name: "Thermal Engineering Sessional", slug: "me112", code: "ME112", books: [] },
        { name: "Welding and Foundry", slug: "me152", code: "ME152", books: [
          {
            title: "FOUNDRY LAB SHEET",
            file: "https://drive.google.com/file/d/1o1aD67CzLvNc3kjY75DiuJ4uLibYe7md/view?usp=sharing"},
          {
            title: "Experiment Sheet Foundry",
            file: "https://drive.google.com/file/d/1LSJloZfmUSMroT7H5_FTPkd1imCyM4kI/view?usp=sharing"}
        ] },
        { name: "Mechanical Drawing and AutoCAD", slug: "me172", code: "ME172", books: [
          {
            title: "Mechanical Engineering Drawing",
            author: "Dr. A. C. Mandal & Dr. Md. Q. Islam",
            chapters: [
              { number: 1, title: "Basic Elements of Mechanical Engineering", file: "https://drive.google.com/file/d/1zCCPt5a22etAl5ZeyLsXwxWBQ--0LRcv/view?usp=sharing" },
              { number: 2, title: "Dimensioning", file: "https://drive.google.com/file/d/1wDs-DDIh6H-UhusxebywegwzcDI0WH5R/view?usp=sharing" },
              { number: 3, title: "Dimensioning", file: "https://drive.google.com/file/d/151e-2IvYYZyXJMFNbk9IPOtQ4CdecTM_/view?usp=sharing" }
            ]
          }
        ] }
      ]
    }
  ]
};

const CONTACT_EMAIL = "u2503105@student.cuet.ac.bd";
