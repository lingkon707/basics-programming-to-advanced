function validateNID(nid){
  if(nid && nid.length === 10) return true;
  return false;
}