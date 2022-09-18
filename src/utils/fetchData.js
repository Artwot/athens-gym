export const exerciseOptions = {
  method: 'GET',
  headers: {
    // TODO: Fix the process.env bug in the next line
    'X-RapidAPI-Key': '773f74158bmsh786bdb1f3401f7bp147c5cjsn9057990441a1',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = response.json();

  return data;
};
