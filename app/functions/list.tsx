import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Option from '@/components/Option';
import { useEffect, useState } from 'react';
import { quizData } from './data';
import Results from '@/components/Results';

export default function ListScreen() {
  const [questions, setQuestions] = useState<any>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [checkIfSelected, setCheckIfSelected] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
  });
  const [percentageComplete, setPercentageComplete] = useState(0);

  useEffect(() => {
    setQuestions(quizData);
  }, []);

  let currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    let percentage = (currentQuestionIndex + 1) * 10;
    setPercentageComplete(percentage);
  }, [currentQuestionIndex]);

  const handleNext = () => {
    let correctAnswer = questions[currentQuestionIndex]?.answer;

    if (selectedOption === correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestionIndex < questions?.length - 1) {
      setCurrentQuestionIndex((prevQuestion) => prevQuestion + 1);
    } else {
      setShowResult(true);
    }

    setCheckIfSelected({
      option1: false,
      option2: false,
      option3: false,
      option4: false,
    });
  };

  const checkOptionOne = () => setCheckIfSelected({ option1: true, option2: false, option3: false, option4: false });
  const checkOptionTwo = () => setCheckIfSelected({ option1: false, option2: true, option3: false, option4: false });
  const checkOptionThree = () => setCheckIfSelected({ option1: false, option2: false, option3: true, option4: false });
  const checkOptionFour = () => setCheckIfSelected({ option1: false, option2: false, option3: false, option4: true });

  const restart = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setShowResult(false);
  };

  if (showResult) return <Results restart={restart} score={score} />;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.countwrapper}>
        <Text style={{ fontWeight: "600" }}>{currentQuestionIndex + 1}/{questions?.length}</Text>
      </View>

      <View style={styles.questionwrapper}>
        <View style={styles.progresswrapper}>
          <View style={[styles.progressBar, { width: `${percentageComplete}%` }]}></View>
          <View style={styles.progresscount}>
            <Text style={styles.percentage}>{percentageComplete}</Text>
          </View>
        </View>

        <Text style={{ fontWeight: "500", textAlign: "center" }}>
          {currentQuestion?.question}
        </Text>
      </View>

      <View style={styles.optionswrapper}>
        <Option setSelectedOption={setSelectedOption} checkIfSelected={checkOptionOne} isSelected={checkIfSelected.option1} option={currentQuestion?.options[0]} />
        <Option setSelectedOption={setSelectedOption} checkIfSelected={checkOptionTwo} isSelected={checkIfSelected.option2} option={currentQuestion?.options[1]} />
        <Option setSelectedOption={setSelectedOption} checkIfSelected={checkOptionThree} isSelected={checkIfSelected.option3} option={currentQuestion?.options[2]} />
        <Option setSelectedOption={setSelectedOption} checkIfSelected={checkOptionFour} isSelected={checkIfSelected.option4} option={currentQuestion?.options[3]} />
      </View>

      <TouchableOpacity onPress={handleNext} activeOpacity={0.8} style={styles.btn}>
        <Text style={{ color: "black", fontWeight: "600" }}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4e4e4',
    padding: 20,
  },
  countwrapper: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  questionwrapper: {
    marginTop: 20,
    width: "100%",
    borderRadius: 20,
    backgroundColor: "#fff",
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    alignItems: "center",
  },
  progresswrapper: {
    width: 70,
    height: 70,
    backgroundColor: "#ffbd94",
    borderRadius: 50,
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
    marginBottom: 30,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#ffbd94",
    alignSelf: "flex-end",
  },
  progresscount: {
    height: 58,
    width: 58,
    borderRadius: 50,
    backgroundColor: "#fff",
    zIndex: 10,
    position: "absolute",
    top: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  percentage: {
    fontWeight: "600",
    fontSize: 18,
    color: "#ffbd94",
  },
  optionswrapper: {
    marginTop: 20,
    width: "100%",
  },
  btn: {
    width: "100%",
    height: 50,
    borderRadius: 16,
    backgroundColor: "#ffbd94",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
