(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){},21:function(e,t,a){e.exports=a.p+"static/media/No results - empty states.ae74bf03.png"},22:function(e,t,a){e.exports=a(35)},33:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(18),l=a.n(r),c=a(7),s=a(2),i=a(3),u=a(5),m=a(4),h=a(6),d=(a(16),a(14)),b="https://reactnd-books-api.udacity.com",E=localStorage.token;E||(E=localStorage.token=Math.random().toString(36).substr(-8));var f={Accept:"application/json",Authorization:E},p=function(e,t){return fetch("".concat(b,"/books/").concat(e),{method:"PUT",headers:Object(d.a)({},f,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},v=function(e){return fetch("".concat(b,"/search"),{method:"POST",headers:Object(d.a)({},f,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})},k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={books:[]},a.onChange=function(e){var t=e.target.id,n=e.target.value,o=a.state.books.map(function(e){return e.id===t}).indexOf(!0),r=a.state.books;r[o].shelf=n,a.setState({books:r}),p(t,n)},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(b,"/books"),{headers:f}).then(function(e){return e.json()}).then(function(e){return e.books}).then(function(t){e.setState(function(){return{books:t}})})}},{key:"shelfRender",value:function(e){var t=this;return o.a.createElement("ol",{className:"books-grid"},this.state.books.map(function(a){return a.shelf===""+e&&o.a.createElement("li",{key:a.id},o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url(".concat(a.imageLinks.thumbnail,")")}}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{id:a.id,onChange:t.onChange,defaultValue:e},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))),o.a.createElement("div",{className:"book-title"},a.title),o.a.createElement("div",{className:"book-authors"},a.authors)))}))}},{key:"upper_body",value:function(){return o.a.createElement("div",{class:"upper-body"},o.a.createElement("nav",{class:"row"},o.a.createElement("ul",{class:"full-width"},o.a.createElement("div",{class:"logo"},o.a.createElement("img",{src:"https://i.ibb.co/g7LgHvj/Singaraja-Design-on-Instagram-A-quick-logo-concepts-for-library-Which-one-you-think-is-better-guys-The-subtle-one-1-or-the-obvious-one-2-2.jpg",alt:"",srcset:"",width:"70%"})),o.a.createElement("li",{class:"Home"},o.a.createElement("a",{href:"#"},"Home")),o.a.createElement("li",{class:"About"},o.a.createElement("a",{href:"#"},"About ")),o.a.createElement("li",{class:"Category"},o.a.createElement("a",{href:"#"},"Categories")),o.a.createElement("li",{class:"books"},o.a.createElement("a",{href:"#"},"Books")),o.a.createElement("li",{class:"contacts"},o.a.createElement("a",{href:"#"},"Contacts")))),o.a.createElement("img",{class:"after-logo",src:"https://i.ibb.co/8jK3szR/Screen-Shot-2020-05-19-at-12-13-16-PM.png",alt:"logo",width:"100%",height:"100%"}),o.a.createElement("div",{class:"quotes"},o.a.createElement("p",null,"\u201cThink before you speak. Read before you think.\u201d ",o.a.createElement("br",null),o.a.createElement("span",null,"\u2013 Fran Lebowitz"))))}},{key:"render",value:function(){return o.a.createElement("div",{className:"full-body"},this.upper_body(),o.a.createElement("div",{className:"list-books"},o.a.createElement("div",{className:"list-books-content"},o.a.createElement("div",null,o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},"Currently Reading"),o.a.createElement("div",{className:"bookshelf-books"},this.shelfRender("currentlyReading"))),o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},"Want to Read"),o.a.createElement("div",{className:"bookshelf-books"},this.shelfRender("wantToRead"))),o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},"Read"),o.a.createElement("div",{className:"bookshelf-books"},this.shelfRender("read"))))),o.a.createElement("div",{className:"open-search"},o.a.createElement(c.b,{to:"/search"},o.a.createElement("button",null,"Add a book")))))}}]),t}(n.Component),g=a(21),y=a.n(g),N=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).onChange=function(e){var t=e.target.id,a=e.target.value;p(t,a)},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"apiRender",value:function(){var e=this;return this.props.books.map(function(t){return o.a.createElement("li",{key:t.id},o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url(".concat(t.imageLinks.smallThumbnail,")")}}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{id:t.id,onChange:e.onChange,defaultValue:"none"},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))),o.a.createElement("div",{className:"book-title"},t.title),o.a.createElement("div",{className:"book-authors"},t.authors)))})}},{key:"render",value:function(){return this.props.books.length?this.apiRender():o.a.createElement("img",{src:y.a,alt:"Not Found :(",height:"100%",width:"70%"})}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={query:"",wantedBooks:[]},a.getBooksfromAPI=function(){v(a.state.query).then(function(e){""===a.state.query?a.setState(function(){return{wantedBooks:[]}}):a.setState(function(){return{wantedBooks:e}})})},a.handleSearch=function(e){a.setState({query:e.target.value}),""!==a.state.query&&a.getBooksfromAPI()},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"search-books"},o.a.createElement("div",{className:"search-books-bar"},o.a.createElement(c.b,{to:"/",className:"close-search"},"Close"),o.a.createElement("div",{className:"search-books-input-wrapper"},o.a.createElement("nav",{class:"row"},o.a.createElement("ul",{class:"full-width"},o.a.createElement("div",{class:"logo"},o.a.createElement("img",{src:"https://i.ibb.co/g7LgHvj/Singaraja-Design-on-Instagram-A-quick-logo-concepts-for-library-Which-one-you-think-is-better-guys-The-subtle-one-1-or-the-obvious-one-2-2.jpg",alt:"",srcset:"",width:"70%"})),o.a.createElement("li",null,o.a.createElement("a",{href:"http://localhost:3000/"},"Home")),o.a.createElement("li",null,o.a.createElement("a",{href:"#"},"About ")),o.a.createElement("li",null,o.a.createElement("a",{href:"#"},"Categories")),o.a.createElement("li",null,o.a.createElement("a",{href:"#"},"Books")),o.a.createElement("li",null,o.a.createElement("a",{href:"#"},"Contacts")))),o.a.createElement("div",{className:"search-field"},o.a.createElement("input",{type:"text",placeholder:"Search by title or author",value:this.state.query,onChange:this.handleSearch})))),o.a.createElement("div",{className:"search-books-results"},o.a.createElement("ol",{className:"books-grid"},o.a.createElement(N,{books:this.state.wantedBooks}))))}}]),t}(n.Component),w=a(10),O=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={apiBooksWithShelfs:[]},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"app"},o.a.createElement(w.a,{exact:!0,path:"/",render:function(){return o.a.createElement(k,null)}}),o.a.createElement(w.a,{exact:!0,path:"/search",render:function(){return o.a.createElement(j,null)}}),o.a.createElement("footer",{class:"copy-right"},o.a.createElement("div",{class:"footer"}),o.a.createElement("div",{className:"footer-2"},o.a.createElement("p",null,o.a.createElement("a",{href:"https://github.com/3ba2ii/Library-Managment-Software",target:"_blank"},o.a.createElement("img",{src:"https://i.ibb.co/qD3bHvY/github-logo.png",alt:"Twitter."}))))))}}]),t}(o.a.Component);a(33);l.a.render(o.a.createElement(c.a,null,o.a.createElement(O,null)),document.getElementById("root"))}},[[22,2,1]]]);
//# sourceMappingURL=main.72663f6e.chunk.js.map