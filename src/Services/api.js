const BASE_URL =
  "https://raw.githubusercontent.com/cabbycab/yoga_api/master/yoga_api.json";

export function getYogaPoses() {
  return fetch(BASE_URL).then((res) => res.json());
}
