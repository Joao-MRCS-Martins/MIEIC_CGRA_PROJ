attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;
uniform sampler2D uSampler2;

uniform float normScale;
uniform float timeFactor;

void main() {
	float directionalOffset = timeFactor * 0.01;
	float stretchFactor = 0.5;

    vec4 offset = texture2D(uSampler2, aTextureCoord*vec2(stretchFactor, stretchFactor)+vec2(directionalOffset*normScale, directionalOffset*normScale));


	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition.x, aVertexPosition.y, aVertexPosition.z+offset.z*0.1*normScale, 1.0);
	vTextureCoord = aTextureCoord;
}

