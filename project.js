$(document).ready(function(){
	$('#hide1').click(function(){
		$('#p1').hide();
	});
	$('#show1').click(function(){
		$('#p1').show();
	});


	$('#hide2').click(function(){
		$('#design1').hide();
	});
	$('#show2').click(function(){
		$('#design1').show();
	});
    

    $('#hide3').click(function(){
		$('#blog1').hide();
	});
	$('#show3').click(function(){
		$('#blog1').show();
	});

   
    $('#remo11').click(function()
    {

            $('.cal01').slideToggle(1000); 
        
    });


	$('#login1').click(function()
	{
        $('#form2').hide(1000,function()
        {
        	$('#form1').slideToggle(1000);
        }); 
		
		
	});


	$('#login11').click(function(){
		$('#form1').hide(1000,function()
		{
			$('#form2').slideToggle(1000);

		});		
	});


	  $("#adddata").click(function(){      	
            var name = $("#name").val();
            var add12 = "<p>" + name +"</p>";
            $("#showdata").append(add12);       
        });
});


$(document).ready(function(){
		$flag=1;


    	$("#myName").focusout(function(){
    		if($(this).val()=='')
    		{
        		$(this).css("border-color", "#FF0000");
        			$('#submit').attr('disabled',true);
        			 $("#error_name").text("* You have to enter your first name!");
        	}
        	else
        	{
        		$(this).css("border-color", "#2eb82e");
        		$('#submit').attr('disabled',false);
        		$("#error_name").text("");

        	}
       });




        $("#lastname").focusout(function()
        {
    		if($(this).val()=='')
    		{
        		$(this).css("border-color", "#FF0000");
        			$('#submit').attr('disabled',true);
        			$("#error_lastname").text("* You have to enter your Last name!");
        	}
        	else
        	{
        		$(this).css("border-color", "#2eb82e");
        		$('#submit').attr('disabled',false);
        		$("#error_lastname").text("");
        	}
       });


        $("#dob").focusout(function()
        {
    		if($(this).val()=='')
    		{
        		$(this).css("border-color", "#FF0000");
        			$('#submit').attr('disabled',true);
        			$("#error_dob").text("* You have to enter your Date of Birth!");
        	}
        	else
        	{
        		$(this).css("border-color", "#2eb82e");
        		$('#submit').attr('disabled',false);
        		$("#error_dob").text("");
        	}
       });



        $("#gender").focusout(function()
        {
        	$(this).css("border-color", "#2eb82e");
       
       });


        $("#email").focusout(function(){
    		if($(this).val()=='')
    		{
        		$(this).css("border-color", "#FF0000");
        		$('#submit').attr('disabled',true);
        		$("#error_email").text("* You have to enter your Email!");
        	}
        	else
        	{
        		$(this).css({"border-color":"#2eb82e"});
        		$('#submit').attr('disabled',false);
        		$("#error_email").text("");

        	}
        	});


        $("#phone").focusout(function(){
            $pho =$("#phone").val();
    		if($(this).val()==''){
        		$(this).css("border-color", "#FF0000");
        			$('#submit').attr('disabled',true);
        			$("#error_phone").text("* You have to enter your Phone Number!");
        	}
        	else if ($pho.length!=10)
        	{   
                    $(this).css("border-color", "#FF0000");
        			$('#submit').attr('disabled',true);
        			$("#error_phone").text("* Lenght of Phone Number Should Be Ten");
        	}
        	else if(!$.isNumeric($pho))
        	{
        	        $(this).css("border-color", "#FF0000");
        			$('#submit').attr('disabled',true);
        			$("#error_phone").text("* Phone Number Should Be Numeric");  
        	}
        	else{
        		$(this).css({"border-color":"#2eb82e"});
        		$('#submit').attr('disabled',false);
        		$("#error_phone").text("");
        	}

    	});



   		$( "#submit" ).click(function() {
   			if($("#myName" ).val()=='')
   			{
        		$("#myName").css("border-color", "#FF0000");
        			$('#submit').attr('disabled',true);
        			 $("#error_name").text("* You have to enter your first name!");
        	}
        	if($("#lastname" ).val()=='')
   			{
        		$("#lastname").css("border-color", "#FF0000");
        			$('#submit').attr('disabled',true);
        			 $("#error_lastname").text("* You have to enter your Last name!");
        	}
   			if($("#dob" ).val()=='')
   			{
        		$("#dob").css("border-color", "#FF0000");
        			$('#submit').attr('disabled',true);
        			 $("#error_dob").text("* You have to enter your Date of Birth!");
        	}
   			if($("#email" ).val()=='')
   			{
        		$("#email").css("border-color", "#FF0000");
        			$('#submit').attr('disabled',true);
        			 $("#error_email").text("* You have to enter your Email!");
        	}
        	if($("#phone" ).val()=='')
   			{
        		$("#phone").css("border-color", "#FF0000");
        			$('#submit').attr('disabled',true);
        			 $("#error_phone").text("* You have to enter your Phone Number!");
        	}
			}); 	
	});



$(document).ready(function(){
	$("#message1").click(function(){
		$("#message2").slideToggle(1000);
	});
	
  }); 









