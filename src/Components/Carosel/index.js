import React, { useEffect, useState } from 'react';
import { ScrollView, View, Image, StyleSheet, Text } from 'react-native';

import api from '../../services/api';

const Carosel = () => {
    const [ data, setDataApi ] = useState([
        {
            id: 1,
            nome: "Categoria",
            descricao: "asdasjd",
            cor: "asdasdasd",
            videos: [
                {
                    id_video: 1,
                    canal: "asdasdasd",
                    title: "asdasdasd",
                    url: "asdasd"
                },
            ]
        }
    ]);

    const [ loding, setLoding ] = useState(false);

    function getYouTubeId(youtubeURL) {
        return youtubeURL
          .replace(
            /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
            '$7',
        );
    }
    
    function handleLink (link) {
        return `https://img.youtube.com/vi/${getYouTubeId(link)}/hqdefault.jpg`;
    }

    useEffect(() => {
        api.get('/categorias').then( async(response) => {
            await setDataApi(response.data);
            setLoding(true)
        });
    }, []);
    
    return (
        <>
            <View>
                {
                    data.map((categoria) => {
                        return (
                            <View key={categoria.id} style={{ marginTop: 20 }}>
                                <View style={styles.container_categorias}>
                                    <Text key={categoria.id} style={styles.text_categoria}>{categoria.nome}</Text>
                                </View>
                                <View style={{ height: 5, width: "95%", borderBottomRightRadius: 10, borderTopRightRadius: 10, backgroundColor: "#2A7AE4", marginLeft: 10 }}/>
                                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{  paddingHorizontal: 0}}>
                                {
                                    categoria.videos.map((video) => {
                                        return (
                                                <View style={styles.constainer_image} key={video.id_video}>
                                                    <View style={styles.constainer_text}>
                                                        <Text style={styles.text_canal}>{video.canal}</Text>
                                                    </View>
                                                    <Image style={styles.img } source={{ uri: handleLink(video.url) }} />
                                                    <Text style={styles.text_title}>{video.title}</Text>
                                                </View>
                                        )
                                    })
                                }
                                </ScrollView>
                            </View>
                        )
                    })
                }
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container_categorias: {
        backgroundColor: "#2A7AE4",
        width: 150,
        height: 28,
        marginLeft: 10,
        justifyContent: "center",
        borderBottomRightRadius: 10,
        borderTopEndRadius: 10,
        borderTopLeftRadius: 10
    },
    text_categoria: {
        fontFamily: "Bourgeois-Book",
        color: "#FFFFFF",
        marginLeft: 15
    },

    constainer_image: {
        width: 200,
        height: 220,
        alignItems: "center",
        flex: 1,
        marginLeft: 10
    },
    constainer_text: {
        height: 40,
        justifyContent: "center"
    },
    img: {
      width: 190,
      height: 150,
      borderRadius: 20
    },
    text_canal: {
        color: "#FFFFFF",
        textAlign: "center",
        fontFamily: "Bourgeois-Book",
        fontSize: 20,
    },
    text_title: {
        color: "#2A7AE4",
        textAlign: "center",
        fontFamily: "Bourgeois-Book",
        marginTop: 5,
    }
  });
  

export default Carosel;