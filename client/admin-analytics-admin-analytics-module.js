(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-analytics-admin-analytics-module"],{

/***/ "./src/app/admin/pages/admin-analytics/admin-analytics.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/admin/pages/admin-analytics/admin-analytics.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".question_block .card-header {\r\n    display: none;\r\n}\r\n.question_block h3 {\r\n    color: rgba(38, 37, 60, 0.7);\r\n}\r\n.area {\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n}\r\n.area_text {\r\n    display: inline-block;\r\n    width: auto;\r\n    margin-right: 3%;\r\n    font-size: 18px;\r\n    width: 12%;\r\n}\r\n.pbar_wrapper {\r\n    width: 85%;\r\n    display: inline-block;\r\n    background-color: #e2e2e2;\r\n}\r\n.area .pbar {\r\n    background-color: aqua;\r\n    text-align: center;\r\n}\r\n.area .pbar span {\r\n    font-size: 9px;\r\n    color: brown;\r\n}\r\n.bg-default[_ngcontent-c9]{\r\n    background:linear-gradient(to top right,#999,#b3b2b2);\r\n    background:-webkit-linear-gradient(to top right,#999,#b3b2b2)\r\n}\r\n.bg-primary, .tip-card   .tip-ico-primary{\r\n    background:linear-gradient(to top right,#fca400,#ffd17c);\r\n    background:-webkit-linear-gradient(to top right,#fca400,#ffd17c)\r\n}\r\n.bg-success, .tip-card   .tip-ico-success{\r\n    background:linear-gradient(to top right,#16be9a,#42e697);\r\n    background:-webkit-linear-gradient(to top right,#16be9a,#42e697)\r\n}\r\n.bg-danger, .tip-card  .tip-ico-danger{\r\n    background:linear-gradient(to top right,#fa5167,#fda09c);\r\n    background:-webkit-linear-gradient(to top right,#fa5167,#fda09c)\r\n}\r\n.bg-warning, .tip-card   .tip-ico-warning{\r\n    background:linear-gradient(to top right,#ff7403,#fac980);\r\n    background:-webkit-linear-gradient(to top right,#ff7403,#fac980)\r\n}\r\n.bg-info, .tip-card   .tip-ico-info{\r\n    background:linear-gradient(to top right,#2cc3ff,#15f8bf);\r\n    background:-webkit-linear-gradient(to top right,#2cc3ff,#15f8bf)\r\n}\r\n.tip-card{\r\n    padding:10px;\r\n    display:flex;\r\n    flex-direction:row;\r\n    justify-content:space-around\r\n}\r\n.tip-card  .tip-msg{\r\n    flex:1\r\n}\r\n.tip-card   .tip-msg   h3{\r\n    line-height:0;\r\n    margin-bottom:20px\r\n}\r\n.tip-card  .tip-msg   span{\r\n    color:rgba(38,37,60,.6);\r\n    font-size:23px;\r\n    font-weight: bold;\r\n}\r\n.tip-card   .tip-ico{\r\n    margin:0 10px;\r\n    border-radius:3px;\r\n    color:#fff;\r\n    width:60px;\r\n    height:60px;\r\n    text-align:center;\r\n    line-height:60px;\r\n    font-size:30px;\r\n    border:none;\r\n    outline:none\r\n}\r\n.tip-card  .tip-ico:active{\r\n    box-shadow:inset 0 2px 10px 0 rgba(0,0,0,.4);\r\n    -o-box-shadow:0 2px 10px 0 rgba(0,0,0,.4) inset;\r\n    -moz-box-shadow:0 2px 10px 0 rgba(0,0,0,.4) inset;\r\n    -webkit-box-shadow:0 2px 10px 0 rgba(0,0,0,.4) inset\r\n}\r\n.tip-card  .tip-ico-primary{\r\n    box-shadow:0 2px 10px 0 rgba(252,164,0,.5);\r\n    -o-box-shadow:0 2px 10px 0 rgba(252,164,0,.5);\r\n    -moz-box-shadow:0 2px 10px 0 rgba(252,164,0,.5);\r\n    -webkit-box-shadow:0 2px 10px 0 rgba(252,164,0,.5)\r\n}\r\n.tip-card   .tip-ico-success{\r\n    box-shadow:0 2px 10px 0 rgba(22,190,154,.5);\r\n    -o-box-shadow:0 2px 10px 0 rgba(22,190,154,.5);\r\n    -moz-box-shadow:0 2px 10px 0 rgba(22,190,154,.5);\r\n    -webkit-box-shadow:0 2px 10px 0 rgba(22,190,154,.5)\r\n}\r\n.tip-card  .tip-ico-danger{\r\n    box-shadow:0 2px 10px 0 rgba(250,81,103,.5);\r\n    -o-box-shadow:0 2px 10px 0 rgba(250,81,103,.5);\r\n    -moz-box-shadow:0 2px 10px 0 rgba(250,81,103,.5);\r\n    -webkit-box-shadow:0 2px 10px 0 rgba(250,81,103,.5)\r\n}\r\n.tip-card   .tip-ico-warning{\r\n    box-shadow:0 2px 10px 0 rgba(255,116,3,.5);\r\n    -o-box-shadow:0 2px 10px 0 rgba(255,116,3,.5);\r\n    -moz-box-shadow:0 2px 10px 0 rgba(255,116,3,.5);\r\n    -webkit-box-shadow:0 2px 10px 0 rgba(255,116,3,.5)\r\n}\r\n.tip-card   .tip-ico-info{\r\n    box-shadow:0 2px 10px 0 rgba(44,195,255,.5);\r\n    -o-box-shadow:0 2px 10px 0 rgba(44,195,255,.5);\r\n    -moz-box-shadow:0 2px 10px 0 rgba(44,195,255,.5);\r\n    -webkit-box-shadow:0 2px 10px 0 rgba(44,195,255,.5)\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcGFnZXMvYWRtaW4tYW5hbHl0aWNzL2FkbWluLWFuYWx5dGljcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztDQUNqQjtBQUNEO0lBQ0ksNkJBQTZCO0NBQ2hDO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsV0FBVztDQUNkO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLDBCQUEwQjtDQUM3QjtBQUNEO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksZUFBZTtJQUNmLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLHNEQUFzRDtJQUN0RCw2REFBNkQ7Q0FDaEU7QUFDRDtJQUNJLHlEQUF5RDtJQUN6RCxnRUFBZ0U7Q0FDbkU7QUFDRDtJQUNJLHlEQUF5RDtJQUN6RCxnRUFBZ0U7Q0FDbkU7QUFDRDtJQUNJLHlEQUF5RDtJQUN6RCxnRUFBZ0U7Q0FDbkU7QUFDRDtJQUNJLHlEQUF5RDtJQUN6RCxnRUFBZ0U7Q0FDbkU7QUFDRDtJQUNJLHlEQUF5RDtJQUN6RCxnRUFBZ0U7Q0FDbkU7QUFDRDtJQUNJLGFBQWE7SUFFYixhQUFhO0lBRWIsbUJBQW1CO0lBRW5CLDRCQUE0QjtDQUMvQjtBQUNEO0lBRUksTUFBTTtDQUNUO0FBQ0Q7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSx3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtDQUNmO0FBQ0Q7SUFDSSw2Q0FBNkM7SUFDN0MsZ0RBQWdEO0lBQ2hELGtEQUFrRDtJQUNsRCxvREFBb0Q7Q0FDdkQ7QUFDRDtJQUNJLDJDQUEyQztJQUMzQyw4Q0FBOEM7SUFDOUMsZ0RBQWdEO0lBQ2hELGtEQUFrRDtDQUNyRDtBQUNEO0lBQ0ksNENBQTRDO0lBQzVDLCtDQUErQztJQUMvQyxpREFBaUQ7SUFDakQsbURBQW1EO0NBQ3REO0FBQ0Q7SUFDSSw0Q0FBNEM7SUFDNUMsK0NBQStDO0lBQy9DLGlEQUFpRDtJQUNqRCxtREFBbUQ7Q0FDdEQ7QUFDRDtJQUNJLDJDQUEyQztJQUMzQyw4Q0FBOEM7SUFDOUMsZ0RBQWdEO0lBQ2hELGtEQUFrRDtDQUNyRDtBQUNEO0lBQ0ksNENBQTRDO0lBQzVDLCtDQUErQztJQUMvQyxpREFBaUQ7SUFDakQsbURBQW1EO0NBQ3REIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vcGFnZXMvYWRtaW4tYW5hbHl0aWNzL2FkbWluLWFuYWx5dGljcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnF1ZXN0aW9uX2Jsb2NrIC5jYXJkLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5xdWVzdGlvbl9ibG9jayBoMyB7XHJcbiAgICBjb2xvcjogcmdiYSgzOCwgMzcsIDYwLCAwLjcpO1xyXG59XHJcbi5hcmVhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uYXJlYV90ZXh0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHdpZHRoOiAxMiU7XHJcbn1cclxuLnBiYXJfd3JhcHBlciB7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTJlMjtcclxufVxyXG4uYXJlYSAucGJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5hcmVhIC5wYmFyIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICBjb2xvcjogYnJvd247XHJcbn1cclxuLmJnLWRlZmF1bHRbX25nY29udGVudC1jOV17XHJcbiAgICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsIzk5OSwjYjNiMmIyKTtcclxuICAgIGJhY2tncm91bmQ6LXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCM5OTksI2IzYjJiMilcclxufVxyXG4uYmctcHJpbWFyeSwgLnRpcC1jYXJkICAgLnRpcC1pY28tcHJpbWFyeXtcclxuICAgIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwjZmNhNDAwLCNmZmQxN2MpO1xyXG4gICAgYmFja2dyb3VuZDotd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsI2ZjYTQwMCwjZmZkMTdjKVxyXG59XHJcbi5iZy1zdWNjZXNzLCAudGlwLWNhcmQgICAudGlwLWljby1zdWNjZXNze1xyXG4gICAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCMxNmJlOWEsIzQyZTY5Nyk7XHJcbiAgICBiYWNrZ3JvdW5kOi13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwjMTZiZTlhLCM0MmU2OTcpXHJcbn1cclxuLmJnLWRhbmdlciwgLnRpcC1jYXJkICAudGlwLWljby1kYW5nZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsI2ZhNTE2NywjZmRhMDljKTtcclxuICAgIGJhY2tncm91bmQ6LXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCNmYTUxNjcsI2ZkYTA5YylcclxufVxyXG4uYmctd2FybmluZywgLnRpcC1jYXJkICAgLnRpcC1pY28td2FybmluZ3tcclxuICAgIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwjZmY3NDAzLCNmYWM5ODApO1xyXG4gICAgYmFja2dyb3VuZDotd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsI2ZmNzQwMywjZmFjOTgwKVxyXG59XHJcbi5iZy1pbmZvLCAudGlwLWNhcmQgICAudGlwLWljby1pbmZve1xyXG4gICAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCMyY2MzZmYsIzE1ZjhiZik7XHJcbiAgICBiYWNrZ3JvdW5kOi13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwjMmNjM2ZmLCMxNWY4YmYpXHJcbn1cclxuLnRpcC1jYXJke1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gICAgZGlzcGxheTotbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjpyb3c7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XHJcbiAgICAtbXMtZmxleC1wYWNrOmRpc3RyaWJ1dGU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kXHJcbn1cclxuLnRpcC1jYXJkICAudGlwLW1zZ3tcclxuICAgIC1tcy1mbGV4OjE7XHJcbiAgICBmbGV4OjFcclxufVxyXG4udGlwLWNhcmQgICAudGlwLW1zZyAgIGgze1xyXG4gICAgbGluZS1oZWlnaHQ6MDtcclxuICAgIG1hcmdpbi1ib3R0b206MjBweFxyXG59XHJcbi50aXAtY2FyZCAgLnRpcC1tc2cgICBzcGFue1xyXG4gICAgY29sb3I6cmdiYSgzOCwzNyw2MCwuNik7XHJcbiAgICBmb250LXNpemU6MjNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi50aXAtY2FyZCAgIC50aXAtaWNve1xyXG4gICAgbWFyZ2luOjAgMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6M3B4O1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIHdpZHRoOjYwcHg7XHJcbiAgICBoZWlnaHQ6NjBweDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6NjBweDtcclxuICAgIGZvbnQtc2l6ZTozMHB4O1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBvdXRsaW5lOm5vbmVcclxufVxyXG4udGlwLWNhcmQgIC50aXAtaWNvOmFjdGl2ZXtcclxuICAgIGJveC1zaGFkb3c6aW5zZXQgMCAycHggMTBweCAwIHJnYmEoMCwwLDAsLjQpO1xyXG4gICAgLW8tYm94LXNoYWRvdzowIDJweCAxMHB4IDAgcmdiYSgwLDAsMCwuNCkgaW5zZXQ7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6MCAycHggMTBweCAwIHJnYmEoMCwwLDAsLjQpIGluc2V0O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OjAgMnB4IDEwcHggMCByZ2JhKDAsMCwwLC40KSBpbnNldFxyXG59XHJcbi50aXAtY2FyZCAgLnRpcC1pY28tcHJpbWFyeXtcclxuICAgIGJveC1zaGFkb3c6MCAycHggMTBweCAwIHJnYmEoMjUyLDE2NCwwLC41KTtcclxuICAgIC1vLWJveC1zaGFkb3c6MCAycHggMTBweCAwIHJnYmEoMjUyLDE2NCwwLC41KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzowIDJweCAxMHB4IDAgcmdiYSgyNTIsMTY0LDAsLjUpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OjAgMnB4IDEwcHggMCByZ2JhKDI1MiwxNjQsMCwuNSlcclxufVxyXG4udGlwLWNhcmQgICAudGlwLWljby1zdWNjZXNze1xyXG4gICAgYm94LXNoYWRvdzowIDJweCAxMHB4IDAgcmdiYSgyMiwxOTAsMTU0LC41KTtcclxuICAgIC1vLWJveC1zaGFkb3c6MCAycHggMTBweCAwIHJnYmEoMjIsMTkwLDE1NCwuNSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6MCAycHggMTBweCAwIHJnYmEoMjIsMTkwLDE1NCwuNSk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6MCAycHggMTBweCAwIHJnYmEoMjIsMTkwLDE1NCwuNSlcclxufVxyXG4udGlwLWNhcmQgIC50aXAtaWNvLWRhbmdlcntcclxuICAgIGJveC1zaGFkb3c6MCAycHggMTBweCAwIHJnYmEoMjUwLDgxLDEwMywuNSk7XHJcbiAgICAtby1ib3gtc2hhZG93OjAgMnB4IDEwcHggMCByZ2JhKDI1MCw4MSwxMDMsLjUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OjAgMnB4IDEwcHggMCByZ2JhKDI1MCw4MSwxMDMsLjUpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OjAgMnB4IDEwcHggMCByZ2JhKDI1MCw4MSwxMDMsLjUpXHJcbn1cclxuLnRpcC1jYXJkICAgLnRpcC1pY28td2FybmluZ3tcclxuICAgIGJveC1zaGFkb3c6MCAycHggMTBweCAwIHJnYmEoMjU1LDExNiwzLC41KTtcclxuICAgIC1vLWJveC1zaGFkb3c6MCAycHggMTBweCAwIHJnYmEoMjU1LDExNiwzLC41KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzowIDJweCAxMHB4IDAgcmdiYSgyNTUsMTE2LDMsLjUpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OjAgMnB4IDEwcHggMCByZ2JhKDI1NSwxMTYsMywuNSlcclxufVxyXG4udGlwLWNhcmQgICAudGlwLWljby1pbmZve1xyXG4gICAgYm94LXNoYWRvdzowIDJweCAxMHB4IDAgcmdiYSg0NCwxOTUsMjU1LC41KTtcclxuICAgIC1vLWJveC1zaGFkb3c6MCAycHggMTBweCAwIHJnYmEoNDQsMTk1LDI1NSwuNSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6MCAycHggMTBweCAwIHJnYmEoNDQsMTk1LDI1NSwuNSk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6MCAycHggMTBweCAwIHJnYmEoNDQsMTk1LDI1NSwuNSlcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/pages/admin-analytics/admin-analytics.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/admin/pages/admin-analytics/admin-analytics.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n<div class=\"row\">\n  <div class=\"col-md-4 col-sm-4 animated fadeIn\">\n    <div class=\"card card-block tip-card\">\n      <div class=\"tip-msg\">\n        <h3>Number of Subscribers</h3>\n        <span>{{numberOfSubscribers}}</span>\n      </div>\n      <!-- <button class=\"tip-ico tip-ico-primary\">\n        <i class=\"fa fa-group fa-fw\"></i>\n      </button> -->\n    </div>\n  </div>\n  <div class=\"col-md-4 col-sm-4 animated fadeIn\">\n    <div class=\"card card-block tip-card\">\n      <div class=\"tip-msg\">\n        <h3>Order Value</h3>\n        <span>{{orderValue}}</span>\n      </div>\n      <!-- <button class=\"tip-ico tip-ico-info\">\n        <i class=\"fa fa-comments fa-fw\"></i>\n      </button> -->\n    </div>\n  </div>\n  <!-- <div class=\"col-md-3 animated fadeIn\">\n    <div class=\"card card-block tip-card\">\n      <div class=\"tip-msg\">\n        <h3>Mails</h3>\n        <span>2 mails</span>\n      </div>\n      <button class=\"tip-ico tip-ico-success\">\n        <i class=\"fa fa-envelope fa-fw\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"col-md-3 animated fadeIn\">\n    <div class=\"card card-block tip-card\">\n      <div class=\"tip-msg\">\n        <h3>Feedback</h3>\n        <span>20 feedbacks</span>\n      </div>\n      <button class=\"tip-ico tip-ico-danger\">\n        <i class=\"fa fa-warning fa-fw\"></i>\n      </button>\n    </div>\n  </div> -->\n</div>\n  <div class=\"question_block\">\n    <h3>Plan selected the most</h3>\n    <card cardTitle='Pie Chart'>\n      <div *ngIf=\"planSelectedOptions\" echarts [options]=\"planSelectedOptions\" [loading]=\"showloading\" theme=\"light\" class=\"demo-chart\"></div>\n    </card>\n  </div>\n  <div class=\"question_block\">\n    <h3>Areas with the most Delivery</h3>\n    <card cardTitle='Most delivery'>\n      <div *ngFor=\"let area of areaInfo\" class=\"area\">\n        <div class=\"area_text\">{{area.areaName}}</div>\n        <div class=\"pbar_wrapper\">\n           <div title=\"{{area.percent}}%\" [ngStyle]=\"{'width.%': area.percent}\" class=\"pbar\"><span> {{area.count + ' (' + area.percent}} %)</span></div>\n        </div>\n      </div>\n    </card>\n  </div>\n  <div class=\"question_block\">\n    <h3>Allergens and People</h3>\n    <card cardTitle='Pie Chart'>\n      <div *ngIf=\"allergyOptions\" echarts [options]=\"allergyOptions\" [loading]=\"showloading\" theme=\"light\" class=\"demo-chart\"></div>\n    </card>\n  </div>\n  <div class=\"question_block\">\n    <h3>Fruits disliked the most?</h3>\n    <card cardTitle='Pie Chart'>\n      <div *ngIf=\"fruitOptions\" echarts [options]=\"fruitOptions\" [loading]=\"showloading\" theme=\"light\" class=\"demo-chart\"></div>\n    </card>\n  </div>\n  <div class=\"question_block\">\n    <h3>Green tea in bag</h3>\n    <card cardTitle='Pie Chart'>\n      <div *ngIf=\"GreenTeaSelectedOptions\" echarts [options]=\"GreenTeaSelectedOptions\" [loading]=\"showloading\" theme=\"light\" class=\"demo-chart\"></div>\n    </card>\n  </div>\n \n  <!-- <div class=\"question_block\">\n    <h3>Month Wise website traffic</h3>\n    <card cardTitle='Line Chart'>\n      <div echarts [options]=\"monthWiseTrafficOption\" [loading]=\"showloading\" theme=\"light\" class=\"demo-chart\"></div>\n    </card>\n  </div> -->\n</div>\n"

/***/ }),

