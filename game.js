const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

//Begin
const textNodes = [

    //Gender Select
  {
	
    id: 1,
    text: "Are you a girl or boy?",
    options: [
      {
        text: 'Boy',
        nextText: 2
      },
      {
        text: 'Girl',
        nextText: 2
      }
    ]
  },  
	
	//Trait
	{
    id: 2,
    text: "How do you see yourself?",
    options: [
      {
        text: 'Athlete',
		  //setState :{athlete=true},
        nextText: 4
      },
      {
        text: 'Geek',
		 // setState: {geek=true},
        nextText: 4
      },
		{
			text:'Artist',
			//setState:{artist=true},
			nextText:4
		},
		{
			text:'Outcast',
			nextText:4
		}
    ]
    },

    //First day of high school

	 {
    id: 4,
    text: "Today starts your first day of highschool, and you can't find your classes",
    options: [
      {
        text: 'Ask for directions.',
        nextText: 5
      },
      {
        text: "Find it yourself",
        nextText: 5
      }
    ]
    },

	{
    id: 5,
    text: "You enter the classroom late the students and teacher stare at you awkwardly.",
    options: [
      {
        text: "Sit in the front row.",
        nextText: 6
      },
      {
        text: 'Sit in the back',
        nextText: 6
      }
    ]
  },
	{
    id: 6,
    text: "After a few boring lectures the lunch bell rings.",
    options: [
      {
        text: 'Sit alone',
        nextText: 8
      },
      {
        text: 'Hide in bathroom',
        nextText: 8
      },
		{
		text:'Make a friend',
			nextText:7
		}
    ]
  },
	{
    id: 7,
    text: "Your friend says that they know someone with a crush on you.",
    options: [
      {
        text: 'Ask who.',
        nextText: 8
      },
      {
        text: 'Recject the offer politely.',
        nextText: 8
      }
    ]
  },
	//guy ask you out
	{
    id: 8,
    text: "The captain of the football team asks you out.",
    options: [
      {
        text: 'YES YES YES!',
		 //setState: {partner=true},
        nextText: 10
      },
      {
        text: 'No, sorry',
        nextText: 9
      }
		
    ]
  },
	//girl asks you out 
	{
    id: 9,
    text: "The hottest girl in the school asks you out.",
    options: [
      {
        text: 'Why not',
		  //setState: {partner=true},
        nextText: 10
      },
      {
        text: "I can't sorry",
        nextText: 16
      }
    ]
  },
	{
    id: 10,
    text: "You go to your partner's house to study and do homework they tell you no one is home",
    options: [
      {
        text: 'Make out.',
        nextText: 11
      },
      {
        text: 'I came to do homework',
        nextText: 12
      }
    ]
  },
	{
    id: 11,
    text: "During the tension your partner pulls out a condom",
    options: [
      {
        text: "Give it to 'em.",
        nextText: 12
      },
      {
        text: "I'm saving myself.",
        nextText: 12
      },
    ]
    },

    
	//Cheated On
	{
    id: 12,
    text: "You discover that your partner of 3 years has cheated on you.",
        options: [
            {
                text: "Insult your partner",
                nextText:13
            },
      {
        text: "It's ok",
        nextText: 16
      },
		{
			text:"Murder",
			nextText:17
		},
		{
			text:"Break up",
			nextText:34
		},
	
    ]
  },

    //Insult Partner
	{
    id: 13,
    text: "You insulted your partner, they apologized.",
    options: [
      {
        text: 'Cheat for revenge.',
        nextText: 14
      },
		{
			text:"Accept their apology.",
			nextText:2
		}
	
    ]
    },

    //Cheat for Revenge
    {
        id: 14,
        text: "You cheated on your partner for revenge, but it didnt make you feel any better.",
        options: [
            {
                text: 'Break up.',
              
                nextText: 15
            },
            {
                text: "Get back together",
                nextText:35
            },
            

        ]
    }, 

    //break up
    {
        id: 34,
        text: "You broke up with your partner.",
        options: [
            {
                text: 'Cry it out.',

                nextText: 16
            },
            {
                text: "It's whatever",
                nextText: 16
            },


        ]
    }, 

    //get together
    {
        id: 35,
        text: "You go back together with your partner, they promised you things would be better.",
        options: [
            {
                text: 'We will see.',

                nextText: 16
            },
            

        ]
    }, 



    //Murder Partner
	{
    id: 17,
    text: "You chose to murder your partner, choose your murder weapon.",
    options: [
      {
        text: 'Stick',
        nextText: 18
      },
      {
        text: 'Knife',
        nextText: 18
      },
		{
			text:'Pepper Spray',
			nextText:18
		},
		{
			text:'car',
			nextText:22
		}
	
    ]
  },
	//fail murder
	{
    id: 18,
    text: "Your ex ran away calling the police",
    options: [
      {
        text: 'Chase him down',
        nextText: 19
      },
      
	
    ]
    },

    //chase
	{
    id: 19,
    text: "You chased him down ",
    options: [
      {
        text: 'Push him into incoming traffic',
        nextText: 20
      },
      {
        text: 'Apologize',
        nextText: 21
      },
	
    ]
  },
	//full kill
	{
    id: 20,
    text: "You pushed him into traffic, he died.",
    options: [
      {
        text: 'Walk away',
        nextText: 16
      },
      {
        text: 'Run away',
        nextText: 16
      },
	
    ]
  },
	//apologize
	{
    id: 21,
    text: "You tried to apologize but your ex took his knife out and stabbed you in self-defense",
    options: [
      {
		  text: 'Restart',
        nextText: -1
      }
      
	
    ]
    },

    //get vehicle
	{
    id: 22,
    text: "You don't have a vehicle",
    options: [
      {
        text: 'Steal a vehicle',
        nextText: 23
      },
      {
        text: "Borrow parents' car",
        nextText: 28
      },
	
    ]
  },
	//steal car
	{
    id: 23,
    text: "What car should you steal?",
    options: [
      {
        text: 'Toyota Camry',
        nextText: 25
      },
      {
        text: "Mercedes Benz",
        nextText: 24
      },
		{
			text:"Honda Civic",
			nextText:25
		},
		{
			text:"Lamborghini Aventador",
			nextText:24
		},
	
    ]
    },
    //fail steal car
    {
        id: 24,
        text: "The owner shot you for trespassing.",
        options: [
            {
                text: 'Restart',
                nextText: -1
            }


        ]
    },


	//murder ex with car
	{
    id: 25,
    text: "You successfully stole the car and ran over your ex.",
    options: [
      {
        text: 'Ditch the car.',
        nextText: 16
      },
      {
        text: "Keep the car",
        nextText: 26
      },
		{
			text:"Destroy the car",
			nextText:16
		}
	
    ]
    },

    //keep car
	{
    id: 26,
    text: "You chose to keep the car, the police reported to a stolen vehicle and are at your doorstep.",
    options: [
      {
        text: 'Turn yourself in',
        nextText: 27
      },
      {
        text: "Run",
        nextText: 27
      },
	
    ]
  },
	
	{
    id: 27,
    text: "You were charged with fleeing from a crime scene, murder, and attempt to flee and is sentenced to life in prision.",
    options: [
      {
         text: 'Restart',
        nextText: -1
      }
      
    ]
  },

   

    //fail take parents car
    {
        id: 28,
        text: "Your parents caught you trying to take the car and grounded you.",
        options: [
            {
                text: 'Apologize',
                nextText: 16
            },
            {
                text: 'Study for class',
                nextText: 16
            },
            {
                text: "Cry it out.",
                nextText: 16
            },
            {
                text: "It's whatever.",
                nextText: 16
            }

        ]
    },

    //drivers test 
    {
        id: 16,
        text: "Would you like to take your driver's test.",
        options: [
            {
                text: 'Yes',
                nextText: 29
            },
            {
                text: 'No.',
                nextText: 32
            }
           

        ]
    },

    {
        id: 29,
        text: "What does a flashing light at an intersection mean.",
        options: [
            {
                text: 'Slow down and proceed with caution',
                nextText: 30
            },
            {
                text: 'Red light coming soon',
                nextText: 31
            },
            {
                text: "Right turn only.",
                nextText: 31
            }
            

        ]
    },

    //pass drivers test
    {
        id: 30,
        text: "Congratulations you passed your drivers test, your parents want to award you with a 2013 Nissan Altima",
        options: [
            {
                text: 'Thank you!',
                nextText: 32
            },
            {
                text: 'Complain about it being old',
                nextText: 33
            },
            

        ]
    },
    //fail drivers test
    {
        id: 31,
        text: "You failed your drivers test.",
        options: [
            {
                text: 'Retake',
                nextText: 29
            },
            {
                text: 'Give up',
                nextText: 32
            }
            

        ]
    },

    {
        id: 33,
        text: "You asked your parents for a better car they gave you a 2018 BMW.",
        options: [
            {
                text: 'Thank you!',
                nextText: 32
            },
            

        ]
    },
    //graduate high school
    //begin life
    {
        id: 32,
        text: "You have graduated highschool.",
        options: [
            {
                text: 'Go to university',
                nextText: 36
            },
            {
                text: 'Enlist in military',
                nextText: 97
            },
            {
                text: "Find a job.",
                nextText: 99
            },
            {
                text: "Go to Community College.",
                nextText: 104
            }

        ]
    },

    //Bachelor Programs

    {
        id: 36,
        text: "What major will you apply for?",
        options: [
            {
                text: 'Computer Science',
                nextText: 37
            },
            {
                text: 'Nursing',
                nextText: 73
            },
            {
                text: "Business.",
                nextText: 49
            },
            {
                text: "Political Science",
                nextText: 61
            }

        ]
    },

    //computer science completion
    {
        id: 37,
        text: "You recieved a bachelors.",
        options: [
            {
                text: 'Find a job',
                nextText: 38
            },
            {
                text: 'Graduate School',
                nextText: 43
            },
            

        ]
    },

    //computer science find job
    {
        id: 38,
        text: "You recieved these job offers.",
        options: [
            {
                text: 'Software Engineer',
                nextText: 39
            },
            {
                text: 'Full-Stack Web Developer',
                nextText: 40
            },
            {
                text: 'Computer Programmmer',
                nextText:41
            },
            {
                text: 'Mobile Application Developer',
                nextText:42
            }



        ]
    },

    //Accept Computer Science Job
    {
        id: 39,
        text: 'You are now a Software Engineer earning $105,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    {
        id: 40,
        text: 'You are now a Full-Stack Web Developer earning $85,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    {
        id: 41,
        text: 'You are now a Computer Programmer earning $75,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    {
        id: 42,
        text: 'You are now a Mobile applications Developer earning $95,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },



    //computer science continue education
    {
        id: 43,
        text: "You recieved a masters.",
        options: [
            {
                text: 'Find a job',
                nextText: 44
            },
      
        ]
    },

    //computer science jobs (master)
    {
        id: 44,
        text: "You recieved these job offers.",
        options: [
            {
                text: 'Computer Network Architect',
                nextText: 45
            },
            {
                text: 'Network and Computer System Administrator',
                nextText: 46
            },
            {
                text: 'Database Administrator',
                nextText: 47
            },
            {
                text: 'Software Engineer',
                nextText: 48
            }


        ]
    },

    //Accept Computer Science Job(master)
    {
        id: 45,
        text: 'You are now a Computer Network Architect earning $105,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    {
        id: 46,
        text: 'You are now a Network and Computer System Administrator earning $85,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    {
        id: 47,
        text: 'You are now a Database Administrator earning $75,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    {
        id: 48,
        text: 'You are now a Software Engineer earning $95,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    //Business School 

    {
        id: 49,
        text: "You recieved a bachelors.",
        options: [
            {
                text: 'Find a job',
                nextText: 50
            },
            {
                text: 'Graduate School',
                nextText: 55
            },
            
     

        ]
    },

    
    //Business job (bachelors)
    {
        id: 50,
        text: "You recieved these job offers.",
        options: [
            {
                text: 'Accountant',
                nextText: 51
            },
            {
                text: 'Real Estate Agent',
                nextText: 52
            },
            {
                text: 'Financial Advisor',
                nextText: 53
            },
            {
                text: 'Business Analyst',
                nextText: 54
            }


        ]
    },

    //Accept Business job (bachelors)
    {
        id: 51,
        text: 'You are now an Accountant earning $70,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    {
        id: 52,
        text: 'You are now a Real Estate Agent earning $85,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    {
        id: 53,
        text: 'You are now a Financial Advisor earning $75,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    {
        id: 54,
        text: 'You are now a Business Analyst earning $95,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    //business receive masters

    {
        id: 55,
        text: "You recieved a masters.",
        options: [
            {
                text: 'Find a job',
                nextText: 56
            },

        ]
    },

    //Business jobs (master)
    {
        id: 56,
        text: "You recieved these job offers.",
        options: [
            {
                text: 'Business Manager',
                nextText: 57
            },
            {
                text: 'Product Manager',
                nextText: 58
            },
            {
                text: 'CEO',
                nextText: 59
            },
            {
                text: 'Advising Executive',
                nextText: 60
            }


        ]
    },

    //Accept Business Job(master)
    {
        id: 57,
        text: 'You are now a Business Manager earning $105,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    {
        id: 58,
        text: 'You are now a Product Manager earning $95,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    {
        id: 59,
        text: 'You are now a CEO earning $275,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    {
        id: 60,
        text: 'You are now a Advising Executive earning $85,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    //Political Science

    {
        id: 61,
        text: "You recieved a bachelors.",
        options: [
            {
                text: 'Find a job',
                nextText: 62
            },
            {
                text: 'Law School',
                nextText: 67
            },
        ]
    },

    //Political Science jobs (bachelors)
    {
        id: 62,
        text: "You recieved these job offers.",
        options: [
            {
                text: 'Policy Analyst',
                nextText: 63
            },
            {
                text: 'Political Consultant',
                nextText: 64
            },
            {
                text: 'Public relations representatives',
                nextText: 65
            },
            {
                text: 'Legislative Assistant',
                nextText: 66
            }


        ]
    },

    //Accept political science job (bachelors)
    {
        id: 63,
        text: 'You are now a Policy Analyst earning $60,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    {
        id: 64,
        text: 'You are now a Political Consultant earning $90,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    {
        id: 65,
        text: 'You are now a Public Relations Representatives earning $60,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    {
        id: 66,
        text: 'You are now a Legistlative Assistant earning $45,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    //political science go to lawschool

    {
        id: 67,
        text: "You went to law school.",
        options: [
            {
                text: 'Find a job',
                nextText: 68
            },

        ]
    },

    //political science jobs (lawschool)
    {
        id: 68,
        text: "You recieved these job offers.",
        options: [
            {
                text: 'Attorney',
                nextText: 69
            },
            {
                text: 'Associate Counsel',
                nextText: 70
            },
            {
                text: 'Law Clerk',
                nextText: 71
            },
            {
                text: 'Fellow',
                nextText: 72
            }


        ]
    },

    //Accept political science Job(law school)
    {
        id: 69,
        text: 'You are now an Attorney earning $70,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    {
        id: 70,
        text: 'You are now an Associate earning $95,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    {
        id: 71,
        text: 'You are now a Law Clerk earning $55,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    {
        id: 72,
        text: 'You are now a Fellow earning $45,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },


    //nursing
    {
        id: 73,
        text: "You recieved a bachelors.",
        options: [
            {
                text: 'Find a job',
                nextText: 74
            },
            {
                text: 'Medical School',
                nextText: 79
            },
            {
                text: 'Continue Education',
                nextText:85
            },
            {
                text: 'Pharmacy School',
                nextText:91
            },


        ]
    },


    //nursing jobs (bachelors)
    {
        id: 74,
        text: "You recieved these job offers.",
        options: [
            {
                text: 'Registered Nurse',
                nextText: 75
            },
            {
                text: 'Clinical Nurse Specialist ',
                nextText: 76
            },
            {
                text: 'Public Health Nurse',
                nextText: 77
            },
            {
                text: 'Clinical Research Nurse',
                nextText: 78
            }


        ]
    },

    //Accept nurse job (bachelors)
    {
        id: 75,
        text: 'You are now a Registered Nurse earning $60,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    {
        id: 76,
        text: 'You are now a Clinical Nurse Specialist earning $90,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    {
        id: 77,
        text: 'You are now a Public Health Nurse earning $60,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    {
        id: 78,
        text: 'You are now a Clinical Research Nurse earning $85,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    //nurse go to medical school

    {
        id: 79,
        text: "You went to medical school.",
        options: [
            {
                text: 'Find a job',
                nextText: 80
            },

        ]
    },

    //Nurse jobs (Medical Scjool)
    {
        id: 80,
        text: "You recieved these job offers.",
        options: [
            {
                text: 'Cardiologist',
                nextText: 81
            },
            {
                text: 'Neurologists',
                nextText: 82
            },
            {
                text: 'Family Physician',
                nextText: 83
            },
            {
                text: 'Oncologist',
                nextText: 84
            }


        ]
    },

    //Accept nurse  Job(medical school)
    {
        id: 81,
        text: 'You are now a cardiologist earning $370,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    {
        id: 82,
        text: 'You are now a Neurologist earning $280,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    {
        id: 83,
        text: 'You are now a Family Physician earning $195,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    {
        id: 84,
        text: 'You are now a Oncologist earning $300,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    //nursing jobs (master)
    {
        id: 85,
        text: "You recieved a masters.",
        options: [
            {
                text: 'Find a job',
                nextText: 86
            },

        ]
    },

    {
        id: 86,
        text: "You recieved these job offers.",
        options: [
            {
                text: 'Nurse Anesthetist',
                nextText: 87
            },
            {
                text: 'Genernal Nurse Practitioner',
                nextText: 88
            },
            {
                text: 'Mental Health Nurse',
                nextText: 89
            },
            {
                text: 'Nurse Midwife',
                nextText: 90
            }


        ]
    },

    //Accept nurse job (masters)
    {
        id: 87,
        text: 'You are now a Nurse Anesthetist earning $160,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    {
        id: 88,
        text: 'You are now a Genernal Nurse Practitioner earning $110,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    {
        id: 89,
        text: 'You are now a Mental Health Nurse earning $100,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    {
        id: 90,
        text: 'You are now a Nurse Midwife earning $92,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    //nurse go to pharmacy school

    {
        id: 91,
        text: "You went to pharmacy school.",
        options: [
            {
                text: 'Find a job',
                nextText: 92
            },

        ]
    },

    //Nurse jobs (pharmacy Scjool)
    {
        id: 92,
        text: "You recieved these job offers.",
        options: [
            {
                text: 'Retail Pharmacist',
                nextText: 93
            },
            {
                text: 'Clinical Pharmacist',
                nextText: 94
            },
            {
                text: 'Chemotherapist',
                nextText: 95
            },
            {
                text: 'Nuclear Pharmacist',
                nextText: 96
            }


        ]
    },

    //Accept nurse  Job(pharmacy school)
    {
        id: 93,
        text: 'You are now a Retail Pharmacist earning $80,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    {
        id: 94,
        text: 'You are now a Clinical Pharmcust earning $100,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    {
        id: 95,
        text: 'You are now a Chemotherapist earning $105,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    {
        id: 96,
        text: 'You are now a Nuclear Pharmacist earning $120,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },


    //Military
    {
        id: 97,
        text: "Which branch are you considering?",
        options: [
            {
                text: 'Navy',
                nextText: 98
            },
            {
                text: 'Marines',
                nextText: 98
            },
            {
                text: "Air Force.",
                nextText: 98
            },
            {
                text: "Coast Guard.",
                nextText: 98
            }

        ]
    },

    //enlistee
    {
        id: 98,
        text: 'Thank you for enlisting and Thank you for your service.',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },

    //find a job (full time)
    {
        id: 99,
        text: "Full time Jobs Available.",
        options: [
            {
                text: 'Cashier',
                nextText: 100
            },
            {
                text: 'Receptionist',
                nextText: 101
            },
            {
                text: "Janitor.",
                nextText: 102
            },
            {
                text: "Cook.",
                nextText: 103
            }

        ]
    },

    //Accept full time job
    {
        id: 100,
        text: 'You are now a Retail Cashier earning $20,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    {
        id: 101,
        text: 'You are now a Corporate Receptionist earning $25,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    {
        id: 102,
        text: 'You are now a Custodial Manager earning $30,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    {
        id: 103,
        text: 'You are now a You are now a cook at Chick-fil-A earning $20,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    //Community College
    {
        id: 104,
        text: "What degree program are you interested in.",
        options: [
            {
                text: 'Information Technology',
                nextText: 105
            },
            {
                text: 'Finance',
                nextText: 111
            },
            {
                text: "Graphic Design.",
                nextText: 117
            },
            {
                text: "Journalism.",
                nextText: 123
            }

        ]
    },

    //community college (info Tech)

    {
        id: 105,
        text: "You recieved a degree in Information Technology.",
        options: [
            {
                text: 'Find a job',
                nextText: 106
            },

        ]
    },

    //information Tech jobs
    {
        id: 106,
        text: "You recieved these job offers.",
        options: [
            {
                text: 'IT consultant',
                nextText: 107
            },
            {
                text: 'Cloud Architect',
                nextText: 108
            },
            {
                text: 'Computer Forensic Investigator',
                nextText: 109
            },
            {
                text: 'Web Developer',
                nextText: 110
            }


        ]
    },

    //Accept Information Tech Jobs
    {
        id: 107,
        text: 'You are now a IT Consultant earning $96,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    {
        id: 108,
        text: 'You are now a Cloud Architect earning $112,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    {
        id: 109,
        text: 'You are now a Computer Forensic Investigator earning $65,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    {
        id: 110,
        text: 'You are now a Web Developer earning $90,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    //community college (finance)

    {
        id: 111,
        text: "You recieved a degree in Finance.",
        options: [
            {
                text: 'Find a job',
                nextText: 112
            },

        ]
    },

    //Finance jobs
    {
        id: 112,
        text: "You recieved these job offers.",
        options: [
            {
                text: 'Financial Planner',
                nextText: 113
            },
            {
                text: 'Financial Analyst',
                nextText: 114
            },
            {
                text: 'Investor Relations Associate',
                nextText: 115
            },
            {
                text: 'Budget Analyst',
                nextText: 116
            }


        ]
    },

    //Accept Finance Jobs
    {
        id: 113,
        text: 'You are now a Financial Planner earning $88,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    {
        id: 114,
        text: 'You are now a Financial Analyst earning $85,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    {
        id: 115,
        text: 'You are now a Investor Relations Associate earning $65,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    {
        id: 116,
        text: 'You are now a Budget Analyst earning $76,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    //community college (graphic design)

    {
        id: 117,
        text: "You recieved a degree in Graphic Design.",
        options: [
            {
                text: 'Find a job',
                nextText: 118
            },

        ]
    },

    //Graphic Design jobs
    {
        id: 118,
        text: "You recieved these job offers.",
        options: [
            {
                text: 'Art Director',
                nextText: 119
            },
            {
                text: 'Web Designer',
                nextText: 120
            },
            {
                text: 'Multimedia Designer',
                nextText: 121
            },
            {
                text: 'Photoshop Artist',
                nextText: 122
            }


        ]
    },

    //Accept graphic design Jobs
    {
        id: 119,
        text: 'You are now an Art Director earning $70,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    {
        id: 120,
        text: 'You are now a Web Desinger earning $85,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    {
        id: 121,
        text: 'You are now a Multimedia Designer earning $45,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    {
        id: 122,
        text: 'You are now a Photoshop Artist earning $50,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    
    //community college (journalism)

    {
        id: 123,
        text: "You recieved a degree in Journalism.",
        options: [
            {
                text: 'Find a job',
                nextText: 124
            },

        ]
    },

    //journalism jobs
    {
        id: 124,
        text: "You recieved these job offers.",
        options: [
            {
                text: 'Reporter',
                nextText: 125
            },
            {
                text: 'Blogger',
                nextText: 126
            },
            {
                text: 'Social Media Specialist',
                nextText: 127
            },
            {
                text: 'Copywriter',
                nextText: 128
            }


        ]
    },

    //Accept Journalism Jobs
    {
        id: 125,
        text: 'You are now a Reporter earning $47,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    {
        id: 126,
        text: 'You are now a Blogger earning $45,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    {
        id: 127,
        text: 'You are now a Social Media Specialist earning $42,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },

    {
        id: 128,
        text: 'You are now a Copywriter earning $60,000 a year',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
            }
        ]
    },
	
	
  
]

startGame()