import { environment } from "../../../../environments/environment";

export async function getHTTP(url: string) {
  const request = await fetch(
    environment.api + url,
    {
      method: "GET",
      headers: {
        "X-Auth-Token": environment.token,
        Accept: "application/json",
      },
    });

  return await request.json();
}
