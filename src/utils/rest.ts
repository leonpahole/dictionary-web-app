export namespace Rest {
  export const get = async <T>(path: string): Promise<T> => {
    const result = await fetch(path, { method: "GET" });
    return result.json();
  };
}
