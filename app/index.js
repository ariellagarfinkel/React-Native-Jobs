import { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import {COLORS, icons, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';
import DropdownMenu from './dropdownmenu';

const Home = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm ] = useState("");
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };
    return (
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
             <DropdownMenu navigation={navigation} isVisible={isDropdownVisible} toggleDropdown={toggleDropdown} />
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
    )
}

export default Home; 