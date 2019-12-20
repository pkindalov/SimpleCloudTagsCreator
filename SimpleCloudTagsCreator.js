class SimpleCloudTagsCreator {
    constructor(data, minFontSize, maxFontSize, tagsPerRow = 5) {
        this.dataArr = null;
        this.minFontSize = null;
        this.maxFontSize = null;
        this.maxFontSizeTopLimit = 100;
        this.tagsPerRow = tagsPerRow;
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
        elStyle.type = 'text/css';
        spread == 0 ? 1 : spread;

        for (let key of Object.keys(this.dataArr[0])) {
            elStyle = document.createElement('style');
            size = this.minFontSize + (this.dataArr[0][key] - minCount) * (this.maxFontSize - this.minFontSize) / spread;
            linkEl = document.createElement('a');
            linkEl.href = "#";
            linkEl.textContent = key;
            elStyle.innerHTML = `#tagStyle${key} { font-size: ${Math.floor(size)}px; padding-left: 5px; padding-right: 5px }`;
            document.getElementsByTagName('head')[0].appendChild(elStyle);
            linkEl.setAttribute('id', `tagStyle${key}`);

            if (counter > this.tagsPerRow) {
                let br = document.createElement('br');
                cloudTags.push(br);
                counter = 1;
            }
            cloudTags.push(linkEl);
            counter++;
            //  cloudTags.push(`<a style="font-size: ${Math.floor(size)}px" class="tagCloud" href="#">${key}</a>`);
        }

        return cloudTags;
    }


    getData() {
        return this.dataArr;
    }

}