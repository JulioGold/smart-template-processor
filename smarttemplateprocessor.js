var smartTemplateProcessor = {
	processTemplate:ProcessTemplate
};

module.exports = smartTemplateProcessor;

function ProcessTemplate(template, contextObj) {
	
	if(!!!template) {
		return "";
	} else if(!!!contextObj) {
		return template;
	}
	
	var tpl = template.replace(/\{\{([\w\.]+)\}\}/igm,
		function (groupFirst,groupSecond) {

			var retorno = deepFind(contextObj, groupSecond);
			
			if (retorno != null) {
				return retorno;
			}else{
				return "";
			}
		});

	return tpl;
};

function deepFind(obj, path) {
	var paths = path.split('.');
	var currentObj = obj;

	for (var i = 0; i < paths.length; ++i) {
		if (currentObj[paths[i]] == undefined) {
			return undefined;
		} else {
			currentObj = currentObj[paths[i]];
		}
	}
	
	return currentObj;
};