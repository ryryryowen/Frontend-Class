enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

export const user1 = {
  name: "David",
  role: Role.ADMIN,
};

const user2 = {
  name: "Peter",
  role: Role.USER,
};

const user3 = {
  name: "John",
  role: Role.GUEST,
};
