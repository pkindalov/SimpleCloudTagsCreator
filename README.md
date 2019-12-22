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

<p>
	From the example above you can see that <strong>this is an array with an object inside it.</strong> Every single tag is a property of this main object. The first key of the main object is the name of the tag - Javascript, Php, C#, Java etc... This first key has it own config object whith contain the following settings.
    
-     <strong>weight</strong> - it is a <strong>number</strong>. Use it to define a font-size of the tag. In the example above I use a function <strong>getRndNum</strong> to generate a random numbers. It is not important for the class. You can manually add weights to every tag.
-     <strong>styles</strong> - it contains an <strong>object</strong> with user defined(yours) <strong>css</strong> rules. The keys are the css property names and the values of the properties. If there are <strong>no styles provided</strong> then will use the defaults one.
-     <strong>url</strong> - set the href attribute to every tag. If such is no provided then will be used <strong>`#`</strong>
</p>

