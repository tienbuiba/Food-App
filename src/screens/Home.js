import React from 'react';
import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../assets/colors/colors';
import categoriesData from '../../assets/data/categoriesData';
import popularData from '../../assets/data/popularData';

Feather.loadFont();
MaterialCommunityIcons.loadFont();

const Home = ({ navigation }) => {
  const renderCategoriesItem = (({ item }) => {
    return (
      <View style={[styles.categoryItemWrapper, {
        backgroundColor: item.selected ? colors.primary : colors.white,
        marginLeft: item.id = 1 ? 20 : 0
      }]}>
        <Image source={item.image} style={styles.categoryItemImage} />
        <Text style={styles.categoryItemTitle}>{item.title}</Text>
        <View style={[styles.categorySelectWrapper, {
          backgroundColor: item.selected ? colors.white : colors.secondary
        }]}>
          <Feather
            name="chevron-right"
            size={8}
            style={styles.categorySelectIcon}
            color={item.selected ? colors.black : colors.white}
          />
        </View>
      </View>
    )
  }
  );
  return (
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        showsVerticalScrollIndicator={false}
      >
        <SafeAreaView>
          <View style={styles.headerWrapper}>
            <Image source={require('../../assets/images/profile.png')} style={styles.profileImage} />
            <Feather name="menu" size={24} color={colors.textDark}></Feather>
          </View>
        </SafeAreaView>
        {/* title */}
        <View style={styles.titlesWrapper}>
          <Text sttle={styles.titlesSubtitle}>Food</Text>
          <Text style={styles.titlesTitle}>Delivery</Text>
        </View>
        {/* srearch */}
        <View style={styles.searchWrapper}>
          <Feather name="search" size={16} color={colors.textDark}></Feather>
          <View style={styles.search}>
            <Text style={styles.searchText}>Search...</Text>
          </View>
        </View>
        {/* Categories */}
        <View style={styles.categoriesWrapper}>
          <Text style={styles.categoriesTitle}>Categories</Text>
          <View style={styles.categoriesListWrapper}>
            <FlatList
              data={categoriesData}
              renderItem={renderCategoriesItem}
              keyExtractor={item => item.id}
              horizontal={true}
            ></FlatList>
          </View>
        </View>
        {/* popular */}
        <View style={styles.popularWrapper}>
          <Text style={styles.popularTitle}>
            Popular

          </Text>
          {popularData.map(item => (
            <TouchableOpacity
              key={item.id}
              onPress={() => navigation.navigate('Details', {
                item: item

              })}
            >
              <View style={[styles.popularCardWrapper, {
                marginTop: item.id == 1 ? 10 : 20
              }]}>
                <View>
                  <View>
                    <View style={styles.popularTopWrapper}>
                      <MaterialCommunityIcons name="crown" size={12} color={colors.primary}></MaterialCommunityIcons>
                      <Text style={styles.popularTopText}> top of thr week</Text>
                    </View>
                    <View style={styles.popularTitlesWrapper}>
                      <Text style={styles.popularTitlesTitle}> {item.title}</Text>
                      <Text style={styles.popularTitlesWeight}> weight: {item.weight}</Text>
                    </View>
                  </View>
                  <View style={styles.popularCardBottom}>
                    <View style={styles.addPizzaButton}>
                      <Feather name="plus" size={10} color={colors.textDark}></Feather>
                    </View>
                    <View style={styles.ratingWrapper}>
                      <MaterialCommunityIcons name="star" color={colors.textDark} size={10}></MaterialCommunityIcons>
                      <Text style={styles.rating}> {item.rating}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.popularCardRight}>
                  <Image source={item.image} style={styles.popularCardImage} />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({

  popularCardRight: {
    marginLeft: 40

  },
  popularCardImage: {
    width: 210,
    height: 125,
    resizeMode: 'contain'
  },
  popularCardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: -20

  },
  addPizzaButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,

  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20
  },
  rating: {
    fontSize: 12,
    color: colors.textDark,
    marginLeft: 5

  },
  popularTitlesWrapper: {
    marginTop: 20
  },
  popularTitlesTitle: {
    fontSize: 14,
    color: colors.textDark
  },
  popularTitlesWeight: {
    fontSize: 12,
    color: colors.textLight,
    marginTop: 5
  },
  popularCardWrapper: {
    backgroundColor: colors.white,
    borderRadius: 25,
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: 'row',
    paddingTop: 11,
    overflow: "hidden",
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2

  },
  popularTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center'

  },
  popularTopText: {
    marginLeft: 10,
    fontSize: 14
  },
  popularWrapper: {
    paddingHorizontal: 20
  },
  popularTitle: {
    fontSize: 16,

  },
  categoryItemWrapper: {
    backgroundColor: '#F5CA48',
    marginRight: 20,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2
  },
  categoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 25,
    alignItems: 'center',
    marginHorizontal: 20
  },
  categoryItemTitle: {
    textAlign: 'center',
    fontSize: 14,
    marginTop: 10
  },
  categorySelectWrapper: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: 26,
    height: 26,
    borderRadius: 26,
    marginBottom: 20
  },
  categorySelectIcon: {
    alignSelf: 'center',
  },
  categoriesWrapper: {
    marginTop: 30
  },
  categoriesTitle: {

    paddingHorizontal: 20,

  },
  categoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 20

  },

  searchWrapper: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30
  },
  search: {
    marginLeft: 10,
    flex: 1,
    borderBottomColor: colors.textLight,
    borderBottomWidth: 2
  },
  searchText: {
    fontSize: 14,
    color: colors.textLight,
    marginBottom: 5,
    color: colors.textLight
  },
  container: {
    flex: 1,
  }
  ,
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center'
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
    paddingTop: 20
  },
  titlesWrapper: {
    marginTop: 30,
    paddingHorizontal: 20

  },
  titlesSubtitle: {
    marginBottom: 5,
    fontSize: 16
  },
  titlesTitle: {
    color: colors.textDark,
    fontSize: 32
  }
}
)