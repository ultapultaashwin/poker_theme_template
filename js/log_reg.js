// JavaScript Document
window.passlength = 6;		//The minimum password lenght

function clean(data)
{
	return data.replace(/^\s*/,"").replace(/\s*$/,"");	
}

$(function(){
	/*Login form submission*/
	$("#log_div #submit").click(function(){
		$("#log_div #login_msg").css('display','block').html('<center><img src="2.gif" alt = "Loading" height="40px" width="40px" /></center>');
		var emailId = clean($('#log_div #emailid').val());
		var password = clean($('#log_div #pass').val());
		if( emailId == '' || password == '' )
			$("#log_div #login_msg").html('<p>Sorry, you must enter your Email-id and password to log in.</p>');
		else
		{
			var stay = $('input:checked').length;
			$.get("user_login.php",{ emailId : emailId, password : password, stay : stay }, function(result){	
				$("#log_div #login_msg").html(result);	
				if( result.indexOf('Hi') != -1 ) {
					$("#log_div #login_msg").html('');
					$('#log_but, #log_close').hide();
					$('#logout_but').show();
					$("#page_container").stop().animate({
						height:0
					}, 1500);
					//$('#log_reg').stop().slideUp(1500);
					$("#log_close").hide();
					status =! status;
					var indexofcomma = result.indexOf('$');
					$('#logout_but').html( result.substring(4,indexofcomma)+'. Logout');
					writeCookie( "saar_log_name", result.substring(6, indexofcomma), 10 );
					writeCookie( "saar_log_email", result.substring(indexofcomma+1,result.length-4), 10 );
					stay == 1 ?	writeCookie( "stay_main", "1", 10 )	: eraseCookie("stay_main");
				}
			});
		}
		
		//$('#log_div > form , #reg_div > form').hide();
	});
	/*Log Out*/ /*Rajan this funciton is not working.. fix this.. )*/
	$("#logout_but").click(function(){
		$('#reg_div #regs_msg').hide();
		$.get('logout.php',{}, function(result){
			$('#log_div #login_msg').html(result).hide();
			eraseCookie("saar_log_email");
			eraseCookie("saar_log_name");
			$('#logout_but').hide();
			$('#log_but').show();
			$('#pass').attr('value','');
		});
		
	});
	/*End of Log Out*/
	/*End of Login*/
	/*Registration form submission*/
	$('#reg_div #submit').click(function(){
		$("#reg_div #regs_msg").css('display','block').html('<center><img src="2.gif" alt = "Loading" height="40px" width="40px" /></center>');
		var password1 =   clean($('#reg_div #password').val());
		var password2 =  clean($('#reg_div #password_ret').val());
		var gender = clean($('#reg_div #gender').val());
		var mobile = clean($('#reg_div #mobile').val());
		if( password1 == '' || password2 == '' || password1 != password2 || gender == '' || mobile.length<10)
{
//alert("You must enter all the details, including the mobile no. and desired password twice");
			$('#reg_div #regs_msg').html('<p>You must enter all the details, including the mobile no. and desired password twice</p>');
}
		else
		{	
			var user_data = { fullname : clean($('#reg_div #name').val()),
								password1 : password1, 
								nimbuzz : clean($('#reg_div #nimbuzz').val()) || 'NA',
								college : clean($('#reg_div #colg').val()) ,
								collegeid : clean($('#reg_div #colgid').val()), 
								gender : gender ,
								mobile : clean($('#reg_div #mobile').val()),
								email : clean($('#reg_div #email').val()), city : clean($('#reg_div #city').val()) ,
								state : clean($('#reg_div #state').val()), password2 : password2 };
			$.get("user_regs.php",{ user_data : user_data }, function(result){
				$('#reg_div #regs_msg').html(result).css('display','block');
			//if( result.indexOf('Your new account') != -1 )
				//$('#log_reg').slideUp(1500);
			});
		}
		//$('#reg_div > form').hide();
	});
	/*End of Registration*/
});

/*Log-in Form Validation*/
function ver_email1()
{
	var email = clean($('#log_div #emailid').val());
	var regex = /^[a-zA-Z0-9][a-zA-Z0-9\._\-&!?=#]*@/g;
	if( !regex.test(email) )
		$('#log_div #ver_email1').html("<i>Invalid</i>");
	else
		$.get('validate.php',{ emailid : email }, function(result){
			$('#log_div #ver_email1').html("<i>"+result+"</i>");
		});
}
/*End of Log-in Form Validation*/

/*Registration Form Validation*/
/*function ver_uname()
{
	var u_name = clean($('#reg_div #username').val());
	var regex = /^[a-zA-Z0-9][a-zA-Z0-9\._\-&!?=#\*]*$/g;
	if( !regex.test(u_name) )
		$('#reg_div #ver_usr').html('<i>Invalid</i>');
	else
		$.get('validate.php',{u_name : u_name}, function(result){
			$('#reg_div #ver_usr').html(result);
		});
}*/

function ver_email()
{
	var email = clean($('#reg_div #email').val());
	var regex = /^[a-zA-Z0-9][a-zA-Z0-9\._\-&!?=#]*@/g;
	if( !regex.test(email) )
		$('#reg_div #ver_email').html('<i>Invalid</i>');
	else
		$.get('validate.php',{ email : email }, function(result){
			$('#reg_div #ver_email').html(result);
		});
}

function ver_pas1()
{
	var pas1 = clean( $('#reg_div #password').val() );
	if( pas1 == null || pas1.length < window.passlength || pas1 == '' )
		$('#reg_div #ver_pas1').html('<i>Minimum '+window.passlength+' characters</i>');
	else
	{
		$('#reg_div #ver_pas1').html('<i>Correct</i>');
		$('#reg_div #ver_pas2').html('<i></i>');
	}
}

function ver_pas2()
{
	var pas1 = clean( $('#reg_div #password').val() );
	var pas2 = clean( $('#reg_div #password_ret').val() );
	var msg;
	if( pas1.length >= window.passlength && pas2.length != 0 )
		msg = ( pas1.substring(0,pas2.length) == pas2 ) ? 'Correct' : 'Incorrect' ;
	else
	{
		//msg = ( pas2.length != 0 ) ? 'Minimum '+window.passlength+' characters' : '' ;
		msg = '';
	}
	$('#reg_div #ver_pas2').html('<i>'+msg+'</i>');
}

function ver_pas3()
{
	var pas1 = clean( $('#reg_div #password').val() );
	var pas2 = clean( $('#reg_div #password_ret').val() );
	if( pas2 != pas1 )
		$('#reg_div #ver_pas2').html('<i>Incorrect</i>');
}

/*End of Registration Form Validation*/