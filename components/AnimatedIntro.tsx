import {StyleSheet,View} from 'react-native';
import { Image } from 'expo-image';

const AnimatedIntro = () => {
    return (
        <View style={styles.loadingScreen}>
        <Image style={styles.mpicIcon} contentFit="cover" source="./assets/images/Mpic.png" />
        <Image style={[styles.ripplepicIcon, styles.iconPosition]} contentFit="cover" source="./assets/images/ripplepic.png" />
        <Image style={[styles.fishesIcon, styles.iconPosition]} contentFit="cover" source="./assets/images/fishes.png" />
        <Image style={[styles.leftcornerpadIcon, styles.iconLayout]} contentFit="cover" source="./assets/images/leftcornerpad.png" />
        <Image style={[styles.rightcronerpadIcon, styles.iconLayout]} contentFit="cover" source="./assets/images/rightcronerpad.png" />
        <Image style={styles.middlepadIcon} contentFit="cover" source="./assets/images/middlepad.png" />
        </View>
        );
    };
        const styles = StyleSheet.create({
        iconPosition: {
        width: 430,
        left: 0,
        position: "absolute"
        },
        iconLayout: {
        height: 698,
        position: "absolute"
        },
        mpicIcon: {
        top: 391,
        left: 90,
        width: 251,
        height: 151,
        position: "absolute"
        },
        ripplepicIcon: {
        top: 193,
        height: 546
        },
        fishesIcon: {
        top: 235,
        height: 430
        },
        leftcornerpadIcon: {
        width: 682,
        top: 0,
        left: 0,
        height: 698
        },
        rightcronerpadIcon: {
        top: 234,
        left: -229,
        width: 659
        },
        middlepadIcon: {
        left: 51,
        width: 580,
        height: 692,
        top: 0,
        position: "absolute"
        },
        loadingScreen: {
        backgroundColor: "#558cbf",
        flex: 1,
        width: "100%",
        height: 932,
        overflow: "hidden"
        }
        });
        
export default AnimatedIntro;