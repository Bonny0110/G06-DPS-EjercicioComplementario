
import React from 'react';
import {View, StyleSheet, Image, Text, ScrollView, Modal, Button, TouchableHighlight} from 'react-native';
import {useState} from "react";

const App = () =>{
  const [modalVisibleDeluxe, setModalVisibleDeluxe] = useState(false);
  const [modalVisibleSJ, setModalVisibleSJ] = useState(false);
  const [modalVisibleSJD, setModalVisibleSJD] = useState(false);
  const [modalVisibleSignature, setModalVisibleSignature] = useState(false);
  const [modalVisibleWifi, setModalVisibleWifi] = useState(false);
  const [modalVisibleDesayuno, setModalVisibleDesayuno] = useState(false);
  const [modalVisibleGym, setModalVisibleGym] = useState(false);
  const [modalVisibleTorre, setModalVisibleTorre] = useState(false);
  const [modalVisibleArco, setModalVisibleArco] = useState(false);
  const [modalVisibleCampos, setModalVisibleCampos] = useState(false);
  const [modalVisibleLouvre, setModalVisibleLouvre] = useState(false);

  return(
      <>
    <ScrollView>
      <Modal transparent={true} animationType="slide" visible={modalVisibleDeluxe} onRequestClose={() => { alert('Modal has been closed!');}} >
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <Text style={styles.subtitulo}>Habitación Deluxe</Text>
            <Text>Tamaño de la habitación 40 m². 1 cama doble extragrande.
Habitación amplia decorada con muebles antiguos de estilo Luis XV y Luis XVI. Dispone de una zona de estar con sofá y sillones de terciopelo, y un baño con ducha independiente y azulejos de colores en forma de mosaico.</Text>
            <Button title="Cerrar" onPress={()=>{setModalVisibleDeluxe(!modalVisibleDeluxe)}} ></Button>
          </View>
        </View>
      </Modal>

      <Modal transparent={true} animationType="slide" visible={modalVisibleSJ} onRequestClose={() => { alert('Modal has been closed!');}} >
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <Text style={styles.subtitulo}>Suite Junior</Text>
            <Text>
            Tamaño de la habitación 50 m². 1 cama doble extragrande. Habitación amplia decorada con muebles antiguos de estilo Luis XV y Luis XVI. Dispone de un armario y una gran zona de estar separada del dormitorio por un arco de madera tallada. También cuenta con un baño con ducha independiente y azulejos pintados.</Text>
            <Button title="Cerrar" onPress={()=>{setModalVisibleSJ(!modalVisibleSJ)}} ></Button>
          </View>
        </View>
      </Modal>

      <Modal transparent={true} animationType="slide" visible={modalVisibleSJD} onRequestClose={() => { alert('Modal has been closed!');}} >
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <Text style={styles.subtitulo}>Suite Junior Deluxe</Text>
            <Text>Tamaño de la habitación 55 m². Dormitorio 1: 1 cama doble grande. Sala de estar: 1 sofá cama. Esta suite cuenta con aire acondicionado, minibar, TV con canales vía satélite, zona de estar y caja fuerte. También incluye baño con secador de pelo y artículos de aseo gratuitos.</Text>
            <Button title="Cerrar" onPress={()=>{setModalVisibleSJD(!modalVisibleSJD)}} ></Button>
          </View>
        </View>
      </Modal>

      <Modal transparent={true} animationType="slide" visible={modalVisibleSignature} onRequestClose={() => { alert('Modal has been closed!');}} >
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <Text style={styles.subtitulo}>Suite Signature</Text>
            <Text>Tamaño de la habitación 70 m². Dormitorio 1: 1 cama doble grande. Sala de estar: 1 sofá cama. Esta suite con vistas a la ciudad incluye sala de estar amplia con chimenea. El baño privado está equipado con ducha independiente a ras de suelo, albornoces, zapatillas y artículos de aseo. La suite dispone de aire acondicionado.</Text>
            <Button title="Cerrar" onPress={()=>{setModalVisibleSignature(!modalVisibleSignature)}} ></Button>
          </View>
        </View>
      </Modal>

      <Modal transparent={true} animationType="slide" visible={modalVisibleWifi} onRequestClose={() => { alert('Modal has been closed!');}} >
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <Text style={styles.subtitulo}>WiFi</Text>
            <Text>WiFi gratis en todo el alojamiento.</Text>
            <Button title="Cerrar" onPress={()=>{setModalVisibleWifi(!modalVisibleWifi)}} ></Button>
          </View>
        </View>
      </Modal>

      <Modal transparent={true} animationType="slide" visible={modalVisibleDesayuno} onRequestClose={() => { alert('Modal has been closed!');}} >
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <Text style={styles.subtitulo}>Desayuno</Text>
            <Text>Desayuno incluido en la tarifa.</Text>
            <Button title="Cerrar" onPress={()=>{setModalVisibleDesayuno(!modalVisibleDesayuno)}} ></Button>
          </View>
        </View>
      </Modal>

      <Modal transparent={true} animationType="slide" visible={modalVisibleGym} onRequestClose={() => { alert('Modal has been closed!');}} >
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <Text style={styles.subtitulo}>Gimnasio</Text>
            <Text>Amplio gimnasio</Text>
            <Button title="Cerrar" onPress={()=>{setModalVisibleGym(!modalVisibleGym)}} ></Button>
          </View>
        </View>
      </Modal>

      <Modal transparent={true} animationType="slide" visible={modalVisibleTorre} onRequestClose={() => { alert('Modal has been closed!');}} >
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <Text style={styles.subtitulo}>Torre Eiffel</Text>
            <Text>Situada en el extremo del Campo de Marte a la orilla del río Sena, este monumento parisino, símbolo de Francia y de su capital, es la estructura más alta de la ciudad y el monumento que cobra entrada más visitado del mundo, con 7,1 millones de turistas cada año.</Text>
            <Button title="Cerrar" onPress={()=>{setModalVisibleTorre(!modalVisibleTorre)}} ></Button>
          </View>
        </View>
      </Modal>

      <Modal transparent={true} animationType="slide" visible={modalVisibleArco} onRequestClose={() => { alert('Modal has been closed!');}} >
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <Text style={styles.subtitulo}>Arco del Triunfo</Text>
            <Text>El Arco de Triunfo de París es uno de los monumentos más famosos de la capital francesa y probablemente se trate del arco de triunfo más célebre del mundo.</Text>
            <Button title="Cerrar" onPress={()=>{setModalVisibleArco(!modalVisibleArco)}} ></Button>
          </View>
        </View>
      </Modal>

      <Modal transparent={true} animationType="slide" visible={modalVisibleCampos} onRequestClose={() => { alert('Modal has been closed!');}} >
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <Text style={styles.subtitulo}>Campos Eliseos</Text>
            <Text>Con una longitud de casi dos kilómetros, los Campos Elíseos (Champs-Élysées) componen la arteria más bella y conocida de París, además de una de las avenidas más famosas del mundo.</Text>
            <Button title="Cerrar" onPress={()=>{setModalVisibleCampos(!modalVisibleCampos)}} ></Button>
          </View>
        </View>
      </Modal>

      <Modal transparent={true} animationType="slide" visible={modalVisibleLouvre} onRequestClose={() => { alert('Modal has been closed!');}} >
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <Text style={styles.subtitulo}>Museo del Louvre</Text>
            <Text>El Museo del Louvre es el museo nacional de Francia consagrado tanto a las bellas artes como a la arqueología y las artes decorativas anteriores al Impresionismo. Está ubicado en París, la capital del país, en el antiguo palacio real del Louvre.</Text>
            <Button title="Cerrar" onPress={()=>{setModalVisibleLouvre(!modalVisibleLouvre)}} ></Button>
          </View>
        </View>
      </Modal>

      <View style={{flexDirection:'row'}} >
      <Image
      style={styles.banner}
      source={require('./src/img/bg.jpg')} />
      </View>

<View style={styles.contenedor}>
      <Text style={styles.titulo}>HOTEL LE PARISIEN</Text>
      <Text style={styles.desc}>
      Este hotel de 5 estrellas ofrece alojamiento de lujo en el centro de París, a 2 minutos a pie de los Campos Elíseos y del Arco de Triunfo. Cuenta con terraza panorámica y restaurante gastronómico.
      </Text>
      <Text style={styles.titulo}>Habitaciones</Text>
      <ScrollView horizontal>
        <View>
          <TouchableHighlight
          onPress={()=>{setModalVisibleDeluxe(!modalVisibleDeluxe)}}
          >
          <Image
          style={styles.ciudad}
          source={require('./src/img/deluxe.jpg')} />
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight
          onPress={()=>{setModalVisibleSJ(!modalVisibleSJ)}}
          >
          <Image
          style={styles.ciudad}
          source={require('./src/img/sj.jpg')} />
          </TouchableHighlight>
        </View>
        <View>
        <TouchableHighlight
          onPress={()=>{setModalVisibleSJD(!modalVisibleSJD)}}
          >
          <Image
          style={styles.ciudad}
          source={require('./src/img/sjd.jpg')} />
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight
          onPress={()=>{setModalVisibleSignature(!modalVisibleSignature)}}
          >
          <Image
          style={styles.ciudad}
          source={require('./src/img/signature.jpg')} />
          </TouchableHighlight>
        </View>
      </ScrollView>

<Text style={styles.titulo}>Servicios</Text>
      <View>
        <View>
          <TouchableHighlight
          onPress={()=>{setModalVisibleWifi(!modalVisibleWifi)}}
          >
          <Image
          style={styles.servicios}
          source={require('./src/img/wifi.png')} />
          </TouchableHighlight>
        </View>

        <View>
          <TouchableHighlight
          onPress={()=>{setModalVisibleDesayuno(!modalVisibleDesayuno)}}
          >
          <Image
          style={styles.servicios}
          source={require('./src/img/desayuno.png')} />
          </TouchableHighlight>
        </View>

        <View>
          <TouchableHighlight
          onPress={()=>{setModalVisibleGym(!modalVisibleGym)}}
          >
          <Image
          style={styles.servicios}
          source={require('./src/img/gym.png')} />
          </TouchableHighlight>
        </View>
      </View>

<Text style={styles.titulo}>Atracciones cerca del hotel</Text>
      <View style={styles.listado}>
        <View style={styles.listaItem}>
          <TouchableHighlight
          onPress={()=>{setModalVisibleTorre(!modalVisibleTorre)}}
          >
          <Image
          style={styles.mejores}
          source={require('./src/img/torre.jpg')} />
          </TouchableHighlight>
        </View>

        <View style={styles.listaItem}>
          <TouchableHighlight
          onPress={()=>{setModalVisibleArco(!modalVisibleArco)}}
          >
          <Image
          style={styles.mejores}
          source={require('./src/img/arco.jpg')} />
          </TouchableHighlight>
        </View>

        <View style={styles.listaItem}>
          <TouchableHighlight
          onPress={()=>{setModalVisibleCampos(!modalVisibleCampos)}}
          >
          <Image
          style={styles.mejores}
          source={require('./src/img/campos.png')} />
          </TouchableHighlight>
        </View>

        <View style={styles.listaItem}>
          <TouchableHighlight
          onPress={()=>{setModalVisibleLouvre(!modalVisibleLouvre)}}
          >
          <Image
          style={styles.mejores}
          source={require('./src/img/louvre.jpeg')} />
          </TouchableHighlight>
        </View>
      </View>
    </View>

    </ScrollView>
    </>
  );
};


const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10
  },
  contenedor: {
    marginHorizontal: 10,
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10
  },
  servicios: {
    width: 160,
    height: 140,
    marginVertical: 5,
    alignSelf: 'center'
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5,
    alignContent: 'center'
  },
  listaItem: {
    flexBasis: '49%'
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  vistaModal: {
    backgroundColor: '#000000aa',
    flex: 1,
  },
  Modal: {
    backgroundColor: '#fff',
    margin: 50,
    padding: 40,
    borderRadius: 10,
    flex: 1,
  },
  subtitulo: {
    fontWeight: 'bold',
    fontSize: 14,
    justifyContent: 'center',
  },
  desc: {
    fontSize: 14,
    alignSelf: 'justify'
  }

});

export default App;