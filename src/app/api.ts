export const api = {
  models: {
    list: async () => {
      return fetch(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTIOlHczO9rziE9R_5jf2fb0t880-IjGpaXL5M9sG7XNq9D8P2dLM8T1QV7gjN8dm4wbu1nATS1Nm7j/pub?output=csv",
        {next: {tags: ["models"]}},
      )
        .then((res) => res.text())
        .then((text) =>
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
                pants,
                skin,
                shirt,
                hips,
                height,
                img,
                isTeen,
                isNewFace,
              ] = line.split(",");

              const isNewFaceClean = isNewFace.replace(/\r/g, "");

              return {
                id,
                name,
                lastName,
                gender,
                medidas,
                foot,
                eyesColor,
                hairColor,
                pants,
                skin,
                shirt,
                hips,
                height,
                img,
                isTeen,
                isNewFace: isNewFaceClean,
              };
            }),
        );
    },
  },
};
