import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  InputButton: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3E045C',
    borderRadius: 4,
    marginLeft: 10,
  },
  FormAdd: {
    padding: 0,
    height: 60,
    justifyContent: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
    paddingTop: 13,
    borderTopWidth: 1,
    borderColor: '#E5E3E6',
  },
  Input: {
    flex: 1,
    height: 40,
    overflow: 'scroll',
    backgroundColor: '#E5E3E6',
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#E5E3E6',
  },
  ModalAdd: {
    height: 200,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignContent: 'center',

    overflow: 'scroll',
  },
  ButtonAddAlign: {
    alignItems: 'flex-end',
  },
  ButtonAdd: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 34,
    marginLeft: 50,
    marginRight: 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#E5E3E6',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 20,
  },
  FlatList: {
    flex: 1,
    marginTop: 5,
  },
  ContainerView: {
    marginBottom: 15,
    padding: 15,
    borderRadius: 4,
    backgroundColor: '#fff',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#E5E3E6',
  },
  Texto: {
    width: '70%',
    height: 30,
    overflow: 'scroll',
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
    marginTop: 4,
    //textAlign: 'center',
  },
  Button: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#815796',
    borderRadius: 4,
    marginLeft: 50,
    marginRight: 50,
  },
  Form: {
    zIndex: 0,
    padding: 0,
    height: 67,
    justifyContent: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
    paddingTop: 13,
    borderTopWidth: 1,
    borderColor: '#E5E3E6',
  },
  TituloApp: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5,
  },
  SubTituloApp: {
    fontSize: 15,
    marginLeft: 2,
    marginBottom: 15,
  },
});

export { styles };
