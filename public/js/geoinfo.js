$.ajax
    ({
        url:"http://gd.geobytes.com/GetCityDetails",
        method:"POST",
        crossDomain:true,
        dataType:"json",
        success:function(data)
        { 
            console.log(data);
            $("#geobytescapital").append('<h5 class="geoinfodiv"><b>Geobytescapital:</b>'+data.geobytescapital+'</h5>');
            $("#geobytescertainty").append('<h5 class="geoinfodiv"><b>Geobytescertainty:</b>'+data.geobytescertainty+'</h5>');
            $("#geobytescity").append('<h5 class="geoinfodiv"><b>Geobytescity:</b>'+data.geobytescity+'</h5>');
            $("#geobytescityid").append('<h5 class="geoinfodiv"><b>Geobytescityid:</b>'+data.geobytescityid+'</h5>');
            $("#geobytescode").append('<h5 class="geoinfodiv"><b>Geobytescode:</b>'+data.geobytescode+'</h5>');
            $("#geobytescountry").append('<h5 class="geoinfodiv"><b>Geobytescountry:</b>'+data.geobytescountry+'</h5>');
            $("#geobytescurrency").append('<h5 class="geoinfodiv"><b>Geobytescurrency:</b>'+data.geobytescurrency+'</h5>');
            $("#geobytescurrencycode").append('<h5 class="geoinfodiv"><b>Geobytescurrencycode:</b>'+data.geobytescurrencycode+'</h5>');
            $("#geobytesdma").append('<h5 class="geoinfodiv"><b>Geobytesdma:</b>'+data.geobytesdma+'</h5>');
            $("#geobytesforwarderfor").append('<h5 class="geoinfodiv"><b>Geobytesforwarderfor:</b>'+data.geobytesforwarderfor+'</h5>');
            $("#geobytesfqcn").append('<h5 class="geoinfodiv"><b>Geobytesfqcn:</b>'+data.geobytesfqcn+'</h5>');
            $("#geobytesinternet").append('<h5 class="geoinfodiv"><b>Geobytesinternet:</b>'+data.geobytesinternet+'</h5>');
            $("#geobytesipaddress").append('<h5 class="geoinfodiv"><b>Geobytesipaddress:</b>'+data.geobytesipaddress+'</h5>');
            $("#geobyteslatitude").append('<h5 class="geoinfodiv"><b>Geobyteslatitude:</b>'+data.geobyteslatitude+'</h5>');
            $("#geobyteslongitude").append('<h5 class="geoinfodiv"><b>Geobyteslongitude:</b>'+data.geobyteslongitude+'</h5>');
            $("#geobyteslocationcode").append('<h5 class="geoinfodiv"><b>Geobyteslocationcode:</b>'+data.geobyteslocationcode+'</h5>');
            $("#geobytesmapreference").append('<h5 class="geoinfodiv"><b>Geobytesmapreference:</b>'+data.geobytesmapreference+'</h5>');
            $("#geobytesnationalityplural").append('<h5 class="geoinfodiv"><b>Geobytesnationalityplural:</b>'+data.geobytesnationalityplural+'</h5>');
            $("#geobytesnationalitysingular").append('<h5 class="geoinfodiv"><b>Geobytesnationalitysingular:</b>'+data.geobytesnationalitysingular+'</h5>');
            $("#geobytespopulation").append('<h5 class="geoinfodiv"><b>Geobytespopulation:</b>'+data.geobytespopulation+'</h5>');
            $("#geobytesregion").append('<h5 class="geoinfodiv"><b>Geobytesregion:</b>'+data.geobytesregion+'</h5>');
            $("#geobytesregionlocationcode").append('<h5 class="geoinfodiv"><b>Geobytesregionlocationcode:</b>'+data.geobytesregionlocationcode+'</h5>');
            $("#geobytesremoteip").append('<h5 class="geoinfodiv"><b>Geobytesremoteip:</b>'+data.geobytesremoteip+'</h5>');

        
        }
    });