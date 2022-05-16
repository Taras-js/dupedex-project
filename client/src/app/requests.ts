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

<<<<<<< HEAD
=======
export async function getCopiedProductById(payload: number): Promise<Array<any>> {
  return await fetch("http://localhost:3000/api/products", {
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
>>>>>>> fix_modal_api
