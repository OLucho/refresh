export const api = {
  models: {
    list: async () => {
      return fetch(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTIOlHczO9rziE9R_5jf2fb0t880-IjGpaXL5M9sG7XNq9D8P2dLM8T1QV7gjN8dm4wbu1nATS1Nm7j/pub?output=csv",
        {cache: "no-cache"},
      )
        .then((res) => res.text())
        .then((text) =>
          // text
          //   .split("\n")
          //   .slice(1)
          //   .map((line) => line.split(",")),
          // this returns an array of arrays, i need an array of objects (each model)
          // i need to map the array of arrays to an array of objects

          text
            .split("\n")
            .slice(1)
            .map((line) => {
              const [
                id,
                name,
                lastName,
                gender,
                medidas,
                foot,
                eyesColor,
                hairColor,
                instagram,
                img,
              ] = line.split(",");

              return {
                id,
                name,
                lastName,
                gender,
                medidas,
                foot,
                eyesColor,
                hairColor,
                instagram,
                img,
              };
            }),
        );
    },
  },
};
