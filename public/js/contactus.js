function spacechk(clicked_id,e){
    var contactus_name=$("#contactus_name").val();
    var contactus_email=$("#contactus_email").val();
    var contactus_title=$("#contactus_title").val();    
    var id=$("#"+clicked_id+"").val();
    if (id.length === 0 && e.which === 32) {
        e.preventDefault();
    }
   
};

function passwordValidate(e){
    var specialKeys = new Array();
        specialKeys.push(8); //Backspace
        specialKeys.push(9); //Tab
        specialKeys.push(46); //Delete
        specialKeys.push(36); //Home
        specialKeys.push(35); //End
        specialKeys.push(37); //Left
        specialKeys.push(39); //Right
        // function IsAlphaNumeric() {
            var keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;
            var ret = ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122) || (specialKeys.indexOf(e.keyCode) != -1 && e.charCode != e.keyCode));
           if(!ret){
                       e.preventDefault();

           }
            document.getElementById("error").style.display = ret ? "none" : "inline";
            return ret;
        // }
}

function chk(){
$('homepage')
.css({
   'filter'         : 'blur(10px)',
   '-webkit-filter' : 'blur(10px)',
   '-moz-filter'    : 'blur(10px)',
   '-o-filter'      : 'blur(10px)',
   '-ms-filter'     : 'blur(10px)'
});
}


function mobileValidate(){
console.log(($("#signupMobile").val()).length);
    // if(!(isNAN( parseInt ( $("#signupMobile").val())).length==10)){
    //     $('.mobilemsg').hide();
    //     $('.mobilesuccess').text("Enter 10 Digit Mobile No");
    //     $('.mobilesuccess').show();
    // }
        var Number = document.getElementById('signupMobile').value;
        var mobileno = /^[0]?[789]\d{9}$/;

        if (mobileno.test(Number)) {
            $('.mobilemsg').hide();
            $('.mobilesuccess').show();
        } else {
            $('.mobileemailmsg').hide();
            $('.mobileerror').show();
        }
        
}


function showpassword(clicked_id){
    var x =document.getElementById("signupPassword");
    if(document.getElementById(""+clicked_id+"").checked==true){
        if (x.type === "password") {
            x.type = "text";
        }
        else{
            x.type = "password";
        }
    }
    else if(document.getElementById(""+clicked_id+"").checked==false){
        x.type = "password";
    }
}

function confrmshowpassword(clicked_id){
    var x =document.getElementById("signupConfirmpass");
    if(document.getElementById(""+clicked_id+"").checked==true){
        if (x.type === "password") {
            x.type = "text";
        }
        else{
            x.type = "password";
        }
    }
    else if(document.getElementById(""+clicked_id+"").checked==false){
        x.type = "password";
    }
}

 onclick="showinfo(this.id)"
 function showinfo(clicked_id){
     if(clicked_id=="signupEmail")
        {
            $('.emailmsg').show();
            $('.mobilemsg').hide();
            $('.passwordmsg').hide();
            $('.confirmpasswordmsg').hide();

        }
     else if(clicked_id=="signupMobile")
        {
            $('.emailmsg').hide();
            $('.mobilemsg').show();
            $('.passwordmsg').hide();
            $('.confirmpasswordmsg').hide();
        }
     else if(clicked_id=="signupPassword")
        {
            $('.emailmsg').hide();
            $('.mobilemsg').hide();
            $('.passwordmsg').show();
            $('.confirmpasswordmsg').hide();

        }
     else if(clicked_id=="signupConfirmpass")
        {
            $('.emailmsg').hide();
            $('.mobilemsg').hide();
            $('.passwordmsg').hide();
            $('.confirmpasswordmsg').show();
        }
 }
function emailvalidate(){
    var email = $("#signupEmail").val();
    var re =  /^(([^<>#!+='$%^&*?"{}`~()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;
    if (re.test(email)) {
        $('.msg').hide();
        $('.success').show();
    } else {
        $('.msg').hide();
        $('.error').show();
    }


}

function contactusValidate(){
    var contactus_name=$("#contactus_name").val();
    var contactus_email=$("#contactus_email").val();
    var contactus_title=$("#contactus_title").val();
    var contactus_detail=$("#contactus_detail").val();
    if(contactus_name=='' || contactus_name==null || contactus_name==undefined || contactus_email=='' || contactus_email==null || contactus_email==undefined || contactus_title=='' || contactus_title==null || contactus_title==undefined || contactus_detail=='' || contactus_detail==null || contactus_detail==undefined){
        alert("All feilds are compulsary");
    }
    else{
        console.log("ok");
// action that has to be performed
    }
}

function signupValidate(){
    var signup_mail=$("#signupEmail").val();
    var signup_mobille=$("#signupMobile").val();
    var signup_password=$("#signupPassword").val();
    var sgnup_repeatpass=$("#signupConfirmpass").val();
        if(signup_mail=='' || signup_mail==null || signup_mail==undefined || signup_mobille=='' || signup_mobille==null || signup_mobille==undefined || signup_password=='' || signup_password==null || signup_password==undefined || sgnup_repeatpass=='' || sgnup_repeatpass==null || sgnup_repeatpass==undefined){
                alert("All feilds are compulsary");
        }
        else if(!(signup_password==sgnup_repeatpass)){
            $(".repeatpssserror").show();
        }
        else{
            console.log("ok");
            // action that has to be performed

        }
}

function loginValidate(){
    var login_mail=$("#loginEmail").val();
    var login_password=$("#loginpassword").val();
        if(login_mail=='' || login_mail==null || login_mail==undefined || login_password=='' || login_password==null || login_password==undefined){
                alert("All feilds are compulsary");
        }
        else{
            console.log("ok");
            // action that has to be performed

        }
}

