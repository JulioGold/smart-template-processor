var smartTemplateProcessor = require('../smarttemplateprocessor.js');

var template = "Hello {{nome}}! How are you {{nome}}? Your e-mail address is: {{email.address}}?"
+ "\n"
+ "Hello <%= nome %>! How are you <%= nome %>? Your e-mail address is: <%= email.address %>?";

var obj = {
		nome: "JulioGold",
		email: {
			address: "julio.gold@gmail.com"
		}
	};

console.log(smartTemplateProcessor.processTemplate(template, obj));