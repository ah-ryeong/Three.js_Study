import * as THREE from 'three';


export default function example() {
    //Renderer
    const canvas = document.querySelector('#three-canvas');
    const renderer = new THREE.WebGL1Renderer({ 
        canvas,
        antialias: true,
        // 배경색 투명
        alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    // console.log(window.devicePixelRatio);
    // Three.js에서 고해상도로 표시해주고 싶을 때 사용
    renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);

    // 배경 반투명
    // renderer.setClearAlpha(0.5);
    renderer.setClearColor('#00ff00');
    renderer.setClearAlpha(0.5);

    // Scene 장면/요소 만들기
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('gray');

    // camera 만들기(원근카메라)
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    // 카메라위치세팅
    camera.position.x = 1;
    camera.position.y = 2;
    camera.position.z = 5;

    scene.add(camera);

    // 물체세팅 (Mesh = 모양(Geometry) + 재질(Material))
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({
        color: 'red'
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // 그려주기
    renderer.render(scene, camera);

    function setSize() {
        // 카메라 조정
        camera.aspect = window.innerWidth / window.innerHeight;
        // 카메라에 변화가 잇을 때 무조건 같이 실행해줘야함
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth / window.innerHeight);
        renderer.render(scene, camera);
    }

    // 이벤트
    window.addEventListener('resize', setSize);
}

