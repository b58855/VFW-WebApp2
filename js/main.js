// JavaScript Document
// Project 2
// Visual Framewoks @ Full Sail University
// Evan Combs
window.addEventListener("DOMContentLoaded", function(){	
	//gets the element by its ID tag
	function $(id)
	{
		var element = document.getElementById(id);
		return element;
	}
	
	var importanceValue;
	var saveData = $('submit');
	var clearData = $('clearData');
	var displayData = $('displayData');
	var categorySelect = ['Programming', 'Art', 'Sound', 'Design', 'UI'];
	
	function createSelection()
	{
		var formTag = document.getElementsByTagName('form');
		var selectItem = $('select');
		var addSelect = document.createElement('select');
		
		addSelect.setAttribute('id', 'category');
		for(var i = 0; i < categorySelect.length; i++)
		{
			var addOption = document.createElement('option');
			var text = categorySelect[i];
			
			addOption.setAttribute('value', text);
			addOption.innerHTML = text;
			addSelect.appendChild(addOption);
		}
		selectItem.appendChild(addSelect);
	}
	createSelection();
	
	//hides and reveals different elements
	function toggleDisplay(input)
	{
		switch(input)
		{
			case "on":
				$('entryForm').style.display = 'none';
				$('clearData').style.display = 'inline';
				$('displayData').style.display = 'none';
				$('addNew').style.display = 'inline';
				break;
				
			case "off":
				$('entryForm').style.display = 'block';
				$('clearData').style.display = 'inline';
				$('displayData').style.display = 'inline';
				$('addNew').style.display = 'none';
				$('data').style.display = 'none';
				break;
				
			default:
				return false;
		}
	}
	
	//finds the radio that is checked
	function getImportanceRadio()
	{
		//creates array of radios
		var radios = document.forms[0].importance;	
		for(var i = 0; i < radios.length; i++)
		{
			//if radio button is checked assign its value
			if (radios[i].checked)
			{
				importanceValue = radios[i].value;
			}
		}
	}
	
	//saves the data to the local storage
	function saveToLocal()
	{
		//creates key value for local storage
		var key = Math.floor(Math.random() * 10000000000);
		getImportanceRadio();
		
		//gets form values, stores them in an object
		var data = {};
		data.category = ['Category', $('category').value];
		data.task = ['Task', $('task').value];
		data.importance = ['Importance', importanceValue];
		data.startDate = ['Start Date', $('startDate').value];
		data.endDate = ['End Date', $('endDate').value];
		data.HoursOfWork = ['Hours of Work', $('hours').value];
		data.Description = ['Description', $('description').value];
		
		//saves to local storage, converts object to string
		localStorage.setItem(key, JSON.stringify(data));
		alert('Submitted');
	}
	
	//gets data from local storage, and displays it on the screen
	function getLocalData()
	{
		toggleDisplay("on");
		var addDiv = document.createElement('div');
		addDiv.setAttribute('id', 'data');
		if(localStorage.length === 0)
		{
			var addP = document.createElement('p');
			addDiv.appendChild(addP);
			var pText = 'There are no list items.';
			addP.innerHTML = pText;
		}
		var addList = document.createElement('ul');
		addDiv.appendChild(addList);
		document.body.appendChild(addDiv);
		$('data').style.display = "block";
		for(var i = 0; i < localStorage.length; i++)
		{
			var addItem = document.createElement('li');
			addList.appendChild(addItem);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			//converts local storage string back into original object
			var object = JSON.parse(value);
			var addSubList = document.createElement('ol');
			addItem.appendChild(addSubList);
			for(var j in object)
			{
				var addSubItem = document.createElement('li');
				addSubList.appendChild(addSubItem);
				var text = object[j][0]+" "+object[j][1];
				addSubItem.innerHTML = text;
			}
		}
	}
	
	function removeLocalData()
	{
		if(localStorage.length === 0)
		{
			alert('List was Empty');
		}
		else
		{
			localStorage.clear();
			alert('Deleted List');
			window.location.reload();
			return false;
		}
	}
	
	displayData.addEventListener('click', getLocalData);	
	clearData.addEventListener('click', removeLocalData);
	saveData.addEventListener('click', saveToLocal);
});