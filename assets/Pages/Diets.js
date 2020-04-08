import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity
} from "react-native";
export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    type: 'Dieta Rina',
                    color: 'mistyrose',
                    data: [
                        {
                            name: 'Pizza calzone cu ciuperci reteta Dieta Rina',
                            image: require("./pizza.jpg"),
                            type: 'Fel principal',
                            time: "20",
                            ingredients: ['250 g faina \n\n10 g drojdie \n\n180 ml apa \n\n½ lingurita rasa de sare\n\n1 ceapa\n\n2 rosii\n\nierburi aromatice(oregano, busuioc)\n\n4 ciuperci\n\n1 catel de usturoi\n\n1 lingura ulei de masline\n\nsare grunjoasa'],
                            description: 'Pentru aluat se amesteca drojdia cu apa calduta, se adauga treptat faina si sarea. Se framanta un aluat lejer si se lasa la dospit in jur de 30 de minute. Aluatul se intinde in forma ovala.\n\nPana dospeste aluatul se spala, se curata si se taie legumele.\n\nO rosie se taie cubulete si se amesteca cu ierburile aromatice si se incinge usor intr-o tigaie. Cand se scoate de pe foc se adauga usturoiul maruntit si se amesteca bine.Aluatul se pune direct pe o hartie de copt, ulterior va fi mult mai usoara transportarea in tava. \n\nSe unge cu sosul de rosii doar pe o parte.\n\nPeste se adauga ceapa, rosiile felii si ciupercile. Se condimenteaza cu sare, piper si cu ierburi aromatice, dupa gust.\n\nPartea fara umplutura se aduce peste cealalta si marginile se apasa si se ruleaza, astfel incat sa nu iasa umplutura.\n\nPartea superioara se unge cu uleiul de masline, apoi se presara cu ierburi aromatice si cu sare grunjoasa. Se pune pizza cu hartie cu tot in tava si se coace 30 min la 220°.'
                        },
                       
                    ]
                },
              
                {
                    type: 'Dieta Ketogenica',
                    color: 'peachpuff',
                    data: [
                        {
                            name: 'Șnițele keto cu piure de conopida',
                            image: require("./snitele.jpg"),
                            type: 'Fel principal',
                            time: "60",
                            ingredients: ['800 gr piept de pui feliat\n\n3 ouă\n\nSare și piper\n\n300 gr faină de migdale\n\n300 gr faină de alune\n\n300 gr parmezan ras\n\nnucșoară, după gust\n\nulei floarea soarelui\n\n 2 buc. conopidă proaspătă\n\n250 gr smântână cu 30 % grăsime\n\n1 lămâie\n\n1 legătură mărar\n\n50 - 75 gr unt'],
                            description: 'Se amestecă ouăle cu sare, piper, făina de migdale și cea de alune, parmezanul ras și nucșoara până se omogenizează compoziția.\n\nFeliile din piept de pui se trec prin această compoziție și se prăjesc în ulei încins.\n\nPentru piureul de conopidă, se desface conopida în buchețele, se curăță și se fierbe în apă cu sare și zeamă de lămâie până se pătrunde.\n\nSe scurge, se trece prin blender împreună cu untul, apoi prin sită și se amestecă cu smântâna.Se servește presărat cu mărar tocat, alături de șnițelele keto.'
                        },
                    ]
                },
                {
                    type: 'Dieta Dukan',
                    color: 'sandybrown',
                    data: [
                        {
                            name: 'Pișcoturi Dukan',
                            image: require("./piscoturi.jpg"),
                            time:'30',
                            ingredients: [['1 ou'], ['2 linguri amidon'], ['2 linguri lapte praf degresat'], ['2 linguri xylitol'], ['1 lingura praf de copt'], ['vanilie'], ['un praf de sare'], ['un varf de cutit de turmeric']],
                            description:
                                'Intr-un bol mic batem usor oul cu furculita, impreuna cu sarea, xylitolul si vanilia.Adaugam amidonul, laptele praf, praful de copt.Daca aluatul este prea gros(oul a fost cum am spus in retet, mic),adaugam 1 - 2 linguri de lapte dulce degresat.Daca nu aveti ou mic, dupa ce il bateti usor, luati din el cca 1 lingura(daca este prea mult ou, va trebui sa puneti mai mult lapte praf si mai mult amidon,in felul asta ies mai multe, insa va trebui sa le mancati in 3 zile fata de 2 cat puteti manca din cantitatile initiale).Lasam cca 5 minute compozitia sa se odihneasca in castron.Trebuie sa obtinem o compozitie usor curgatoare.'
                            
                        },
                    ]
                },
            ]
        }
    }

    renderItem_type = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => this.props.props.navigation.navigate("DetailScreen", {
                    image: item.image,
                    ingredients:item.ingredients,
                    description:item.description,
                    name: item.name,
                    time:item.time,
                })}
                style={styles.item_type}>
                <Image
                    source={item.image}
                    style={styles.image}
                />
                <Text numberOfLines={2} style={styles.name}>{item.name}</Text>
            </TouchableOpacity>

        )
    }

    renderItem = ({ item }) => {
        return (
            <View style={{ flex: 1 }}>
                <Text style={[styles.type, {
                    color: item.color
                }]}>{item.type}</Text>
                <View style={[styles.item, {
                    backgroundColor: item.color
                }]}>
                    <FlatList
                        data={item.data}
                        renderItem={this.renderItem_type}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        ItemSeparatorComponent={this.ItemSeparatorComponent_type}
                    />
                </View>
            </View>
        )
    }

    ItemSeparatorComponent_type = () => {
        return (
            <View
                style={{ width: 10 }}
            />
        )
    }

    ItemSeparatorComponent = () => {
        return (
            <View
                style={{ height: 20 }}
            />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={this.ItemSeparatorComponent}
                />
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'white'
    },
    type: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    item: {
        marginTop: 10,
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10
    },
    item_type: {
        flex: 1,
        alignItems: 'center'
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: 'white'
    },
    name: {
        marginTop: 10,
        color: 'white',
        fontWeight:'bold',
        fontSize: 14,
    }
});