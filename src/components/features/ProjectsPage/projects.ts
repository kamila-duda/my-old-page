import ang from "assets/images/ang.png";
import astronomy from "assets/images/astronomy.png";
import cantor from "assets/images/cantor.png";
import diet from "assets/images/diet.png";
import lansoft from "assets/images/lansoft.png";
import letters from "assets/images/letterts.png";
import money from "assets/images/money.png";
import todo from "assets/images/todo.png";
import kissi from "assets/images/pd.png";
import budo from "assets/images/budo.png";
import movies from "assets/images/movies.png";
import kidsAng from "assets/images/angA.png";
import hair from "assets/images/hairdresser.png";
import todoVue from "assets/images/todoVue.png";
import starWars from "assets/images/starWars.png";
import artN from "assets/images/artN.png";

export type ItemsType = {
  image: string;
  name: string;
  code?: string;
  link: string;
  tags: string[];
};

export interface ProjectTypes {
  title: string;
  description: string;
  items: ItemsType[];
}

export const projects = [
  {
    title: "Web applications",
    description:
      "This category includes web applications using the React.js, Redux and Saga technologies. The Movie Browser project was made by a team of three. Movies Browser and Currency converter applications use API, ToDo List and Movies Browser allow to save data in Local Storage.",
    items: [
      {
        image: movies,
        name: "movies browser",
        code: "https://github.com/kamila-duda/movies-browser",
        link: "https://kamila-duda.github.io/movies-browser/",
        tags: ["React.js", "Styled Components", "Redux", "Saga"],
      },
      {
        image: todo,
        name: "to do list",
        code: "https://github.com/kamila-duda/todo-list-react-redux",
        link: "https://kamila-duda.github.io/todo-list-react-redux/",
        tags: ["React.js", "StyledComponents", "Redux", "Saga"],
      },
      {
        image: starWars,
        name: "encyclopedia star wars",
        code: "https://github.com/kamila-duda/encyclopedia-star-wars",
        link: "https://kamila-duda.github.io/encyclopedia-star-wars/",
        tags: ["React.js", "Styled Components", "Redux", "Saga"],
      },
      {
        image: todoVue,
        name: "to do list",
        code: "https://github.com/kamila-duda/todo-list-vue",
        link: "https://kamila-duda.github.io/todo-list-vue/",
        tags: ["Vue.js", "CSS"],
      },
      {
        image: cantor,
        name: "currency converter",
        code: "https://github.com/kamila-duda/currency-converter-react",
        link: "https://kamila-duda.github.io/currency-converter-react/",
        tags: ["React.js", "Styled Components"],
      },
    ],
  },
  {
    title: "Games",
    description:
      "The Piggy Bank was created to teach children to count money, and the Letter game is intended to introduce people to the layout of the letters on the keyboard. The quiz allows to test knowledge of English.",
    items: [
      {
        image: kidsAng,
        name: "enaglish for kids",
        code: "https://github.com/kamila-duda/angielski",
        link: "https://kamila-duda.github.io/angielski/",
        tags: ["React.js", "StyledComponents", "Redux", "Saga"],
      },
      {
        image: letters,
        name: "letters game",
        code: "https://github.com/kamila-duda/letters_game",
        link: "https://kamila-duda.github.io/letters_game/",
        tags: ["HTML", "CSS", "Sass", "JavaScript"],
      },
      {
        image: ang,
        name: "engilsh quiz",
        code: "https://github.com/kamila-duda/angielski_quiz",
        link: "https://kamila-duda.github.io/angielski_quiz/",
        tags: ["HTML", "CSS", "JavaScript"],
      },
      {
        image: money,
        name: "money game",
        code: "https://github.com/kamila-duda/coins",
        link: "https://kamila-duda.github.io/coins/",
        tags: ["HTML", "CSS", "Sass", "JavaScript"],
      },
    ],
  },
  {
    title: "Websites",
    description:
      "I made a diet recipe page where you can create your own shopping list and save it to Local Storage. Simple site about astronomy with a quiz, and also sample websites for companies and individuals.",
    items: [
      {
        image: diet,
        name: "Dąbrowska diet",
        code: "https://github.com/kamila-duda/dieta",
        link: "https://kamila-duda.github.io/dieta/",
        tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      },
      {
        image: astronomy,
        name: "astronomy webside",
        code: "https://github.com/kamila-duda/astronomia",
        link: "https://kamila-duda.github.io/astronomia/",
        tags: ["HTML", "CSS", "JavaScript"],
      },
      {
        image: lansoft,
        name: "company website",
        code: "https://github.com/kamila-duda/lansoft",
        link: "https://kamila-duda.github.io/lansoft/",
        tags: ["HTML", "CSS", "Sass", "JavaScript"],
      },
      {
        image: kissi,
        name: "personal website",
        link: "http://www.iisi.pcz.pl/~pduda/index.php",
        tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
      },
      {
        image: budo,
        name: "company website",
        link: "http://budowlana.atwebpages.com/",
        tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      },
      {
        image: hair,
        name: "company website",
        code: "https://github.com/kamila-duda/hairdresser",
        link: "https://kamila-duda.github.io/hairdresser/",
        tags: ["HTML", "SCSS", "JavaScript"],
      },
      {
        image: artN,
        name: "personal website",
        link: "http://mariusznawrot.myartsonline.com/",
        tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      },
    ],
  },
];
