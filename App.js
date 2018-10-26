
import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    StyleSheet,
    ImageBackground,

} from 'react-native';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {Consumido: 0, Mensagem: 'Baixo', pct: 0};

        this.addCopo = this.addCopo.bind(this);
        this.atualizar = this.atualizar.bind(this);
    }

    atualizar() {
        let s = this.state;
        s.pct = Math.floor((s.Consumido/2000)*100);

        if (s.pct >= 100) {
            s.Mensagem = "Bom";
        } else {
            s.Mensagem = "Baixo";
        }

        this.setState(s);
    }

    addCopo() {
        let s = this.state;
        s.Consumido += 200;
        this.setState(s);

        this.atualizar();
    }
    
    render() {
        return (
        
            <View style = {styles.body}>
                
                <ImageBackground source = {require('./images/waterbg.png')} style = {styles.bgimage}>

                    <View>

                        <View style = {styles.infoArea}>

                            <View style = {styles.area}>

                                <Text style = {styles.areaTitulo}>Meta Diária</Text>
                                <Text style = {styles.areaDado}>2000ml</Text>

                            </View>

                            <View style = {styles.area}>

                                <Text style = {styles.areaTitulo}>Consumido</Text>
                                <Text style = {styles.areaDado}>{this.state.Consumido}ml</Text>

                            </View>

                            <View style = {styles.area}>

                                <Text style = {styles.areaTitulo}S>Mensagem</Text>
                                <Text style = {styles.areaDado}>{this.state.Mensagem}</Text>

                            </View>

                        </View>

                        <View style = {styles.pctArea}>

                            <Text style = {styles.pctText}>{this.state.pct}%</Text>

                        </View>

                        <View style = {styles.btnArea}>

                            <Button title = "Beber 200ml" onPress = {this.addCopo}/>

                        </View>

                    </View>

                </ImageBackground>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    body: {
        flex: 1,
        paddingTop: 20,
    },

    bgimage: {
        flex: 1,
        width: null,
    },

    infoArea: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 77,
    },

    area: {
        flex: 1,
        alignItems: 'center',
    },

    areaTitulo: {
        color: '#45b2fc',
        fontSize: 18,
        fontWeight: 'bold',
    },

    areaDado: {
        color: '#2b4274',
        fontSize: 16,
    },

    pctArea: {
        marginTop: 250,
        alignItems: 'center',
    },

    pctText: {
        fontSize: 77,
        color: '#FFFFFF',
        backgroundColor: 'transparent',
    },

    btnArea: {
        marginTop: 44,
        alignItems: 'center',
    },

});
