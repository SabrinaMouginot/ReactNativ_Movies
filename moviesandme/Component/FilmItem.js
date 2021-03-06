import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import dayjs from "dayjs";
/* import 'react-json-pretty/themes/adventure_time.css'
import JSONPretty from 'react-json-pretty' */
import { getImageFromApi } from "../API/TMDBApi";

class FilmItem extends React.Component {
  render() {
    const { film, displayDetailForFilm } = this.props;
    console.log("test:" + this.props.film.title);

 // Récupération des props par décomposition Javascript
    // { film, displayDetailForFilm } = this.props
    // '⟺     const film = this.props.film
    // '       const displayDetailForFilm = this.props.displayDetailForFilm

    return (
      <Pressable onPress={() => displayDetailForFilm(film.id)}>
        {/* Le FilmItem est Pressable.
        Au moment du clic sur un FilmItem on va utiliser la prop displayDetailForFilm
        du FilmItem qui est défini dans le composant Search pour traiter le clic 
        et naviguer dans le composant FilmDetail */}
          <View>
            <View style={styles.film_main_container}>
              <Image
                style={styles.image}
                source={getImageFromApi(film.poster_path)}
              />
              <View style={styles.content_container}>
                <View style={styles.header_container}>
                  <Text style={styles.title_text}>{film.title}</Text>
                  <Text style={styles.vote_text}>{film.vote_average}</Text>
                </View>
                <View style={styles.description_container}>
                  <Text style={styles.description_text}>{film.overview}</Text>
                </View>
                <View style={styles.date_container}>
                  <Text style={styles.date_text}>
                    {dayjs(film.release_date).format("DD/MM/YYYY")}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </Pressable>

    );
  }
}

const styles = StyleSheet.create({
  film_main_container: {
    flexDirection: "row",
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
  },
  content_container: {
    flex: 1,
    margin: 5,
    backgroundColor: "#EE11",
  },
  header_container: {
    backgroundColor: "#EE33",
    flexDirection: "row",
  },
  title_text: {
    fontWeight: "bold",
    fontSize: 20,
    flex: 1,
    flexWrap: "wrap",
    paddingRight: 5,
    backgroundColor: "#EE44",
  },
  vote_text: {
    fontWeight: "bold",
    fontSize: 26,
    color: "#666666",
    textAlign: "right",
    backgroundColor: "#88EE88",
  },
  description_container: {
    flex: 7,
    backgroundColor: "#EEFF",
  },
  description_text: {
    fontStyle: "italic",
    color: "#666666",
  },
  date_container: {
    flex: 2,
    backgroundColor: "#EEFFAA",
  },
  date_text: {
    textAlign: "right",
    fontSize: 22,
  },
});

export default FilmItem;
