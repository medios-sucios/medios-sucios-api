module.exports = {
    "env": {
        "node": true
    },
    "extends": "eslint:recommended",
  "rules":{
    "no-console": 0,
  },
	"globals": {
		"sails": true,
		"MainController": true,
		"ReportController": true,
		"SourceController": true,
		"Report": true,
		"Source": true,
		"cloudfilesService": true,
		"metadataService": true,
		"webshotService": true
	}
};
