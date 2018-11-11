/* Search */
export function keydown(method){
  var theEvent = e || window.event;    
  var code = theEvent.keyCode || theEvent.which || theEvent.charCode;    
  if (code == 13) {                  
    e.preventDefault();    
    method()
  }
}
