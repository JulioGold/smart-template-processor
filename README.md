# smart-template-processor
You can process an template with an context object.  


## Usage  

```
npm install smart-template-processor
```

### Simple example  

```javascript
var smartTemplateProcessor = require('smart-template-processor');

var template = "Hello {{nome}}! How are you {{nome}}? Your e-mail address is: {{email.address}}?";
var obj = {
		nome: "JulioGold",
		email: {
			address: "julio.gold@gmail.com"
		}
	};

console.log(smartTemplateProcessor.processTemplate(template, obj));
```  

### We really can go more deep and complex 

```javascript
var smartTemplateProcessor = require('smart-template-processor');

var template = "Hello {{company.nome}}! How are you {{company.nome}}? This is your {{company.email.type}} e-mail address {{company.email.address}}?";
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
```  
Thanks  