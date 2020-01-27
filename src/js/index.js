import * as date_functions from '../../../helper_functions/date';
import * as image_functions from '../../../helper_functions/image';

const indexYear = document.getElementById('year');
const indexImg = document.querySelector('#showcase img');

date_functions.insertDate(indexYear);
image_functions.fadeImg(indexImg);