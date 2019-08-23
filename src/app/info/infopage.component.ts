import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-infopage',
  template:  `
  <div *ngFor = 'let info of infocontent'>
  
    <div *ngIf='paramValue.value.id == info.id;'>
      <h1>
        {{info.header}}
      </h1>
      <p>{{info.content}}</p>

      <ng-template #empty>
        <p>Content is not available</p>
      </ng-template>
    </div>

  </div>
  `
})
export class InfopageComponent implements OnInit {
  paramValue: Observable<Params>;
  content;

  infocontent = [
    {
      id : 'info1',
      header : 'Title 1',
      content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl condimentum id venenatis a. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Neque convallis a cras semper auctor neque vitae. Nunc faucibus a pellentesque sit. Varius quam quisque id diam vel quam elementum pulvinar. Eros donec ac odio tempor orci dapibus ultrices in. Cursus metus aliquam eleifend mi. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dignissim convallis aenean et tortor. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper. Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique.

      Nisl vel pretium lectus quam id leo. Nunc sed blandit libero volutpat sed. Vitae purus faucibus ornare suspendisse sed nisi. Et magnis dis parturient montes nascetur ridiculus mus. Volutpat odio facilisis mauris sit amet. Quam nulla porttitor massa id neque. Sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus. Malesuada bibendum arcu vitae elementum. A condimentum vitae sapien pellentesque habitant morbi. Ac turpis egestas maecenas pharetra convallis posuere morbi. Ut sem viverra aliquet eget sit amet tellus. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor.
      
      Nibh nisl condimentum id venenatis. Dignissim suspendisse in est ante in nibh mauris. Risus sed vulputate odio ut enim. Ultricies mi eget mauris pharetra. Nibh cras pulvinar mattis nunc. Nulla malesuada pellentesque elit eget. Suspendisse ultrices gravida dictum fusce ut. Senectus et netus et malesuada fames ac turpis. Eget gravida cum sociis natoque. Consectetur libero id faucibus nisl. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Eget gravida cum sociis natoque penatibus et magnis dis parturient.
      `,
    },
    {
      id : 'info2',
      header : 'Title 2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl condimentum id venenatis a. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Neque convallis a cras semper auctor neque vitae. Nunc faucibus a pellentesque sit. Varius quam quisque id diam vel quam elementum pulvinar. Eros donec ac odio tempor orci dapibus ultrices in. Cursus metus aliquam eleifend mi. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dignissim convallis aenean et tortor. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper. Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique.',
    },
    {
      id : 'info3',
      header : 'Title 3',
      content: 'Some text for page 3.',
    }
  ]

  constructor(
    route: ActivatedRoute
  ) { 
    this.paramValue = route.params;
  }

  ngOnInit() { }
  

}
