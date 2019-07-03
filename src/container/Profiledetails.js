/**
 * Profiledetails Screen
 * 
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import { Action } from 'react-native-router-flux';
import styles from '../style/profiledetailsStyle'
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import StarView from '../component/Startview'

export default class Inboxdetails extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
			<View style={styles.container}>
				<View style={styles.upperContainer}>
					<Image source={require('../../assets/images/Oval.png')}/>
					<Text style={styles.name}>Paulina Gayoso</Text>
					<View style={styles.location}>
						<Image source={require('../../assets/images/location.png')}/>
						<Text style={styles.locationText}>Paris, France</Text>
					</View>

					<Text style={styles.profileContent}>
						Lorm ipsum dolor sit amet, consectetur adipis{"\n"}
						elit. Fusce vestibulum dapibus tempus. Aliquam{"\n"}
						dapibus sit amet neque eget volutpat
					</Text>
				</View>

				<View style={styles.borderline}/>

				<Text style={styles.rental}>Rentals</Text>

        <ScrollView style={styles.midContainer}>
				<View style={styles.interestInsideContainer}>
						<View style={styles.interestRowContainer}>
							<View style={styles.interestImageContainer}>
								<TouchableOpacity style={styles.itemIterestBtnContainer}>
										<Image source={require('../../assets/images/canon-camera.png')}/>
										<View style={styles.rectWhiteColor}></View>
										<Text style={styles.itemText}>Black Canon Film{"\n"}Camera</Text>
										<View style={styles.currencyWrapper}>
											<Text style={styles.currencyText}>15$/day</Text>
											<View style={styles.currencyContainer}>
												<Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/rentoo.png')}/>
												<Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/bitcoin.png')}/>
												<Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/waves.png')}/>
											</View>
										</View>
									</TouchableOpacity>
									<View style={styles.starLayout}>
										<StarView score={4} style={styles.starView} />
										<Text style={styles.starText}>13</Text>
									</View>
							</View>
							<View style={styles.interestImageContainer}>
								<TouchableOpacity style={styles.itemIterestBtnContainer}>
										<Image source={require('../../assets/images/canon-camera.png')}/>
										<View style={styles.rectRedColor}></View>
										<Text style={styles.itemText}>California Van</Text>
										<View style={styles.currencyWrapper}>
											<Text style={styles.currencyText}>80$/day</Text>
											<View style={styles.currencyContainer}>
												<Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/rentoo.png')}/>
												<Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/bitcoin.png')}/>
												<Image style={styles.currency} resizeMode="contain" source={require('../../assets/images/waves.png')}/>
											</View>
										</View>
									</TouchableOpacity>
									<View style={styles.starLayout}>
										<StarView score={5} style={styles.starView} />
										<Text style={styles.starText}>32</Text>
									</View>
							</View>
						</View>
					</View>
				</ScrollView>

      </View>
      
    );
  }
}


