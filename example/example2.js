var smartTemplateProcessor = require('../smarttemplateprocessor.js');

var template = "Hello {{company.nome}}! How are you {{company.nome}}? This is your {{company.email.type}} e-mail address {{company.email.address}}?" 
+ "\n" 
+ "Hello <%= company.nome %>! How are you <%= company.nome %>? This is your <%= company.email.type %> e-mail address <%= company.email.address %>?";

var obj = {
		company:{
			nome: "JulioGold",
			email: {
				address: "julio.gold@gmail.com",
				type: "Comercial"
			}
		}
	};

console.log(smartTemplateProcessor.processTemplate(template, obj));