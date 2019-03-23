class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-0.5, -0.5, -0.5,	//0
			-0.5, -0.5, 0.5,	//1
			-0.5, 0.5, -0.5,	//2
			-0.5,0.5,0.5,		//3
			0.5,-0.5,-0.5,		//4
			0.5,-0.5,0.5,		//5
			0.5,0.5,-0.5,		//6
			0.5,0.5,0.5,		//7

			-0.5, -0.5, -0.5,	//0
			-0.5, -0.5, 0.5,	//1
			-0.5, 0.5, -0.5,	//2
			-0.5,0.5,0.5,		//3
			0.5,-0.5,-0.5,		//4
			0.5,-0.5,0.5,		//5
			0.5,0.5,-0.5,		//6
			0.5,0.5,0.5,		//7
			
			-0.5, -0.5, -0.5,	//0
			-0.5, -0.5, 0.5,	//1
			-0.5, 0.5, -0.5,	//2
			-0.5,0.5,0.5,		//3
			0.5,-0.5,-0.5,		//4
			0.5,-0.5,0.5,		//5
			0.5,0.5,-0.5,		//6
			0.5,0.5,0.5		//7
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 3, 2,	//face lateral esquerda
			0, 1, 3,
			2, 3, 7,	//face superior	
			2, 7, 6, 
			0, 2, 6, 	//face anterior
			0, 6, 4,
			4, 7, 5, 	//face lateral direita
			4, 6, 7,
			1, 7, 3, 	//face posterior
			1, 5, 7,
			0, 5, 1,	//face inferior
			0, 4, 5
		];

		this.normals = [
			-1,0,0,
			-1,0,0,
			-1,0,0,
			-1,0,0,

			1,0,0,
			1,0,0,
			1,0,0,
			1,0,0,

			0,-1,0,
			0,-1,0,
			0,1,0,
			0,1,0,

			0,-1,0,
			0,-1,0,
			0,1,0,
			0,1,0,

			0,0,-1,
			0,0,1,
			0,0,-1,
			0,0,1,

			0,0,-1,
			0,0,1,
			0,0,-1,
			0,0,1,


		];

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}

	updateBuffers(){}

}