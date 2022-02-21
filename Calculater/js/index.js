$(document).ready(function(){
	const pattern = /\./;
	var hasTop=false;
	var operator="";
	var isSpacial=false;
	var memoryVariable=0
	$('.raw button').click(function(e){
		//$('.display').value($(this).value());	
		if($.isNumeric($(this).val())){
			var value=$(this).val();

			$('.dis').val($('.dis').val()+value);

		}
		else if($(this).val()=='.' && !(pattern.test($('.dis').val()))){
			
			var value=$(this).val();
			$('.dis').val($('.dis').val()+value);

		}
		else if(!($(this).val()=='.')){
			
			if (!($(this).val()=='=') && hasTop==false) {
				hasTop=true;
				$('.topdis').val($('.dis').val()+$(this).val());
				if($(this).val()=='^'){
					isSpacial=true
				}
				operator=$(this).val();
				$('.dis').val("");
			}
			if($(this).val()=="=" && hasTop==true && !(isSpacial)){
					output=evil($('.topdis').val()+$('.dis').val());
					$('.dis').val(output);
					$('.topdis').val("");
					hasTop=false;
				
			}
			else if($(this).val()=="=" && hasTop==true && isSpacial){
					output=Math.pow(parseInt($('.topdis').val()),$('.dis').val());
					$('.dis').val(output);
					$('.topdis').val("");
					hasTop=false;
					isSpacial=false;
				}
				

		}
		
	});
	$('.rawfirst button').click(function(){
		if($(this).val()=="c") {
				$('.topdis').val("");
				$('.dis').val("");
				hasTop=false;
			}
		else if($(this).val()=="ct"){
			  $('.topdis').val("");
				hasTop=false;
			}
		else if($(this).val()=="sm"){
			memoryVariable=$('.dis').val();
		}
		else if($(this).val()=="gm"){
			$('.dis').val(memoryVariable);
		}
		else if ($(this).val()=="clear") {
			var newText=$('.dis').val().substr(0, $('.dis').val().length-1);
			$('.dis').val(newText);
		}
	});

	function evil(fn) {
  		return new Function('return ' + fn)();
	}
});