 function getlength(str){
        return str.length;
      }
 function demo(){
        var isValidate=false;
        var re=/[^\w\u4e00-\u9fa5]/g;
        var a=document.getElementById("usrName").value;
        var len=getlength(a);
        if(a==""||len>30){
          document.getElementById("dengluf").style.display="block";
          document.getElementById("empty").style.display="block";
          document.getElementById("usrname_false").style.display="none";
          return;
        }
        else if(re.test(a)){
          document.getElementById("dengluf").style.display="block";
          document.getElementById("usrname_false").style.display="block";
          document.getElementById("empty").style.display="none";
          return;
        }
        else{
          document.getElementById("dengluf").style.display="none";
          document.getElementById("empty").style.display="none";
          document.getElementById("usrname_false").style.display="none";
          isValidate=true;
        }
        if(document.getElementById("lg").checked){
          var condition="on";
        }
        else{
          condition="off";
        }
        if(isValidate){
          $.post('/loginCheck/', {
            'UN' : document.getElementById('usrName').value,
            'PW' : document.getElementById('passWord').value,
            'AUTO' : condition
            }, function(result) {
              console.log(result);
              if (result['success']) {
                location = '/index/';
              } else {
                document.getElementById("password_false").innerHTML = result['reason']
                document.getElementById("password_false").style.display="block";
              }
          });
        }
      }
