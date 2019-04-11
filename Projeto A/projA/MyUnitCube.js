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
			2, 3, 0,	//face lateral esquerda
			3, 1, 0,

			7, 3, 2,	//face superior	
			6, 7, 2, 

			6, 2, 0, 	//face anterior
			4, 6, 0,

			5, 7, 4, 	//face lateral direita
			7, 6, 4,

			3, 7, 1, 	//face posterior
			7, 5, 1,

			1, 5, 0,	//face inferior
			5, 4, 0,
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

		this.texCoords = [
			2/3,0.25,
			1, 0.25,
			1/3, 0.25,
			1, 0,

			0, 1,
			1, 1,
			0, 0,
			1, 0,

		]

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}

	updateBuffers(){}

}