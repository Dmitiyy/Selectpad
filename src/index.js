import Selectpad from './modules/plugin';

const selectpadElem = document.querySelector('.selectpad');
const title = document.querySelector('.selectpad .selectpad-title');
let options = document.querySelectorAll('.selectpad .selectpad-opt');
const wraps = document.querySelectorAll('.selectpad .selectpad-wrap');
const suboptions = document.querySelectorAll('.selectpad .selectpad-subopt');
const burger = document.querySelector('.burger');

const selectpad = new Selectpad (selectpadElem, title, options, wraps, suboptions);

selectpad.init();

const btnAddOpt = document.querySelector('.btn_add-opt'),
      btnRemoveOpt = document.querySelector('.btn_remove-opt'),
      btnAddSubopt = document.querySelector('.btn_add-subopt'),
      btnRemoveSubopt = document.querySelector('.btn_remove-subopt');

const titleOpt = document.querySelector('.input_add-opt'),
      titleSubopt = document.querySelector('.input_add-subopt'),
      numberAddSubopt = document.querySelector('.num_add-subopt'),
      numberRemoveOpt = document.querySelector('.input_remove-opt'),
      numberRemoveSuboptBlock = document.querySelector('.input_remove-subopt'),
      numberRemoveSuboptElement = document.querySelector('.num_remove-subopt');

btnAddOpt.addEventListener('click', () => {
    if (titleOpt.value.length > 1) {
        selectpad.addNewOption(titleOpt.value, `value: ${titleOpt.value}`);
    }
});

btnRemoveOpt.addEventListener('click', () => {
    if (numberRemoveOpt.value.length !== 0) {
        selectpad.removeOption(numberRemoveOpt.value);
    }
});

btnAddSubopt.addEventListener('click', () => {
    if (titleSubopt.value.length !== 0 && numberAddSubopt.value.length !== 0) {
        selectpad.addSuboption(+numberAddSubopt.value, titleSubopt.value);
    }
});

btnRemoveSubopt.addEventListener('click', () => {
    if (numberRemoveSuboptBlock.value.length !== 0 && numberRemoveSuboptElement.value.length !== 0) {
        selectpad.removeSuboption(+numberRemoveSuboptBlock.value, numberRemoveSuboptElement.value);
    }
});

burger.addEventListener('click', () => {
    document.querySelector('.burger_list').classList.toggle('active');
})