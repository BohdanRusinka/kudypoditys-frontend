import defaultState from 'client/logic/defaultState';
import { convert } from '../../helpers/convertCurrency';
import { CITY_INFOS_GET, CITY_INFOS_GET_SUCCESS } from './actionType';
import { CURENCY_SELECT } from '../header/actionTypes';

function cityInfosReducer(state = defaultState.cityInfos, action) {
    let cur = defaultState.header.selectedCurrency.code;
    switch (action.type) {
        case CITY_INFOS_GET:
            return CITY_INFOS;

        case CURENCY_SELECT:
            for (let city in state) {
                state[city].avgPrice = convert(
                    state[city].currency,
                    state[city].avgPrice,
                    action.payload.code,
                );
                state[city].currency = action.payload.code;

            }

            return { ...state };

        case CITY_INFOS_GET_SUCCESS: {
            const currency = JSON.parse(localStorage.getItem('selectedCurrency')) || {};
            // console.log(currency)
            for (let city in action.payload) {
                action.payload[city].avgPrice = convert(
                    action.payload[city].currency || 'usd',
                    action.payload[city].avgPrice,
                    currency.code || 'usd',
                );
                state[city].currency = currency.code || 'usd';
            }

            return {
                ...state,
                ...action.payload,
            };
        }

        default:
            return state;
    }
}

export default cityInfosReducer;

const CITY_INFOS = {
    Lviv: {
        id: 1,
        name: 'Lviv',
        properties: 4098,
        avgPrice: 12012,
        imageUrl:
            'http://www.mgi4ua.com/wp-content/uploads/2017/11/lviv-ukraine.jpg',
        flagUrl:
            'http://proudofukraine.com/wp-content/uploads/2015/06/Ukrainian-flag.png',
    },
    Dnipro: {
        id: 6,
        name: 'Dnipro',
        properties: 202,
        avgPrice: 112,
        imageUrl:
            'http://meandyoukraine.com/mainContent/DniproCity/DniproCity_featuredImage.jpg',
        flagUrl:
            'http://proudofukraine.com/wp-content/uploads/2015/06/Ukrainian-flag.png',
    },
    Ternopil: {
        id: 3,
        name: 'Ternopil',
        properties: 1202,
        avgPrice: 1012,
        imageUrl:
            'http://www.gazeta-misto.te.ua/wp-content/uploads/2017/05/18671255_1124933304279283_1785861677540967562_n.jpg',
        flagUrl:
            'http://proudofukraine.com/wp-content/uploads/2015/06/Ukrainian-flag.png',
    },
    Kiev: {
        id: 2,
        name: 'Kiev',
        properties: 92202,
        avgPrice: 182032,
        imageUrl: 'https://s.inyourpocket.com/gallery/130361.jpg',
        flagUrl:
            'http://proudofukraine.com/wp-content/uploads/2015/06/Ukrainian-flag.png',
    },
    Odessa: {
        id: 4,
        name: 'Odessa',
        properties: 5602,
        avgPrice: 2082,
        imageUrl:
            'https://www.hotel-deribas.com/wp-content/uploads/2018/03/19odessa.jpg',
        flagUrl:
            'http://proudofukraine.com/wp-content/uploads/2015/06/Ukrainian-flag.png',
    },
    Kharkiv: {
        id: 5,
        name: 'Kharkiv',
        properties: 602,
        avgPrice: 282,
        imageUrl:
            'http://www.yoldasin.com/wp-content/uploads/2017/04/kharkiv-tren-istasyonu-960x638.jpg',
        flagUrl:
            'http://proudofukraine.com/wp-content/uploads/2015/06/Ukrainian-flag.png',
    },
};
