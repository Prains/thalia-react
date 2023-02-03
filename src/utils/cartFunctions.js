export function removeItemOnStorage(code, setState, state) {
    localStorage.setItem(`${state}`, localStorage.getItem(`${state}`).replace(code, ""))

    if (setState !== '') setState(localStorage.getItem(`${state}`))

}

export function makeNewCartArray(array, state) {
    let newCartArray = array.filter(item => localStorage.getItem(`${state}`).indexOf(item.acf.code) !== -1)

    return newCartArray
}

export function addItemToStorage(code, setState, state) {
    localStorage.setItem(`${state}`, localStorage.getItem(`${state}`) + code)

    if (setState !== '') setState(localStorage.getItem(`${state}`))

}

export function handleItemOnStorage(code, setState, state) {
    if (localStorage.getItem(`${state}`) !== null) {
        
        if (~localStorage.getItem(`${state}`).indexOf(code)) {

            removeItemOnStorage(code, setState, state)

            return
        }
    }

    addItemToStorage(code, setState, state)

}