/***/ "./src/app/admin/pages/admin-analytics/admin-analytics.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin/pages/admin-analytics/admin-analytics.component.ts ***!
  \**************************************************************************/
/*! exports provided: AdminAnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAnalyticsComponent", function() { return AdminAnalyticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pieCharts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pieCharts.service */ "./src/app/admin/pages/admin-analytics/pieCharts.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../user/auth.service */ "./src/app/user/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminAnalyticsComponent = /** @class */ (function () {
    function AdminAnalyticsComponent(chartsService, http, auth) {
        this.chartsService = chartsService;
        this.http = http;
        this.auth = auth;
        this.totalAreaCount = 0;
        this.areaInfo = [];
        this.Math = Math;
    }
    AdminAnalyticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.width = 40;
        this.chartsService.getAllPlans(function (options) {
            _this.planSelectedOptions = options;
            console.log(_this.planSelectedOptions);
        });
        this.chartsService.getAllergic(function (options) {
            _this.allergyOptions = options;
        });
        this.chartsService.getFruitsLikedMost(function (options) {
            _this.fruitOptions = options;
        });
        this.chartsService.getGreentea(function (options) {
            _this.GreenTeaSelectedOptions = options;
        });
        console.log("plan", this.planSelectedOptions);
        this.http.get(this.auth.getDomainName() + '/api/analysis/most/delivered/area')
            .subscribe(function (res) {
            console.log(res.data);
            _this.totalAreaCount = res.data.reduce(function (a, b) { return ({ count: a.count + b.count }); }).count;
            console.log('Area Count  : ', _this.totalAreaCount);
            res.data.forEach(function (area, index) {
                // this.planSelectedOptions.legend.data.push(plan.planInfo.title);
                // this.planSelectedOptions.series[0].data.push({ value: plan.count, name: plan.planInfo.title });
                area.percent = ((area.count * 100) / _this.totalAreaCount).toFixed(2);
                console.log('Percent  : ', res.data[index].percent);
                _this.areaInfo.push({ areaName: area._id, count: area.count, percent: area.percent });
            });
        }, function (err) {
        });
        this.http.get(this.auth.getDomainName() + '/api/analysis/subscribers')
            .subscribe(function (res) {
            console.log(res.data.total);
            _this.numberOfSubscribers = res.data;
        }, function (err) {
        });
        this.http.get(this.auth.getDomainName() + '/api/analysis/total/order/value')
            .subscribe(function (res) {
            console.log(res);
            _this.orderValue = res.data.totalOrderValue;
        }, function (err) {
        });
    };
    AdminAnalyticsComponent.prototype.ngOnChanges = function () {
    };
    AdminAnalyticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-analytics',
            template: __webpack_require__(/*! ./admin-analytics.component.html */ "./src/app/admin/pages/admin-analytics/admin-analytics.component.html"),
            styles: [__webpack_require__(/*! ./admin-analytics.component.css */ "./src/app/admin/pages/admin-analytics/admin-analytics.component.css")],
            providers: [_pieCharts_service__WEBPACK_IMPORTED_MODULE_1__["ChartsService"]]
        }),
        __metadata("design:paramtypes", [_pieCharts_service__WEBPACK_IMPORTED_MODULE_1__["ChartsService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _user_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AdminAnalyticsComponent);
    return AdminAnalyticsComponent;
}());



/***/ }),

