function countVoters(list){
  var i=0,c=0;
  for(i;i<list.length;i++) if(list[i].age>=18) c++;
  return c;
}