
function setEqualHeight(columns){
	var tallestcolumn = 0;
	columns.each(
	function()
		{
		currentHeight = $(this).height();
		if(currentHeight > tallestcolumn)
		{
		tallestcolumn = currentHeight;
		}
		}
		);
		columns.height(tallestcolumn);
}
$(document).ready(function() {
	//console.log($(document).width());
	if ($(document).width() > 586) {
		//setEqualHeight($(".gallery-item__desc"));
		
	}

});