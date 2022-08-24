export const isObjectEmpty = obj => {
  const isEmpty = Object.keys(obj).length === 0;
  return isEmpty;
};


export const getPageCount = ( data ) => {
  return Math.ceil(data.length / 10);
}