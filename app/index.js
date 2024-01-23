import { Redirect } from "expo-router";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from '../components/account/navigation'

const Index = () => {
    return (
    <NavigationContainer>
    <Redirect href="/home" />;
    </NavigationContainer>
)}

export default Index;