(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2QW9O",Modal:"Modal_Modal__3h9g5"}},21:function(e,t,a){e.exports={Button:"Button_Button__1s_4B"}},22:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2FBFD",ImageGalleryItem_image:"ImageGalleryItem_ImageGalleryItem_image__5zFG1"}},23:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__Ov4C1"}},26:function(e,t,a){e.exports={loader:"Loader_loader__1Jan2"}},4:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__jXhwp",SearchForm:"Searchbar_SearchForm__2V--e",SearchForm_button:"Searchbar_SearchForm_button__3qQT4",SearchForm_button_label:"Searchbar_SearchForm_button_label__2D3X3",SearchForm_input:"Searchbar_SearchForm_input__1BLYL"}},71:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(20),c=a.n(r),i=a(11),l=a(5),s=a(6),m=a(8),u=a(7),d=a(4),h=a.n(d),g=a(0),b=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={text:""},e.onChange=function(t){var a=t.target.value;e.setState({text:a})},e.handleSubmit=function(t){t.preventDefault(),(0,e.props.onSubmit)(e.state.text)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.text;return Object(g.jsx)("div",{children:Object(g.jsx)("header",{className:h.a.Searchbar,children:Object(g.jsxs)("form",{onSubmit:this.handleSubmit,className:h.a.SearchForm,children:[Object(g.jsx)("button",{type:"submit",className:h.a.SearchForm_button,children:Object(g.jsx)("span",{className:h.a.SearchForm_button_label,children:"Search"})}),Object(g.jsx)("input",{className:h.a.SearchForm_input,onChange:this.onChange,type:"text",value:e,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})})}}]),a}(n.Component),p=a(21),j=a.n(p),_=function(e){var t=e.changePage;return Object(g.jsx)("button",{onClick:t,type:"button",className:j.a.Button,children:"Load More"})},f=a(22),O=a.n(f),v=function(e){var t=e.url,a=e.alt,n=e.openModal,o=e.modalImage;return Object(g.jsx)("div",{children:Object(g.jsx)("li",{onClick:function(){return n(o)},className:"ImageGalleryItem",children:Object(g.jsx)("img",{src:t,alt:a,className:O.a.ImageGalleryItem_image})})})},y=a(23),S=a.n(y),x=function(e){var t=e.images,a=e.openModal;return Object(g.jsx)("ul",{className:S.a.ImageGallery,children:t.map((function(e){return Object(g.jsx)(v,{url:e.webformatURL,alt:e.tags,modalImage:e.largeImageURL,openModal:a},e.id)}))})},I=a(10),M=a.n(I),F=function(e){var t=e.modalImage,a=e.closeModal;return Object(g.jsx)("div",{onClick:a,className:M.a.Overlay,children:Object(g.jsx)("div",{className:M.a.Modal,children:Object(g.jsx)("img",{src:t,alt:""})})})},w=a(24),k=a.n(w),G="21861287-f0cf5c93ab1e02daa62ff5f3f",C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a="https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat(G,"&image_type=photo&orientation=horizontal&per_page=12");return k.a.get(a)},L=a(25),N=a.n(L),B=a(26),q=a.n(B),D=function(){return Object(g.jsx)("div",{className:q.a.loader,children:Object(g.jsx)(N.a,{type:"Circles",color:"#00BFFF",height:100,width:100,timeout:4e3})})},E=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={query:"",images:[],page:1,isModalOpen:!1,isLoading:!1},e.openModal=function(t){e.setState({isModalOpen:!0,modalImage:t}),window.addEventListener("keydown",e.closeModal)},e.closeModal=function(t){t.target!==t.currentTarget&&27!==t.keyCode||e.setState({isModalOpen:!1}),window.removeEventListener("keydown",e.closeModal)},e.onSubmit=function(t){e.setState({query:t,isLoading:!0}),C(t).then((function(t){console.log("resData",t),e.setState({images:t.data.hits})})).finally((function(){return e.setState({isLoading:!1})}))},e.changePage=function(){var t=e.state,a=t.query,n=t.page;C(a,n+1).then((function(t){e.setState((function(e){return{page:e.page+1,images:[].concat(Object(i.a)(e.images),Object(i.a)(t.data.hits))}}))}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.state,t=e.query,a=e.page;this.onSubmit(t,a)}},{key:"componentDidUpdate",value:function(e,t){var a=this.state.page;t.page!==a&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.isModalOpen,n=e.modalImage,o=e.isLoading;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(b,{onSubmit:this.onSubmit}),o&&Object(g.jsx)(D,{}),Object(g.jsx)(x,{images:t,openModal:this.openModal}),t.length>0&&Object(g.jsx)(_,{changePage:this.changePage}),a&&Object(g.jsx)(F,{modalImage:n,closeModal:this.closeModal})]})}}]),a}(n.Component);a(70);c.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(E,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.52b685c5.chunk.js.map