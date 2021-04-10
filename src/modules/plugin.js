class Selectpad {
    constructor (selectpad, title, options, wraps, suboptions) {
        this.selectpad = selectpad;
        this.title = title;
        this.optionsElems = options;
        this.showOpts = false;
        this.options = [];
        this.wraps = wraps;
        this.suboptions = suboptions;
        this.newState = [];
        this.active = false;
    }

    createData () {
        try {
            this.optionsElems.forEach(item => {
                this.options.push(item);
            })
        } catch (e) {console.log(e)}
    }

    changeStyle (element, propertys, values) {
        try {
            this.data = [];
            for (let i = 0; i < propertys.length; i++) {
                this.data.push([propertys[i], values[i]]);
            }
            for (let i = 0; i < this.data.length; i++) {
                element.style[this.data[i][0]] = `${this.data[i][1]}`;
            }
        } catch (e) {console.log(e)}
    }

    handleClick () {
        try {
            this.title.addEventListener('click', () => {
                this.showOpts = !this.showOpts;
                this.openOptions();
            });
        } catch (e) {console.log(e)}
    }

    styleElementOn (element) {
        try {
            this.changeStyle(element, [
                'transition', 'borderBottom',
                'height', 'fontSize'
            ], [
                'all 0.3s', '4px solid #050814', 
                '70px', '20px'
            ]);
        } catch (e) {console.log(e)}
    }

    styleElementOff (element) {
        try {
            this.changeStyle(element, [
                'transition', 'border',
                'height', 'fontSize'
            ], [
                'all 0.3s', '0px solid #85aac500', 
                '0px', '0px'
            ]);
        } catch (e) {console.log(e)}
    }

    openOptions () {
        this.suboptions = document.querySelectorAll('.selectpad .selectpad-subopt');
        try {
            this.result = [];
            for (let i = 0; i < this.options.length; i++) {
                this.result.push((this.options.length - i) - 1);
            }  
            if (this.showOpts) { 
                for (let i = 0; i < this.result.length; i++) {
                    this.styleElementOff(this.options[i]);
                }
                for (let i = 0; i < this.suboptions.length; i++) {
                    this.styleElementOff(this.suboptions[i]);
                }
                this.wraps.forEach(item => {
                    item.setAttribute('open', false);
                })
            } else {
                for (let i = 0; i < this.result.length; i++) {
                    this.styleElementOn(this.options[i]);
                }
            }
        } catch (e) {console.log(e)}
    }

    openSuboptions (item) {
        try {
            this.wraps = document.querySelectorAll('.selectpad .selectpad-wrap');
            this.elements = item.querySelectorAll('.selectpad-subopt');
            if (item.getAttribute('open') === 'false') {
                for (let i = 0; i < this.elements.length; i++) {
                    this.styleElementOff(this.elements[i]);
                }
            } else if (item.getAttribute('open') === 'true') {
                for (let i = 0; i < this.elements.length; i++) {
                    this.styleElementOn(this.elements[i]);
                }
            }
        } catch (e) {console.log(e)}
    }

    addNewOption (title, value) {
        try {
            const item = document.createElement('div');
            item.classList.add('selectpad-wrap');
            item.setAttribute('open', false);
            const itemOpt = document.createElement('div');
            itemOpt.textContent = title;
            itemOpt.classList.add('selectpad-opt');
            itemOpt.setAttribute('value', value);
            item.append(itemOpt);
            this.selectpad.append(item);
            this.options = document.querySelectorAll('.selectpad .selectpad-opt');
            this.wraps = document.querySelectorAll('.selectpad .selectpad-wrap');
            this.newState.push(itemOpt);
            itemOpt.addEventListener('click', () => {
                this.attr = item.getAttribute('open');
                if (this.attr) {
                    if (this.attr === 'false') {
                        item.setAttribute('open', true);                        
                    } else {
                        item.setAttribute('open', false);
                    }
                }
                this.openSuboptions(item);
            })
        } catch (e) {console.log(e)}
    }

    removeOption (index) {
        this.wraps = document.querySelectorAll('.selectpad .selectpad-wrap');
        this.suboptions = document.querySelectorAll('.selectpad .selectpad-subopt');
        try {
            this.wraps[index-1].remove();
            this.options = document.querySelectorAll('.selectpad .selectpad-opt');
        } catch (e) {console.log(e)}
    }

    removeSuboption (element, index) {
        this.suboptions = document.querySelectorAll('.selectpad .selectpad-subopt');
        this.wraps = document.querySelectorAll('.selectpad .selectpad-wrap');
        try {
            this.itemsSub = [];
            this.wraps[element-1].childNodes.forEach(item => {
                if (item.classList !== undefined) {
                    if (item.classList[0] === 'selectpad-subopt') {
                        this.itemsSub.push(item);
                    }
                }
            });
            console.log(this.itemsSub);
            this.itemsSub[index-1].remove();
            this.suboptions = document.querySelectorAll('.selectpad .selectpad-subopt');
            this.options = document.querySelectorAll('.selectpad .selectpad-opt');
        } catch (e) {console.log(e)}
    }

    addSuboption (item, text) {
        try {
            this.suboptions = document.querySelectorAll('.selectpad .selectpad-subopt');
            this.wraps = document.querySelectorAll('.selectpad .selectpad-wrap');
            const subElement = document.createElement('div');
            subElement.textContent = text;
            subElement.classList.add('selectpad-subopt');
            this.wraps[item-1].append(subElement);
        } catch (e) {console.log(e)}
    }

    handleClickSub () {
        try {
            this.wraps = document.querySelectorAll('.selectpad .selectpad-wrap');
            this.options = document.querySelectorAll('.selectpad .selectpad-opt');
            this.suboptions = document.querySelectorAll('.selectpad .selectpad-subopt');
            this.newState.forEach(item => {
                item.addEventListener('click', () => {
                    this.attr = item.parentNode.getAttribute('open');
                    if (this.attr) {
                        if (this.attr === 'false') {
                            item.parentNode.setAttribute('open', true);                        
                        } else {
                            item.parentNode.setAttribute('open', false);
                        }
                    }
                    this.openSuboptions(item.parentNode);
                })
            })
            
        } catch (e) {console.log(e);}
    }

    init () {
        this.createData();
        this.options.forEach(item => {
            this.newState.push(item);
        })
        this.handleClick();
        this.handleClickSub();
    }
}

export default Selectpad;