define(
    [
        'react',
        'jquery',
        './header-bar/header-bar',
        './navigation-menu',
        './page-widgets/info-tile/info-tile',
        './page-widgets/info-tile/progress-bar',
        './page-widgets/stat-tile',
        './page-widgets/small-box',
        './page-widgets/chat-box/chat-box',
        './page-widgets/chat-box/conversations',
        './page-widgets/chat-box/contacts',
        './page-widgets/profile-card/profile-card',
        './page-widgets/profile-card/profile-info-list',
        './page-widgets/profile-card/profile-info-blocks',
        './page-widgets/post/post',
        './page-widgets/post/social-button',
        './page-widgets/post/social-info'
    ],
    function (React, $, HeaderBar, NavigationMenu, InfoTile, ProgressBar, StatTile, SmallBox, ChatBox, Conversations, Contacts, ProfileCard, ProfileInfoList, ProfileInfoBlocks, Post, SocialButton, SocialInfo) {
        var Widgets = React.createClass({
            getInitialState: function() {
                return {
                    infoTileOptions: [],
                    progressInfoTileOptions: [],
                    statTileOptions: [],
                    smallBoxOptions: [],
                    smallBoxBorderedOptions: [],
                    chatBoxOptions: [],
                    profileCardOptions: [],
                    postOptions: []
                }
            },
            componentDidMount: function() {
                var infoTileOptions = [{
                    theme: 'bg-aqua',
                    icon: 'fa-envelope-o',
                    subject: 'Messages',
                    stats: '1,410',
                    content: ''
                }, {
                    theme: 'bg-green',
                    icon: 'fa-flag-o',
                    subject: 'Bookmarks',
                    stats: '410',
                    content: ''
                }, {
                    theme: 'bg-yellow',
                    icon: 'fa-files-o',
                    subject: 'Uploads',
                    stats: '13,648',
                    content: ''
                }, {
                    theme: 'bg-red',
                    icon: 'fa-star-o',
                    subject: 'Likes',
                    stats: '93,139',
                    content: ''
                }];

                var progressInfoTileOptions = [{
                    theme: 'bg-aqua',
                    icon: 'fa-bookmark-o',
                    subject: 'Bookmarks',
                    stats: '41,410',
                    content: '',
                    progressPercent: 70,
                    progressDescription: '70% Increase in 30 Days',
                    progressColor: 'white'
                }, {
                    theme: 'bg-green',
                    icon: 'fa-thumbs-o-up',
                    subject: 'Likes',
                    stats: '41,410',
                    content: '',
                    progressPercent: 50,
                    progressDescription: '50% Increase in 30 Days',
                    progressColor: 'white'
                }, {
                    theme: 'bg-yellow',
                    icon: 'fa-calendar',
                    subject: 'Events',
                    stats: '41,410',
                    content: '',
                    progressPercent: 70,
                    progressDescription: '70% Increase in 30 Days',
                    progressColor: 'white'
                }, {
                    theme: 'bg-red',
                    icon: 'fa-comments-o',
                    subject: 'comments',
                    stats: '41,410',
                    content: '',
                    progressPercent: 70,
                    progressDescription: '70% Increase in 30 Days',
                    progressColor: 'white'
                }];

                var statTileOptions = [{
                    theme: 'bg-aqua',
                    icon: 'fa-shopping-cart',
                    subject: 'New Orders',
                    stats: '150',
                    link: '#'
                }, {
                    theme: 'bg-green',
                    icon: 'ion-stats-bars',
                    subject: 'Bounce Rate',
                    stats: '53%',
                    link: '#'
                }, {
                    theme: 'bg-yellow',
                    icon: 'ion-person-add',
                    subject: 'User Registrations',
                    stats: '44',
                    link: '#'
                }, {
                    theme: 'bg-red',
                    icon: 'ion-pie-graph',
                    subject: 'Unique Visitors',
                    stats: '65',
                    link: '#'
                }];

                var smallBoxOptions = [{
                    type: 'expandable', 
                    theme: 'box-default',
                    title: 'Expandable',
                    content: 'The body of the box'
                }, {
                    type: 'collapsable',
                    theme: 'box-success',
                    title: 'Collapsable',
                    content: 'The body of the box'
                }, {
                    type: 'removable', 
                    theme: 'box-warning',
                    title: 'Removable',
                    content: 'The body of the box'
                }, {
                    type: 'removable',
                    theme: 'box-danger',
                    loading: true,
                    title: 'Loading state',
                    content: 'The body of the box'      
                }];

                var smallBoxBorderedOptions = [{
                    type: 'expandable', 
                    theme: 'box-primary',
                    border: true,
                    title: 'Expandable',
                    content: 'The body of the box'
                }, {
                    type: 'collapsable',
                    theme: 'box-warning',
                    border: true,
                    title: 'Collapsable',
                    content: 'The body of the box'
                }, {
                    type: 'removable', 
                    theme: 'box-danger',
                    border: true,
                    title: 'Removable',
                    content: 'The body of the box'
                }, {
                    type: 'removable',
                    theme: 'box-info',
                    loading: true,
                    border: true,
                    title: 'Loading state',
                    content: 'The body of the box'      
                }];

                var chatBoxOptions = [{
                    headerTheme: 'box-primary',
                    notificationTheme: 'bg-light-blue',
                    chatTheme: 'direct-chat-primary',
                    buttonTheme: 'btn-primary',
                    title: 'Direct Chat',
                    notifications: 2,

                    conversations: [{
                        displayName: 'Alexander Pierce',
                        displayPicture: '../dist/img/user1-128x128.jpg',
                        date: '23 Jan 2:00 pm',
                        message: "Is this template really for free? That's unbelievable!"
                    }, {
                        align: 'right',
                        displayName: 'Sarah Bullock',
                        displayPicture: '../dist/img/user3-128x128.jpg',
                        date: '23 Jan 2:05 pm',    
                        message: 'You better believe it!'
                    }],

                    contacts: [{
                        displayName: 'Count Dracula',
                        displayPicture: '../dist/img/user1-128x128.jpg',
                        link: '#',
                        date: '2/28/2015',
                        message: 'How have you been? I was...'
                    }, {
                        displayName: 'Count Dracula',
                        displayPicture: '../dist/img/user1-128x128.jpg',
                        link: '#',
                        date: '2/28/2015',
                        message: 'How have you been? I was...'
                    }]
                }, {
                    headerTheme: 'box-success',
                    notificationTheme: 'bg-green',
                    chatTheme: 'direct-chat-success',
                    buttonTheme: 'btn-success',
                    border: true,
                    title: 'Direct Chat',
                    notifications: 3,

                    conversations: [{
                        displayName: 'Alexander Pierce',
                        displayPicture: '../dist/img/user1-128x128.jpg',
                        date: '23 Jan 2:00 pm',
                        message: "Is this template really for free? That's unbelievable!"
                    }, {
                        align: 'right',
                        displayName: 'Sarah Bullock',
                        displayPicture: '../dist/img/user3-128x128.jpg',
                        date: '23 Jan 2:05 pm',    
                        message: 'You better believe it!'
                    }],

                    contacts: [{
                        displayName: 'Count Dracula',
                        displayPicture: '../dist/img/user1-128x128.jpg',
                        link: '#',
                        date: '2/28/2015',
                        message: 'How have you been? I was...'
                    }]
                }, {
                    headerTheme: 'box-warning',
                    notificationTheme: 'bg-yellow',
                    chatTheme: 'direct-chat-warning',
                    buttonTheme: 'btn-warning',
                    title: 'Direct Chat',
                    notifications: 4,

                    conversations: [{
                        displayName: 'Alexander Pierce',
                        displayPicture: '../dist/img/user1-128x128.jpg',
                        date: '23 Jan 2:00 pm',
                        message: "Is this template really for free? That's unbelievable!"
                    }, {
                        align: 'right',
                        displayName: 'Sarah Bullock',
                        displayPicture: '../dist/img/user3-128x128.jpg',
                        date: '23 Jan 2:05 pm',    
                        message: 'You better believe it!'
                    }],

                    contacts: [{
                        displayName: 'Count Dracula',
                        displayPicture: '../dist/img/user1-128x128.jpg',
                        link: '#',
                        date: '2/28/2015',
                        message: 'How have you been? I was...'
                    }]
                }, {
                    headerTheme: 'box-danger',
                    notificationTheme: 'bg-red',
                    chatTheme: 'direct-chat-danger',
                    buttonTheme: 'btn-danger',
                    title: 'Direct Chat',
                    notifications: 5,

                    conversations: [{
                        displayName: 'Alexander Pierce',
                        displayPicture: '../dist/img/user1-128x128.jpg',
                        date: '23 Jan 2:00 pm',
                        message: "Is this template really for free? That's unbelievable!"
                    }, {
                        align: 'right',
                        displayName: 'Sarah Bullock',
                        displayPicture: '../dist/img/user3-128x128.jpg',
                        date: '23 Jan 2:05 pm',    
                        message: 'You better believe it!'
                    }],

                    contacts: [{
                        displayName: 'Count Dracula',
                        displayPicture: '../dist/img/user1-128x128.jpg',
                        link: '#',
                        date: '2/28/2015',
                        message: 'How have you been? I was...'
                    }]
                }],

                profileCardOptions = [
                    {
                        theme: 'bg-yellow',
                        displayName: 'Nadia Carmichael',
                        description: 'Lead Developer',
                        displayPicture: '../dist/img/user7-128x128.jpg',
                        pictureAlignment: 'left',
                        infoList: [{
                            description: 'Projects',
                            stats: 31,
                            link: '#',
                            badgeTheme: 'bg-blue'
                        }, {
                            description: 'Tasks',
                            stats: 5,
                            link: '#',
                            badgeTheme: 'bg-aqua'
                        }, {
                            description: 'Completed Projects',
                            stats: 12,
                            link: '#',
                            badgeTheme: 'bg-green'
                        }, {
                            description: 'Followers',
                            stats: 842,
                            link: '#',
                            badgeTheme: 'bg-red'
                        }]
                    }, {
                        theme: 'bg-aqua-active',
                        displayName: 'Alexander Pierce',
                        description: 'Founder & CEO',
                        displayPicture: '../dist/img/user1-128x128.jpg',
                        infoList: [{
                            description: 'SALES',
                            stats: '3,200'
                        }, {
                            description: 'FOLLOWERS',
                            stats: '13,000'
                        }, {
                            description: 'PRODUCTS',
                            stats: 35
                        }]
                    }, {
                        theme: 'bg-black',
                        displayName: 'Elizabeth Pierce',
                        description: 'Web Designer',
                        displayPicture: '../dist/img/user3-128x128.jpg',
                        coverPicture: '../dist/img/photo1.png',
                        infoList: [{
                            description: 'SALES',
                            stats: '3,200'
                        }, {
                            description: 'FOLLOWERS',
                            stats: '13,000'
                        }, {
                            description: 'PRODUCTS',
                            stats: 35
                        }]
                    }
                ];

                var postOptions = [
                    {
                        displayName: 'Jonathan Burke Jr.',
                        displayPicture: '../dist/img/user1-128x128.jpg',
                        date: 'Shared publicly - 7:30 PM Today',
                        postPicture: '../dist/img/photo2.png',
                        content: 'I took this photo this morning. What do you guys think?',
                        socialInfo: '127 likes - 3 comments',
                        comments: [
                            {
                                displayName: 'Maria Gonzales',
                                displayPicture: '../dist/img/user3-128x128.jpg',
                                date: '8:03 PM Today',
                                content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                            }, {
                                displayName: 'Luna Stark',
                                displayPicture: '../dist/img/user4-128x128.jpg',
                                date: '8:03 PM Today',
                                content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                            }
                        ]
                    }, {
                        displayName: 'Jonathan Burke Jr.',
                        displayPicture: '../dist/img/user1-128x128.jpg',
                        date: 'Shared publicly - 7:30 PM Today',
                        content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
                        socialInfo: '45 likes - 2 comments',
                        attachments: [
                            {
                                title: 'Lorem ipsum text generator',
                                link: 'http://www.lipsum.com/',
                                picture: '../dist/img/photo1.png',
                                content: 'Description about the attachment can be placed here. Lorem Ipsum is simply dummy text of the printing and typesetting industry...'
                            }
                        ],
                        comments: [
                            {
                                displayName: 'Maria Gonzales',
                                displayPicture: '../dist/img/user3-128x128.jpg',
                                date: '8:03 PM Today',
                                content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                            }, {
                                displayName: 'Nora Havisham',
                                displayPicture: '../dist/img/user5-128x128.jpg',
                                date: '8:03 PM Today',
                                content: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
                            }
                        ]
                    }
                ];

                this.setState({
                    infoTileOptions: infoTileOptions,
                    progressInfoTileOptions: progressInfoTileOptions,
                    statTileOptions: statTileOptions,
                    smallBoxOptions: smallBoxOptions,
                    smallBoxBorderedOptions: smallBoxBorderedOptions,
                    chatBoxOptions: chatBoxOptions,
                    profileCardOptions: profileCardOptions,
                    postOptions: postOptions
                });
            },
            render: function() {
                var infoTileWidgets = this.state.infoTileOptions.map(function (options, iterator) {
                    return (
                        <InfoTile 
                            key = {"rowOne"+iterator}
                            content = '' 
                            icon = {options.icon} 
                            stats = {options.stats} 
                            subject = {options.subject} 
                            theme = {options.theme} />
                    )
                });

                var progressInfoTileWidgets = this.state.progressInfoTileOptions.map(function (options, iterator) {
                    return (
                        <InfoTile 
                            key = {"rowTwo"+iterator} 
                            content='' 
                            icon = {options.icon} 
                            stats = {options.stats} 
                            subject = {options.subject} 
                            theme = {options.theme} >
                            <ProgressBar percent={options.progressPercent} description={options.progressDescription} color={options.progressColor} />
                        </InfoTile>    
                    )
                });

                var statTileWidgets = this.state.statTileOptions.map(function (options, iterator) {
                    return (
                        <StatTile 
                            key={"rowThree"+iterator}
                            icon = {options.icon} 
                            link = {options.link}
                            stats = {options.stats}
                            subject = {options.subject} 
                            theme = {options.theme} />
                    )
                });

                var smallBoxWidgets = this.state.smallBoxOptions.map(function (options, iterator) {
                    return (
                        <SmallBox 
                            key={"rowFour"+iterator} 
                            border = {false}
                            content = {options.content}
                            loading = {options.loading} 
                            theme = {options.theme}
                            title = {options.title} 
                            type = {options.type} />
                    )
                });

                var smallBoxBorderedWidgets = this.state.smallBoxBorderedOptions.map(function (options, iterator) {
                    return (
                        <SmallBox 
                            key={"rowFive"+iterator} 
                            border = {options.border}
                            content = {options.content}
                            loading = {options.loading} 
                            theme = {options.theme}
                            title = {options.title} 
                            type = {options.type} />
                    )
                });

                var chatBoxWidgets = this.state.chatBoxOptions.map(function (options, iterator) {
                    return (
                        <ChatBox 
                            key={"rowSix"+iterator} 
                            buttonTheme = {options.buttonTheme}
                            chatTheme = {options.chatTheme}
                            headerTheme = {options.headerTheme}
                            notificationTheme = {options.notificationTheme}
                            title = {options.title}
                            notifications = {options.notifications}
                            border = {options.border} >

                            <Conversations conversations = {options.conversations} />
                            <Contacts contacts = {options.contacts} />

                        </ChatBox>

                    )
                });

                var ProfileCardWidgets = this.state.profileCardOptions.map(function (options, iterator) {
                    if(options.pictureAlignment === 'left'){
                        return (
                            <ProfileCard 
                                key={"rowSeven"+iterator}
                                theme={options.theme} 
                                displayName={options.displayName} 
                                description={options.description}
                                displayPicture={options.displayPicture}
                                pictureAlignment={options.pictureAlignment}
                                coverPicture={options.coverPicture} >

                                <ProfileInfoList list={options.infoList} />

                            </ProfileCard>
                        )
                    }else{
                        return (
                            <ProfileCard 
                                key={"rowSeven"+iterator}
                                theme={options.theme} 
                                displayName={options.displayName} 
                                description={options.description}
                                displayPicture={options.displayPicture}
                                coverPicture={options.coverPicture} >

                                <ProfileInfoBlocks list={options.infoList} />

                            </ProfileCard>
                        )
                    }
                });

                var posts = this.state.postOptions.map(function (options, iterator) {
                    return (
                        <Post 
                            key={"rowEight"+iterator} 
                            displayName={options.displayName}
                            displayPicture={options.displayPicture}
                            date={options.date}
                            postPicture={options.postPicture}
                            content={options.content}
                            attachments={options.attachments}
                            comments={options.comments} >

                            <SocialButton type='like' />
                            <SocialButton type='share' />
                            <SocialInfo info={options.socialInfo} />
                        </Post>

                    )
                });

                return (
                    <div className="wrapper">
                        <HeaderBar />
                        
                        <NavigationMenu />
                        
                        <div className="content-wrapper">
                            <section className="content-header">
                                <h1>
                                    Widgets
                                    <small>Preview page</small>
                                </h1>
                                {/*<ol className="breadcrumb">
                                    <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                                    <li className="active">Dashboard</li>
                                </ol>*/}
                            </section>

                            <section className="content">
                                <div className="row">
                                    {infoTileWidgets}
                                </div>

                                <div className="row">
                                    {progressInfoTileWidgets}         
                                </div>

                                <div className="row">
                                    {statTileWidgets}                
                                </div>

                                <div className="row">
                                    {smallBoxWidgets}       
                                </div>

                                <div className="row">
                                    {smallBoxBorderedWidgets}             
                                </div>

                                <div className="row">
                                    {chatBoxWidgets}               
                                </div>
                                <h2 className="page-header">Social Widgets</h2>
                                <div className="row">
                                    {ProfileCardWidgets}
                                </div>

                                <div className="row">
                                    {posts}         
                                </div>
                            </section>

                        </div>

                        <footer className="main-footer">
                            <div className="pull-right hidden-xs">
                                <b>Version</b> 1.0.0
                            </div>
                            <strong>This project is a derivative of <a href="http://almsaeedstudio.com">Almsaeed Studio</a>.</strong>
                        </footer>

                        {/*<ControlsMenu />*/}
                    </div>
                )
            }
        });

        return Widgets;
    }
)