var args = require("minimist")(process.argv.slice(2),{
	string: ["source","target","mode"],
	boolean: ["overwrite","noheaders"],
	default: {
		source: ".",
		target: "./LICENSES",
		mode: "output",
		overwrite: false,
		noheaders: false
	}
});

var mode = args.mode.toLowerCase();

var Core = require("./index.js")(mode, 
									args.source,
									args.target, 
									args.overwrite,
									args.noheaders);

Core.prepare();
Core.find();