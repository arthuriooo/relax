$(document).ready(function(){
	$(".front").on('load', function() {
  alert('Image Loaded'); 
}).each(function() {
  if(this.complete) $(this).load();
});
});