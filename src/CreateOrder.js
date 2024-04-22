import React, { Component } from 'react'
import { Text,SafeAreaView,StatusBar, Dimensions, View, Image, Modal } from 'react-native'
import { localimag, mobileHeight, mobileWidth, Colors, Font } from "./Components/utils";
import { TextInput } from 'react-native-gesture-handler';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Keyboard } from 'react-native';
import DatePicker from 'react-native-date-picker';
import RBSheet from 'react-native-raw-bottom-sheet';
import Toast from 'react-native-simple-toast';
import { useDispatch, useSelector } from 'react-redux';
import { addPost,addOrder } from './redux/actions';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const CreateOrder = ({ navigation }) => {
    var orderList = useSelector(state => state.reducers);
    const [pay, setPay] = useState('');
    const [receive, setReceive] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [myOrderDate, setMyOrderDate] = useState(null);
    const [isOptions, setIsOptions] = useState(false);

    const dispatch= useDispatch()


    const AddPostFunc = () => {

        if(pay==''){
            Toast.show('please enter amount to pay', Toast.SHORT);
             return false
        }
        if(myOrderDate==null){
            Toast.show('please select Order Date', Toast.SHORT);
            return false
        }

        console.log('post list', orderList)

        var order_id = 1;
        if (orderList.length) {
            order_id = orderList[orderList.length - 1].order_id + 1

        }
        var data = {
            order_id: order_id,
            pay: pay,
            receive: receive,
            order_date: myOrderDate
        }

        console.log('data', data)

        showToast()
        dispatch(addOrder(data))
        navigation.navigate("OrderList")

    }

    const showToast = () => {
        Toast.show('Order is created successfully', Toast.SHORT);
      };

    const handleDateChange = (date) => {
        setSelectedDate(date);

        setTimeout(() => {
            const dateObject = new Date(selectedDate);

            // Extract date and time components
            const year = dateObject.getFullYear();
            const month = dateObject.getMonth() + 1; // Month starts from 0
            const day = dateObject.getDate();
            const hours = dateObject.getHours();
            const minutes = dateObject.getMinutes();
            const seconds = dateObject.getSeconds();

            // Format date and time as needed
            const formattedDate = `${day + 1}-${month}-${year}`;
            const formattedTime = `${hours}:${minutes}`;

            console.log("Date:", formattedDate);
            console.log("Time:", formattedTime);

            const my_date = formattedDate + " " + formattedTime
            setMyOrderDate(my_date)
        }, 500);
    };

    //------------for close date picker--------------//
    const _closeDatePicker = () => {
        setIsOptions(false)
    };




    return (
        <View style={{ alignItems: 'center', flex: 1, backgroundColor: Colors.textColor }}>
           <SafeAreaView
                  style={{
                    flex: 0,
                    backgroundColor: Colors.themecolor,
                  }}
                />
                <StatusBar
                  hidden={false}
                  backgroundColor={Colors.themecolor}
                  translucent={false}
                  barStyle="dark-content"
                  networkActivityIndicatorVisible={true}
                />
           
            <Modal
                animationType="slide"
                transparent={true}
                visible={isOptions}
                onRequestClose={() => {
                    setIsOptions(false)
                }}>
                <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#00000050', justifyContent: 'center' }}></View>
                <View style={{ backgroundColor: Colors.textColor, alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => {
                            setIsOptions(false)
                        }}>
                        <Text style={{
                            fontFamily: Font.FontMedium,
                            color: 'red',
                            fontSize: mobileWidth * 4 / 100,

                        }}>
                            Close
                        </Text>
                    </TouchableOpacity>
                    <DatePicker
                        date={selectedDate}
                        onDateChange={handleDateChange}
                        mode="date"
                        minimumDate={new Date()}
                        theme='auto'
                    // You can castomize other props here
                    />

                </View>
            </Modal>

            <View style={{
                backgroundColor: '#D0E0F3',
                padding: mobileWidth * 5 / 100,
                width: mobileWidth,
                flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
            }}>
                <View style={{ width: mobileWidth * 15 / 100, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Image
                        style={{
                            width: mobileWidth * 6 / 100,
                            height: mobileWidth * 6 / 100,
                        }}
                        source={localimag.menuIcon}
                    >


                    </Image>
                    <Image
                        style={{
                            width: mobileWidth * 7 / 100,
                            height: mobileWidth * 7 / 100,
                        }}
                        source={localimag.Logo}
                    ></Image>
                </View >

                <View style={{ width: mobileWidth * 40 / 100, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Image
                        style={{
                            width: mobileWidth * 3.5 / 100,
                            height: mobileWidth * 3.5 / 100,
                        }}
                        source={localimag.copyCodeIcon}
                    >


                    </Image>
                    <Text style={{
                        fontSize: mobileWidth * 3 / 100,
                        fontFamily: Font.FontRegular,
                        color: Colors.textColor
                    }}>
                        0xD23....fa1
                    </Text>
                    <Image
                        style={{
                            width: mobileWidth * 7 / 100,
                            height: mobileWidth * 7 / 100,
                        }}
                        source={localimag.cirlceImage}
                    ></Image>

                    <Image
                        style={{
                            width: mobileWidth * 4 / 100,
                            height: mobileWidth * 4 / 100,
                        }}
                        source={localimag.notification}
                    ></Image>
                </View >
            </View>
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center', width: mobileWidth, }} keyboardShouldPersistTaps='handled'>

            <View style={{
                width: mobileWidth,
                backgroundColor: Colors.textColor,
                padding: mobileWidth * 5 / 100,
            }}>
                <Text style={{
                    fontSize: mobileWidth * 5.5 / 100,
                    fontFamily: Font.FontSemiBold,
                    color: Colors.whitecolor
                }}>
                    Buy USDFx
                </Text>


                <Text style={{
                    marginTop: mobileHeight * 2 / 100,
                    fontSize: mobileWidth * 3.8 / 100,
                    fontFamily: Font.FontRegular,
                    color: Colors.whitecolor
                }}>
                    I want to pay
                </Text>



                <View style={{
                    marginTop: mobileHeight * 0.5 / 100,
                    backgroundColor: Colors.themecolor,
                    
                    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
                }}>


                    <TextInput

                        keyboardType='number-pad'
                        style={{

                            paddingHorizontal: mobileWidth * 2 / 100,
                            backgroundColor: Colors.themecolor,
                            width: mobileWidth * 55 / 100,
                            height:mobileHeight*6/100,
                            color: Colors.textColor,
                            fontSize: mobileWidth * 4.2 / 100,
                            fontFamily: Font.FontBold
                        }}
                        onChangeText={(txt) => {
                            setPay(txt)
                            txt=='' ?
                            setReceive(0)
                            :
                            setReceive(parseInt(txt)*0.85)
                        }}
                        onBlur={() => {
                            Keyboard.dismiss()
                        }}
                        placeholder=''
                        placeholderTextColor={Colors.textColor}
                        maxLength={250}
                    //value={description}
                    ></TextInput>
                    <Image
                        style={{
                            width: mobileWidth * 25 / 100,
                            height: mobileWidth * 7 / 100,
                        }}
                        source={localimag.USD}
                    >


                    </Image>

                </View>



                <Text style={{
                    marginTop: mobileHeight * 2 / 100,
                    fontSize: mobileWidth * 3.8 / 100,
                    fontFamily: Font.FontRegular,
                    color: Colors.whitecolor
                }}>
                    I will Receive
                </Text>



                <View style={{
                    marginTop: mobileHeight * 0.5 / 100,
                    backgroundColor: Colors.themecolor,
                    flexDirection: 'row', 
                    height:mobileHeight*7/100,
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>


                    <Text

                        
                        style={{
                          
                            paddingHorizontal: mobileWidth * 2 / 100,
                            backgroundColor: Colors.themecolor,
                            width: mobileWidth * 55 / 100,
                            color: Colors.textColor,
                            fontSize: mobileWidth * 4.2 / 100,
                            fontFamily: Font.FontBold
                        }}
                       
                    >
{receive}
                    </Text>
                    <Image
                        style={{
                            width: mobileWidth * 25 / 100,
                            height: mobileWidth * 7 / 100,
                        }}
                        source={localimag.USFFX}
                    >


                    </Image>

                </View>


                <Text style={{
                    marginTop: mobileHeight * 2 / 100,
                    fontSize: mobileWidth * 3.8 / 100,
                    fontFamily: Font.FontRegular,
                    color: Colors.whitecolor
                }}>
                    Order Valid Till
                </Text>



                <TouchableOpacity
                    onPress={() => {
                        setIsOptions(true)
                    }}
                    activeOpacity={1}
                    style={{
                        marginTop: mobileHeight * 0.5 / 100,
                        backgroundColor: Colors.themecolor,
                        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
                    }}>


                    <Text
                        style={{

                            paddingHorizontal: mobileWidth * 2 / 100,
                            backgroundColor: Colors.themecolor,
                            width: mobileWidth * 50 / 100,
                            color: Colors.textColor,
                            lineHeight: mobileHeight * 6 / 100,
                            fontSize: mobileWidth * 4.2 / 100,
                            fontFamily: Font.FontBold
                        }}


                    >

                        {myOrderDate == null ?
                            "Select Date"
                            :
                            myOrderDate

                        }

                    </Text>
                    <Image
                        style={{
                            marginRight: mobileWidth * 5 / 100,
                            width: mobileWidth * 6 / 100,
                            height: mobileWidth * 6 / 100,
                        }}
                        source={localimag.calendar_month}
                    >


                    </Image>

                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => {
                        Keyboard.dismiss()
                        AddPostFunc()
                    }}

                    style={{
                        height: mobileHeight * 6 / 100,
                        marginTop: mobileHeight * 4 / 100,
                        width: mobileWidth * 90 / 100,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: Colors.themecolor
                    }}>
                    <Text style={{
                        fontFamily: Font.FontSemiBold,
                        fontSize: mobileWidth * 4 / 100,
                        color: Colors.textColor
                    }}>
                        Create Order
                    </Text>

                </TouchableOpacity>
            </View>





</KeyboardAwareScrollView>

        </View>
    )
}


export default CreateOrder