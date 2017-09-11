import { Green } from './src/temp'

class Sweet {
	constructor(name:string){
		console.log("Shahrukh" + name)
	}

	color(){
		console.log("afff")
	}
}

let msr = new Sweet("is cool")
msr.color()

class Sour extends Sweet {
	constructor(name:string){ 
		super(name)
	}

}

let sha = new Green()