/***/ "./src/app/admin/pages/admin-analytics/admin-analytics.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admin/pages/admin-analytics/admin-analytics.module.ts ***!
  \***********************************************************************/
/*! exports provided: AdminAnalyticsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAnalyticsModule", function() { return AdminAnalyticsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_analytics_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-analytics.component */ "./src/app/admin/pages/admin-analytics/admin-analytics.component.ts");
/* harmony import */ var _admin_analytics_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-analytics.routing */ "./src/app/admin/pages/admin-analytics/admin-analytics.routing.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/admin/shared/shared.module.ts");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/fesm5/ngx-echarts.js");
/* harmony import */ var _charts_components_echarts_echarts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../charts/components/echarts/echarts.component */ "./src/app/admin/pages/charts/components/echarts/echarts.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






/* components */

var AdminAnalyticsModule = /** @class */ (function () {
    function AdminAnalyticsModule() {
    }
    AdminAnalyticsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                ngx_echarts__WEBPACK_IMPORTED_MODULE_5__["NgxEchartsModule"],
                _admin_analytics_routing__WEBPACK_IMPORTED_MODULE_3__["routing"]
            ],
            declarations: [
                _admin_analytics_component__WEBPACK_IMPORTED_MODULE_2__["AdminAnalyticsComponent"],
                _charts_components_echarts_echarts_component__WEBPACK_IMPORTED_MODULE_6__["EChartsComponent"]
            ]
        })
    ], AdminAnalyticsModule);
    return AdminAnalyticsModule;
}());



