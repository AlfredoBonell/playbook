// GitHub
const repo = {
  name: "LaunchX",
  author: "AlfredoBonell",
  language: "JavaScript",
  numberOfCommits: 100,
  stars: 199,
  forks: 299,
  issues_open: 10,
  issues_close: 10,
  getTotalIssues: function () {
    return this.issues_open + this.issues_close;
  },
  getGeneralInfo: function () {
    return `This repository ${this.name} was created by ${this.author}`;
  },
};
console.log(":::::::::::::::: GitHub - repo ::::::::::::::::");
console.log("Nombre del repo:" + repo.name);
console.log("Issues totales: " + repo.getTotalIssues());
console.log(repo.getGeneralInfo());

const issue = {
  title: "Esto es un Issue",
  repositoryNameAssociated: "LaunchX",
  status: "Valid",
  numberOfComments: 15,
  labels:
    "Aquí se van a poner el detalle que se tuvo en el desarrollo como issue",
  author: "Alfredo Bonell",
  dateCreated: "2022-04-13",
  lastUpdated: "2022-04-14",
  getTitleAndAuthor: function () {
    return this.title + " by " + this.author;
  },
  getGeneralInfo: function () {
    return `This issue was created ${this.dateCreated} and the last update was ${this.lastUpdated} by ${this.author}`;
  },
};

console.log(":::::::::::::::: GitHub - issue ::::::::::::::::");
console.log("El titulo del nuevo issue es: " + issue.title);
console.log("Número de comentarios: " + issue.numberOfComments);
console.log(issue.getTitleAndAuthor());
console.log(issue.getGeneralInfo());

const pullrequest = {
  title: "Bajar cambios nuevos",
  branchName: "dev",
  dateCreated: "2022-04-13",
  status: "Valid",
  repositoryNameAssociated: "LaunchX",
  author: "Alfredo Bonell",
  getStatus: function () {
    return this.status;
  },
  getTitleAndAuthor: function () {
    return this.title + " by " + this.author;
  },
};

console.log(":::::::::::::::: GitHub - pullrequest ::::::::::::::::");
console.log("El titulo del nuevo pull request es: " + pullrequest.title);
console.log("Nombre de la rama: " + pullrequest.branchName);
console.log(pullrequest.getStatus());
console.log(pullrequest.getTitleAndAuthor());

// Twitter
const user = {
  user: "Alfredo",
  username: "AlfredoBonell",
  bio: "Lomitos son lo máximo",
  age: 26,
  getBio: function () {
    return this.bio;
  },
};

console.log(":::::::::::::::: Twitter - user ::::::::::::::::");
console.log("Mi usuario es " + user.user);
console.log("Tengo: " + user.age + " años");
console.log(user.getBio());

const trending_topic = {
  username: "elonmusk",
  top: [
    "Breaking News: Elon Musk offered to buy Twitter",
    "Elon Musk just made a $43 billion offer to buy 100% of Twitter",
  ],
  latest: [
    "Elon Musk lanza una oferta de 40.000 millones de euros por Twitter.",
    "Elon Musk says he ‘doesn’t care about the economics’ of buying Twitter – TechCrunch",
  ],
  getTop: function () {
    return this.top;
  },
  getLatest: function () {
    return this.latest;
  },
};

console.log(":::::::::::::::: Twitter - trending_topic ::::::::::::::::");
console.log("Usuario en tendencias " + trending_topic.username);
console.log(trending_topic.getTop());
console.log(trending_topic.getLatest());

const hashtag = {
  hashtag: "#ElonMusk, #JuevesSanto, #SemanaSanta2022",
  getHashTag: function () {
    return this.hashtag;
  },
};

console.log(":::::::::::::::: Twitter - hashtag ::::::::::::::::");
console.log(hashtag.getHashTag());

// Facebook
const userFb = {
  user: "Alfredo",
  username: "AlfredoBonell",
  bio: "Lomitos son lo máximo",
  age: 26,
  friends: 500,
  groups: 5,
  getBio: function () {
    return this.bio;
  },
};

console.log(":::::::::::::::: Facebook - userFb ::::::::::::::::");
console.log("Mi usuario es " + userFb.user);
console.log("Tengo: " + userFb.friends + " amigos en Facebook");
console.log("Estoy: " + userFb.groups + " grupos en Facebook sobre tecnología");
console.log(userFb.getBio());

const post = {
  name: "Lo que he aprendido en LaunchX",
  author: "Alfredo Bonell",
  title: "JavaScript",
  date: "2022-04-14",
  likes: 4,
  loves: 2,
  getLikesAndLoves: function () {
    return (
      "Y tuvo " + this.likes + " me gustas y " + this.loves + " me encanta"
    );
  },
};

console.log(":::::::::::::::: Facebook - post ::::::::::::::::");
console.log(
  "La última publicación que hizo " + post.author + " fue sobre " + post.name
);
console.log(post.getLikesAndLoves());

const biography = {
  name: "Alfredo",
  friends: 500,
  post: 200,
  age: 26,
  country: "México",
  photos: 60,
};

console.log(":::::::::::::::: Facebook - biography ::::::::::::::::");
console.log("La biografía es de: " + biography.name);
console.log("Vive en: " + biography.country);
console.log("Y tiene: " + biography.photos);

// Uber
const profile = {
  messages: 10,
  username: "Alfredo Bonell",
  ranking: 4.89,
  travels: 900,
  getTraverls: function () {
    return "Y ha hecho " + this.travels + " viajes";
  },
  getRanking: function () {
    return this.ranking;
  },
};

console.log(":::::::::::::::: Uber - profile ::::::::::::::::");
console.log("El perfil de Uber es: " + profile.username);
console.log(
  "Y tiene una calificación como usuario de: " + profile.getRanking()
);
console.log(profile.getTraverls());

const travel = {
  point: "Home",
  destination: "Liverpool",
  savedPlaces: ["Work", "Home", "Liverpool"],
};

console.log(":::::::::::::::: Uber - travel ::::::::::::::::");
console.log(travel);
