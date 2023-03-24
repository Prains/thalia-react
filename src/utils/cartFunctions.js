export const removeItemOnStorage = (code, setState, state) => {
  localStorage.setItem(state, localStorage.getItem(state).replace(code, ""));
  setState && setState(localStorage.getItem(state));
};

export const makeNewCartArray = (array, state) =>
  array.filter((item) => ~localStorage.getItem(state).indexOf(item.acf.code));

export const addItemToStorage = (code, setState, state) => {
  localStorage.setItem(state, `${localStorage.getItem(state)}${code}`);
  setState && setState(localStorage.getItem(state));
};

export const handleItemOnStorage = (code, setState, state) => {
  localStorage.getItem(state) !== null
    ? ~localStorage.getItem(state).indexOf(code)
      ? removeItemOnStorage(code, setState, state)
      : addItemToStorage(code, setState, state)
    : addItemToStorage(code, setState, state);
};
