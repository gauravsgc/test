async function removeDuplicates(arr,matchplayed){
   
  let unique = [];
  for (i = 0; i < arr.length; i++) {
     
      if (unique.indexOf(arr[i]) === -1) {
          unique.push(arr[i]);
       }
  }
   return [unique,matchplayed];
}


const team1=[];
const team2=[];
async function totalteams(response,team11,team22,matchplayed){
   
    
          for(let j=0;j<response.data.length;j++){
        
         team1.push(response.data[j].team1);
         team2.push(response.data[j].team2);
      
          }
        
        teamtotal=[...team11,...team22,...team1,...team2];
        return teamtotal;
      //  console.log(teamtotal);
      
      //  uniquevalue=await removeDuplicates(teamtotal,matchplayed);
      // console.log(uniquevalue,matchplayed);
      // console.log(teamtotal);
            }


async function apifetch(year,i,team11,team22,matchplayed){

    if(i){
    let url = `https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=${year}&page=${i}`;
  

    try {
      const response = await fetch(url)
      const jsonResponse = await response.json();
   
    let data= await totalteams(jsonResponse,team11,team22,matchplayed);
    // console.log(data);
  
          uniquevalue=await removeDuplicates(teamtotal,matchplayed);
          console.log(uniquevalue,matchplayed);
          console.log(teamtotal);  
          

    } catch(err) {
      console.log('ERROR', err);
    }
}
}

const team11=[];
const team22=[];
async function getTeams(year, matchplayed) {
    
    console.log('total match played',matchplayed)
    console.log(`https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=${year}&page=${matchplayed}`);
     
    const url = `https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=${year}&page=${1}`;

    try {
      const response = await fetch(url)
      const jsonResponse = await response.json();
  
      totalpage=Math.ceil(jsonResponse.total/10);
      console.log(totalpage);
   
      for(let j=0;j<jsonResponse.per_page;j++){
        team11.push(jsonResponse.data[j].team1);
        team22.push(jsonResponse.data[j].team2);
        
            }
           

      for(i=2;i<=totalpage;i++){
      
  
 apifetch(year,i,team11,team22,matchplayed);
  

      }
      return [team11,team22];
    } catch(err) {
      console.log('ERROR', err);
    }

  
}


async function main() {


  const year = parseInt(prompt('enter year no'));

  const matchplayed = parseInt(prompt('enter page no'));

  const teams = await getTeams(year, matchplayed);
  

}
main();