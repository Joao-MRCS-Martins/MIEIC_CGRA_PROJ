attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;//model view matrix
uniform mat4 uPMatrix;//projetion matrix
uniform mat4 uNMatrix;//normal transformation matrix

varying vec2 vTextureCoord;
uniform sampler2D uSampler2 ;
uniform sampler2D uSampler3;
varying vec4 coords;


void main() {
	vec3 offset=vec3(0.0,0.0,0.0);
	
	vTextureCoord = aTextureCoord;
	
	offset = texture2D(uSampler2,vTextureCoord).b*aVertexNormal;
		//offset=aVertexNormal;
	//offset = texture2D(uSampler2,aTextureCoord*vec2(2.0,2.0));

	coords =  vec4(aVertexPosition+offset, 1.0);
	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition+offset, 1.0);
}

