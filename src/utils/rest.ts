export namespace Rest {
  export const get = async <T>(path: string): Promise<T> => {
    const result = await fetch(path, { method: "GET" });
    if (!result.ok) {
      throw new Error(result.statusText);
    }

    return result.json();
  };
}
