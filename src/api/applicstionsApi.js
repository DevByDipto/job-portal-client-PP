export const myApplicationsPromise = (email, accessToken) => {
  console.log(email);

  return fetch(`http://localhost:3000/applications?email=${email}`, {
    // credentials: "include",
    headers: {
      authorization: `bearer ${accessToken}`,
    },
  })
  .then((res) => res.json());
};
