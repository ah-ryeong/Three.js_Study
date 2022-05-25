import * as THREE from 'three';


export default function example() {
    //Renderer
    const canvas = document.querySelector('#three-canvas');
    const renderer = new THREE.WebGL1Renderer({ 
        canvas,
        antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);

    // Scene 장면/요소 만들기
    const scene = new THREE.Scene();

    // camera 만들기(원근카메라)
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    // 카메라위치세팅
    camera.position.z = 5;

    scene.add(camera);

    // 빛 , 조명
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.x = 1;
    light.position.z = 2;
    scene.add(light);

    // 물체세팅 (Mesh = 모양(Geometry) + 재질(Material))
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({
        color: 'red'
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // 그려주기
    const clock = new THREE.Clock();
    function draw() {
        // console.log(clock.getElapsedTime());
        const delta = clock.getDelta();

        mesh.rotation.y += 2 * delta;
        mesh.position.y += 1.5 * delta;
        // mesh.position.y = time;
        if(mesh.position.y > 5) {
            mesh.position.y = 0;
        }
        renderer.render(scene, camera);

        renderer.setAnimationLoop(draw);
    }

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

    draw();
}