/***/ }),

/***/ "./src/app/admin/pages/admin-analytics/admin-analytics.routing.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin/pages/admin-analytics/admin-analytics.routing.ts ***!
  \************************************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_analytics_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-analytics.component */ "./src/app/admin/pages/admin-analytics/admin-analytics.component.ts");


var childRoutes = [
    {
        path: '',
        component: _admin_analytics_component__WEBPACK_IMPORTED_MODULE_1__["AdminAnalyticsComponent"]
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(childRoutes);


/***/ }),

/***/ "./src/app/admin/pages/admin-analytics/pieCharts.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/pages/admin-analytics/pieCharts.service.ts ***!
  \******************************************************************/
/*! exports provided: ChartsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsService", function() { return ChartsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../user/auth.service */ "./src/app/user/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChartsService = /** @class */ (function () {
    function ChartsService(http, auth) {
        this.http = http;
        this.auth = auth;
        this.planSelectedOptions = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                // data: ['1 week', '4 week', '12 week']
                data: []
            },
            roseType: 'angle',
            series: [
                {
                    name: 'Plans',
                    type: 'pie',
                    radius: [0, '50%'],
                    data: [
                    // { value: 235, name: '1 week' },
                    // { value: 210, name: '4 week' },
                    // { value: 162, name: '12 week' }
                    ]
                }
            ]
        };
        this.GreenTeaSelectedOptions = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                // data: ['1 week', '4 week', '12 week']
                data: []
            },
            roseType: 'angle',
            series: [
                {
                    name: 'Green_tea',
                    type: 'pie',
                    radius: [0, '50%'],
                    data: [
                    // { value: 235, name: '1 week' },
                    // { value: 210, name: '4 week' },
                    // { value: 162, name: '12 week' }
                    ]
                }
            ]
        };
        this.allergyOptions = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                // data: ['Milk', 'Eggs', 'Peanuts', 'Other Nuts', 'Wheat']
                data: []
            },
            roseType: 'angle',
            series: [
                {
                    name: 'Allergy',
                    type: 'pie',
                    radius: [0, '50%'],
                    data: [
                    // { value: 235, name: 'Milk' },
                    // { value: 210, name: 'Eggs' },
                    // { value: 162, name: 'Peanuts' },
                    // { value: 100, name: 'Other Nuts' },
                    // { value: 50, name: 'Wheat' }
                    ]
                }
            ]
        };
        this.fruitOptions = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                // data: ['Banana', 'Apple', 'Pear', 'Guava', 'Mango']
                data: []
            },
            roseType: 'angle',
            series: [
                {
                    name: 'Fruits',
                    type: 'pie',
                    radius: [0, '50%'],
                    data: [
                    // { value: 143, name: 'Banana' },
                    // { value: 178, name: 'Apple' },
                    // { value: 240, name: 'Pear' },
                    // { value: 100, name: 'Guava' },
                    // { value: 300, name: 'Mango' }
                    ]
                }
            ]
        };
        this.monthWiseTrafficOption = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['Jan', 'Feb', 'Mar', 'Apr'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    // type: 'value',
                    type: 'value',
                    data: [0, 1000, 2000],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            series: [
                {
                    name: 'abc',
                    type: 'bar',
                    barWidth: '20%',
                    data: [10, 1000, 200, 334]
                }
            ]
        };
    }
    ChartsService.prototype.getAllPlans = function (cb) {
        var _this = this;
        this.http.get(this.auth.getDomainName() + '/api/analysis/most/used/plan')
            .subscribe(function (res) {
            console.log(res.data);
            if (res.success) {
                res.data.forEach(function (plan) {
                    _this.planSelectedOptions.legend.data.push(plan.planInfo.title.toUpperCase());
                    _this.planSelectedOptions.series[0].data.push({ value: plan.count, name: plan.planInfo.title.toUpperCase() });
                });
                console.log(_this.planSelectedOptions);
                cb(_this.planSelectedOptions);
            }
            else {
                cb(_this.planSelectedOptions);
            }
        }, function (err) {
        });
    };
    ChartsService.prototype.getAllergic = function (cb) {
        var _this = this;
        this.http.get(this.auth.getDomainName() + '/api/analysis/most/allergic')
            .subscribe(function (res) {
            console.log(res.data);
            if (res.success) {
                res.data.forEach(function (allergicItem) {
                    if (allergicItem && allergicItem._id) {
                        _this.allergyOptions.legend.data.push(allergicItem && allergicItem._id ? allergicItem._id.toUpperCase() : '');
                        _this.allergyOptions.series[0].data.push({ value: allergicItem.count, name: allergicItem && allergicItem._id ? allergicItem._id.toUpperCase() : '' });
                    }
                });
                console.log(_this.allergyOptions);
                cb(_this.allergyOptions);
            }
            else {
                cb(_this.allergyOptions);
            }
        }, function (err) {
        });
    };
    ChartsService.prototype.getFruitsLikedMost = function (cb) {
        var _this = this;
        this.http.get(this.auth.getDomainName() + '/api/analysis/most/liked/fruits')
            .subscribe(function (res) {
            console.log(res.data);
            if (res.success) {
                res.data.forEach(function (fruitsItem) {
                    if (fruitsItem && fruitsItem._id) {
                        _this.fruitOptions.legend.data.push(fruitsItem && fruitsItem._id ? fruitsItem._id.toUpperCase() : "");
                        _this.fruitOptions.series[0].data.push({ value: fruitsItem.count, name: fruitsItem && fruitsItem._id ? fruitsItem._id.toUpperCase() : "" });
                    }
                });
                console.log(_this.fruitOptions);
                cb(_this.fruitOptions);
            }
            else {
                cb(_this.fruitOptions);
            }
        }, function (err) {
        });
    };
    ChartsService.prototype.getGreentea = function (cb) {
        var _this = this;
        this.http.get(this.auth.getDomainName() + '/api/analysis/greentea')
            //this.http.get('http://localhost:9191/public/api/analysis/greentea')
            .subscribe(function (res) {
            console.log(res.data);
            if (res.success) {
                res.data.forEach(function (greenteaItem) {
                    if (greenteaItem && greenteaItem._id) {
                        _this.GreenTeaSelectedOptions.legend.data.push(greenteaItem && greenteaItem._id ? greenteaItem._id.toUpperCase() : "");
                        _this.GreenTeaSelectedOptions.series[0].data.push({ value: greenteaItem.count, name: greenteaItem && greenteaItem._id ? greenteaItem._id.toUpperCase() : "" });
                    }
                });
                console.log(_this.GreenTeaSelectedOptions);
                cb(_this.GreenTeaSelectedOptions);
            }
            else {
                cb(_this.GreenTeaSelectedOptions);
            }
        }, function (err) {
        });
    };
    ChartsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _user_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ChartsService);
    return ChartsService;
}());



/***/ })

}]);
//# sourceMappingURL=admin-analytics-admin-analytics-module.js.map