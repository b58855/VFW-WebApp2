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
	//var clearData = $('clearData');
	//var displayData = $('displayData');
	
	
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
	
	function getLocalData()
	{
	}
	
	function removeLocalData()
	{
	}
	
	//displayData.addEventListener('click', getLocalData);	
	//clearData.addEventListener('click', removeLocalData);
	saveData.addEventListener('click', saveToLocal);
	
	
	
});