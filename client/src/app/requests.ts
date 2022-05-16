export function getProducts(): Promise<Array<any>> {
  return fetch("/api/data")
    .then((response) => response.json())
    .then((res) => res);
}

export function getProductByActualId(id: string): Promise<Array<any>> {
  return fetch(`/api/:?id=${id}`)
    .then((response) => response.json())
    .then((res) => res);
}

export function getProductById(payload: number): Promise<Array<any>> {
  return fetch("/api/id", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      payload,
    }),
  })
    .then((response) => response.json())
    .then((res) => res);
}

export function getReviews(): Promise<Array<any>> {
  return fetch("/api/data/reviews")
    .then((response) => response.json())
    .then((res) => res);
}

export function searchItem(payload: string): Promise<Array<any>> {
  return fetch("/api/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      payload,
    }),
  })
    .then((response) => response.json())
    .then((res) => res);
}
