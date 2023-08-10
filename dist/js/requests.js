export const eventPost = (newEvent) =>
  axios
    .post(
      "https://artistlanding-41bf4-default-rtdb.firebaseio.com/events.json",
      { ...newEvent }
    )
    .catch((error) => {
      console.log(error);
    });

export const subscribersPost = (newsLetterMail) =>
  axios
    .post(
      "https://artistlanding-41bf4-default-rtdb.firebaseio.com/newsLetter-subscriptors.json",
      {
        newsLetterMail,
      }
    )
    .catch((error) => {
      console.log(error);
    });

export const getAPISubscribers = () =>
  axios
    .get(
      "https://artistlanding-41bf4-default-rtdb.firebaseio.com/newsLetter-subscriptors.json"
    )
    .then((response) => {
      const subscribers = [];
      for (let key in response.data) {
        const mappedItem = {
          id: key,
          ...response.data[key],
        };
        subscribers.push(mappedItem);
      }
      return subscribers;
    })
    .catch((error) => {
      console.log(error);
    });

export const getAPIEvents = () =>
  axios
    .get("https://artistlanding-41bf4-default-rtdb.firebaseio.com/events.json")
    .then((response) => {
      const events = [];
      for (let key in response.data) {
        const mappedItem = {
          id: key,
          ...response.data[key],
        };
        events.push(mappedItem);
      }
      return events;
    })
    .catch((error) => {
      console.log(error);
    });
