# SimpleCloudTagsCreator
<p>Simple class for creating fast a cloud of tags</p>


# How to use?

1.Firstly, you must include js file at the end of the body tag.<br />

```javascript
<body>
<script src="SimpleCloudTagsCreator.js"></script>
</body>
```




2.You must prepare needed data.
```javascript

	function getRndNum(topLimit) {
		return Math.floor(Math.random() * topLimit);
    }

	let allTagsArr = [{
            JavaScript: {
                weight: getRndNum(100),
                styles: {
                    'font-weight': 'bold;',
                    'text-decoration': 'underline;'
                },
                url: '/JavaScript'
            },
            PHP: {
                weight: getRndNum(100),
                styles: {

                },
                url: '/php'
            },
            'Python': {
                weight: getRndNum(100),
                styles: {
                    'text-transform': 'uppercase;',
                    'font-style': 'italic;'
                },
                url: '/python'
            },
            'CSS': {
                weight: getRndNum(100),
                styles: {
                    'text-decoration': 'underline;'
                },
                url: '/css'
            },
            'HTML': {
                weight: getRndNum(100),
                styles: {
                    'font-weight': 'bolder;'
                },
                url: '/html'
            },
            'C': {
                weight: getRndNum(100),
                styles: {
                    'font-style': 'italic;'
                },
                url: '/c'
            },
            'C++': {
                weight: getRndNum(100),
                url: '/cplusplus'
            },
            'Java': {
                weight: getRndNum(100),
                styles: {
                    'text-transform': 'uppercase;',
                    'font-style': 'italic;'
                },
                url: '/java'
            },
            'C#': {
                weight: getRndNum(100),
                styles: {
                    'text-transform': 'lowercase;',
                    'text-decoration': 'underline;',
                    'font-weight': 'bold;'
                },
                url: '/csharp'
            }
        }];
```

 From the example above you can see that this is **an array with an object inside it.** Every single tag is a property of this main object. The first key of the main object is the name of the tag - Javascript, Php, C#, Java etc... This first key has it own **config** object whith contain the following settings.
    
- **weight** - it is a **number**. Use it to define a font-size of the tag. In the example above I use a function **getRndNum** to generate a random numbers. It is not important for the class. You can manually add weights to every tag.

- **styles** - it contains an **object** with user defined(yours) **css** rules. The keys are the css property names and the values of the properties. If there are **no styles provided** then will use the defaults one.

- **url** - set the href attribute to every tag. If such is no provided then will be used **`#`**

3.Next step it to make instance of the class and to pass needed data

The constructor of the class expects the following data:
- **data** - this is an array with **only one element** which is **object**. Inside it there must be  the **name of the tag** for the **property** and **another object with settings** for the **current tag** for value.

- **minFontSize** - expected to be **number**. Used to define the minimum font-size.

- **maxFontSize** - Similar to the previous one. Again, it must be a **number**. Define the maximum font-size.

- **tagsPerRow** - define how much tags to be put on the line. Expected to be **number**. If there is no such provided will be used the **default number 5**.

- **className** - name of the class which will be put in tag. Expected to be **string**. If such is no provided then it will be used a default one.

- **shuffle** - this will change the order ot the tags. Expected to be **boolean** value. If there is no such provided, then will be **turned off on default**.

You can see from the following all data which can be passed when you create new instance of the class.
```javascript
class SimpleCloudTagsCreator {
    constructor(data, minFontSize, maxFontSize, tagsPerRow = 5, className, shuffle) {
```
The next you see example making a new instance of the class, passing all needed data to the constructor.

```javascript
     let simpleCloudTagsCreator = new SimpleCloudTagsCreator(allTagsArr, 12, 50, 4, 'mySpecifiedTagClass', true);
```

