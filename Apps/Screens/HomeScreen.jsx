import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { client } from '../Utils/KindeConfig';
import { AuthContext } from '../../App';
import { useContext } from 'react';
import Header from '../Components/Header';
import GlobalApi from '../Utils/GlobalApi';
import CategoryList from '../Components/CategoryList';

export default function HomeScreen() {
    const { auth, setAuth } = useContext(AuthContext);
    const [categories, setCategories] = useState();

    useEffect(() => {
        getCategory();
    }, [])
    const handleLogout = async () => {
        const loggedOut = await client.logout();
        if (loggedOut) {
            setAuth(false);
            // User was logged out
        }
    };

    //Get Category List
    const getCategory = () => {
        GlobalApi.getCategory().then(resp => {
            setCategories(resp.categories);
        })
    }
    return (
        <View style={{ padding: 20, marginTop: 25 }}>
            <Header />
            {/* Category List */}
            <CategoryList categories={categories} />
        </View>
    )
}