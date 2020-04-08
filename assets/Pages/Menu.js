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
                    type: 'Aperitive',
                    color: 'mistyrose',
                    data: [
                        {
                            name: 'Qesadilla cu spanac si ciuperci',
                            image: require("./Quesadilla.jpg"),
                            time:'40',
                            ingredients: [['150g ciuperci'], ['\n\n2 legaturi spanac'], ['\n\n100g branza'], ['\n\n5-6 rosii uscate'], ['\n\n200g mozzarella'], ['\n\n8 felii tortilla'], ['\n\n2 linguri ulei'], ['\n\nsare'], ['\n\npiper']],
                            description: '1. Toaca ciupercile felii si frige-le in cele 2 linguri de ulei pentru 2-3 minute, pana ce se schimba la culoare.\n\n2. Scoate ciupercile, adauga 2-3 linguri de apa si adauga spanacul curatat, apoi pune capacul tigaii.\n\n3. Lasa spanacul 2-3 minute la oparit, pana ce ii scade volumul foarte mult, adu ciupercile inapoi in tigaie si potriveste de sare si piper.\n\n4. Asaza foaia de tortilla in tigaie cu putin ulei, apoi adauga o patrime din fiecare ingredient pe foaie: branza mozzarella rasa, ciuperci, spanac, cateva bucatele de branza feta si rosii uscate, iar deasupra presara iar mozzarella.\n\n5. Peste toate ingredientele asaza o alta foaie de tortilla si intoarce quesadilla, pentru a se rumeni pe ambele parti.\n\n6. Scoate quesadilla cu spanac si ciuperci, apoi continua prepararea celorlalte 3 portii.Serveste quesadilla imediat alaturi de un sos pregatit in casa.',
                        }
                    ]
                },
                {
                    type: 'Ciorba',
                    color: 'peachpuff',
                    data: [
                        {
                            name: 'Ciorbă de fasole verde cu pui',
                            image: require('./Ciorba.jpg'),
                            time:'60',
                            ingredients: [['400gr carne de pui'], ['\n\n1kg fasole verde'], ['\n\n3-4 cartofi'], ['\n\n1 l suc de rosii'], ['\n\n50 ml de ulei'], ['\n\npatrunjel'], ['\n\ncimbru'], ['\n\n2-3 catei de usturoi'], ['\n\nsare'], ['\n\npiper']],
                            description: 'Se taie şi se spală carnea, se scurge de apă şi se taie bucăţele. Apoi, împreună cu ceapa, se călesc în ulei până se rumenesc.\n\nSe adaugă 2 litri de apă caldă şi sare, după gust, şi se pun păstăile de fasole spălate, curăţate la capete şi rupte în jumătăţi.\n\nDacă nu ai în casă suc de roşii, îl poți prepara dintr- un kilogram de roşii.Se curăţă roşiile de pieliţe şi se dau prin răzătoare.Dacă vrei, poți să pui sucul la fiert.Este mult mai sănătos.\n\nDupă ce s - a fiert fasolea pe jumătate şi nivelul apei a scăzut, se adaugă sucul de roşii, cartofii tăiaţi cubuleţe, sarea şi piperul şi o mică ramură de cimbru şi se mai fierb aproximativ 30 de minute.\n\nDupă ce a fiert ciorba de fasole, se pune usturoiul tocat mărunt pentru aroma deosebită pe care o lasă.Se toacă pătrunjelul, se presară pe fiecare porţie.',

                        }
                    ]
                },
                {
                    type: 'Fel principal',
                    color: 'wheat',
                    data: [
                        {
                            name: 'Pui carbonara cu smântână și bacon',
                            image: require("./Pui.jpg"),
                            time:'50',
                            ingredients: [['100gr bacon'], ['\n\n2 catei usturoi'], ['\n\n2 linguri unt'], ['\n\n400gr pui'], ['\n\n4 oua'], ['\n\n150 gr parmezan'], ['\n\n300 ml de smantana'], ['\n\n1/2 legatura patrunjel'], ['\n\nsare'], ['\n\npiper']],
                            description: '1. Frige pieptul de pui taiat felii si presarat cu sare, intr-o tigaie, in 2 linguri de unt, pana cand se rumeneste uniform.\n\n2. Odata rumenit, scoate puiul si toaca- l cuburi mari, iar in tigaia folosita frige baconul pentru 2 - 3 minute.\n\n3. Adauga usturoiul maruntit, lasa - l un minut, apoi adauga ouale batute amestecate cu smantana pentru gratit si 100 g parmezan.\n\n4. Omogenizeaza sosul obtinut si lasa - l sa scada un minut, apoi adu puiul inapoi peste sos.\n\n5. Potriveste de sare si piper, tinand cont ca parmezanul este deja sarat si serveste puiul carbonara pe un pat de paste fierte conform indicatiilor de pe ambalaj.'

                        },
                        {
                            name: 'Pizza calzone cu ciuperci reteta Dieta Rina',
                            image: require("./pizza.jpg"),
                            type: 'Fel principal',
                            time: "20",
                            ingredients: ['250 g faina \n\n10 g drojdie \n\n180 ml apa \n\n½ lingurita rasa de sare\n\n1 ceapa\n\n2 rosii\n\nierburi aromatice(oregano, busuioc)\n\n4 ciuperci\n\n1 catel de usturoi\n\n1 lingura ulei de masline\n\nsare grunjoasa'],
                            description: 'Pentru aluat se amesteca drojdia cu apa calduta, se adauga treptat faina si sarea. Se framanta un aluat lejer si se lasa la dospit in jur de 30 de minute. Aluatul se intinde in forma ovala.\n\nPana dospeste aluatul se spala, se curata si se taie legumele.\n\nO rosie se taie cubulete si se amesteca cu ierburile aromatice si se incinge usor intr-o tigaie. Cand se scoate de pe foc se adauga usturoiul maruntit si se amesteca bine.Aluatul se pune direct pe o hartie de copt, ulterior va fi mult mai usoara transportarea in tava. \n\nSe unge cu sosul de rosii doar pe o parte.\n\nPeste se adauga ceapa, rosiile felii si ciupercile. Se condimenteaza cu sare, piper si cu ierburi aromatice, dupa gust.\n\nPartea fara umplutura se aduce peste cealalta si marginile se apasa si se ruleaza, astfel incat sa nu iasa umplutura.\n\nPartea superioara se unge cu uleiul de masline, apoi se presara cu ierburi aromatice si cu sare grunjoasa. Se pune pizza cu hartie cu tot in tava si se coace 30 min la 220°.'
                        },
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
                    type: 'Desert',
                    color: 'papayawhip',
                    data: [
                        {
                            name: 'Pișcoturi Dukan',
                            image: require("./piscoturi.jpg"),
                            time:'30',
                            ingredients: [['1 ou'], ['\n\n2 linguri amidon'], ['\n\n2 linguri lapte praf degresat'], ['\n\n2 linguri xylitol'], ['\n\n1 lingura praf de copt'], ['\n\nvanilie'], ['\n\nun praf de sare'], ['\n\nun varf de cutit de turmeric']],
                            description:
                                'Intr-un bol mic batem usor oul cu furculita, impreuna cu sarea, xylitolul si vanilia.Adaugam amidonul, laptele praf, praful de copt.Daca aluatul este prea gros(oul a fost cum am spus in retet, mic),adaugam 1 - 2 linguri de lapte dulce degresat.Daca nu aveti ou mic, dupa ce il bateti usor, luati din el cca 1 lingura(daca este prea mult ou, va trebui sa puneti mai mult lapte praf si mai mult amidon,in felul asta ies mai multe, insa va trebui sa le mancati in 3 zile fata de 2 cat puteti manca din cantitatile initiale).Lasam cca 5 minute compozitia sa se odihneasca in castron.Trebuie sa obtinem o compozitie usor curgatoare.'

                        },
                        {
                            name: 'Tort biscuiti',
                            image: require("./salamBiscuiti.jpg"),
                            ingredients: [['800gr biscuiti'], ['\n\n100gr migdale'], ['\n\n100gr miez de nuca'], ['\n\n250 ml apa'], ['\n\n250gr zahar'], ['\n\n70gr zahar'], ['\n\n150gr unt'], ['\n\n2 ml esenta de rom'], ['\n\n120 ml smantana lichida'], ['\n\n120gr ciocolata']],
                            description: 'Mărunțești biscuiți cu mâna. Nu-i pune într-un robot că-i  faci zob. De data asta faci tort, nu blat pentru cheesecake, spune Tily pe blogul ei.\n\nÎntr - o cratiță adaugi apa, zahărul, cacaoa și untul.După ce s- au mixat bine ingredientele adaugi esența de rom.\n\nAdaugi  siropul când s - a răcit peste biscuiții mărunțiți  si amesteci.\n\nÎntre timp, pe foc, într - o tigaie adaugi nucile & migdalele.Le tragi puțin cât să nu se prăjească ci să capete o consistențe crunchy și adaugi peste biscuiții însiropați.Ce crezi ? AMESTECI din nou.Răstorni toată compoziția în orice fel de  formă pentru tort ai avea.\n\nPentru glazură poți lua ciocolată normală, dar eu am găsit bănuți din ciocolată și mi - a fost super ușor să - i pun să se topească la bain - marie.Am adăugat și smântâna iar rezultatul a fost o compozoție omogenă de glazură pe care am turnat - o peste blatul de biscuiți.\n\nRecomandarea ar fi să nu degustați mai repede de două ore.Da, știu.Și mie mi se face poftă.Însă pe mine m - au ținut nervii și am lăsat tava cu tort peste noapte la frigider.',
                            time:'45',
                        }
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
                    description :item.description,
                    ingredients:item.ingredients,
                    name: item.name,
                    time:item.time
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