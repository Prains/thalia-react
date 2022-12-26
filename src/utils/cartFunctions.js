export function removeItemOnLocal(code, setState, state) {
    localStorage.setItem(`${state}`, localStorage.getItem(`${state}`).replace(code, ""))

    if (setState !== '') setState(localStorage.getItem(`${state}`))

}

export function makeNewCartArray(array, state) {
    let tempArr = array.filter(item => localStorage.getItem(`${state}`).indexOf(item.acf.code) !== -1)

    return tempArr
}

export function addItemToLocal(code, setState, state) {
    localStorage.setItem(`${state}`, localStorage.getItem(`${state}`) + code)

    if (setState !== '') setState(localStorage.getItem(`${state}`))

}

export function handleItemOnLocal(code, setState, state) {
    if (localStorage.getItem(`${state}`) !== null) {

        if (~localStorage.getItem(`${state}`).indexOf(code)) {

            removeItemOnLocal(code, setState, state)

            return
        }
    }

    addItemToLocal(code, setState, state)

}
