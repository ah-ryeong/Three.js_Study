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
