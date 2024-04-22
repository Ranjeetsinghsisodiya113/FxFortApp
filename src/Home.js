import React, { Component } from 'react'
import { Text, Dimensions, View, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import { localimag, mobileHeight, mobileWidth, Colors, Font } from "./Components/utils";
import { StatusBar } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={{ alignItems: 'center', flex: 1, backgroundColor: '#D0E0F3' }}>
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
        margin: mobileWidth * 5 / 100,
        width: mobileWidth * 90 / 100,
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

      <View style={{
        alignSelf: 'center',
        paddingHorizontal: mobileWidth * 3 / 100,
        width: mobileWidth * 90 / 100,
        height: mobileHeight * 7 / 100,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.textColor,
        justifyContent: 'space-between'
      }}>
        <Text style={{
          fontSize: mobileWidth * 4 / 100,
          fontFamily: Font.FontRegular,
          color: Colors.whitecolor
        }}>
          USDFx Balance
        </Text>
        <Text style={{
          fontSize: mobileWidth * 4 / 100,
          fontFamily: Font.FontRegular,
          color: Colors.whitecolor
        }}>
          0.00
        </Text>


      </View>

      <View style={{ width: mobileWidth * 90 / 100, marginTop: mobileHeight * 2 / 100 }}>
        <Text style={{
          fontSize: mobileWidth * 4 / 100,
          fontFamily: Font.FontSemiBold,
          color: Colors.textColor
        }}>
          Trade at your fingertips
        </Text>
        <View style={{
          alignSelf: 'center',

          width: mobileWidth * 90 / 100,
          height: mobileHeight * 7 / 100,
          flexDirection: 'row',
          alignItems: 'center',

          justifyContent: 'space-between'
        }}>
          <TouchableOpacity 
          activeOpacity={0.9}
          onPress={()=>{
navigation.navigate('CreateOrder')
          }}
          
          style={{
            marginTop: mobileHeight * 2 / 100,
            width: mobileWidth * 35 / 100,
            height: mobileHeight * 6 / 100,
            backgroundColor: Colors.btnbgClr,
            flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
          }}>
            <Image
              style={{
                width: mobileWidth * 5 / 100,
                height: mobileWidth * 5 / 100,
                marginRight: mobileWidth * 2 / 100
              }}
              source={localimag.detailsIcon}
            >


            </Image>
            <Text style={{
              fontSize: mobileWidth * 3.8 / 100,
              fontFamily: Font.FontMedium,
              color: Colors.textColor
            }}>
              Buy USDFx
            </Text>
          </TouchableOpacity >
          <View style={{
            marginTop: mobileHeight * 2 / 100,
            width: mobileWidth * 35 / 100,
            height: mobileHeight * 6 / 100,
            backgroundColor: Colors.btnbgClr,
            flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
          }}>
            <Image
              style={{
                width: mobileWidth * 5 / 100,
                height: mobileWidth * 5 / 100,
                marginRight: mobileWidth * 2 / 100
              }}
              source={localimag.detailsIcon}
            >


            </Image>
            <Text style={{
              fontSize: mobileWidth * 3.8 / 100,
              fontFamily: Font.FontMedium,
              color: Colors.textColor
            }}>
              P2P Trade
            </Text>
          </View >
        </View>

        <View style={{ width: mobileWidth * 90 / 100, marginTop: mobileHeight * 2 / 100 }}>
          <Text style={{
            fontSize: mobileWidth * 4 / 100,
            fontFamily: Font.FontSemiBold,
            color: Colors.textColor
          }}>
            Know USDFx Ecosystem
          </Text>
          <View style={{
            marginTop: mobileHeight * 1.5 / 100,
            alignSelf: 'center',
            paddingHorizontal: mobileWidth * 3 / 100,
            width: mobileWidth * 90 / 100,
            height: mobileHeight * 6 / 100,

            backgroundColor: Colors.textColor,
            justifyContent: 'center'
          }}>
            <Text style={{
              fontSize: mobileWidth * 3.5 / 100,
              fontFamily: Font.FontRegular,
              color: Colors.whitecolor
            }}>
             Learn about Partner program
            </Text>

          </View>

          <View style={{
            marginTop: mobileHeight * 1.5 / 100,
            alignSelf: 'center',
            paddingHorizontal: mobileWidth * 3 / 100,
            width: mobileWidth * 90 / 100,
            height: mobileHeight * 6 / 100,

            backgroundColor: Colors.textColor,
            justifyContent: 'center'
          }}>
            <Text style={{
              fontSize: mobileWidth * 3.5 / 100,
              fontFamily: Font.FontRegular,
              color: Colors.whitecolor
            }}>
             Learn about USDFx
            </Text>

          </View>

          <View style={{
            marginTop: mobileHeight * 1.5 / 100,
            alignSelf: 'center',
            paddingHorizontal: mobileWidth * 3 / 100,
            width: mobileWidth * 90 / 100,
            height: mobileHeight * 6 / 100,

            backgroundColor: Colors.textColor,
            justifyContent: 'center'
          }}>
            <Text style={{
              fontSize: mobileWidth * 3.5 / 100,
              fontFamily: Font.FontRegular,
              color: Colors.whitecolor
            }}>
          Learn about USDFx integration with business
            </Text>

          </View>

         
        </View>
      </View>
      <View style={{ width: mobileWidth * 90 / 100, marginTop: mobileHeight * 2 / 100 }}>
        <Text style={{
          fontSize: mobileWidth * 4 / 100,
          fontFamily: Font.FontSemiBold,
          color: Colors.textColor
        }}>
          Important Links
        </Text>
        <View style={{
          alignSelf: 'center',

          width: mobileWidth * 90 / 100,
          height: mobileHeight * 7 / 100,
          flexDirection: 'row',
          alignItems: 'center',

          justifyContent: 'space-between'
        }}>
          <View style={{
            marginTop: mobileHeight * 2 / 100,
            width: mobileWidth * 35 / 100,
            height: mobileHeight * 6 / 100,
            backgroundColor: Colors.btnbgClr,
            flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
          }}>
            <Image
              style={{
                width: mobileWidth * 5 / 100,
                height: mobileWidth * 5 / 100,
                marginRight: mobileWidth * 2 / 100
              }}
              source={localimag.detailsIcon}
            >


            </Image>
            <Text style={{
              fontSize: mobileWidth * 3.8 / 100,
              fontFamily: Font.FontMedium,
              color: Colors.textColor
            }}>
              Partner App
            </Text>
          </View >
          <View style={{
            marginTop: mobileHeight * 2 / 100,
            width: mobileWidth * 35 / 100,
            height: mobileHeight * 6 / 100,
            backgroundColor: Colors.btnbgClr,
            flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
          }}>
            <Image
              style={{
                width: mobileWidth * 5 / 100,
                height: mobileWidth * 5 / 100,
                marginRight: mobileWidth * 2 / 100
              }}
              source={localimag.detailsIcon}
            >


            </Image>
            <Text style={{
              fontSize: mobileWidth * 3.8 / 100,
              fontFamily: Font.FontMedium,
              color: Colors.textColor
            }}>
              Contact us
            </Text>
          </View >
        </View>
        </View>
    </View>
  )
}


export default Home