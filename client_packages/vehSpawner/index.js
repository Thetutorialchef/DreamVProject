mp.game.graphics.notify('~r~vehSpawner ~w~by ~b~Anzo');



let browser = mp.browsers.new("package://vehSpawner/index.html");



var bindVirtualKeys = {

  F6: 0x75

};



mp.keys.bind(bindVirtualKeys.F6, true, function() {

	browser.execute("toggleVehSpawner();");

});



function toggleVehSpawner() {

	if(document.getElementById("vehs").style.display == "block"){

		document.getElementById("commercials").style.display = "none";

		document.getElementById("boats").style.display = "none";

		document.getElementById("compacts").style.display = "none";

		document.getElementById("coupes").style.display = "none";

		document.getElementById("cycles").style.display = "none";

		document.getElementById("emergency").style.display = "none";

		document.getElementById("helicopters").style.display = "none";

		document.getElementById("industrial").style.display = "none";

		document.getElementById("military").style.display = "none";

		document.getElementById("planes").style.display = "none";

		document.getElementById("sportClassic").style.display = "none";

		document.getElementById("service").style.display = "none";

		document.getElementById("train").style.display = "none";

		document.getElementById("trailer").style.display = "none";

		document.getElementById("utility").style.display = "none";

		document.getElementById("sedans").style.display = "none";

		document.getElementById("suvs").style.display = "none";

		document.getElementById("vans").style.display = "none";

		document.getElementById("super").style.display = "none";

		document.getElementById("off-road").style.display = "none";

		document.getElementById("motorcycles").style.display = "none";

		document.getElementById("sport").style.display = "none";

		document.getElementById("muscle").style.display = "none";

		document.getElementById("main").style.display = "none";

		document.getElementById("vehs").style.display = "none";

		document.getElementById("cols").style.display = "none";

		mp.trigger("cursorOff");

	}

	else{

		document.getElementById("main").style.display = "block";

		document.getElementById("vehs").style.display = "block";

		document.getElementById("cols").style.display = "block";

		mp.trigger("cursorOn");

	}

}



function clickedID(clicked_id)

