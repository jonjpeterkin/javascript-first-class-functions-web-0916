function receivesAFunction(callback) {
	callback()
}

function returnsANamedFunction() {
	return function myFunction(){}
}

function returnsAnAnonymousFunction() {
	return () => {}
}