import {useEffect, useState} from "react";
import {useStore} from "../hooks/useStore";
import {useKeyboard} from "../hooks/useKeyboard";


export const TextureSelector = () => {
    const [visible, setVisible] = useState(false)
    const [activeTexture, setTexture] = useStore((state) => [state.texture, state.setTexture])
    const {dirt, grass, glass, wood, log} = useKeyboard();

    const texture = {dirt, grass, glass, wood, log}

    useEffect(() => {

        const pressedTexture = Object.entries().find(([k, v]) => v)[0];

        if(pressedTexture) {
            setTexture(pressedTexture[0]);
        }
    }, [setTexture, dirt, grass, glass, wood, log])


    useEffect(() => {
        const visibilityTimeout = setTimeout(() => {setVisible(false)}, 2000)
        setVisible(true);
        return () => {
            clearTimeout(visibilityTimeout)
        }
    }, [activeTexture])

    return visible && (
        <div className="absolute centered">TextureSelector</div>
    )

}