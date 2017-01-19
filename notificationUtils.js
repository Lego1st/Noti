import {Alert} from 'react-native';

export async function upAppId(email, password, appId, userId) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
        console.log(request)
        if (request.readyState !== 4) {
            return;
        }

        if (request.status === 200) {
          if(request.responseText != "True"){
              console.log('ERRRROOORRRRR')
          }else{
            Alert.alert('correct')
          }

        } else {
            console.warn('error');
        }
    };

    request.open('GET', 'http://orm.vn:2930/AppIdUpdate.aspx?username=admin@orm.vn&pass=1b4727a96eb05921e68228341642b529&appId=xyzxxx&userid=108');
    request.send();
}
