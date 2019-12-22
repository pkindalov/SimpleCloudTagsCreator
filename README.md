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

