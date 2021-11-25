import { Component, OnInit } from '@angular/core';



declare var FB:any;

@Component({
  selector: 'fblogin',
  templateUrl: './fblogin.component.html',
  styleUrls: ['./fblogin.component.css']
})
export class FbloginComponent implements OnInit {
 

constructor() {
        FB.init({
          appId      : '1320537334718551',
          cookie     : true,
          xfbml      : true,
          version    : 'v2.11'
      });
}
  onFacebookLoginClick() {
    FB.login();
  }

  statusChangeCallback(resp) {
      if (resp.status === 'connected') {
          // connect here with your server for facebook login by passing access token given by facebook
      }else if (resp.status === 'not_authorized') {

      }else {}

    }

ngOnInit() {
 FB.getLoginStatus(response => {
          this.statusChangeCallback(response);
    });
    
  }

}