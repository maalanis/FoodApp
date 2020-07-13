import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import UseResults from '../hooks/UseResults';
import ResultsList from '../components/ResultsList';
 
const SearchScreen = ({navigation }) => {
    const [term, setTerm] = useState('');
    const [searchApi, results, error] = UseResults();
    
    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };
     
  return ( 
      <>
      <SearchBar term={term}
                onTermChange={setTerm} 
                onTermSubmit={() => searchApi(term)}/>
                    {error ? <Text>{error}</Text> : null}
  
    <ScrollView>
      <ResultsList 
                    results={filterResultsByPrice('$')} 
                    title = "Cost Effective" 
                    navigation = {navigation}
                />
      <ResultsList 
                    results={filterResultsByPrice('$$')} 
                    title = "Bit Pricier" 
                    navigation = {navigation}
            />
      <ResultsList 
                    results={filterResultsByPrice('$$$')} 
                    title = "Big Spender" 
                    navigation = {navigation}/>
    </ScrollView>
      </>  
        )
};

const styles = StyleSheet.create({});

export default SearchScreen;