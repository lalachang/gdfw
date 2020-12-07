//* Popup window function *//
    var popupWindow = null;
    function positionedPopup(url,winName,w,h,t,l,scroll){
    settings =
    'height='+h+',width='+w+',top='+t+',left='+l+',scrollbars='+scroll+',resizable'
    popupWindow = window.open(url,winName,settings)
    }

    setTimeout(function () {popupWindow.close(); location.reload(true);}, 5000);



//* options *//

var subjectObject = {
  "happy": {
    "cute": ["sunny", "cloudy", "rainy"],
    "wispy": ["sunny", "cloudy", "rainy"],
    "fluffy": ["sunny", "cloudy", "rainy"], 
  },
  "lonely": {
    "cute": ["sunny", "cloudy", "rainy"],
    "wispy": ["sunny", "cloudy", "rainy"],
    "fluffy": ["sunny", "cloudy", "rainy"], 
  },
  "romantic": {
    "cute": ["sunny", "cloudy", "rainy"],
    "wispy": ["sunny", "cloudy", "rainy"],
    "fluffy": ["sunny", "cloudy", "rainy"], 
  }
}
window.onload = function() {
  var subjectSel = document.getElementById("subject");
  var topicSel = document.getElementById("topic");
  var chapterSel = document.getElementById("chapter");
  for (var x in subjectObject) {
    subjectSel.options[subjectSel.options.length] = new Option(x, x);
  }
  subjectSel.onchange = function() {
    //display correct values
    for (var y in subjectObject[this.value]) {
      topicSel.options[topicSel.options.length] = new Option(y, y);
    }
  }
  topicSel.onchange = function() {
    //display correct values
    var z = subjectObject[subjectSel.value][this.value];
    for (var i = 0; i < z.length; i++) {
      chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
    }
  }
}


$(document).ready(function() {
	var selectVal1 = $("#selectBox1").val();
	var selectVal2 = $("#selectBox2").val();
  var selectVal3 = $("#selectBox3").val();
	$("#selectBox1").change(function() {
            selectVal1 = $("#selectBox1 option:selected").val();
    });
	$("#selectBox2").change(function() {
            selectVal2 = $("#selectBox2 option:selected").val();
    });
  $("#selectBox3").change(function() {
            selectVal3 = $("#selectBox3 option:selected").val();
    });
	
	$("#click").click(function() {
	
    
    
    
    
  <!-- all A options -->
      if(selectVal1 == 'A' && selectVal2 == 'A' && selectVal3 == 'A'){
        location = "https://cloudex.glitch.me/AAA.html";
}
      if(selectVal1 == 'A' && selectVal2 == 'A' && selectVal3 == 'B'){
        location = "https://cloudex.glitch.me/AAB.html";
}
      if(selectVal1 == 'A' && selectVal2 == 'A' && selectVal3 == 'C'){
	    	location = "https://cloudex.glitch.me/AAC.html";
}
      if(selectVal1 == 'A' && selectVal2 == 'B' && selectVal3 == 'A'){
		    location = "https://cloudex.glitch.me/ABA.html";
}
      if(selectVal1 == 'A' && selectVal2 == 'B' && selectVal3 == 'B'){
	    	location = "https://cloudex.glitch.me/ABB.html";
}
      if(selectVal1 == 'A' && selectVal2 == 'B' && selectVal3 == 'C'){
	    	location = "https://cloudex.glitch.me/ABC.html";
}
      if(selectVal1 == 'A' && selectVal2 == 'C' && selectVal3 == 'A'){
		    location = "https://cloudex.glitch.me/ACA.html";
}
      if(selectVal1 == 'A' && selectVal2 == 'C' && selectVal3 == 'B'){
	    	location = "https://cloudex.glitch.me/ACB.html";
}
      if(selectVal1 == 'A' && selectVal2 == 'C' && selectVal3 == 'C'){
	    	location = "https://cloudex.glitch.me/ACC.html";
}

    
    
  <!-- B options -->    
      if(selectVal1 == 'B' && selectVal2 == 'A' && selectVal3 == 'A'){
		    location = "https://cloudex.glitch.me/BAA.html";
}
      if(selectVal1 == 'B' && selectVal2 == 'A' && selectVal3 == 'B'){
	    	location = "https://cloudex.glitch.me/BAB.html";
}
      if(selectVal1 == 'B' && selectVal2 == 'A' && selectVal3 == 'C'){
	    	location = "https://cloudex.glitch.me/BAC.html";
}
      if(selectVal1 == 'B' && selectVal2 == 'B' && selectVal3 == 'A'){
	    	location = "https://cloudex.glitch.me/BBA.html";
}
      if(selectVal1 == 'B' && selectVal2 == 'B' && selectVal3 == 'B'){
	    	location = "https://cloudex.glitch.me/BBB.html";
}
      if(selectVal1 == 'B' && selectVal2 == 'B' && selectVal3 == 'C'){
	    	location = "https://cloudex.glitch.me/BBC.html";
}
      if(selectVal1 == 'B' && selectVal2 == 'C' && selectVal3 == 'A'){
	    	location = "https://cloudex.glitch.me/BCA.html";
}
      if(selectVal1 == 'B' && selectVal2 == 'C' && selectVal3 == 'B'){
	    	location = "https://cloudex.glitch.me/BCB.html";
}
      if(selectVal1 == 'B' && selectVal2 == 'C' && selectVal3 == 'C'){
		    location = "https://cloudex.glitch.me/BCC.html";
}
    
    
    
  <!-- C options -->    
      if(selectVal1 == 'C' && selectVal2 == 'A' && selectVal3 == 'A'){
		    location = "https://cloudex.glitch.me/CAA.html";
}
      if(selectVal1 == 'C' && selectVal2 == 'A' && selectVal3 == 'B'){
	    	location = "https://cloudex.glitch.me/CAB.html";
}
      if(selectVal1 == 'C' && selectVal2 == 'A' && selectVal3 == 'C'){
	    	location = "https://cloudex.glitch.me/CAC.html";
}
      if(selectVal1 == 'C' && selectVal2 == 'B' && selectVal3 == 'A'){
	    	location = "https://cloudex.glitch.me/CBA.html";
}
      if(selectVal1 == 'C' && selectVal2 == 'B' && selectVal3 == 'B'){
	    	location = "https://cloudex.glitch.me/CBB.html";
}
      if(selectVal1 == 'C' && selectVal2 == 'B' && selectVal3 == 'C'){
	    	location = "https://cloudex.glitch.me/CBC.html";
}
      if(selectVal1 == 'C' && selectVal2 == 'C' && selectVal3 == 'A'){
	    	location = "https://cloudex.glitch.me/CCA.html";
}
      if(selectVal1 == 'C' && selectVal2 == 'C' && selectVal3 == 'B'){
	    	location = "https://cloudex.glitch.me/CCB.html";
}
      if(selectVal1 == 'C' && selectVal2 == 'C' && selectVal3 == 'C'){
	    	location = "https://cloudex.glitch.me/CCC.html";
}

  
	else if(selectVal1 == '' && selectVal2 == '' && selectVal3 == ''){
		location = "https://cloudex.glitch.me";
}
});
});

    
function myFunction() {
  var x = document.getElementById("myTimestamp");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
} 