function initialize(){var e=new google.maps.LatLng(41.55388,-8.44065),a=new google.maps.LatLng(41.55388,-8.44065),o=document.getElementById("map_canvas"),i={center:a,zoom:14,scrollwheel:!1,draggable:!1,disableDefaultUI:!0,mapTypeId:google.maps.MapTypeId.ROADMAP},n=new google.maps.Map(o,i);n.set("styles",[{featureType:"landscape",elementType:"geometry",stylers:[{hue:"#ffff00"},{saturation:30},{lightness:10}]}]);var t='<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading">Funda\xe7\xe3o Viera Gomes</h1><div id="bodyContent"><p>Algures</p><p>Braga</p><p>Portugal</p></div></div>',s=new google.maps.InfoWindow({content:t,maxWidth:300}),d=new google.maps.Marker({position:e,map:n,title:"Funda\xe7\xe3o Viera Gomes"});google.maps.event.addListener(d,"click",function(){s.open(n,d)})}google.maps.event.addDomListener(window,"load",initialize);