import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions} from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  navbar: {
    paddingTop: 20,
    height: 64,
    backgroundColor: '#F4F4F4',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#DDDDDD',
    paddingHorizontal: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftText: {
    color: '#089de3',
  },
  titleText: {
    fontWeight: '600',
  },
  rightText: {
    color: '#089de3',
  },

  headerText: {
    color: '#FFF',
    fontWeight: '800',
    fontSize: 23,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
  },
  bodyText: {
    padding: 10,
    fontSize: 15,
    color: '#5D5D5D',
  },

  image: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
  },
  header: {
    width: window.width,
    height: window.width,
    padding: 10,
    justifyContent: "flex-end"
  },
});

class Navbar extends React.Component {
  render() {
    return (
      <View>
      <View style={styles.navbar}>
        <Text style={styles.leftText}>Back</Text>
        <Text style={styles.titleText}>Title</Text>
        <Text style={styles.rightText}>Forward</Text>
      </View>
      <ScrollView style={styles.container}>
        {DEMO_DATA.map((data) => {
          return (
            <View key={data.id} style={styles.content}>
              <View style={styles.header}>
                <Image style={styles.image} source={{ uri: data.image}} />
                <Text style={styles.headerText}>{data.title}</Text>
              </View>
              <Text style={styles.bodyText}>{data.body}</Text>
            </View>
          );
        })}
      </ScrollView>
      </View>
    );
  }
};

export default Navbar;

const DEMO_DATA = [
  {
    id: '1',
    title: 'There now is your insular city of the Manhattoes, belted round by wharves as Indian isles by coral reefs- commerce surrounds it with her surf.',
    image: 'https://unsplash.it/375?image=3',
    body: 'Right and left, the streets take you waterward. Its extreme downtown is the battery, where that noble mole is washed by waves, and cooled by breezes, which a few hours previous were out of sight of land. Look at the crowds of water-gazers there.',
  },
  {
    id: '2',
    title: 'Circumambulate the city of a dreamy Sabbath afternoon.',
    image: 'https://unsplash.it/375?image=4',
    body: 'Go from Corlears Hook to Coenties Slip, and from thence, by Whitehall, northward. What do you see?- Posted like silent sentinels all around the town, stand thousands upon thousands of mortal men fixed in ocean reveries. Some leaning against the spiles; some seated upon the pier-heads; some looking over the bulwarks of ships from China; some high aloft in the rigging, as if striving to get a still better seaward peep. But these are all landsmen; of week days pent up in lath and plaster- tied to counters, nailed to benches, clinched to desks. How then is this? Are the green fields gone? What do they here?',
  },
  {
    id: '3',
    title: 'But look! here come more crowds, pacing straight for the water, and seemingly bound for a dive.',
    image: 'https://unsplash.it/375?image=5',
    body: 'Strange! Nothing will content them but the extremest limit of the land; loitering under the shady lee of yonder warehouses will not suffice. No. They must get just as nigh the water as they possibly can without falling And there they stand- miles of them- leagues. Inlanders all, they come from lanes and alleys, streets avenues- north, east, south, and west. Yet here they all unite. Tell me, does the magnetic virtue of the needles of the compasses of all those ships attract them thither?',
  },
  {
    id: '4',
    title: 'Once more. Say you are in the country; in some high land of lakes.',
    image: 'https://unsplash.it/375?image=5',
    body: 'Take almost any path you please, and ten to one it carries you down in a dale, and leaves you there by a pool in the stream. There is magic in it. Let the most absent-minded of men be plunged in his deepest reveries- stand that man on his legs, set his feet a-going, and he will infallibly lead you to water, if water there be in all that region. Should you ever be athirst in the great American desert, try this experiment, if your caravan happen to be supplied with a metaphysical professor. Yes, as every one knows, meditation and water are wedded for ever.',
  },
];