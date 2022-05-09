//codecademy.com/courses/introduction-to-javascript/projects/sleep-debt-calculator

const getSleepHours = function(day){
    switch (day){
    case  'monday':
      return 8;
      break;
    
      case 'tuesday':
    return 7;
      break;
    
      case 'wednesday':
    return 10;
      break;
    
      case 'thursday':
    return 5;
      break;
    
      case 'friday':
    return 4;
      break;
      case 'saturday':
    return 2;
      break;
      case 'sunday':
    return 12;
    
      break;
      default:
      return 'error'
    
    }
    
    }
    // console.log(getSleepHours('tuesday'))
    //implicit FUNCTION (arrow function with NO params and no {},https://waylonwalker.com/explicit-vs-implicit-returns-in-javascript/)
    
    const getActualSleepHours = () => 
    getSleepHours('monday') +
    getSleepHours('tuesday')+
    getSleepHours('wednesday')+
    getSleepHours('thursday')+
    getSleepHours('friday')+
    getSleepHours('saturday')+
    getSleepHours('sunday')
    
    console.log(getActualSleepHours()); //52
    console.log(getSleepHours('monday') );//8
    //implicit function ended here
    
    const getIdealSleepHours = ( ) => {
    let idealHours = 9
    return idealHours * 7
    };
    // console.log(getIdealSleepHours()); //63
    
    
    const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    
    if (actualSleepHours === idealSleepHours ){
    console.log('got the perfect amount of sleep');
    }else if (actualSleepHours > idealSleepHours){
      //step 10
    console.log('you got' +  (idealSleepHours - actualSleepHours) + 'more sleep this week');
    }else if (actualSleepHours < idealSleepHours){
    console.log('user should get some rest.' + (idealSleepHours - actualSleepHours) +'hours less then you should this week' );
    
    }else{
      console.log("error check code")
    }
     };
    calculateSleepDebt()
    
    // getActualSleepHours(getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday')+ getSleepHours('saturday') + getSleepHours('sunday'))
    
    
    // getSleepHours()
    
    // if(day === 'Monday'){
    //   return 8;
    // }
    // if(day === 'Tuesday'){
    //   return 7;
    // }
    