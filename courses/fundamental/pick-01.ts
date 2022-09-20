interface User {
  id: string;
  name: string;
  dob: string;
  email: string;
  phone?: number;
}

const updateUser = (basic: Pick<User, "id">, payload: Required<User>): User => {
  return {
    ...basic,
    ...payload,
  };
};

const payload = {
	id: "mohan1",
  name: "Mohan Dere",
  age: 22,
  dob: "12/1/91",
  email: "aaa@test.com",
  phone:22
};

console.log(
  updateUser(
    {
      id: "mohan",
    },
    payload
  )
);