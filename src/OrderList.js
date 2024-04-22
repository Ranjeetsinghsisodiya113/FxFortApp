import React, { Component } from 'react'
import { Text, Dimensions, View, Image, SafeAreaView, StatusBar } from 'react-native'
import { localimag, mobileHeight, mobileWidth, Colors, Font } from "./Components/utils";
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Keyboard } from 'react-native';
import { useSelector } from 'react-redux';


const OrderList = ({ navigation }) => {
    var orderList = useSelector(state =>state.reducers);

    console.log('orderList',orderList)
    
    return (
        <View style={{ alignItems: 'center', flex: 1, backgroundColor: Colors.themecolor }}>
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

            <View style={{ width: mobileWidth * 90 / 100, marginTop: mobileHeight * 2 / 100 }}>

                <View style={{
                    alignSelf: 'center',

                    width: mobileWidth,
                    height: mobileHeight * 7 / 100,
                    flexDirection: 'row',
                    alignItems: 'center',

                    justifyContent: 'space-between'
                }}>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            navigation.navigate('CreateOrder')
                        }}

                        style={{
                            marginTop: mobileHeight * 2 / 100,
                            width: mobileWidth * 45 / 100,
                            height: mobileHeight * 7 / 100,
                            backgroundColor: Colors.textColor,
                            alignItems: 'center', justifyContent: 'center'
                        }}>




                        <Text style={{
                            fontSize: mobileWidth * 3.8 / 100,
                            fontFamily: Font.FontMedium,
                            color: Colors.whitecolor
                        }}>
                            P2P Trade
                        </Text>
                    </TouchableOpacity >
                    <View style={{
                        marginTop: mobileHeight * 2 / 100,
                        width: mobileWidth * 45 / 100,
                        height: mobileHeight * 7 / 100,
                        backgroundColor: Colors.btnbgClr,
                        alignItems: 'center', justifyContent: 'center'
                    }}>

                        <Text style={{
                            fontSize: mobileWidth * 3.8 / 100,
                            fontFamily: Font.FontMedium,
                            color: Colors.whitecolor
                        }}>
                            Express
                        </Text>
                    </View >
                </View>


            </View>

            <View style={{
                alignSelf: 'center',

                width: mobileWidth,
                height: mobileHeight * 7 / 100,
                flexDirection: 'row',
                alignItems: 'center',

                justifyContent: 'space-between'
            }}>
                <View

                    style={{
                        marginTop: mobileHeight * 2 / 100,
                        width: mobileWidth * 45 / 100,
                        height: mobileHeight * 7 / 100,

                        alignItems: 'center', justifyContent: 'center'
                    }}>




                    <Text style={{
                        fontSize: mobileWidth * 3.8 / 100,
                        fontFamily: Font.FontMedium,
                        color: Colors.textColor
                    }}>
                        Fliter
                    </Text>
                </View>
                <View style={{
                    marginTop: mobileHeight * 2 / 100,
                    width: mobileWidth * 45 / 100,
                    height: mobileHeight * 7 / 100,

                    alignItems: 'center', justifyContent: 'center'
                }}>

                    <Image
                        style={{
                            width: mobileWidth * 6 / 100,
                            height: mobileWidth * 6 / 100
                        }}
                        source={localimag.AtoZ}
                    >

                    </Image>
                </View >
            </View>


{
    orderList.length!=0 &&

<FlatList

data={orderList}
renderItem={({item,index})=>
    
    <View style={{
        width: mobileWidth,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.orderboxbg

    }}>
        {/* first */}
        <View
            style={{ marginLeft: mobileWidth * 2 / 100, }}
        >
            <View style={{

                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: Colors.textColor,
                width: mobileWidth * 13 / 100,
                height: mobileHeight * 3.5 / 100,
            }}>
                <Text style={{
                    fontSize: mobileWidth * 3.8 / 100,
                    fontFamily: Font.FontMedium,
                    color: Colors.whitecolor
                }}>
                    Buy
                </Text>
            </View>

            <Text style={{
                marginTop: mobileHeight * 1.5 / 100,
                fontSize: mobileWidth * 3 / 100,
                fontFamily: Font.FontMedium,
                color: Colors.whitecolor
            }}>
                price
            </Text>

            <Text style={{
                marginTop: mobileHeight * 1.5 / 100,
                fontSize: mobileWidth * 3 / 100,
                fontFamily: Font.FontMedium,
                color: Colors.textColor
            }}>
                {"Want to Pay  "+item.pay +" USD"}
            </Text>

            <Text style={{
                marginVertical: mobileHeight * 1.5 / 100,
                fontSize: mobileWidth * 3 / 100,
                fontFamily: Font.FontMedium,
                color: Colors.textColor
            }}>
                {"I will receive  "+item.receive+" USDFx"}
            </Text>

        </View>



        {/* second */}
        <View>
        <Text style={{
                margin: mobileHeight * 1.5 / 100,
                fontSize: mobileWidth * 3 / 100,
                fontFamily: Font.FontMedium,
                color: Colors.textColor
            }}>
                {"OrderDate: "+item.order_date}
            </Text>

        </View>


    </View>
}

>

</FlatList>
}    






        </View>
    )
}


export default OrderList