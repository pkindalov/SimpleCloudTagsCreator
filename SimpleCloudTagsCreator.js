class SimpleCloudTagsCreator {
    constructor(data, minFontSize, maxFontSize) {
        this.dataArr = null;
        this.minFontSize = null;
        this.maxFontSize = null;
        this.maxFontSizeTopLimit = 100;
        this.errors = {
            dataArrayErrors: [
                'Tags must be in array',
                'Every tag must be in Object. The key is the name of the ',
                'Must have at least one tag in your data array'
            ],
            fontSizeErrors: [
                'Wrong type of font size. Expect to pass a number ',
                'Minimum font size number cannot be smaller than 0',
                'Too big number for maximum font size'
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


    getData() {
        return this.dataArr;
    }

}