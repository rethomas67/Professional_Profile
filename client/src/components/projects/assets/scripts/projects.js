import park from "../images/park.png";
import animated_park from "../images/Animation-Park.gif";
import meow_market from "../images/meowmarket.png";
import animated_meow_market from "../images/Meow-Market.gif";
import health_quest from "../images/healthquest.png";
import animated_health_quest from "../images/Health-Quest.gif";
import tech_blog from "../images/techblog.png";
import animated_tech_blog from "../images/Tech-Blog.gif";
import weather_dashboard from "../images/weatherdashboard.png";
import animated_weather_dashboard from "../images/Weather-Dashboard.gif";
import coding_quiz from "../images/codingquiz.png";
import animated_coding_quiz from "../images/Coding-Quiz.gif";

const projects = [
  {
    id: 1,
    title: "Meow Market",
    type: "Mern",
    image: meow_market,
    animated_image: animated_meow_market,
    deployed: "https://group-fivemeowmarket-c7eee0758978.herokuapp.com/",
    github: "https://github.com/eepitsporsche/meow_market",
  },
  {
    id: 2,
    title: "Health Quest",
    type: "MVC/MySQL",
    image: health_quest,
    animated_image: animated_health_quest,
    deployed: "https://groupfour-healthquest-5415f1d2dd04.herokuapp.com/",
    github: "https://github.com/Jenina52112/HealthQuest-App",
  },
  {
    id: 3,
    title: "Parks Planner",
    type: "Javascript/Server-Side-Api",
    image: park,
    animated_image: animated_park,
    deployed: "https://adamh1223.github.io/parks-planner/",
    github: "https://github.com/adamh1223/parks-planner/",
  },
  {
    id: 4,
    title: "Tech Blog",
    type: "MVC/MySQL",
    image: tech_blog,
    animated_image: animated_tech_blog,
    deployed: "https://bcs-mvc-tech-blog-976f30c4ac39.herokuapp.com/",
    github: "https://github.com/rethomas67/MVC_Tech_Blog/",
  },
  {
    id: 5,
    title: "Weather API",
    type: "Javascript/Server-Side-Api",
    image: weather_dashboard,
    animated_image: animated_weather_dashboard,
    deployed: "https://rethomas67.github.io/Weather_Dashboard/",
    github: "https://github.com/rethomas67/Weather_Dashboard/",
  },

  {
    id: 6,
    title: "Coding Quiz",
    type: "Javascript/Client-Side-Api",
    image: coding_quiz,
    animated_image: animated_coding_quiz,
    deployed: "https://rethomas67.github.io/Coding_Quiz_Challenge/",
    github: "https://github.com/rethomas67/Coding_Quiz_Challenge/",
  },
];

export default projects;
