import React,{ useState }from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image  } from 'react-native';


const CHOICES = [
  {
    name: 'rock',
    uri: 'http://pngimg.com/uploads/stone/stone_PNG13622.png'
  },
  {
    name: 'paper',
    uri: 'https://www.bbqgourmet.co.uk/ekmps/shops/rufus727/images/bbq-gourmet-peach-butchers-paper-750mm-x-50m-16121-p.jpg'
  },
  {
    name: 'scissors',
    uri: 'http://pluspng.com/img-png/png-hairdressing-scissors-beauty-salon-scissors-clipart-4704.png'
  },
];

const randomComputerChoice = () => CHOICES[Math.floor(Math.random() * CHOICES.length)];

const getRoundOutcome = (userChoice) => {
  const computerChoice = randomComputerChoice().name;
  let result;

  if (userChoice === 'rock') {
    result = computerChoice === 'scissors' ? 'Victory!' : 'Defeat!';
  };
  if (userChoice === 'paper') {
    result = computerChoice === 'rock' ? 'Victory!' : 'Defeat!';
  };
  if (userChoice === 'scissors') {
    result = computerChoice === 'paper' ? 'Victory!' : 'Defeat!';
  };

  if (userChoice === computerChoice) result = 'Tie game!';
  return [result, computerChoice];
};

const Button = (props) => (
  <TouchableOpacity
    style={styles.buttonStyle}
    onPress={() => props.onPress(props.name)}
  >
    <Text style={styles.buttonText}>
      {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
    </Text>
  </TouchableOpacity>
);

const ChoiceCard = ({ player, choice: { uri, name }}) => {
  const title = name && name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <View style={styles.choiceContainer}>
      <Text style={styles.choiceDescription}>
        {player}
      </Text>
      <Image
        source={{ uri }}
        resizeMode="contain"
        style={styles.choiceImage} 
      />
      <Text style={styles.choiceCardTitle}>
        {title}
      </Text>
    </View>
  );
};

export default function App() {
  


  const [gamePrompt, setGamePrompt] = useState('Chose your weapon!');
  const [userChoice, setUserChoice] = useState({});
  const [computerChoice, setComputerChoice] = useState({});
 
  const [win, setwin] = useState(0);
  const [Defeat, setDefeat] = useState(0);
  const [tie, settie] = useState(0);
  const [count, setcount] = useState(0);

  const onPress = (playerChoice) => {
    const [result, compChoice] = getRoundOutcome(playerChoice);
    
    const newUserChoice = CHOICES.find(choice => choice.name === playerChoice);
    const newComputerChoice = CHOICES.find(choice => choice.name === compChoice);

    if(gamePrompt === 'Victory!') {setwin(win+1)}
    if(gamePrompt === 'Defeat!') {setDefeat(Defeat+1)}
    if(gamePrompt === 'Tie game!') {settie(tie+1)}
    setcount(count + 1);
    setGamePrompt(result);
    setUserChoice(newUserChoice);
    setComputerChoice(newComputerChoice);
  };

  const getResultColor = () => {
    if (gamePrompt === 'Victory!') return 'green';
    if (gamePrompt === 'Defeat!') return 'red';
    return null;
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 35, color: getResultColor() }}>
        {gamePrompt}
      </Text>
      <View style={styles.choicesContainer}>
        <ChoiceCard 
          player="Player"
          choice={userChoice}
        />
        <Text style={{ color: '#250902' }}>vs</Text>
        <ChoiceCard 
          player="Computer"
          choice={computerChoice}
        />
    
      </View>
      <View style={styles.numberOfplay}> 
            <Text style = {{fontSize: 25, color: 'green'}}> { "Number Of Plays: " + count } </Text>
            <Text style = {{fontSize: 18}}> {"Win: " + win + "  Defeat: " + Defeat + "  Tie Game: " + tie}</Text>
        </View>
      {CHOICES.map(choice => {
        return (
          <Button
            key={choice.name}
            name={choice.name}
            onPress={onPress}
          />
        )
      })}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e9ebee'
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    width: 200,
    margin: 10,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#640D14',
  },
  buttonText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  choicesContainer: {
    margin: 10,
    borderWidth: 2,
    paddingTop: 100,
    shadowRadius: 5,
    paddingBottom: 100,
    borderColor: 'grey',
    shadowOpacity: 0.90,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: { height: 5, width: 5 },
  },
  choiceContainer: {
    flex: 1,
    alignItems: 'center',
  },
  choiceDescription: {
    fontSize: 25,
    color: '#250902',
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  choiceCardTitle: {
    fontSize: 30,
    color: '#250902'
  },
  choiceImage: {
    width: 150,
    height: 150,
    padding: 10,
  },
  numberOfplay:{
    flexDirection: "column",
    alignItems: 'center',
    
  },
});