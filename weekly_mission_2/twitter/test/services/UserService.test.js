const UserService = require("./../../app/services/UserService");

describe("Tests for UserService", () => {
  test("1) Create new user using the UserService", () => {
    const user = UserService.create(1, "alfredobonell", "Alfredo");
    expect(user.username).toBe("alfredobonell");
    expect(user.name).toBe("Alfredo");
    expect(user.id).toBe(1);
    expect(user.bio).not.toBeUndefined();
  });
  test("2) Get all user data in a list", () => {
    const user = UserService.create(1, "alfredobonell", "Alfredo");
    const userInfoInList = UserService.getInfo(user);
    expect(userInfoInList[0]).toBe(1);
    expect(userInfoInList[1]).toBe("alfredobonell");
    expect(userInfoInList[2]).toBe("Alfredo");
    expect(userInfoInList[3]).toBe("Sin bio");
  });

  test("3) Update username", () => {
    const user = UserService.create(1, "alfredobonell", "Alfredo");
    UserService.updateUserUsername(user, "Alfredo");
    expect(user.username).toBe("Alfredo");
  });

  test("4) Given a list of users give me the list of usernames", () => {
    const user1 = UserService.create(1, "alfredobonell1", "Alfredo");
    const user2 = UserService.create(1, "alfredobonell2", "Alfredo");
    const user3 = UserService.create(1, "alfredobonell3", "Alfredo");
    const usernames = UserService.getAllUsernames([user1, user2, user3]);
    expect(usernames).toContain("alfredobonell1");
    expect(usernames).toContain("alfredobonell2");
    expect(usernames).toContain("alfredobonell3");
  });
});
