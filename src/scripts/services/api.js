
export async function doRequest(urls) {
  return fetch(urls)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    });
}
