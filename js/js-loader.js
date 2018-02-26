$(function() {
	$.ajax("../html/Object.html",{
		success:function(data){
          $('#SectionObject').html(data);
      }});

});

