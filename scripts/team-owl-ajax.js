function downloadData(url, callbackFunction, dataType){
	var xhr = createRequestObject(dataType);
	var method = arguments[4] || "GET";
	if(xhr){
		xhr.open(method, url);
		if(arguments[4] == "POST")
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		
		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4 && xhr.status === 200){
				if(dataType == "XML")
					downloadXML(xhr, callbackFunction);
				else if(dataType == "text")
					downloadText(xhr, callbackFunction);
			}
		}
		if(arguments.length == 6){
			xhr.send(arguments[5]);
		}
		else{
			xhr.send(null);
		}
	}
	if(arguments[3] != ''){
		document.getElementById(arguments[3]).innerHTML = "<div class='cssload-loader' id='loader'><div class='cssload-side'></div><div class='cssload-side'></div>"+
		"<div class='cssload-side'></div><div class='cssload-side'></div><div class='cssload-side'></div><div class='cssload-side'></div><div class='cssload-side'></div><div class='cssload-side'></div></div>";
	
	
	}
}

function createRequestObject(dataType){
	var xhr = false;
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
		if(dataType == "XML")
			xhr.overrideMimeType("text/xml");
	}
	else if(window.ActiveXObject){
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	return xhr;
}

function downloadText(xhr, callbackFunction){
	callbackFunction(xhr.responseText);
	delete xhr;
	xhr = null;
			
}

function downloadXML(xhr, callbackFunction){
	var xmlDocument = xhr.responseXML;
	removeWhitespace(xmlDocument);
	callbackFunction(xmlDocument);
	delete xhr;
	xhr = null;
}

function removeWhitespace(xml){
	var loopIndex;
	for(loopIndex = 0; loopIndex < xml.childNodes.length; loopIndex++){
		var currentNode = xml.childNodes[loopIndex];

		if(currentNode.nodeType == 1){
			removeWhitespace(currentNode);
		}

		if(((/^\s+$/.test(currentNode.nodeValue))) && (currentNode.nodeType == 3)){
			xml.removeChild(xml.childNodes[loopIndex--]);
		}
	}
}
