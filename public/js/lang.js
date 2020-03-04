
 function readCookie(name) {var nameEQ = name + "="; var ca = document.cookie.split(';');for(var i=0;i < ca.length;i++) {var c = ca[i];while (c.charAt(0)==' ') c = c.substring(1,c.length);if (c.indexOf(nameEQ) == 0) {return decodeURIComponent( c.substring(nameEQ.length,c.length) );}}return null;} 

function translateLang(page){
    document.cookie = "Lang=" + encodeURIComponent( "ENG-OPHSOI8ysF4564UOHD7fo" );
    language(page);
    $("#langSelected").replaceWith("<a id='langSelected'>English</a>");
}
function langDefault(){
    document.cookie = "Lang=" + encodeURIComponent( "ESP-OPHSOI8ysF4564UOHD7fo" );
    location.reload();
    $("#langSelected").replaceWith("<a id='langSelected'>Español</a>");
}
function language(page){
    $("[data-translate]").jqTranslate('js/header',{defaultLang: 'es',forceLang:"en",asyncLangLoad:false});
    $("[data-translate]").jqTranslate('js/footer',{defaultLang: 'es',forceLang:"en",asyncLangLoad:false});
    $("[data-translate]").jqTranslate('js/'+page,{defaultLang: 'es',forceLang:"en",asyncLangLoad:false});
}
 function loadLanguage(page){ 
          var miCookie = readCookie( "Lang" );
         if (miCookie === null){
             $.ajax({url:"https://geolocation-db.com/jsonp",jsonpCallback:"callback",dataType:"jsonp",success:function(location){getCode(location.country_code,page);}})
         }else if(miCookie === "ENG-OPHSOI8ysF4564UOHD7fo"){
            translateLang(page);
         }
 }
 function getCode(data,page){
     if(data!=='MX'){
        translateLang(page)
     }
 }

 