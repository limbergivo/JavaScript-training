for (let i = 0; i <=100; i++) {
    console.log("Voor " + i + " punten heb je graad " + score(i));
  }

  function score(j){
    if (j >= 90){
    return "A";    
    } else if (j >= 80){
        return "B";
    } else if (j >= 70){
        return "C";
    } else if ( j >= 65){
        return "D";
    } else{
        return "F";
    }
  }
   
  

