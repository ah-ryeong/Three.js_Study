import * as THREE from 'three';


export default function example() {
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
    const renderer = new THREE.WebGL1Renderer({ 
        canvas,
        // 모서리 부드럽게 -> 성능은 좀 떨어짐.. 
        antialias: true
    });
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
    camera.position.x = 1;
    camera.position.y = 2;
    camera.position.z = 5;

    // Orthographic Camera (직교카메라) -> 자주는 안 하고 특정한 목적이 있을 때 사용함
    // const camera = new THREE.OrthographicCamera(
    //     // left
    //     -(window.innerWidth / window.innerHeight),
    //     // height
    //     window.innerWidth / window.innerHeight,
    //     // top
    //     1,
    //     // bottom
    //     -1,
    //     // near
    //     0.1,
    //     // far
    //     1000
    // );

    // camera.position.x = 1;
    // camera.position.y = 2;
    // camera.position.z = 5;
    // camera.lookAt(0, 0, 0);
    // camera.zoom = 0.5;
    // camera.updateProjectionMatrix();

    scene.add(camera);

    // 물체세팅 (Mesh = 모양(Geometry) + 재질(Material))
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({
        // color: 0xff0000
        // color: '#ff0000'
        color: 'red'
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // 그려주기
    renderer.render(scene, camera);
}

