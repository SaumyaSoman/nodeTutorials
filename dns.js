var dns= require('dns');
dns.lookup('google.com', function(err,ip){
if(err) return handleError(err);
console.log('google.com ip is %s',ip);
});