import { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import {COLORS, icons, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';
import DropdownMenu from './dropdownmenu';
// import Navigation from '../components/account/navigation';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Signup } from '../components/account/signup';
// import { Login } from '../components/account/login';
// import { Logout } from '../components/account/logout';
// import { Favorites } from '../components/account/favorites';

// const Stack = createNativeStackNavigator();

const Home = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm ] = useState("");
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
        console.log("setDropdown")
    };

    
    return (
        // <NavigationContainer>
        // // <Navigation />
        <SafeAreaView style ={{ flex: 1, backgroundColor: COLORS.lightWhite}}>
           
            <Stack.Screen options={{
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn 
                        iconUrl={icons.menu} 
                        dimension='60%'
                        handlePress={toggleDropdown}
                    />
                     ),
                headerTitle: " "
                }} 
             />
             <DropdownMenu isVisible={isDropdownVisible} toggleDropdown={toggleDropdown} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style = {{
                    flex: 1,
                    padding: SIZES.medium
                }}> 
                
                <Welcome
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    handleClick={() => {
                        if(searchTerm) {
                            router.push(`/search/${searchTerm}`)
                        }
                    }}
                />
                <Popularjobs/>
                <Nearbyjobs/>
                </View>
            </ScrollView>
        </SafeAreaView>
    //    </NavigationContainer>
    )
}

export default Home; 