// CODE here for your Lambda Classes


class Person{ //base class
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }//end constructor
    speak(){
        return `Hello my name is ${this.name} I am from ${this.location}`;
    };

}//end Person

class Instructor extends Person{
    constructor(attributes){
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;

    }
    demo(subject){
        return `Today we are learning about ${subject}`
    }
    grade(student, subject){
        return `${student} receives a perfect score on ${subject}`;
    }
    

}// end Instructor

class Student extends Person{
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.classname = attributes.classname;
        this.favSubjects = attributes.favSubjects;

        
    }
    
        listsSubjects(){
            console.log(favSubjects);
        }

          
    
        PRAssignments(subject){
            return `${this.name} has submitted a PR for ${subject}`};
            
        sprintChallenge(subject){
            return `${this.name} has begun sprint challenge on ${subject}`
        }    

 }//end Instructor

 class ProjectManager extends Instructor{
     constructor(attributes){
         super(attributes);
         this.gradClassName = attributes.gradClassName;
         this.favInstructor = attributes.favSubjects;

     }
     standUp(name, channel){
         `${name} announces to ${channel} @channel standy times`;

     }
     debugsCode(name, student, subject){
         return `${this.name} debugs ${student.name}'s code on ${subject}`;
     }
 }


 



 


  const allie = new Instructor({
    name: "Allie",
    age: 25,
    location: "Illinois",
    //person   
    
    specialty:  "Being Awesome",
    favLanguage: "All of them",
    catchPhrase: "Why did I think double shifts was a good idea?",
    //Instructor

    gradClassName: "Web 9",
    favInstructor:  "Josh Knell",
    //ProjectManager
        
    
  });
  

  const chance = new Student({
    name: "Chance",
    age: 47,
    location: "California",
    //person   
    previousBackground: "DVD and Software Testing",
    classname: "Web 25",
    favSubjects:  "HTML, CSS, Lunch"//array
    
 
        
    
  });
 

  const fred = new ProjectManager({
    name: "Fred",
    age: 30,
    location: "Florida",
    //person   
    
    specialty:  "Inline-Block",
    favLanguage: "Angular",
    catchPhrase: "Trust The Process",
    //Instructor

    gradClassName: "Web 15",
    favInstructor:  "Josh Knell",
    //ProjectManager
        
    
  });
  console.log(fred.speak());
  
  console.log(chance.speak());
  console.log(allie.grade("John", "CSS"));
  console.log(allie.demo("the dangers of over commiting to our schedule"));
  console.log(allie.speak());