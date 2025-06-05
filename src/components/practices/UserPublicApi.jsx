import { useState, useEffect } from "react";

export default function UserPublicApi() {
  //

  const [userArray, setUserArray] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUserArray(data);
      });
  }, []);
  //   const url = "https://jsonplaceholder.typicode.com/users";
  //   fetch(url)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setUserArray(data);
  //     });

  //   useEffect(() => {
  //     async function fetchUser() {
  //       const url = "https://jsonplaceholder.typicode.com/users";
  //       const response = await fetch(url);
  //       const data = await response.json();
  //       setUserArray(data);
  //     }
  //     fetchUser();
  //   }, []);

  return (
    <ul>
      {userArray.map((user) => {
        return (
          <li>
            {user.username} ({user.email})
          </li>
        );
      })}
    </ul>
  );
}