{

	if(clicked_id == "r1c1") { // Boats

		document.getElementById("main").style.display = "none";

		document.getElementById("boats").style.display = "block";

	}

	else if(clicked_id == "br4c5") { // Back

		document.getElementById("commercials").style.display = "none";

		document.getElementById("boats").style.display = "none";

		document.getElementById("compacts").style.display = "none";

		document.getElementById("coupes").style.display = "none";

		document.getElementById("cycles").style.display = "none";

		document.getElementById("emergency").style.display = "none";

		document.getElementById("helicopters").style.display = "none";

		document.getElementById("industrial").style.display = "none";

		document.getElementById("military").style.display = "none";

		document.getElementById("service").style.display = "none";

		document.getElementById("train").style.display = "none";

		document.getElementById("trailer").style.display = "none";

		document.getElementById("utility").style.display = "none";

		document.getElementById("planes").style.display = "none";

		document.getElementById("sportClassic").style.display = "none";

		document.getElementById("sedans").style.display = "none";

		document.getElementById("suvs").style.display = "none";

		document.getElementById("vans").style.display = "none";

		document.getElementById("super").style.display = "none";

		document.getElementById("off-road").style.display = "none";

		document.getElementById("motorcycles").style.display = "none";

		document.getElementById("sport").style.display = "none";

		document.getElementById("muscle").style.display = "none";

		document.getElementById("main").style.display = "block";

	}

	else if(clicked_id == "r4c6") { // Exit
		document.getElementById("commercials").style.display = "none";

		document.getElementById("boats").style.display = "none";

		document.getElementById("compacts").style.display = "none";

		document.getElementById("coupes").style.display = "none";

		document.getElementById("cycles").style.display = "none";

		document.getElementById("emergency").style.display = "none";

		document.getElementById("helicopters").style.display = "none";

		document.getElementById("industrial").style.display = "none";

		document.getElementById("military").style.display = "none";

		document.getElementById("planes").style.display = "none";

		document.getElementById("sportClassic").style.display = "none";

		document.getElementById("service").style.display = "none";

		document.getElementById("train").style.display = "none";

		document.getElementById("trailer").style.display = "none";

		document.getElementById("utility").style.display = "none";

		document.getElementById("sedans").style.display = "none";

		document.getElementById("suvs").style.display = "none";

		document.getElementById("vans").style.display = "none";

		document.getElementById("super").style.display = "none";

		document.getElementById("off-road").style.display = "none";

		document.getElementById("motorcycles").style.display = "none";

		document.getElementById("sport").style.display = "none";

		document.getElementById("muscle").style.display = "none";

		document.getElementById("main").style.display = "none";

		document.getElementById("vehs").style.display = "none";

		document.getElementById("cols").style.display = "none";

		mp.trigger("cursorOff");

	}

	else if(clicked_id == "r1c2") { // Commercials

	    document.getElementById("main").style.display = "none";

		document.getElementById("commercials").style.display = "block";

	}

	else if(clicked_id == "r1c3") { // Compacts

		document.getElementById("main").style.display = "none";

		document.getElementById("compacts").style.display = "block";

	}

	else if(clicked_id == "r1c4") { // Coupes

	    document.getElementById("main").style.display = "none";

		document.getElementById("coupes").style.display = "block";

	}

	else if(clicked_id == "r1c5") { // Cycles

		document.getElementById("main").style.display = "none";

		document.getElementById("cycles").style.display = "block";

	}

	else if(clicked_id == "r1c6") { // Emergency

		document.getElementById("main").style.display = "none";

		document.getElementById("emergency").style.display = "block";

	}

	else if(clicked_id == "r2c1") { // Helicopters

		document.getElementById("main").style.display = "none";

		document.getElementById("helicopters").style.display = "block";

	}

	else if(clicked_id == "r2c2") { // Industrial

		document.getElementById("main").style.display = "none";

		document.getElementById("industrial").style.display = "block";

	}

	else if(clicked_id == "r2c3") { // Military

		document.getElementById("main").style.display = "none";

		document.getElementById("military").style.display = "block";

	}

	else if(clicked_id == "r3c3") { // Service

		document.getElementById("main").style.display = "none";

		document.getElementById("service").style.display = "block";

	}

	else if(clicked_id == "r4c3") { // Train

		document.getElementById("main").style.display = "none";

		document.getElementById("train").style.display = "block";

	}

	else if(clicked_id == "r4c2") { // Trailer

		document.getElementById("main").style.display = "none";

		document.getElementById("trailer").style.display = "block";

	}

	else if(clicked_id == "r4c4") { // Utility

		document.getElementById("main").style.display = "none";

		document.getElementById("utility").style.display = "block";

	}

		else if(clicked_id == "r3c5") { // Sports Classic

		document.getElementById("main").style.display = "none";

		document.getElementById("sportClassic").style.display = "block";

		

	}

		else if(clicked_id == "r3c2") { // Sedans

		document.getElementById("main").style.display = "none";

		document.getElementById("sedans").style.display = "block";

	}

	else if(clicked_id == "r4c1") { // SUVs

		document.getElementById("main").style.display = "none";

		document.getElementById("suvs").style.display = "block";

	}

	else if(clicked_id == "r4c5") { // Vans

		document.getElementById("main").style.display = "none";

		document.getElementById("vans").style.display = "block";

	}

	else if(clicked_id == "r3c1") { // Planes

		document.getElementById("main").style.display = "none";

		document.getElementById("planes").style.display = "block";

	}

	else if(clicked_id == "r3c6") { // Super

		document.getElementById("main").style.display = "none";

		document.getElementById("super").style.display = "block";

	}

	else if(clicked_id == "r2c6") { // Off-Road

		document.getElementById("main").style.display = "none";

		document.getElementById("off-road").style.display = "block";

	}

	else if(clicked_id == "r2c4") { // Motorcycles

		document.getElementById("main").style.display = "none";

		document.getElementById("motorcycles").style.display = "block";

	}

	else if(clicked_id == "r3c4") { // Sport

		document.getElementById("main").style.display = "none";

		document.getElementById("sport").style.display = "block";

	}

	else if(clicked_id == "r2c5") { // Muscle

		document.getElementById("main").style.display = "none";

		document.getElementById("muscle").style.display = "block";

	}

	else if(clicked_id == "slot1") { // Vehicle Slot 1

		document.getElementById("slot1").style.backgroundColor = "rgba(0,0,0,0.5)";

		document.getElementById("slot2").style.backgroundColor = "rgba(0,0,0,0.0)";

		document.getElementById("slot3").style.backgroundColor = "rgba(0,0,0,0.0)";

		document.getElementById("slot4").style.backgroundColor = "rgba(0,0,0,0.0)";

	}

	else if(clicked_id == "slot2") { // Vehicle Slot 2

		document.getElementById("slot1").style.backgroundColor = "rgba(0,0,0,0.0)";

		document.getElementById("slot2").style.backgroundColor = "rgba(0,0,0,0.5)";

		document.getElementById("slot3").style.backgroundColor = "rgba(0,0,0,0.0)";

		document.getElementById("slot4").style.backgroundColor = "rgba(0,0,0,0.0)";

	}

	else if(clicked_id == "slot3") { // Vehicle Slot 3

		document.getElementById("slot1").style.backgroundColor = "rgba(0,0,0,0.0)";

		document.getElementById("slot2").style.backgroundColor = "rgba(0,0,0,0.0)";

		document.getElementById("slot3").style.backgroundColor = "rgba(0,0,0,0.5)";

		document.getElementById("slot4").style.backgroundColor = "rgba(0,0,0,0.0)";

	}

	else if(clicked_id == "slot4") { // Vehicle Slot 4

		document.getElementById("slot1").style.backgroundColor = "rgba(0,0,0,0.0)";

		document.getElementById("slot2").style.backgroundColor = "rgba(0,0,0,0.0)";

		document.getElementById("slot3").style.backgroundColor = "rgba(0,0,0,0.0)";

		document.getElementById("slot4").style.backgroundColor = "rgba(0,0,0,0.5)";

	}

	else if(clicked_id == "repair") { // Repair

		var repair = document.getElementById("repair").childNodes[1].nodeValue;

		if(repair == "Repair Vehicle"){

			mp.trigger("vehRepair");

			document.getElementById("repair").childNodes[1].nodeValue = "Please Wait";

			setTimeout(function(){document.getElementById("repair").childNodes[1].nodeValue = "Repair Vehicle";}, 120000);

			document.getElementById("commercials").style.display = "none";

			document.getElementById("boats").style.display = "none";

			document.getElementById("compacts").style.display = "none";

			document.getElementById("coupes").style.display = "none";

			document.getElementById("cycles").style.display = "none";

			document.getElementById("emergency").style.display = "none";

			document.getElementById("helicopters").style.display = "none";

			document.getElementById("industrial").style.display = "none";

			document.getElementById("military").style.display = "none";

			document.getElementById("planes").style.display = "none";

			document.getElementById("sportClassic").style.display = "none";

			document.getElementById("service").style.display = "none";

			document.getElementById("train").style.display = "none";

			document.getElementById("trailer").style.display = "none";

			document.getElementById("utility").style.display = "none";

			document.getElementById("sedans").style.display = "none";

			document.getElementById("suvs").style.display = "none";

			document.getElementById("vans").style.display = "none";

			document.getElementById("super").style.display = "none";

			document.getElementById("off-road").style.display = "none";

			document.getElementById("motorcycles").style.display = "none";

			document.getElementById("sport").style.display = "none";

			document.getElementById("muscle").style.display = "none";

			document.getElementById("main").style.display = "none";

			document.getElementById("vehs").style.display = "none";

			document.getElementById("cols").style.display = "none";

			mp.trigger("cursorOff");

		}

	}

	else if(clicked_id == "destroy") { // Destroy

		if(getComputedStyle(slot1).getPropertyValue("background-color") == "rgba(0, 0, 0, 0.5)") {

			document.getElementById("slot1").children[0].src = "imgs/question.png";

			document.getElementById("slot1").childNodes[1].nodeValue = "Vehicle Slot 1";

			mp.trigger("vehDestroy", 1);

		}

		else if(getComputedStyle(slot2).getPropertyValue("background-color") == "rgba(0, 0, 0, 0.5)") {

			document.getElementById("slot2").children[0].src = "imgs/question.png";

			document.getElementById("slot2").childNodes[1].nodeValue = "Vehicle Slot 2";

			mp.trigger("vehDestroy", 2);

		}

		else if(getComputedStyle(slot3).getPropertyValue("background-color") == "rgba(0, 0, 0, 0.5)") {

			document.getElementById("slot3").children[0].src = "imgs/question.png";

			document.getElementById("slot3").childNodes[1].nodeValue = "Vehicle Slot 3";

			mp.trigger("vehDestroy", 3);

		}

		else if(getComputedStyle(slot4).getPropertyValue("background-color") == "rgba(0, 0, 0, 0.5)") {

			document.getElementById("slot4").children[0].src = "imgs/question.png";

			document.getElementById("slot4").childNodes[1].nodeValue = "Vehicle Slot 4";

			mp.trigger("vehDestroy", 4);

		}

	}

	else {

	var color1 = document.getElementById('col1').style.color;

	var color2 = document.getElementById('col2').style.color;

	if(color1 == ""){

		color1 = "rgb(242, 242, 242)";

	}

	if(color2 == ""){

		color2 = "rgb(242, 242, 242)";

	}

	var slot = 1

	var picurl = document.getElementById(clicked_id).children[0].src;

	var pic = picurl.substring(picurl.indexOf("imgs"));

	var txt = document.getElementById(clicked_id).textContent;

	if(getComputedStyle(slot1).getPropertyValue("background-color") == "rgba(0, 0, 0, 0.5)") {

			slot = 1;

			document.getElementById("slot1").children[0].src = pic;

			document.getElementById("slot1").childNodes[1].nodeValue = txt;

		}

	else if(getComputedStyle(slot2).getPropertyValue("background-color") == "rgba(0, 0, 0, 0.5)") {

			slot = 2;

			document.getElementById("slot2").children[0].src = pic;

			document.getElementById("slot2").childNodes[1].nodeValue = txt;

		}

	else if(getComputedStyle(slot3).getPropertyValue("background-color") == "rgba(0, 0, 0, 0.5)") {

			slot = 3;

			document.getElementById("slot3").children[0].src = pic;

			document.getElementById("slot3").childNodes[1].nodeValue = txt;

		}

	else if(getComputedStyle(slot4).getPropertyValue("background-color") == "rgba(0, 0, 0, 0.5)") {

			slot = 4;

			document.getElementById("slot4").children[0].src = pic;

			document.getElementById("slot4").childNodes[1].nodeValue = txt;

		}

	document.getElementById("commercials").style.display = "none";

	document.getElementById("boats").style.display = "none";

	document.getElementById("compacts").style.display = "none";

	document.getElementById("coupes").style.display = "none";

	document.getElementById("cycles").style.display = "none";

	document.getElementById("emergency").style.display = "none";

	document.getElementById("helicopters").style.display = "none";

	document.getElementById("industrial").style.display = "none";

	document.getElementById("military").style.display = "none";

	document.getElementById("service").style.display = "none";

	document.getElementById("train").style.display = "none";

	document.getElementById("trailer").style.display = "none";

	document.getElementById("utility").style.display = "none";

	document.getElementById("planes").style.display = "none";

	document.getElementById("sportClassic").style.display = "none";

	document.getElementById("sedans").style.display = "none";

	document.getElementById("suvs").style.display = "none";

	document.getElementById("vans").style.display = "none";

	document.getElementById("super").style.display = "none";

	document.getElementById("off-road").style.display = "none";

	document.getElementById("motorcycles").style.display = "none";

	document.getElementById("sport").style.display = "none";

	document.getElementById("muscle").style.display = "none";

	document.getElementById("main").style.display = "none";

	document.getElementById("vehs").style.display = "none";

	document.getElementById("cols").style.display = "none";

	mp.trigger("cursorOff");

	var str = document.getElementById(clicked_id).children[0].src;

	str = str.substring(str.indexOf("-") + 1);

    str = str.slice(0, -4);

	str = str.toLowerCase();

	mp.trigger("veh", str, slot, color1, color2);

	}

}



mp.events.add("veh", (vehicle, slot, color1, color2) => {

    mp.events.callRemote("vehSpawn", vehicle, slot, color1, color2);

});



mp.events.add("vehDestroy", (vehicle) => {

    mp.events.callRemote("vehDestroy", vehicle);

});



mp.events.add("vehRepair", () => {

    mp.events.callRemote("vehRepair");

});



mp.events.add("cursorOff", () => {

    mp.gui.cursor.show(false, false);

});



mp.events.add("cursorOn", () => {

    mp.gui.cursor.show(true, true);

});