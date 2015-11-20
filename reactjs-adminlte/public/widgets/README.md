#### [Go to the widgets folder](./js/components/page-widgets)

## List of widgets


### - [InfoTile](./js/components/page-widgets/info-tile/info-tile.js)

A basic info-tile for displaying info. 

#### Usage:

Props: This component takes 5 values.

```javascript

theme = 'bg-aqua' / 'bg-green' / 'bg-yellow' (To apply background color to the icon),
icon = 'fa-envelope-o' / 'fa-flag-0' / 'fa-files-0' (Any font-awesome icon)
subject =  'Can be a string or a number'
stats = 'Can be a string or a number'
content = 'Can be a string or a number'
```
#### Example: 

```javascript
<InfoTile  
    content = '' 
    icon = 'fa-envelope-o' 
    stats = '1,410' 
    subject = 'Messages' 
    theme = 'bg-aqua' 
/>
```
![](../../screenshots/info-tile.png)

You can optionally display a progress status and bar by passing the [ProgressBar](./js/components/page-widgets/info-tile/progress-bar.js) component as props.children

```javascript
<InfoTile content = '' icon = 'fa-thumbs-o-up' stats = '41,410' subject = 'Likes' theme = 'bg-green' >
	<ProgressBar percent = 50 description = '50% Increase in 30 Days' color = 'white' />
</InfoTile>	
```
![](../../screenshots/progress-info-tile.png)


### - [StatTile](./js/components/page-widgets/stat-tile.js)

A tile for displaying some basic info, highlighting numbers or stats. 

#### Usage:

Props: This component takes 5 values from props, 1 is optional

```javascript

theme = 'bg-aqua' / 'bg-green' / 'bg-red' (To apply background color to the icon),
icon = 'fa-shopping-cart' / 'ion-stats-bars' / 'ion-person-add' (Any font-awesome icon)
subject =  'Can be a string or a number'
stats = 'Can be a string or a number'
link = 'Link to go to for more information'  (Optional)
```
#### Example: 

```javascript
<StatTile 
	theme = 'bg-yellow' 
	icon = 'ion-person-add' 
	subject = 'User Registration' 
	stats = '44'
	link = '#' 
/>
```

![](../../screenshots/stat-tile.png)


### - [SmallBox](./js/components/page-widgets/small-box.js)

A box / window for displaying some basic info, to which properties can be applied. 

#### Usage:

Props: This component takes 6 values from props, out of which 2 are optional

```javascript
type = 'expandable' / 'collapsable' / 'removable' (To make the box expandable, collapsable or removable)
theme = 'box-default' / 'box-primary' / 'box-warning' / 'box-danger' / 'box-success'
loading = true (Optional boolean value, to show a loading animation)
border = true (Optional boolean value, will apply a border for the box and color for the title bar)
title = 'Can be a string or a number'
content = 'Can be a string or a number'
```

#### Example: 

##### An expandable box with border

```javascript

<SmallBox 
	border = true
	content = 'The body of the box'
	theme = 'box-default'
	title = 'Expandable'
	type = 'expandable'
/>
```

![](../../screenshots/small-box-expandable.png)

##### A collapsable box with border

```javascript

<SmallBox 
	border = true
	content = 'The body of the box'
	theme = 'box-primary'
	title = 'Collapsable'
	type = 'collapsable'
/>
```

![](../../screenshots/small-box-collapsable.png)

##### A removable box without border

```javascript
<SmallBox 
	content = 'The body of the box'
	theme = 'box-danger'
	title = 'Removable'
	type = 'removable'
/>
```

![](../../screenshots/small-box-removable.png)

##### A removable box without border with loading animation

```javascript
<SmallBox 
	content = 'The body of the box'
	theme = 'box-warning'
	loading = true
	title = 'Loading state'
	type = 'removable'
/>
```

![](../../screenshots/small-box-loading.png)


### - [ChatBox](./js/components/page-widgets/chat-box/chat-box.js)

A box / window which displays chat messages, notifications and contact information. 

#### Usage:

Props: This component takes 8 values from props to customize it's UI.

```javascript
border = true/false (To display the border)
buttonTheme = 'btn-primary' / 'btn-success' / 'btn-warning' (To apply color for the submit button)
chatTheme = 'direct-chat-primary' / 'direct-chat-success' / 'direct-chat-warning' / 'direct-chat-danger' / {Chat messages color}
headerTheme = 'box-primary' / 'box-success' / 'box-warning' (Chat header / border colors)
notificationTheme = 'bg-light-blue' / 'bg-green' / 'bg-yellow' (Notification color)
notifications = 'Can be a string or a number' (Number of notifications)
title = 'Can be a string or a number'
```

Pass the [Conversations](./js/components/page-widgets/chat-box/conversation.js) component as props.children to add chat messages. It accepts an array of objects containing chat information.

```javascript
conversationsArray: [{
    name: 'John Doe',
    displayPicture: 'url of the image', 
    date: '23 Jan 2:00 pm',
    message: "Is this template really for free? That's unbelievable!"
}]

<Conversations conversations = {conversationsArray} />
```

Pass the [Contacts](./js/components/page-widgets/chat-box/contacts.js) component as props.children to add contacts in the right drawer. It accepts as array of objects 

```javascript
contactsArray: [{
    name: 'John Doe',
    displayPicture: 'url of the image',
    link: '#',
    date: '2/28/2015',
    message: 'How have you been? I was...',
    align: 'right' // (To align a message to the right)
}]

<Contacts contacts = {contactsArray} />
```

#### Example: 

```javascript

var conversationsInfo = [{
    name: 'Alexander Pierce',
    displayPicture: '../dist/img/user1-128x128.jpg',
    date: '23 Jan 2:00 pm',
    message: "Is this template really for free? That's unbelievable!"
}, {
    align: 'right',
    name: 'Sarah Bullock',
    displayPicture: '../dist/img/user3-128x128.jpg',
    date: '23 Jan 2:05 pm',    
    message: 'You better believe it!'
}];

var contactsInfo = [{
    name: 'Count Dracula',
    displayPicture: '../dist/img/user1-128x128.jpg',
    link: '#',
    date: '2/28/2015',
    message: 'How have you been? I was...'
}, {
    name: 'Count Dracula',
    displayPicture: '../dist/img/user1-128x128.jpg',
    link: '#',
    date: '2/28/2015',
    message: 'How have you been? I was...'
}];

<ChatBox  
    buttonTheme = 'btn-primary'
    chatTheme = 'direct-chat-primary'
    headerTheme = 'box-primary'
    notificationTheme = 'bg-light-blue'
    title = 'Direct Chat'
    notifications = 2 >

    <Conversations conversations = {conversationsInfo} />
    <Contacts contacts = {contactsInfo} />

</ChatBox>
```
![](../../screenshots/chat-box.png)