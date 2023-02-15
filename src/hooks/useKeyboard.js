import {useCallback, useEffect, useState} from "react";

// map dei codici dei tasti affiancati ai movimenti
function actionByKey(key) {
    const keyActionMap = {
        KeyW: 'moveForward',
        KeyS: 'moveBackward',
        KeyA: 'moveLeft',
        KeyD: 'moveRight',
        Space: 'jump',
        Digit1: 'dirt',
        Digit2: 'grass',
        Digit3: 'glass',
        Digit4: 'wood',
        Digit5: 'log',
    }
    return keyActionMap[key];
}

// set dello stato dei movimenti
export const useKeyboard = () => {
    const [actions, setActions] = useState({
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRight: false,
        jump: false,
        dirt: false,
        grass: false,
        glass: false,
        wood: false,
        log: false,
    });

    // funzione di movimento alla pressione del tasto
    const handleKeyDown = useCallback((e) => {
        console.log(e)
        const action = actionByKey(e.code);
        if(action){
            setActions((prev) => {
                return ({
                    ...prev,
                    [action]: true
                })
            })
        }
    }, [])

    // funzione che termina il movimento al keyup del tasto
    const handleKeyUp = useCallback((e) => {
        const action = actionByKey(e.code);
        if(action){
            setActions((prev) => {
                return ({
                    ...prev,
                    [action]: false
                })
            })
        }
    }, [])

    // funzione che avvia il movimento
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
    }, [handleKeyDown, handleKeyUp])

    return actions;
}