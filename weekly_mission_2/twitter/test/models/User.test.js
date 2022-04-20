const User = require("./../../app/models/user");

describe("Unit Tests for User class", () => {
  test("1) Create an User object", () => {
    //   const user = new User(1, "alfredobonell", "Alfredo", "Bio", "2022-04-19", "2022-04-19");
    const user = new User(1, "alfredobonell", "Alfredo", "Bio");
    expect(user.id).toBe(1);
    expect(user.username).toBe("alfredobonell");
    expect(user.name).toBe("Alfredo");
    expect(user.bio).toBe("Bio");
    //   expect(user.dateCreated).toBe("2022-04-19");
    //   expect(user.lastUpdated).toBe("2022-04-19");
    expect(user.dateCreated).not.toBeUndefined();
    expect(user.lastUpdated).not.toBeUndefined();
  });

  test("3) Add getters", () => {
    const user = new User(1, "alfredobonell", "Alfredo", "Bio");
    expect(user.id).toBe(1);
    expect(user.username).toBe("alfredobonell");
    expect(user.name).toBe("Alfredo");
    expect(user.bio).toBe("Bio");
    expect(user.dateCreated).not.toBeUndefined();
    expect(user.lastUpdated).not.toBeUndefined();
  });

  test("4) Add setters", () => {
    const user = new User(1, "alfredobonell", "Alfredo", "Bio");
    user.setUsername = "Alfredo";
    expect(user.username).toBe("Alfredo");

    user.setBio = "New bio"
    expect(user.bio).toBe("New bio");
  });
});
