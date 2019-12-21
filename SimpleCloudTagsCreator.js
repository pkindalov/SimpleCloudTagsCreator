class SimpleCloudTagsCreator {
    constructor(data, minFontSize, maxFontSize, tagsPerRow = 5) {
        this.dataArr = null;
        this.minFontSize = null;
        this.maxFontSize = null;
        this.maxFontSizeTopLimit = 100;
        this.tagsPerRow = tagsPerRow;
        this.defaultTagStyles = {
            'padding-left': '5px',
            'padding-right': '5px',
            'font-family': 'Arial',
            'text-decoration': 'none',
            'background': 'rgba(210, 255, 82, 1)',
        };
        // this.tagLinks = null;
        this.errors = {
            dataArrayErrors: [
                'Tags must be in array',
                'Every tag must be in Object. The key is the name of the ',
                'Must have at least one tag in your data array',
            ],
            fontSizeErrors: [
                'Wrong type of font size. Expect to pass a number ',
                'Minimum font size number cannot be smaller than 0',
                'Too big number for maximum font size'
            ],
            tagsPerRowErrors: [
                'Expect number',
                'Number cannot be less than one'
            ]
        }

        this.setDataArray(data);
        this.setMinimumFontSize(minFontSize);
        this.setMaximumFontSize(maxFontSize);
        // this.setTagStyles(styles);
    }

    setDataArray(data) {
        if (!(data instanceof Array)) {
            throw Error(this.errors.dataArrayErrors[0]);
        }

        for (let info of data) {
            if (!(info instanceof Object)) {
                throw Error(this.errors.dataArrayErrors[1]);
            }
        }

        if (data.length < 1) {
            throw Error(this.errors.dataArrayErrors[2]);
        }

        this.dataArr = data;

    }

    setMinimumFontSize(minFontSize) {

        if (typeof minFontSize != 'number') {
            console.log('here');
            throw Error(this.errors.fontSizeErrors[0]);
        }

        if (minFontSize < 0) {
            throw Error(this.errors.fontSizeErrors[1]);
        }

        this.minFontSize = minFontSize;
    }


    setMaximumFontSize(maxFontSize) {
        if (typeof maxFontSize != 'number') {
            throw Error(this.errors.fontSizeErrors[0]);
        }

        if (maxFontSize > this.maxFontSizeTopLimit) {
            throw Error(this.errors.fontSizeErrors[2]);
        }

        this.maxFontSize = maxFontSize;
    }

    setTagsPerRow(tagsPerRow) {
        if (typeof tagsPerRow != 'number') {
            throw Error(this.errors.tagsPerRowErrors[0]);
        }

        if (tagsPerRow < 1) {
            throw Error(this.errors.tagsPerRowErrors[1]);
        }

        this.tagsPerRow = tagsPerRow;

    }

    // setTagStyles(styles) {
    //     // console.log(styles);
    //     const DEFAULT_TAG_STYLES = {
    //         'padding-left': '5px',
    //         'padding-right': '5px',
    //         'font-family': 'Arial',
    //         'text-decoration': 'none'
    //     };

    //     if (!styles || styles == null) {
    //         this.tagStyles = DEFAULT_TAG_STYLES;
    //         return;
    //     }

    //     if (!(styles instanceof Object)) {
    //         this.tagStyles = DEFAULT_TAG_STYLES;
    //         return;
    //     }

    //     if (styles && Object.keys(styles).length < 1) {
    //         this.tagStyles = DEFAULT_TAG_STYLES;
    //         return;
    //     }

    //     this.tagStyles = styles;

    // }


    genTagsCloud() {
        let minCount = Math.min(...Object.values(this.dataArr[0]));
        let maxCount = Math.max(...Object.values(this.dataArr[0]));
        let spread = maxCount - minCount;
        let size = 0;
        let cloudHtml = '';
        let cloudTags = [];
        let linkEl;
        let elStyle = document.createElement('style');
        let counter = 1;
        let index = 0;
        elStyle.type = 'text/css';
        spread == 0 ? 1 : spread;

        for (let key of Object.keys(this.dataArr[0])) {
            elStyle = document.createElement('style');
            size = this.minFontSize + (this.dataArr[0][key] - minCount) * (this.maxFontSize - this.minFontSize) / spread;
            linkEl = document.createElement('a');
            linkEl.href = "#";
            linkEl.textContent = key;
            //adding css styles which are set in this.tagStyles;
            elStyle.innerHTML = `#tagStyle${index}`;
            // elStyle.innerHTML += ' {';
            // elStyle.innerHTML += `font-size: ${Math.floor(size)}px`;
            // for (let cssRule of Object.keys(this.tagStyles)) {

            //     elStyle.innerHTML += `${cssRule}: ${this.tagStyles[cssRule]}; `;
            // };
            // elStyle.innerHTML += '};'

            //checks for user defined styles in given array. If there are no such provided then use the default one 
            if (Object.keys(this.dataArr[0][key]).keys > 0) {
                //apply user defined styles here
            } else {
                //apply default css rules
                elStyle.innerHTML += this.applyDefaultStyles(size);
            }

            // elStyle.innerHTML = `#tagStyle${key} { font-size: ${Math.floor(size)}px; padding-left: 5px; padding-right: 5px }`;
            document.getElementsByTagName('head')[0].appendChild(elStyle);
            linkEl.setAttribute('id', `tagStyle${index}`);

            if (counter > this.tagsPerRow) {
                let br = document.createElement('br');
                cloudTags.push(br);
                counter = 1;
            }
            cloudTags.push(linkEl);
            counter++;
            index++;
            //  cloudTags.push(`<a style="font-size: ${Math.floor(size)}px" class="tagCloud" href="#">${key}</a>`);
        }

        return cloudTags;
    }


    applyDefaultStyles(size) {
        let style = '{ ';
        for (let rule of Object.keys(this.defaultTagStyles)) {
            style += `${rule}: ${this.defaultTagStyles[rule]}; `;
        }
        //css property font-size added sepatately because it is generated dynamically
        style += `font-size: ${Math.floor(size)}px; `;
        style += '}';
        // console.log(style);
        return style;
    }


    getData() {
        return this.dataArr;
    }

}