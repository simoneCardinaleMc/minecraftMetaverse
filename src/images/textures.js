import {
    dirtImg,
    grassImg,
    glassImg,
    woodImg,
    logImg,
} from './images'
import {NearestFilter, RepeatWrapping, TextureLoader} from "three";

const dirtTexture = new TextureLoader().load(dirtImg);
const grassTexture = new TextureLoader().load(grassImg);
const groundTexture = new TextureLoader().load(grassImg);
const glassTexture = new TextureLoader().load(glassImg);
const woodTexture = new TextureLoader().load(woodImg);
const logTexture = new TextureLoader().load(logImg);

dirtTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
groundTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;

groundTexture.magFilter = NearestFilter;
groundTexture.wrapS = RepeatWrapping;
groundTexture.wrapT = RepeatWrapping;

export {
    dirtTexture,
    grassTexture,
    groundTexture,
    glassTexture,
    woodTexture,
    logTexture
}