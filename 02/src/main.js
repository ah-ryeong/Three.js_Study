import * as THREE from 'three';

// console.log(THREE);

// 동적으로 캔버스 조립하기
// const renderer = new THREE.WebGL1Renderer();
// 사이즈지정
// renderer.setSize(window.innerWidth, window.innerHeight);
// 캔버스
// console.log(renderer.domElement);
// document.body.appendChild(renderer.domElement);

const canvas = document.querySelector('#three-canvas');
// const renderer = new THREE.WebGL1Renderer({ canvas: canvas });
const renderer = new THREE.WebGL1Renderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

// Scene 장면/요소 만들기
const scene = new THREE.Scene();

// camera 만들기(원근카메라)
const camera = new THREE.PerspectiveCamera(
    // 시야각
    75,
    // 종횡비(aspect)
    window.innerWidth / window.innerHeight,
    // near
    0.1,
    // far
    1000
);
// 카메라위치세팅
camera.position.z = 5;
scene.add(camera);