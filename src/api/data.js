let GUARDDIAN_API_KEY;

export const getArticle = async (term) => {
  const URL = `https://content.guardianapis.com/search?q=${term}&api-key=${GUARDDIAN_API_KEY}`;
  try {
    const response = await fetch(URL, {
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3001",
      },
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const json = await response.json();
    console.log(json.response.results);
    return json.response.results;
  } catch (error) {
    console.log(error);
  }
};
