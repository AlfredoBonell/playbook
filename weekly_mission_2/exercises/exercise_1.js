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

console.log("El titulo del nuevo pull request es: " + pullrequest.title);
console.log("Nombre de la rama: " + pullrequest.branchName);
console.log(pullrequest.getStatus());
console.log(pullrequest.getTitleAndAuthor());
