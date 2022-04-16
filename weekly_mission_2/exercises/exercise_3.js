// GitHub
class Repo {
  constructor(
    name,
    author,
    language,
    numberOfCommits,
    stars,
    forks,
    issues_open,
    issues_close
  ) {
    this.name = name;
    this.author = author;
    this.language = language;
    this.numberOfCommits = numberOfCommits;
    this.stars = stars;
    this.forks = forks;
    this.issues_open = issues_open;
    this.issues_close = issues_close;
  }

  getTotalIssues() {
    return this.issues_open + this.issues_close;
  }

  getGeneralInfo() {
    return `This repository ${this.name} was created by ${this.author}`;
  }
}

const repo = new Repo(
  "LaunchX",
  "AlfredoBonell",
  "JavaScript",
  100,
  199,
  299,
  10,
  10
);
console.log(":::::::::::::::: GitHub - repo ::::::::::::::::");
console.log("Nombre del repo:" + repo.name);
console.log("Issues totales: " + repo.getTotalIssues());
console.log(repo.getGeneralInfo());

class Issue {
  constructor(
    title,
    repositoryNameAssociated,
    status,
    numberOfComments,
    labels,
    author,
    dateCreated,
    lastUpdated
  ) {
    this.title = title;
    this.repositoryNameAssociated = repositoryNameAssociated;
    this.status = status;
    this.numberOfComments = numberOfComments;
    this.labels = labels;
    this.author = author;
    this.dateCreated = dateCreated;
    this.lastUpdated = lastUpdated;
  }

  getTitleAndAuthor() {
    return this.title + " by " + this.author;
  }

  getGeneralInfo() {
    return `This issue was created ${this.dateCreated} and the last update was ${this.lastUpdated} by ${this.author}`;
  }
}

const issue = new Issue(
  "Esto es un Issue",
  "LaunchX",
  "Valid",
  15,
  "Aquí se van a poner el detalle que se tuvo en el desarrollo como issue",
  "Alfredo Bonell",
  "2022-04-13",
  "2022-04-14"
);
console.log(":::::::::::::::: GitHub - issue ::::::::::::::::");
console.log("El titulo del nuevo issue es: " + issue.title);
console.log("Número de comentarios: " + issue.numberOfComments);
console.log(issue.getTitleAndAuthor());
console.log(issue.getGeneralInfo());

class PullRequest {
  constructor(
    title,
    branchName,
    dateCreated,
    status,
    repositoryNameAssociated,
    author
  ) {
    this.title = title;
    this.branchName = branchName;
    this.dateCreated = dateCreated;
    this.status = status;
    this.repositoryNameAssociated = repositoryNameAssociated;
    this.author = author;
  }

  getStatus() {
    return this.status;
  }

  getTitleAndAuthor() {
    return this.title + " by " + this.author;
  }
}

const pullrequest = new PullRequest(
  "Bajar cambios nuevos",
  "dev",
  "2022-04-13",
  "Valid",
  "LaunchX",
  "Alfredo Bonell"
);
console.log(":::::::::::::::: GitHub - pullrequest ::::::::::::::::");
console.log("El titulo del nuevo pull request es: " + pullrequest.title);
console.log("Nombre de la rama: " + pullrequest.branchName);
console.log(pullrequest.getStatus());
console.log(pullrequest.getTitleAndAuthor());

// Twitter
class User {
  constructor(user, username, bio, age) {
    this.user = user;
    this.username = username;
    this.bio = bio;
    this.age = age;
  }

  getBio() {
    return this.bio;
  }
}
const user = new User("Alfredo", "AlfredoBonell", "Lomitos son lo máximo", 26);
console.log(":::::::::::::::: Twitter - user ::::::::::::::::");
console.log("Mi usuario es " + user.user);
console.log("Tengo: " + user.age + " años");
console.log(user.getBio());

class TrendingTopic {
  constructor(username, top, latest) {
    this.username = username;
    this.top = top;
    this.latest = latest;
  }

  getTop() {
    return this.top;
  }

  getLatest() {
    return this.latest;
  }
}

