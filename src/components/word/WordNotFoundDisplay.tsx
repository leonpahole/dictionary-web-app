export const WordNotFoundDisplay = () => {
  return (
    <div className="mt-33 flex flex-col items-center text-center">
      <p className="text-hl">😕</p>
      <h1 className="mt-11 text-hs font-bold">No definitions found</h1>
      <p className="mt-6 text-bm text-gray-300">
        Sorry pal, we couldn&apos;t find definitions for the word you were
        looking for. You can try the search again at later time or head to the
        web instead.
      </p>
    </div>
  );
};
