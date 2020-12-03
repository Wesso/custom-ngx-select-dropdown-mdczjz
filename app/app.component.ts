import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  myForm: FormGroup
  list = [];
config = {
        displayKey: 'display', //if objects array passed which key to be displayed defaults to description
        search: true, //true/false for the search functionlity defaults to false,
        //height: 'auto' //height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear
        //placeholder:'Select', // text to be displayed when no item is selected defaults to Select,
        //customComparator: ()=>{} // a custom function using which user wants to sort the items. default is undefined and Array.sort() will be used in that case,
        //limitTo: 5, // a number thats limits the no of options displayed in the UI similar to angular's limitTo pipe
        //moreText: 'more' // text to be displayed whenmore than one items are selected like Option 1 + 5 more
        //noResultsFound: 'No results found!', // text to be displayed when no items are found while searching
        //searchPlaceholder:'Search' // label thats displayed in search input
    }
   ngOnInit() {
    this.myForm = this.formBuilder.group({
      member: ['2']   
    });

    setTimeout(()=>{
      this.list = [{id:1,display:'shahid'},{id:2,display:'akram'},{id:3,display:'zia'},{id:4,display:'wasem'},{id:5,display:'Fahad'},{id:6,display:'Mustafa'},{id:7,display:'Ahmad'},{id:8,display:'Hamid'},
      {id:9,display:'atif'},{id:10,display:'hassan'},{id:11,display:'ullah'},{id:12,display:'kareem'},{id:13,display:'faizan'},{id:14,display:'zahoor'},{id:15,display:'shohib'},{id:16,display:'bilal'}];
    },0);
  }
  constructor(private formBuilder: FormBuilder){}

    submit() {
    alert(`Value: ${this.myForm.controls.member.value}`);
  }
}