const trending_topic = new TrendingTopic(
  "elonmusk",
  [
    "Breaking News: Elon Musk offered to buy Twitter",
    "Elon Musk just made a $43 billion offer to buy 100% of Twitter",
  ],
  [
    "Elon Musk lanza una oferta de 40.000 millones de euros por Twitter.",
    "Elon Musk says he ‘doesn’t care about the economics’ of buying Twitter – TechCrunch",
  ]
);

console.log(":::::::::::::::: Twitter - trending_topic ::::::::::::::::");
console.log("Usuario en tendencias " + trending_topic.username);
console.log(trending_topic.getTop());
console.log(trending_topic.getLatest());

class HashTag {
  constructor(hashtag) {
    this.hashtag = hashtag;
  }

  getHashTag() {
    return this.hashtag;
  }
}

const hashtag = new HashTag("#ElonMusk, #JuevesSanto, #SemanaSanta2022");
console.log(":::::::::::::::: Twitter - hashtag ::::::::::::::::");
console.log(hashtag.getHashTag());

// Facebook
class UserFb {
  constructor(user, username, bio, age, friends, groups) {
    this.user = user;
    this.username = username;
    this.bio = bio;
    this.age = age;
    this.friends = friends;
    this.groups = groups;
  }

  getBio() {
    return this.bio;
  }
}

const userFb = new UserFb(
  "Alfredo",
  "AlfredoBonell",
  "Lomitos son lo máximo",
  26,
  500,
  5
);
console.log(":::::::::::::::: Facebook - userFb ::::::::::::::::");
console.log("Mi usuario es " + userFb.user);
console.log("Tengo: " + userFb.friends + " amigos en Facebook");
console.log("Estoy: " + userFb.groups + " grupos en Facebook sobre tecnología");
console.log(userFb.getBio());

class Post {
  constructor(name, author, title, date, likes, loves) {
    this.name = name;
    this.author = author;
    this.title = title;
    this.date = date;
    this.likes = likes;
    this.loves = loves;
  }

  getLikesAndLoves() {
    return (
      "Y tuvo " + this.likes + " me gustas y " + this.loves + " me encanta"
    );
  }
}

const post = new Post(
  "Lo que he aprendido en LaunchX",
  "Alfredo Bonell",
  "JavaScript",
  "2022-04-14",
  4,
  2
);
console.log(":::::::::::::::: Facebook - post ::::::::::::::::");
console.log(
  "La última publicación que hizo " + post.author + " fue sobre " + post.name
);
console.log(post.getLikesAndLoves());

class Biography {
  constructor(name, friends, post, age, country, photos) {
    this.name = name;
    this.friends = friends;
    this.post = post;
    this.age = age;
    this.country = country;
    this.photos = photos;
  }
}
const biography = new Biography("Alfredo", 500, 200, 26, "México", 60);
console.log(":::::::::::::::: Facebook - biography ::::::::::::::::");
console.log("La biografía es de: " + biography.name);
console.log("Vive en: " + biography.country);
console.log("Y tiene: " + biography.photos);

// Uber

class Profile {
  constructor(messages, username, ranking, travels) {
    this.messages = messages;
    this.username = username;
    this.ranking = ranking;
    this.travels = travels;
  }

  getTraverls() {
    return "Y ha hecho " + this.travels + " viajes";
  }

  getRanking() {
    return this.ranking;
  }
}

const profile = new Profile(10, "Alfredo Bonell", 4.89, 900);
console.log(":::::::::::::::: Uber - profile ::::::::::::::::");
console.log("El perfil de Uber es: " + profile.username);
console.log(
  "Y tiene una calificación como usuario de: " + profile.getRanking()
);
console.log(profile.getTraverls());

class Travel {
  constructor(point, destination, savedPlaces) {
    this.point = point;
    this.destination = destination;
    this.savedPlaces = savedPlaces;
  }
}

const travel = new Travel("Home", "Liverpool", ["Work", "Home", "Liverpool"]);
console.log(":::::::::::::::: Uber - travel ::::::::::::::::");
console.log(travel);
